
function somar(){
    const numero1 = document.querySelector("#input1").value;
    const numero2 = document.querySelector("#input2").value;
    let total = parseInt(numero1) + parseInt(numero2)
    
    document.querySelector("#resultado").innerHTML = total;
}