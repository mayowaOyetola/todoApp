var buttonId = 0;

function addNewTodo() {

    var li = document.createElement("li");
    var inputValue = document.getElementById("taskInput").value;
    var todoTextLabel = document.createElement("Label");
    todoTextLabel.innerHTML = inputValue;
    li.appendChild(todoTextLabel);

    var btn = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.name = "remove"
    btn.id =(++buttonId);
    li.appendChild(btn);
    document.getElementById("taskInput").value = "";


    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    document.getElementById("todoList").appendChild(li);

    document.addEventListener("click", myFunction);

    function myFunction(event) {
        event.preventDefault();
        var but = document.getElementsByTagName('button');

        for(var index = 0; index < but.length; index++){
            var nameE = but[index].name;
            var idE = but[index].id;

           if ((event.srcElement.id === idE)  && (event.srcElement.name === nameE)){
               document.getElementById(idE).parentNode.remove();
               break;
           }
        }

    }

    function eachClick (eachButton) {
        console.log(eachButton)
    }


    var remove = document.getElementsByName("remove");


        remove.onclick = function() {
            console.log(remove);
            var div = this.parentElement;
            div.style.display = "none";

        }


}