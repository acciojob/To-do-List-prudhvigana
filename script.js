//your code here
function addtodo(){
    var li = document.createElement("li");
    var inputvalue = document.getElementById("newTodoInput").value;
    var t = document.createTextNode(inputvalue);
    li.appendChild(t);
    if(inputvalue==='')
    {
        alert("must write something");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("newTodoInput").value = "";
}
