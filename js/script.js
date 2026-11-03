const taskInput = document.querySelector("#task-input")
const addButton = document.querySelector("#add-button")

addButton.addEventListener("click", (event) => {
  event.preventDefault()
  console.log(taskInput.value)
})
