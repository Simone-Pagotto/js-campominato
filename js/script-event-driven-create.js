var N_BOMBS = 16;
var MIN_BOUND = 1;
var MAX_BOUND_EASY = 100;
var MAX_BOUND_MEDIUM = 64;
var MAX_BOUND_HARD = 36;
var LIFE = 3;
var WIN = 3;
var explodedBombs =0;
var safeTries =0;
var bombs=[];

$( "#difficulty" ).change(function() {
  $('div.dashboard').removeClass('bg-image')
  $('div.dashboard').removeClass('easy')
  $('div.dashboard').removeClass('medium')
  $('div.dashboard').removeClass('hard')
  $('div.dashboard').empty('slot')
  $('.dashboard').removeClass('obscure')
  $('.red').removeClass('explosion')
  $('.dashboard').addClass('light')
  $('.green').addClass('victory')
  $('.message').css('display','none')

  explodedBombs = 0;
  safeTries = 0;

  console.log(difficulty.value)
  switch (difficulty.value) {
    case 'easy':
      bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_EASY);
      $('div.dashboard').addClass('easy')
      for (var i = 0; i < MAX_BOUND_EASY; i++) {
        $('div.dashboard').append('<div class="slot"></div>')
        $('.slot:last-child').val(i)
      }

      break;
    case 'medium':
      bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_MEDIUM);
      $('div.dashboard').addClass('medium')
      for (var i = 0; i < MAX_BOUND_MEDIUM; i++) {
        $('div.dashboard').append('<div class="slot"></div>')
        $('.slot:last-child').val(i)
      }

      break;
    case 'hard':
      bombs = bombsGenerator(N_BOMBS,MIN_BOUND,MAX_BOUND_HARD);
      $('div.dashboard').addClass('hard')
      for (var i = 0; i < MAX_BOUND_HARD; i++) {
        $('div.dashboard').append('<div class="slot"></div>')
        $('.slot:last-child').val(i)
      }

      break;
  }
  console.log(bombs)

  $('.slot').click(function(event){
    for(i=0; i<bombs.length && explodedBombs < LIFE && safeTries < WIN; i++){
      var actualSlot = event.target;
      $(actualSlot).removeClass('flag')
        if( actualSlot.value == bombs[i]){
          $(actualSlot).addClass('red')
          explodedBombs++
          console.log(explodedBombs)
        } else {
          $(actualSlot).addClass('green')
          safeTries++;
          console.log(safeTries)
        }
    }
     if(explodedBombs === LIFE){
       $('.dashboard').addClass('obscure')
       $('.red').addClass('explosion')
       $('.slot').removeClass('green')
       $('.message').css('display','block')
       $('.message').text('SEI ESPLOSO')
     }

     if(safeTries === WIN){
       $('.dashboard').addClass('light')
       $('.green').addClass('victory')
       $('.slot').removeClass('red')
       $('.message').css('display','block')
       $('.message').text('HAI VINTO')
     }
  })

  $('.slot').contextmenu(function(event){
    var actualSlot = event.target;
    $(actualSlot).addClass('flag')
  })
});
