const totalLinesFromTextFile = 21;

$(document).ready(function(){
  $("button").click(function(){
  	let randomNum = Math.round(Math.random()*(totalLinesFromTextFile - 1)) + 1;
    $("#p1").load("test.txt #" + randomNum);
  });
});

// $(document).ready(function(){
//   $("button").click(function(){
//   	let randomNum = Math.round(Math.random()*(totalLinesFromTextFile - 1)) + 1;
//     let newText = "";
//     $("newText").load("test.txt #" + randomNum);
//     $("#p1").load("test.txt #" + randomNum);
//     $("#div1").append(newText);  
//   });
// });

// $.get("test", function(response) {
//      console.log(response);
// });