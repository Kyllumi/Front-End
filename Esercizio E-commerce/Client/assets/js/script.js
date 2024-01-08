const urlApi = 'http://localhost:3000/';
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    let btnRegister = document.querySelector('#register-page button');
    let btnLogin = document.querySelector('#login-page button');
    let btnAddProduct = document.querySelector('#formProducts #addBtn');


    if (btnRegister) {
        btnRegister.addEventListener('click', registerEvent)
    } else if (btnLogin) {
        btnLogin.addEventListener('click', loginEvent)
    } else if (btnAddProduct) {
        btnAddProduct.addEventListener('click', addProduct)
        getProducts();
        deleteProduct();
        editProduct();

    }

    getUserLog();

})

function getUserLog() {
    let loggedIn = localStorage.getItem('UserLog')
    if (loggedIn) {
        let userLog = JSON.parse(loggedIn);
        let logNav = document.querySelector('#logNav');
        logNav.innerHTML = '';
        logNav.innerText = 'Ciao ' + userLog.user.firstname + ' ' + userLog.user.lastname

        // <button type="button" class="btn btn-outline-warning">Warning</button>
        let logOutBtn = document.createElement('button');
        logOutBtn.setAttribute('type', "button")
        logOutBtn.className = "btn btn-sm btn-outline-warning ms-3"
        logOutBtn.innerText = 'Logout';
        logOutBtn.addEventListener('click', () => {
            localStorage.removeItem('UserLog');
            window.location = 'index.html';
        })
        logNav.appendChild(logOutBtn);

        // Creo la voce di menu Admin
        let li = document.createElement('li');
        li.className = "nav-item"
        let a = document.createElement('a');
        a.className = "nav-link";
        a.href = "admin.html";
        a.setAttribute('aria-current', "page");
        a.innerText = 'Admin';
        li.appendChild(a);
        document.querySelector('#navbarText ul').appendChild(li);


    }
}

