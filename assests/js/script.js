
//Get the current/today's date 
var monthArr=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
const d = new Date();
document.getElementById("date").innerHTML = d.getDate();
document.getElementById("month").innerHTML = monthArr[d.getMonth()];
document.getElementById("year").innerHTML = d.getFullYear();










//Add Task


var count=0;
var submitButton=document.getElementById('submitButton').addEventListener('click',addTask)  ;

function addTask(){
        //Fetch value from the form
    var taskName=document.getElementById('addToDo');
    taskName=taskName.value;
    var taskCategory= document.getElementById('taskCategory');
    taskCategory= taskCategory.value;
    var DueDate= document.getElementById('dueDate');


    //Adding the task Details HTML and Values which were fetched above  
    count+=1;
    var taskDiv=document.createElement('div');
    taskDiv.setAttribute("class","task");
    taskDiv.setAttribute("id",count);
    var appendTaskDiv=document.getElementById('list').appendChild(taskDiv);

    var taskAndDate=document.createElement('div');
    taskAndDate.setAttribute("class","taskAndDate");
    appendTaskDiv.appendChild(taskAndDate);


    var delTrash=document.createElement('a');
    delTrash.setAttribute("class","fa-solid fa-trash-can del-task");
    delTrash.setAttribute("id","del-task"+""+count);
    appendTaskDiv.appendChild(delTrash);

    var heading=document.createElement('h3');
    heading.setAttribute("class","categoryHeading");
    appendTaskDiv.appendChild(heading);

    heading.innerHTML=taskCategory;

    

    var taskLabel=document.createElement('label');
    taskLabel.setAttribute("class","taskLabel");
    taskAndDate.appendChild(taskLabel);

    taskLabel.innerHTML=taskName;

    var divDate=document.createElement('div');
    divDate.setAttribute("class","dateDiv");
    taskAndDate.appendChild(divDate);
    

    var iCalendar=document.createElement('i');
    iCalendar.setAttribute("class","fa-solid fa-calendar");
    divDate.appendChild(iCalendar);

    iCalendar.innerHTML=" "+dueDate.value;


            //Delete Tasks
        var delButton=document.getElementById('del-task'+""+count);
        var delTaskDiv=document.getElementById(count);
        // console.log(delButton,delTaskDiv);
        delButton.addEventListener('click',()=> delTaskDiv.remove());

    
}




