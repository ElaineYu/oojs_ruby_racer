$(document).ready(function() {

  // Post names on page
  $('#create_players').submit(function(event) {
    event.preventDefault();
    console.log($(this).serialize() );

    var $newInput = $(this);
    var url = $newInput.attr("action");
    var data = $newInput.serialize();
    // AJAX HTML PLOPPING
    $.post(url, data, function(response) {
          $('.response').html(response);
    });
  });

  // Set counters
  var counter_1 = 2;
  var counter_2 = 2;
  var gameFinished = 0;
  var time_start = $.now();
      console.log(time_start)

  // Player 1
  $(document).on('keyup', function(event) {
    // key 80 = P
    if(event.keyCode == 80 && gameFinished != 1)
      {
        //start timer ... this doesn't work
        // move player
        console.log(' player 2 hitting key');
        console.log(counter_1);
        $("#player1_strip td:nth-child(" + counter_1 + ")").removeClass("active");
        counter_1++;
        $("#player1_strip td:nth-child(" + counter_1 + ")").addClass("active");
            if(counter_1 == 21) {
            document.getElementById('win').innerHTML="Player 1 Wins!";

            gameFinished = 1;
        // end timer ... this doesn't work
        var time_end = $.now();
        console.log(time_end)
        var total_time = (time_end - time_start)/1000
        console.log(total_time/1000)
        var data = {
          winner_id: $("#player1_strip").data("winner_id"),
          winner_time: total_time
        }

        // var data = {name: "data-player-id", time: total_time };
            $.post('/get_winner', data, function(response) {
              $(".winner").html(response);
            });
        };
      };

    //Player 2
    if(event.keyCode == 81 && gameFinished != 1)
      // key 81 = Q
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
        // document.getElementById('win').innerHTML="";
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
