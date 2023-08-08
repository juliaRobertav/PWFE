function multiplicacao(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("total").innerHTML = num1 * num2;
};

function divisao(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("total").innerHTML = num1 / num2;
};

function soma(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    if (num1 === num2){
        document.getElementById("total").innerHTML = (num1 + num2) * 3;   
    }else{
        document.getElementById("total").innerHTML = num1 + num2;
    }

   
};