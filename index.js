function dis(val){
    document.getElementById("input").value += val;
    
}
function reset(){
    document.getElementById("input").value="";
}
function Answer(){
    let x = document.getElementById("input").value;
    let y = eval(x);
    document.getElementById("input").value = y;
}
