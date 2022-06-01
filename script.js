const element = document.querySelector(".create");
element.addEventListener("click", myFunction1);

let selected = document.getElementById("select");
function myFunction1() {
    if (selected.value === "Ongoing") {
        document.getElementById("new__task").innerHTML +=
            `<div id="tasks">
        <div class="task">
            <p id="task">${title.value}</p>
        </div>
        <div onclick="deletetask()" class="delete-task">X</div>
    </div>`

        // Delete the task     

        var current_tasks = document.querySelectorAll('.delete-task');
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        document.getElementById("container__popup").style.display = "none";


    } else {
        document.getElementById("new__task1").innerHTML += `
     <div id="tasks">
        <div class="task">
            <p id="task">${title.value}</p>
        </div>
        <div onclick="deletetask1()" class="delete-task">X</div>
    </div>`

        // to delete a task

        document.getElementById("container__popup").style.display = "none";
        var current_tasks = document.querySelectorAll('.delete-task');
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        document.getElementById("container__popup").style.display = "none";
    }
}


//open the popup to create the task list


function openform() {
    document.getElementById("container__popup").style.display = "flex";
    document.getElementById("title").value = " ";
    document.getElementById("discription").value = " ";
    element.innerHTML = "create";

}

// close the popup 

function closeform() {
    document.getElementById("container__popup").style.display = "none";
}
// open the task to edit
function opentask() {
    document.getElementById("container__popup").style.display = "flex";
    element.innerHTML = "Save";
}


