function display(val) {
    document.getElementById("result").value += val;
}

/*calculate the value of input section*/ 
function calculate() {
    let a=document.getElementById("result").value;
    let b=eval(a);
    document.getElementById("result").value=b;
}

/*function use to clear all the content on calulater screen*/
function allclear() {
   let string="";
document.getElementById("result").value=string;
}

/*function use to clear only one number of the content on the calulater screen*/

function remove() {
    let input=document.getElementById("result").value.slice(0,-1);
    document.getElementById("result").value=input;
}
