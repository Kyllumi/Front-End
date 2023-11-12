const addBtn = document.querySelector("#addBtn");

// Aggiungo evento al click del pulsante
addBtn.addEventListener("click", () => {
  // Leggo il valore dell'utente dal form
  let input = document.querySelector("form input");
  // Task avrà il valore dell'input pulito degli spazi vuoti laterali
  let task = input.value.trim();

  // Valido l'input dell'utente
  if (task.length > 2) {
    // Se la lunghezza del valore è maggiore di 2, creo un li
    let li = document.createElement("li");
    // Creo uno span (utile per il css)
    let span = document.createElement("span");
    // Assegno allo span il valore dell'input
    span.innerText = task;
    span.addEventListener("click", function (e) {
      e.target.className =
        e.target.className === "completed" ? "" : "completed";
    });

    // Appendo lo span al li
    li.appendChild(span);
    // Creo il pulsante di eliminazione e assegno un valore
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    // Ci aggiungo un evento
    deleteBtn.addEventListener("click", (e) => {
      let li = e.target.parentNode;
      li.remove();
    });
    
    // Appendo il pulsante
    li.appendChild(deleteBtn);
    // Appendo li creato all'ul
    let ul = document.querySelector("div.lista ul");
    ul.appendChild(li);
    // Una volta inserita la task, svuoto il campo input
    input.value = "";
  }
});
