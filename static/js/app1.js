// from data.js
var tableData = data;
var table=d3.select("tbody");

function tableMaker(theData){

    table.html("");
    theData.forEach(function(document){
        console.log(document);
        var row=table.append("tr");
    
        Object.entries(document).forEach(function([key,value]){
            console.log([key,value]);
        
        var cell=row.append("td");
        cell.text(value);
        });
    });
};

function handleClick(){

    d3.event.preventDefault();
    var date=d3.select("#datetime").property("value");
    let customData=tableData;

    if (date){
        customData=customData.filter(row => row.datetime ===date);
    };

    tableMaker(customData);
};

d3.selectAll("#filter-btn").on("click",handleClick);
tableMaker(tableData);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// };

// myFunction(mybt);
// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
}
