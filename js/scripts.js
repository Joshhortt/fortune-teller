// ***** Back-End ****

//  Created Variables
var luckyValues = [];
var unluckyValues = [];
var outputFortune = [];

// ***** Front-End ****

$(document).ready(function(){
  $("#fortune-survey").submit(function(event){
    event.preventDefault();
    $("#fortune").show();
    luckyValues = [];
    unluckyValues = [];
    outputFortune = [];
    $("input:checkbox[name=signs-unlucky]:checked").each(function(){
      unluckyValues.push($(this).val());
    });
    $("input:checkbox[name=signs-lucky]:checked").each(function(){
      luckyValues.push($(this).val());
    });
    $("#output").text("");

    var unluckyLength = unluckyValues.length;
    var luckyLength = luckyValues.length;

//  Branching for Fortune Quiz Starts Here
    if(compareTo(luckyLength,unluckyLength))
    {
      outputFortune = ["Unusual"];
    }
    else if(luckyLength > unluckyLength)
    {
      outputFortune = ["Lucky"];
    }
    else {
      outputFortune = ["Unlucky"];
    }
//  Branching for Fortune Quiz Ends Here
    arrayWrapper(outputFortune);
    $("#output").html(outputFortune);
  });
});

function listWrapper(stringWrap)
{
  return ("<p>"+stringWrap+"</p>");
}

//  Passing the pointer to an array and then running a for loop to wrap each string in the array with the function listWrapper.
function arrayWrapper(arrayTemp)
{
  for(var index = 0; index < arrayTemp.length; index++)
  {
    arrayTemp[index] = listWrapper(arrayTemp[index]);
  }
}

function compareTo(first,second)
{
  return (first === second);
}
