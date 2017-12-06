window.onload = function() {
	
	$(document).ready(function() {
      // Here we are provided an initial array of letters.
      // Use this array to dynamically create buttons on the screen.s
      var fighterLibrary = [{name: "Boba Fett", src: "./assets/images/bobafett.png", healthPointF: 120}, {name: "Chewbacca", src: "./assets/images/chewbacca.png", healthPointF: 120}, {name: "Han Solo", src: "./assets/images/hansolo.png" , healthPointF: 120}, {name: "Darth Vader", src: "./assets/images/darthvader.png", healthPointF: 120}];
      
      	var healthP0= $("<div>");
      	healthP0.text(fighterLibrary[3].healthPointF);
    
       
        var ides = "container2"
        var container11 = $("<div>");

        var nameFighter1 = $("<div>");


        var nameF0 = $("<div>");
        var imageF0 = $("<img>")
        var nameF = fighterLibrary[0].name;
        nameFighter1.attr("id", nameF);
        nameFighter1 = fighterLibrary[3].name
        nameF0.text(fighterLibrary[3].name);
        imageF0.attr("src", fighterLibrary[3].src);

        container11.attr("id", ides);
           	$("#linea1").append(container11);

        	$("#" + ides).append(nameF0);

        	$("#" + ides).append(imageF0)


        	$("#" + ides).append(healthP0);
        	//$("#nameF").text(nameFighter1);

        
		


		for (var i = 0; i < fighterLibrary.length; i++) {
        }
	  

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
 