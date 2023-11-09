const formInput = document.querySelector("#tasks form input");
const addTask = document.querySelector("#tasks form button");
const tasks = document.querySelector("div.tasks");
const singleTask = document.querySelectorAll("div.tasks div");

addTask.addEventListener("click", () => {
  // ottengo il valore dell'input al click
  let taskTitle = formInput.value;

  // controllo la lunghezza dell'input
  if (taskTitle.length < 2) {
    alert("Inserisci almeno 2 caratteri per la task!");
    return;
  }

  // creo l'elemento e imposto il testo
  let task = document.createElement("div");
  task.id = "task";
  let taskSpan = document.createElement("span");
  taskSpan.className = "task-title";
  taskSpan.innerText = taskTitle;
  task.appendChild(taskSpan);

  // creo il pulsante
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerText = "Elimina";

  // aggiungo alla sezione tasks
  tasks.appendChild(task);
  task.appendChild(deleteBtn);

  task.addEventListener("click", () => {
    // Quando si fa clic su un singolo task, aggiungp o rimuovo il line-through
    taskSpan.style.textDecoration =
      taskSpan.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  deleteBtn.addEventListener("click", () => {
    // Rimuovi il task quando il pulsante Elimina viene cliccato
    tasks.removeChild(task);
  });

  formInput.value = "";
});
