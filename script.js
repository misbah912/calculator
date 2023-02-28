let string = "";
let decimalCount = 0;
let buttons = document.querySelectorAll('.button');
let opcount = 0;

document.addEventListener("keydown",function(event) {
      var keypress = event.key;
      string = document.querySelector('.input').value;
      if(keypress == "Enter")
      {
        string = eval(string);
        document.querySelector('.input').value = string;
        if(string == "Infinity" || string == "-Infinity")
        {
            document.querySelector('input').value = "Zero Error"; 
        }
      }
    },
  );

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
            if(string == "Infinity" || string == "-Infinity")
            {
                document.querySelector('input').value = "Zero Error"; 
            }
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector('input').value = string;
            decimalCount = 0;
        }
        else if(e.target.innerHTML == "⬅")
        {
            document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
            var arr = new Array(document.querySelector('input').value);
            string = arr.pop();
            if(string.includes(".") == true || string.length == 1)
            {
                decimalCount = 0;
                console.log(decimalCount);
            }
            if(string.includes("+") || string.includes("-") || string.includes("*") || string.includes("/") || string.length == 1)
            {
                opcount = 0;
            }
        }
        else if(e.target.innerHTML == "+/-")
        {
            string = -string;
            document.querySelector('input').value = string;
 
        }
        else if(e.target.innerHTML == ".")
        {
            decimalCount++;
            console.log(decimalCount);
            if(decimalCount > 1)
            {
                    return;
            }
            else
            {
                string = string + ".";
                document.querySelector('input').value = string;
            }
  
        }
        else if(e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "*" || e.target.innerHTML == "/")
        {
            opcount++;
            console.log(opcount);
            if(opcount > 1 )
            {
                return;
            }
            else{
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
            if(string.includes("+") || string.includes("-") || string.includes("*") || string.includes("/"))
            {
                opcount = 0;
                decimalCount = 0;
                console.log(decimalCount);
            }
        }
    })
})