document addEventListener("DOMContentLoaded") function>
const tasklist =document getElementById "task list"
const newTaskInput =document getElementById "newq-task"
const addTaskButton =document getElementById "add-task"

addTaskButton.addEventListener("click", function()  {
     const taskText =newTaskInput.nodeValue.trim();
     if (taskText  !=="") {
        addTask(tasktext);
        newTaskInput.value ="";
     }
});
newTaskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTaskButton.onclick();
    }
});
function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.TextContent = taskText;

    // Tambahkan tombol delete ke setiap tugas
    const deleteButton =document.createElement("button");
    deleteButton.textContent ="Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click"), function() {
        tasklist.removeChild(taskItem);
    
});

taskItem.appendChild(deleteButton)

taskItem.addEventListener("click" , function() {
    taskItem.classList.toggle("completed");

});
tasklist.appendChild(taskitem)


