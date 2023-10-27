var Myelement=document.querySelector(".thirdcontainer");



//  remove function  & settimeout alert 

function hide(element){
    Myelement.remove();
    setTimeout(function hide(element){
    alert("This Ninja have won!");
    }
        ,3000)
    }








//function onclick add1
var nbrs=[314,159];
var objcts=[document.querySelector("#score1"),
            document.querySelector("#score2")];

function add1(i){
    nbrs[i]++;
    objcts[i].innerHTML =nbrs[i];
}