function registerEvent(e) {
    e.preventDefault();
    let firstname = document.querySelector('#register-page input#firstname').value.trim();
    let lastname = document.querySelector('#register-page input#lastname').value.trim();
    let city = document.querySelector('#register-page input#city').value.trim();
    let email = document.querySelector('#register-page input#email').value.trim();
    let password = document.querySelector('#register-page input#password').value.trim();

    //console.log(firstname, lastname, city, email, password);
    let obj = {
        firstname,
        lastname,
        city,
        email,
        password
    }
    fetch(urlApi + 'register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

function loginEvent(e) {
    e.preventDefault();
    let email = document.querySelector('#login-page input#email').value.trim();
    let password = document.querySelector('#login-page input#password').value.trim();
    fetch(urlApi + 'login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(response => response.json())
        .then(json => statusResponse(json))
        .catch(err => console.log(err))
}

function statusResponse(response) {

    let form = document.querySelector('#login-page form');
    form.lastElementChild.role !== null ? form.removeChild(form.lastElementChild) : null;

    let alertDiv = document.createElement('div');
    alertDiv.setAttribute('role', "alert")
    alertDiv.className = "alert alert-dismissible fade show mx-3";

    if (response.accessToken) {
        alertDiv.classList.add('alert-success');
        alertDiv.innerText = "Logged In!!"
        document.querySelector('#login-page input#email').value = '';
        document.querySelector('#login-page input#password').value = '';

        localStorage.setItem('UserLog', JSON.stringify(response))
        getUserLog();
    } else {
        alertDiv.classList.add('alert-danger');
        alertDiv.innerText = response
    }

    let alertBtn = document.createElement('button');
    alertBtn.className = "btn-close";
    alertBtn.setAttribute('type', "button");
    alertBtn.setAttribute('data-bs-dismiss', "alert");
    alertBtn.setAttribute('aria-label', "Close");
    alertDiv.appendChild(alertBtn);

    document.querySelector('#login-page form').appendChild(alertDiv);
}

function getProducts() {
    fetch(urlApi + 'products')
        .then(response => response.json())
        .then(json => {
            let tbody = document.querySelector('table tbody');
            json.forEach(e => {
                tbody.innerHTML += `            
            <tr>
                <th scope="row">${e.id}</th>
                <td><img src="${e.immagine}" alt="Prodotto" width="50"></td>
                <td>${e.marca}</td>
                <td>${e.modello}</td>
                <td>${e.quantita}</td>
                <td>${e.prezzo}</td>
                <td>
                  <button type="button" class="btn btn-sm btn-outline-danger">
                    <i class="bi bi-trash"></i>
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="bi bi-pencil-square"></i>
                  </button>
                </td>
            </tr>`;
            });
        })
        .catch(err => console.log(err))
}

function addProduct() {
    let marca = document.querySelector('#formProducts input#marca').value.trim();
    let modello = document.querySelector('#formProducts input#modello').value.trim();
    let categoria = document.querySelector('#formProducts input#categoria').value.trim();
    let prezzo = document.querySelector('#formProducts input#prezzo').value.trim();
    let quantita = document.querySelector('#formProducts input#quantita').value.trim();
    let immagine = document.querySelector('#formProducts input#immagine').value.trim();

    //console.log(marca, modello, categoria, prezzo, quantita, immagine);
    let obj = {
        marca,
        modello,
        categoria,
        prezzo,
        quantita,
        immagine
    }

    fetch(urlApi + 'products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

function deleteProduct() {
    let table = document.querySelector('table tbody');
    table.addEventListener('click', (e) => {
        let id = e.target.parentNode.parentNode.parentNode.childNodes[1].textContent;
        if (e.target.parentNode.classList.contains('btn-outline-danger')) {
            fetch(urlApi + 'products' + '/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Utente eliminato con successo');
                    } else {
                        console.error('Errore durante l\'eliminazione dell\'utente');
                    }
                })
                .catch(error => {
                    console.error('Errore di rete:', error);
                });
        }
    })
}

function editProduct() {
    let table = document.querySelector('table tbody');
    table.addEventListener('click', (e) => {
        let id = e.target.parentNode.parentNode.parentNode.childNodes[1].textContent;
        if (e.target.parentNode.classList.contains('btn-outline-warning')) {
            let tr = e.target.closest('tr');
            let td = tr.querySelectorAll('td');
            console.log(td);
            let img = td[0].querySelector('img');

            document.querySelector('#exampleModal input#modalmarca').value = td[1].textContent;
            document.querySelector('#exampleModal input#modalmodello').value = td[2].textContent;
            document.querySelector('#exampleModal input#modalquantita').value = td[3].textContent;
            document.querySelector('#exampleModal input#modalprezzo').value = td[4].textContent;
            document.querySelector('#exampleModal input#modalimmagine').value = img.src;
        }

        let saveChangesBtn = document.querySelector('#exampleModal .modal-footer button.btn.btn-primary');
        saveChangesBtn.addEventListener('click', () => {
            fetch(urlApi + 'products' + '/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    marca: document.querySelector('#exampleModal input#modalmarca').value.trim(),
                    modello: document.querySelector('#exampleModal input#modalmodello').value.trim(),
                    quantita: document.querySelector('#exampleModal input#modalquantita').value.trim(),
                    prezzo: document.querySelector('#exampleModal input#modalprezzo').value.trim(),
                    immagine: document.querySelector('#exampleModal input#modalimmagine').value.trim(),
                })
            })
        })
    })
}




/*
function buyProduct() {
    let table = document.querySelector('table tbody');
    table.addEventListener('click', (e) => {
        if (e.target.parentNode.classList.contains('btn-outline-primary')) {
            let tr = e.target.closest('tr');
            let td = tr.querySelectorAll('td');
            let img = td[0].querySelector('img').src;
            let marca = td[1].textContent;
            let modello = td[2].textContent;
            let prezzo = td[4].textContent;
            let quantita = (td[3].textContent) - (td[3].textContent) + 1;

            let obj = {
                img,
                marca,
                modello,
                prezzo,
                quantita
            }
            cart.push(obj);
            console.log(cart);
            let count = 0;
            cart.forEach(element => {
                localStorage.setItem(`Prodotto${count++}`, JSON.stringify(element));
            })
        }
    })
}

function viewCart() {
    document.querySelector('button#cartBtn').addEventListener('click', () => {


    })
}
*/