//fetch date
var count=0;

(function(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    var d = new Date();
    var month = monthNames[d.getMonth()];
    var day = d.getDate();
    var year=d.getFullYear();

    $('#month').html(month);
    $('#date').html(day);
    $('#year').html(year);  
})();

function randomColor(){
    var arr=['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick' , 'crimson'];
    var color=arr[Math.floor(Math.random()*15)];
    console.log(color);
    return color;
    
}
function addTask(taskdata,count){
    
    $('#list').append('<div class="task" id="'+count+'"> <div class="randomColors"> </div> <label for="taskName" class="taskLabel"><input type="checkbox" class="taskCheck">'+ taskdata+' </label>  <i class="fas fa-trash" id="del'+count+'"></i>  </i></div>');
    var color=randomColor;
    $('.randomColors').css('background-color',color);
    
    $('#del'+count+'').click(function(){
        $('#'+count+'').remove();
    });

    
}

$('#plusFont').click(function(){
    count+=1;
    var taskdata=$('#addToDo').val();
    addTask(taskdata,count);
});

$('#addToDo').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var taskdata=$('#addToDo').val();
    if(keycode == '13'){
        
        addTask(taskdata); 
    }
});

$('#delAll').click(function(){
    count=0;
    $('#list div').remove();
});

