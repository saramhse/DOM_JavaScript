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

var selectedItem=d3.select("#choicedate");
var selectedItemi=d3.select("#choicecountry");
var selectedItemii=d3.select("#choicestate");
var mybutton=d3.select("#filter-btn");
var mynewbutton=d3.select("#new-filter-btn");

function jsFunction(){
    d3.event.preventDefault();
    // let mycustomData=tableData;
    // var buttonItem=d3.select("new-filter-btn")
    if (selectedItem){
        mybutton.on("click",handleClick);
    };

};

function dropDowner(){
    mynewbutton.on("click",)
    document.getElementById()
};