function display(num){
    inputbox.value += num
}
function back(){
    inputbox.value=inputbox.value.slice(0,-1)
}

function allClear(){
    inputbox.value=""
}

function equal(){
    expression = inputbox.value;
    expression = expression.replace(/𝜋/g,'Math.PI')
                           .replace(/sin/g, 'Math.sin')
                           .replace(/cos/g, 'Math.cos')
                           .replace(/tan/g, 'Math.tan')
                           .replace(/log/g, 'Math.log10')
                           .replace(/ln/g, 'Math.log')
                           .replace(/√/g, 'Math.sqrt')
                           .replace(/\^/g, '**')
                           .replace(/×/g, '*')
    try {
        inputbox.value=eval(expression);
    } catch{
        inputbox.value="Error";
        setTimeout(()=>{
            inputbox.value="";
        },1000)
    }
}