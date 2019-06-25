
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
