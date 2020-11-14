let div = document.getElementById('div');
function Add() {
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    let sum = parseInt(x)+parseInt(y);
    console.log(sum);
    div.innerHTML = "Сумма: " + sum;
    document.body.append(div);
}

function Clear() {
    div.innerHTML="";
}