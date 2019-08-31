let i1 = document.getElementById('i1');
let error = document.getElementById('error');

let result = document.getElementById('result');
let clear = document.getElementById('clear');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let add = document.getElementById('+');
let min = document.getElementById('-');
let mul = document.getElementById('*');
let div = document.getElementById('/');
let equal = document.getElementById('form');

one.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "1";
    i1.innerHTML += "1";
    
    
});
two.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "2";
    i1.innerHTML += "2";
    
    
});
three.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "3";
    i1.innerHTML += "3";
    
    
});
four.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "4";
    i1.innerHTML += "4";
    
    
});
five.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "5";
    i1.innerHTML += "5";
    
});
six.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "6";
    i1.innerHTML += "6";
    
});
seven.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "7"
    i1.innerHTML += "7";
    
});
eight.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "8"
    i1.innerHTML += "8";
    
});
nine.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "0"
    i1.innerHTML += "9";
    
});
zero.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "0";
    i1.innerHTML += "0";
    

});
add.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "0";
    i1.innerHTML += "+";
    

});
min.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "0";
    i1.innerHTML += "-";
    

});
mul.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "0";
    i1.innerHTML += "*";
    

});
div.addEventListener('click', (e)=>{
    e.preventDefault();
    num = "0";
    i1.innerHTML += "/";
    

});
equal.addEventListener('submit', (e)=>{
    e.preventDefault();
    let input = i1.innerText;
     if (input.includes("+-") == true){
        i1.innerHTML = "Invalid input";
    }
    else if (input.includes("-+") == true){
        i1.innerHTML = "Invalid input";
    }else{
            
            if (input.includes("+") == true){
                let step = input.split('+');
                fhalf = parseInt(step[0]);
                shalf = parseInt(step[1]);
                output = fhalf + shalf;
                console.log(output);
                result.value = output;
                i1.innerHTML = output;

            }
            else if (input.includes("-") == true){
                let step = input.split('-');
                fhalf = parseInt(step[0]);
                shalf = parseInt(step[1]);
                output = fhalf - shalf;
                console.log(output);
                result.value = output;
                i1.innerHTML = output;

            }
            else if (input.includes("*") == true){
                let step = input.split('*');
                fhalf = parseInt(step[0]);
                shalf = parseInt(step[1]);
                output = fhalf * shalf;
                console.log(output);
                result.value = output;
                i1.innerHTML = output;

            }
            else if (input.includes("/") == true){
                let step = input.split('/');
                fhalf = parseInt(step[0]);
                shalf = parseInt(step[1]);
                output = fhalf / shalf;
                console.log(output);
                result.value = output;
                i1.innerHTML = output;

            }
            
            else {
                error.innerHTML = "Invalid input";
            }
    }
});

clear.addEventListener('click', (e)=>{
    e.preventDefault()
    i1.innerHTML = "";
    result.value = "";
});