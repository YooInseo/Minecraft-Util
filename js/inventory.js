var colum;

var size;
var name;

var presize;
var nextsize;

var sizetype = sizetype
var obj = document.getElementById("size");
var inventory = document.getElementById("inventory");
let html = document.createElement("colum");

 

function showVal(newVal){
    
    if(newVal != 0){
        for(int = 0; int < newVal; int++){
            var inv = document.getElementById('inventory');
            var elemDiv = document.createElement('div');
             elemDiv.className = 'colum';
 
            inv.append(elemDiv);
        }
    } else{
    }
 
    console.log( "현재 칸 " + parseInt(newVal));

 
}
