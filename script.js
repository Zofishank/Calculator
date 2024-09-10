

const buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.value;
        if(val === "C"){
            display.value = "";
        }else if(val === "DL"){
            display.value = display.value.slice(0,-1);
        }else if(val === "="){
            try {
                const result = eval(display.value); 
                display.style.color = "#f89808"
                display.value = result;
            } catch(e) {
                display.style.color = "red"
                display.value = "Error";
            }
        }else {
            display.value += val;
        } 
    });
});
