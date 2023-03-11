function display(value){
    document.getElementById("screen").value += value;
}
function clearscreen(){
    document.getElementById("screen").value = "";
}
function calculate(){
    var a =  document.getElementById("screen").value;
    var b = eval(a);
    document.getElementById("screen").value =b;
}