var name = "akin ";
var name2 = " inno";
var name3 = "shuaib";
var totalname = name + name2 + name3;
alert(totalname);
alert(name);
var tick = yes
var akinAge = 40;
var innoAge = 50;
var shuaibAge = 80;

alert(akinAg+innoAge+shuaibAge);
var name = "inno";
name = 1;
alert(typeof(name));
function validateForm(){
    alert("akin");
}
function validateinput(event){
    alert(event.type);
}
document.getElementById("name").addEventListener("input",function(event){
    alert(event.target.value);
});
function isSignificant(text){
    var notwithwhitespaceTextRegex = /[A-Z]{1}[a-z]{2}[0-9]{3}/;
    return notwithwhitespaceTextRegex.text(text)
}

function validateform(){
if(isSignificant(document.getElementById('penalties').value)){

    alert("true");
}
else{
    document.getElementById("penalties").className = "validationError";
}

}
document.forms[0].addEventListener("submit",validateform);


function isSignificant(text){
    var notwithwhitespaceTextRegex = /[A-Z]{1}[a-z]{2}[0-9]{3}/;
    return notwithwhitespaceTextRegex.text(text)
}

function validateform(event){
    event.preventDefault();
if(isSignificant(document.getElementById('penalties').value)){

    alert("true");
}
else{
    document.getElementById("enter").innerHTML="*";
}

}
document.forms[0].addEventListener("submit",validateform);
