var N_BOMBS = 16;
var MIN_BOUND = 1;
var MAX_BOUND_EASY = 100;
var MAX_BOUND_MEDIUM = 64;
var MAX_BOUND_HARD = 36;



difficultyLevel = document.getElementById("difficulty").value;
switch (difficultyLevel) {
  case 'easy':
    var bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_EASY);
    break;
  case 'medium':
    var bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_MEDIUM);
    break;
  case 'hard':
    var bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_HARD);
    break;

}

console.log(bombs);


var dashboardElements = document.getElementsByClassName("dashboard");
document.getElementById("difficulty").addEventListener('change',function(event){


  difficultyLevel = document.getElementById("difficulty").value;
  switch (difficultyLevel) {
    case 'easy':
      var bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_EASY);
      break;
    case 'medium':
      var bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_MEDIUM);
      break;
    case 'hard':
      var bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_HARD);
      break;

  }

  console.log(bombs);




  var selectedDifficulty = event.target.value;
  //iterare sugli elementi dashboard
  for(var i=0; i<dashboardElements.length;i++){
    if(dashboardElements[i].className.includes(selectedDifficulty)){
      dashboardElements[i].style.display = 'flex';
    } else {
      dashboardElements[i].style.display = 'none';

    }
  }
  console.log(i);



})

//seleziono tutti gli elementi slot sotto la dashboard easy: potrei farlo anche con get element by class name
var easySlotElements = document.querySelectorAll('.easy > *');
var mediumSlotElements = document.querySelectorAll('.medium > *');
var hardSlotElements = document.querySelectorAll('.hard > *');
var explosionEasy=0;
var explosionMedium=0;
var explosionHard=0;

//do un valore ad ogni elementi figlio di easy pari alla sua posizione nell'array che uso su js
for(var i=0; i< easySlotElements.length; i++){
  easySlotElements[i].value = i;
  easySlotElements[i].addEventListener("click",function(event){
    var slotValue = parseInt(event.target.value);
    if(isNumberInArray(slotValue, bombs)){
      event.target.style.backgroundColor = "red";
      event.target.style.backgroundImage = 'url("img/bomb.svg")';
      explosionEasy++;

    } else {
      event.target.style.backgroundColor = "green";
    }
  });

  easySlotElements[i].addEventListener("contextmenu", function(event){
    event.preventDefault();
    event.target.style.backgroundImage = 'url("img/flag-of-black-long-shape.svg")';
  });
}

for(var i=0; i< mediumSlotElements.length; i++){
  mediumSlotElements[i].value = i;
  mediumSlotElements[i].addEventListener("click",function(event){
    var slotValue = parseInt(event.target.value);
    if(isNumberInArray(slotValue, bombs)){
      event.target.style.backgroundColor = "red";
      event.target.style.backgroundImage = 'url("img/bomb.svg")';
      explosionMedium++;
    } else {
      event.target.style.backgroundColor = "green";
    }
  });

  mediumSlotElements[i].addEventListener("contextmenu", function(event){
    event.preventDefault();
    event.target.style.backgroundImage = 'url("img/flag-of-black-long-shape.svg")';
  });
}

for(var i=0; i< hardSlotElements.length; i++){
  hardSlotElements[i].value = i;
  hardSlotElements[i].addEventListener("click",function(event){
    var slotValue = parseInt(event.target.value);
    if(isNumberInArray(slotValue, bombs)){
      event.target.style.backgroundColor = "red";
      event.target.style.backgroundImage = 'url("img/bomb.svg")';
      explosionHard++;
    } else {
      event.target.style.backgroundColor = "green";
    }
  });

  hardSlotElements[i].addEventListener("contextmenu", function(event){
    event.preventDefault();
    event.target.style.backgroundImage = 'url("img/flag-of-black-long-shape.svg")';
  });
}
