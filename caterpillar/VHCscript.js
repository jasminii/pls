

// change click to start font colour on hover
$("#start").hover(function(){
  $(this).css("color", "#ed0707ff");
  }, function(){
  $(this).css("color", "white");
});

// // click start to next page
$("#start").click(function(){
    window.location.href="vhc1.html"
});


// click egg to p2
$("#egg").click(function(){
    window.location.href="vhc2.html";
});

$('#suncat').hide(); // hides the div aka suncat
$('#suncat').delay(2000).fadeIn('fast'); //suncat appears



// click caterpillar to p3
$("#suncat").click(function(){
    window.location.href="vhc3.html"
});

// click to p4
$("#catsun").click(function(){
    window.location.href="../caterpillar/vhc4.html"
});

//page 4..........................................
// appearance of apples
$('#catapple').hide();
$("#apple").click(function(){
	$("#catapple").fadeIn(0)
	$("#apple").fadeOut(0)
})

// click to p5 
$("#catapple").click(function(){
    window.location.href="vhc5.html";
});


//page 5..........................................
// appearance of pears
$('#pear2, #catpear').hide();
$("#pear1").click(function(){
	$("#pear2").fadeIn(200)
})

// replace pear2 with catpear
$("#pear2").click(function(){
	$("#catpear").fadeIn(500)
	$("#pear2").fadeOut(0)
})

//click to p6
$("#catpear").click(function(){
    window.location.href="vhc6.html"
});

//page 6..........................................

$(".plums").click(function(){						//When you click on anything with the class "pears", execute the following code
	plumNumber = $(this).attr("id")					//read the ID of whatever image you clicked on and assign it to a variable called
	plumNumber = plumNumber.replace("plum","")		//removing the text "pear" from the variable.
	plumNumber = parseInt(plumNumber)				//reading pearNumber now as a real numnber
	plumNumber = plumNumber+1;						//add one to the number.
	plumNumber = "#plum"+plumNumber 				//convert number to the ID of the item you want to fade in

	$(plumNumber).fadeIn(500)
});

$("#plum3").click(function(){
	$("#plum4").fadeIn(500)
	$("#plum3").fadeOut(0)
})


$("#plum4").click(function(){
    window.location.href="vhc7.html"
});

//page 7..........................................

$(".straws").click(function(){						
	strawNumber = $(this).attr("id")					
	strawNumber = strawNumber.replace("straw","")		
	strawNumber = parseInt(strawNumber)				
	strawNumber = strawNumber+1;						
	strawNumber = "#straw"+strawNumber 				

	$(strawNumber).fadeIn(500)
});

$("#straw4").click(function(){
	$("#straw5").fadeIn(500)
	$("#straw4").fadeOut(0)
})


$("#straw5").click(function(){
    window.location.href="vhc8.html"
});

//page 8..........................................

$(".oranges").click(function(){						
	orangeNumber = $(this).attr("id")					
	orangeNumber = orangeNumber.replace("orange","")		
	orangeNumber = parseInt(orangeNumber)				
	orangeNumber = orangeNumber+1;						
	orangeNumber = "#orange"+orangeNumber 				

	$(orangeNumber).fadeIn(500)
});

$("#orange5").click(function(){
	$("#orange6").fadeIn(500)
	$("#orange5").fadeOut(0)
})


$("#orange6").click(function(){
    window.location.href="vhc9.html"
});
$('#title99').hide();

//page 9..........................................

$(".foods").click(function(){						
	foodNumber = $(this).attr("id")					
	foodNumber = foodNumber.replace("food","")		
	foodNumber = parseInt(foodNumber)				
	foodNumber = foodNumber+1;						
	foodNumber = "#food"+foodNumber 				

	$(foodNumber).fadeIn(500)
});

$("#food9").click(function(){
	$("#food10, #title99").fadeIn(500)
	// $("#food9").fadeOut(0)
})


$("#food10").click(function(){
    window.location.href="vhc10.html"
});















// to make each class fruit appear on page in the defined grid after each click :( everytime i use this the whole js breaks!!!!
// $(".pears").click(function(){
// 	pearNumber = "#pears"+(parseInt($(this).attr("id").replace("pears",""))+1)$(pearsNumber.fadeIn(500))
// });

// ...........................................
// // this was take 1//
// $("#start").click(function(){
//     $("#start, #cover").fadeOut(200);
//     $("#p1").fadeIn(200);
// });

// $("#p1").click(function(){
//     $("#p1").fadeOut(200);
//     $("#p2").fadeIn(200);
// });

// // this was take 2//
// $(".start").click(function(){


// 	if ($(this).hasClass("start")) { //this menu is already open
// 		$(this).removeClass("start") //remove the "open" class 
// 	} else {
// 		$(this).addClass("p1") //add the "open" class
// 	}
// })


// // to make each class fruit appear on page in the defined grid after each click
// $(".cat").click(function(){
// 	catNumber = "#cat"+(parseInt($(this).attr("id").replace("cat".""))+1)$(catNumber.fadeIn(500))
// });
