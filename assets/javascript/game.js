window.onload = function() {
	
	$(document).ready(function() {
      // Here we are provided an initial array of letters.
      // Use this array to dynamically create buttons on the screen.s
      var fighterLibrary = [{name: "Boba Fett", src: "./assets/images/bobafett.png", healthPointF: 120, inde: "cont0"}, {name: "Chewbacca", src: "./assets/images/chewbacca.png", healthPointF: 120, inde: "cont1"}, {name: "Han Solo", src: "./assets/images/hansolo.png" , healthPointF: 120, inde: "cont2"}, {name: "Darth Vader", src: "./assets/images/darthvader.png", healthPointF: 150, inde: "cont3"}];
      
      	
      	
    
       
    	for (var i = 0; i < fighterLibrary.length; i++) {    
	        var ides = "cont" + i

	        //hacerlo relativo
	        var container11 = $("<a>");

	        var nameFighter1 = $("<div>");
			var healthP0= $("<div>");

	        var nameF0 = $("<div>");
	        var imageF0 = $("<img>")
	        var nameF = fighterLibrary[i].name;
	        nameFighter1.attr("id", nameF);
	        nameFighter1 = fighterLibrary[i].name
	        nameF0.text(fighterLibrary[i].name);
	        imageF0.attr("src", fighterLibrary[i].src);
	        healthP0.text(fighterLibrary[i].healthPointF)



	        container11.attr("id", ides);
	        container11.addClass("container2 containerButton")
	        container11.attr("fight", fighterLibrary[i].name);

	        container11.attr("fightFoto", fighterLibrary[i].src);

			container11.attr("fightHealth", fighterLibrary[i].healthPointF);

			container11.attr("indexX", fighterLibrary[i].inde);
			console.log(container11.indexX)


	           	$("#linea1").append(container11);

	        	$("#" + ides).append(nameF0);

	        	$("#" + ides).append(imageF0);

	        	$("#" + ides).append(healthP0);
	    }



	  $(".containerButton").on("click", function () {

	  	var yourFighter = $("<a>");
	  	yourFighter.text($(this).attr("fight.name"))
	  	yourFighter.addClass("container2");


		

    		var ides = "cont" + i

	        //hacerlo relativo
	        var container11 = $("<a>");

	    	var healthP0= $("<div>");

	        var nameF0 = $("<div>");
	        var imageF0 = $("<img>")


	        

			nameF0.text($(this).attr("fight"));
	        imageF0.attr("src", ($(this).attr("fightFoto")));
			healthP0.text($(this).attr("fightHealth"));


			var indice = "";
			indice = ($(this).attr("indexX"));
			console.log(indice)



	        container11.attr("id", ides);
	        container11.addClass("container2 containerButton2")
	           	$("#linea1").html(container11);

	        	$(".container2").append(nameF0);

	        	$(".container2").append(imageF0);

	        	$(".container2").append(healthP0);
	        	//$("#nameF").text(nameFighter1);

	        


	        for (var i = 0; i < fighterLibrary.length; i++) {    
		        var ides = "cont" + i

		        //hacerlo relativo
		        var container11 = $("<a>");

		        var nameFighter1 = $("<div>");
				var healthP0= $("<div>");

		        var nameF0 = $("<div>");
		        var imageF0 = $("<img>")
		        var nameF = fighterLibrary[i].name;
		        nameFighter1.attr("id", nameF);
		        nameFighter1 = fighterLibrary[i].name
		        nameF0.text(fighterLibrary[i].name);
		        imageF0.attr("src", fighterLibrary[i].src);
		        healthP0.text(fighterLibrary[i].healthPointF)



		        container11.attr("id", ides);
		        container11.addClass("container2 containerButton3")
		        container11.attr("fight", fighterLibrary[i].name);

		        container11.attr("fightFoto", fighterLibrary[i].src);

				container11.attr("fightHealth", fighterLibrary[i].healthPointF);

				container11.attr("indexX", fighterLibrary[i].inde);
				
		           	$("#linea2").append(container11);

		        	$("#" + ides).append(nameF0);

		        	$("#" + ides).append(imageF0);

		        	$("#" + ides).append(healthP0);
	    	}
	    	
	    	
	    	console.log(indice)
	    	$("#"+ indice).hide();


	    	$(".containerButton3").on("click", function () {

				  	var yourFighter = $("<a>");
				  	yourFighter.text($(this).attr("fight.name"))
				  	yourFighter.addClass("container2");


		

	    		var ides = "cont" + i

		        //hacerlo relativo
		        var container11 = $("<a>");

		    	var healthP0= $("<div>");

		        var nameF0 = $("<div>");
		        var imageF0 = $("<img>")


		        

				nameF0.text($(this).attr("fight"));
		        imageF0.attr("src", ($(this).attr("fightFoto")));
				healthP0.text($(this).attr("fightHealth"));

				var indice0 = "";
				indice0 = ($(this).attr("indexX"));
				console.log(indice0);
				$("#"+ indice0).hide();








		        container11.attr("id", ides);
		        container11.addClass("container3")
		           	$("#linea3").html(container11);

		        	$(".container3").append(nameF0);

		        	$(".container3").append(imageF0);

		        	$(".container3").append(healthP0);
		        	//$("#nameF").text(nameFighter1);

		        




		        
		    	


		  })


	  })




	  
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
 