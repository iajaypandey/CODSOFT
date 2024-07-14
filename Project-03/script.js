let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) => {

        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "clear"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "D"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})