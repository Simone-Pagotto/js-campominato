//COSTANTI
var N_BOMBS = 16;
var MIN_BOUND = 1;
var MAX_BOUND;
var ROUNDS = 12;

//VARIABILI
var bombs = [];
var userChoiceMemory = [];
var isAlive = true;
var hasWon = false;
var range = true;
var type = true;
var submitElement = document.getElementById( "play" );
var newGameElement = document.getElementById( "refresh" );
var selectElement = document.getElementById( "select" );
var difficultyLevel;

console.log(difficultyLevel);

selectElement.addEventListener( "click" , function () {
   document.getElementById("main").style.display = "block";
   document.getElementById("level").style.display = "none";

   //switchcase che seleziona la difficoltà del gioco
   difficultyLevel =  parseInt( document.getElementById( "difficulty" ).value );

   switch ( difficultyLevel ) {
      case 0:
         MAX_BOUND = 100;
         break;
      case 1:
         MAX_BOUND = 80;
         break;
      case 2:
         MAX_BOUND = 50;
        break;
   }

   console.log( MAX_BOUND );

   //Ciclo che mi produce i numeri esplosivi e me li istema in un array senza permettere ripetizioni
   while ( bombs.length < N_BOMBS ) {
       var actualRandomNumber = getRandomIntInclusive(MIN_BOUND,MAX_BOUND);
       if (!isNumberInArray(actualRandomNumber,bombs)){
           bombs.push(actualRandomNumber);
     }
   }
   console.log(bombs);
});


//Evento che si avvia cliccando GIOCA dopo aver immesso un numero
submitElement.addEventListener("click",function(){
    document.getElementById("advice").innerHTML= "";//pulizia della zona in cui compaioni i messaggi di correzione input
    var actualUserChoice = parseInt(document.getElementById("number").value);//acquisizione del valore input sritto dall'utente in una variabile temporanea , utilizzata solo per fare i cicli
    console.log(actualUserChoice);

    //controllo sull'utente: non vengono permesse ripetizioni tramite la funzione isNumberInArray. Altrimenti si aggiunge l'input all'array delle scelte dell'utente
    if (isNumberInArray(actualUserChoice,userChoiceMemory)){
       document.getElementById("advice").innerHTML= "ERRORE, Devi reinserire il numero" ;
       console.log(userChoiceMemory);
    } else {
       userChoiceMemory.push(actualUserChoice);
       console.log(userChoiceMemory);

      //Condizioni di FINE partita : riducendo a caso di VITTORIA e ESPLOSIONE
      if (isNumberInArray(actualUserChoice,bombs)){
         isAlive = false;
      } else if (userChoiceMemory.length === ROUNDS){
         hasWon = true;
      }
      console.log('isAlive',isAlive);
      console.log('hasWon',hasWon);
      console.log('round', userChoiceMemory.length);
    }

    //controllo sul RANGE dell'input utente
    if (actualUserChoice < MIN_BOUND || actualUserChoice > MAX_BOUND){
       userChoiceMemory.pop();
       document.getElementById("advice").innerHTML= "Reinserire un numero , che sia >= " + MIN_BOUND + " e <= " + MAX_BOUND;
       console.log(userChoiceMemory);
       range = false;
    }

    //controllo sul TIPO dell'input utente
    if (isNaN(actualUserChoice)){
       userChoiceMemory.pop();
       document.getElementById("advice").innerHTML= "Non hai inserito un numero, reinserirlo!";
       console.log(userChoiceMemory);
       type = false;
    }

    //DA METTERE A POSTO!!!
    if( (range === true) && (type === true) ){

        document.getElementById("reminder").innerHTML += '<li>' + userChoiceMemory[userChoiceMemory.length-1] + '</li>';

        document.getElementById("punteggio").innerHTML = 'Punteggio : ' + userChoiceMemory.length;
    }

    //controllo del numero dell'utente immesso con la lista di numeri esplosivi

    if ( isAlive === false ){
       document.getElementById("advice").innerHTML= "OOPS Sei Esploso, ma il tuo punteggio è: " + userChoiceMemory.length;
       document.getElementById("refresh").style.display = "block";
       document.getElementById("pergamena").style.display = "none";
    }
    if ( hasWon  === true ){
       document.getElementById("advice").innerHTML= "Sei incredibilmente riuscito a schivare tutte le bombe!";
       document.getElementById("refresh").style.display = "block";
    }

    actualUserChoice=document.getElementById("number").value="";//pulizia del value dell'input
});

newGameElement.addEventListener("click",function(){
   location.reload();
});
