document.addEventListener('DOMContentLoaded', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let json = xhr.responseText;
            let obj = JSON.parse(json);

            obj.forEach(e => {
                let div = document.querySelector('#cards');

                let card = document.createElement('div');
                div.appendChild(card);

                card.innerHTML = `<div class="card mx-1" style="width: 18rem; height: 100%">
                <img src="${e.img}" class="card-img-top" alt="Copertina">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 class="card-title">${e.title}</h5>
                      <span class="badge rounded-pill text-bg-dark">${e.category}</span>
                    </div>
                    <div>
                      <p class="card-text">${e.price}€</p>
                      <button href="#" class="btn btn-primary">Compra ora</button>
                      <button href="#" class="btn btn-white btn-outline-danger">Scarta</button>
                    </div>
                </div>
              </div>`
            });
        }
    };


    document.querySelector('#cards').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.className === 'btn btn-white btn-outline-danger') {
            let scarta = e.target.parentNode.parentNode.parentNode;
            scarta.remove();
        }
    });


    let carrello = [];

    document.querySelector('#cards').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.className === 'btn btn-primary') {
            let compra = e.target.parentNode.parentNode.parentNode;

            for (const ele of carrello) {
                if (ele === compra) {


                }
            };




            let cart = document.querySelector('div.modal .modal-body ul')
            cart.style = 'list-style: none; padding: 0;'
            let li = document.createElement('li');
            li.classList.add('d-flex', 'my-2')
            cart.appendChild(li);
            li.innerHTML += compra.innerHTML;

            cart.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON' && e.target.className === 'btn btn-white btn-outline-danger') {
                    let scarta = e.target.parentNode.parentNode.parentNode;
                    scarta.remove();
                }
            })

            carrello.push(compra);
        }
    });

});





