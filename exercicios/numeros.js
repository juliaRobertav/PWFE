function numero(){
    num = Math.floor(Math.random() * 11);
    var chute = document.getElementById("textinput").ariaValueMax;
    if (chute === num){
        console.log("Bom trabalho")
    }
    else if (chute !== num){
        console.log("Não corresponde")
    }else {
        console.log("Erro!")
    }
};

numero();

