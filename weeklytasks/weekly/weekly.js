 'use strict';

 // Function to add a task for a specific day
 function addTask(day) {
    var taskInput = document.getElementById(day);
    var task = taskInput.value.trim();
    if (task !== "") {
        var taskList = document.getElementById(day + "List");
        var taskItem = document.createElement("li");
        taskItem.textContent = task;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

document.getElementById("mondayTask").addEventListener("keyup", function(event) {
    if (event.key === 13) {
        addTask("mondayTask");
    }
});
document.getElementById("tuesdayTask").addEventListener("keyup", function(event) {
    if (event.key === 13) {
        addTask("tuesdayTask");
    }
});
document.getElementById("wednesdayTask").addEventListener("keyup", function(event) {
    if (event.key === 13) {
        addTask("wednesdayTask");
    }
});
document.getElementById("thursdayTask").addEventListener("keyup", function(event) {
    if (event.key === 13) {
        addTask("thursdayTask");
    }
});
document.getElementById("fridayTask").addEventListener("keyup", function(event) {
    if (event.key === 13) {
        addTask("fridayTask");
    }
});
document.getElementById("saturdayTask").addEventListener("keyup", function(event) {
    if (event.key === 13) {
        addTask("saturdayTask");
    }
});
document.getElementById("sundayTask").addEventListener("keyup", function(event) {
    if (event.key === 13) {
        addTask("sundayTask");
    }
});

// Function to reset all tasks
function resetTasks() {
    var taskInputs = document.getElementsByClassName("task-input");
    var taskLists = document.getElementsByClassName("task-list");
    for (var i = 0; i < taskInputs.length; i++) {
        taskInputs[i].value = "";
        taskLists[i].innerHTML = "";
    }
}

// Function to add to favoutires and drag and drop
function addFavorite() {
    var favoriteInput = document.getElementById("favoriteInput");
    var favoritesList = document.getElementById("favoritesList");
    var favoriteText = favoriteInput.value;

    if (favoriteText !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = favoriteText;
        listItem.className = "task-item";
        listItem.setAttribute("ondragstart", "drag(event)");
        listItem.setAttribute("draggable", "true");
        favoritesList.appendChild(listItem);
        favoriteInput.value = "";
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.innerHTML);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var list = event.target.closest(".task-list");
    var listItem = document.createElement("li");
    listItem.innerHTML = data;
    listItem.className = "task-item";
    listItem.setAttribute("ondragstart", "drag(event)");
    listItem.setAttribute("draggable", "true");
    list.appendChild(listItem);
}
// Function to reset only the favorites
function resetFavorites() {
    var favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = "";
    saveData();
}