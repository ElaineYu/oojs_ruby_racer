$(document).ready(function() {
  // Player 1
  var counter_1 = 2;
  var counter_2 = 2;
  var gameFinished = 0;




  $(document).on('keyup', function(event) {
    // key 80 = P

    if(event.keyCode == 80 && gameFinished != 1)
      {

        console.log(' player 2 hitting key');
        console.log(counter_1);
        $("#player1_strip td:nth-child(" + counter_1 + ")").removeClass("active");
        counter_1++;
        $("#player1_strip td:nth-child(" + counter_1 + ")").addClass("active");
            if(counter_1 == 21) {
          document.getElementById('win').innerHTML="Player 1 Wins!";
          gameFinished = 1;
        };
      };

    // key 81 = Q
    if(event.keyCode == 81 && gameFinished != 1)
      {

        console.log(' player 2 hitting key');
        console.log(counter_2);
        $("#player2_strip td:nth-child(" + counter_2 + ")").removeClass("active");
        counter_2++;
        $("#player2_strip td:nth-child(" + counter_2 + ")").addClass("active");
        if(counter_2 == 21) {
          document.getElementById('win').innerHTML="Player 2 Wins!";
          gameFinished = 1;
        };
      };

    $("#reset_button").click(function(event){
        console.log("hello");
        counter_1 = 2;
        counter_2 = 2;
        gameFinished = 0;
        console.log(counter_1, counter_2, gameFinished);
        $("td").removeClass("active");
        $("#player1_strip td:nth-child(2)").addClass("active");
        $("#player2_strip td:nth-child(2)").addClass("active");
        
        document.getElementById('win').innerHTML="";


    });


  });

      

  // update_player_position(player, position) {
  //   $("#player2_strip td:nth-child(" + (position) + ")").addClass("active");
  //   $("#player2_strip td:nth-child(" + (position)-- + ")").removeClass("active");

  // };


  // function Player(name) {
  //   this.name = name;
  //   this.position = 1;
  // }

  // var jake = new Player('jake');
});
