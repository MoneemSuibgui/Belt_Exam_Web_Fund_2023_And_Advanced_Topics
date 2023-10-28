var Myelement=document.querySelector(".thirdcontainer");

//  remove function  & settimeout alert into 3 secondes

function hide(element){
    Myelement.remove();
    setTimeout(function hide(element){
    alert("This Ninja have won!");
    }
        ,3000)
    }

// declare my variables
var nbrs=[314,159];
var objcts=[document.querySelector("#score1"),
            document.querySelector("#score2")];

// add1 function 
function add1(i){
    nbrs[i]++;
    objcts[i].innerHTML =nbrs[i];
}