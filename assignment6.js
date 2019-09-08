// const mycosnt;
// var myvar;
//drawing 400 datapoints
for(var dataPoint = 0; dataPoint <= 400; dataPoint++){
    //calculating the width using cos math and using datapoint to increase the value
    const width = Math.cos(dataPoint) + 1;
    var positiveWidth = Math.floor(width * 1000);
    //converting to between 0 and 1000
    if(positiveWidth > 1000){
        positiveWidthless = positiveWidth - 1000;
        console.log(positiveWidthless);
    } else {
        positiveWidthless = positiveWidth;
        console.log(positiveWidthless);
    }
   

//creating the html elemets
 var myDiv = document.createElement("DIV");
 //settinf height to 5px
myDiv.style.height = "5px";
//setting width to value of data point
myDiv.style.width = positiveWidthless;
// myDiv.style.backgroundColor = "steelblue";
//cheking 80% of 1000 is 800 crreating class exceed and bar based on that
if(positiveWidthless > 800) {
    myDiv.classList.add("exceed"); 
} else {
    myDiv.classList.add("bar"); 
}
 
document.body.appendChild(myDiv);
document.getElementById("chart").appendChild(myDiv);
}



// var btn = document.createElement("BUTTON");
//   btn.innerHTML = "CLICK ME";
//   document.body.appendChild(btn);