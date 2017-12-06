window.onload = function() {
	
	$(document).ready(function() {
      // Here we are provided an initial array of letters.
      // Use this array to dynamically create buttons on the screen.s
      var fighterLibrary = [{name: "Boba Fett", src: "./assets/images/bobafett.png"}, {name: "Chewbacca", src: "./assets/images/chewbacca.png"}, {name: "Han Solo", src: "./assets/images/hansolo.png"}, {name: "Darth Vader", src: "./assets/images/darthvader.png"}];
      // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
      // =================================================================================
      // 1. Create a for-loop to iterate through the letters array.
      
	




	  	for (var i = 0; i < fighterLibrary.length; i++) {
        // Inside the loop...
        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var fighterImage = $("<img>");
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        fighterImage.addClass("card1 cardColor");
        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        fighterImage.attr("data-letter", fighterLibrary[i].name);

        fighterImage.attr("src", fighterLibrary[i].src)
        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        fighterImage.text(fighterLibrary[i].name);
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#buttons").append(fighterImage.src + fighterLibrary[i].name);
        }


	  	for (var i = 0; i < fighterLibrary.length; i++) {
        
		//$("#" + this.id).append("hola");
	  	var ides = "container2"


        var container11 = $("<a>");
		container11.attr("id", ides)



		$("#" + ides).append("hola");


		



        // Inside the loop...
        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var fighterImage = $("<img>");
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        fighterImage.addClass("card1 cardColor");
        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        fighterImage.attr("data-letter", fighterLibrary[i].name);

        fighterImage.attr("src", fighterLibrary[i].src)
        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        fighterImage.text(fighterLibrary[i].name);
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).



        $("#container1 .nameFighter").text(fighterLibrary[i].name);
        

        $("#container1 .imageFighter").attr("src",fighterLibrary[0].src);
        }

		
        $(".row").append(container11);

        


        var fighterImage11 = $("<img>");
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        fighterImage11.addClass("card1 cardColor");
        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        fighterImage11.attr("data-letter", fighterLibrary[2].name);

        fighterImage11.attr("src", fighterLibrary[2].src)
        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        fighterImage11.text(fighterLibrary[2].name);


	  

/*$('#button2').prepend(fighterImage);*/

	  /*$('#theIm').attr("src", fighterLibrary[2].src);*/



	 
	  
	  /*var pasaFoto = $("<img>");
	  
	  pasaFoto.addClass("token");
	  pasaFoto.attr('id', "theImg");

	  pasaFoto = fighterLibrary[3].scr;*/
	  /*var pasa = fighterLibrary[1].name;
	  fighter.html(pasa + "hihi" + pasaFoto + "Cont1");	  	  
	 
	  
	  $('#buttons').append(pasaFoto);*/

	  
	  

	  /*fighterImage.attr(src, "assets/images/hansolo.png");*/

	  /*fighterImage.src("assets/images/hansolo.png");
	  $('#button2').html(fighterImage);*/


	});

}
 