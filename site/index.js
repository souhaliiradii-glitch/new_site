const n1 = document.getElementById("1");
const n2 = document.getElementById("2");
const n3 = document.getElementById("3");
const n4 = document.getElementById("4");
const n5 = document.getElementById("5");
const n6 = document.getElementById("6");
const n7 = document.getElementById("7");
const n8 = document.getElementById("8");
const n9 = document.getElementById("9");
const n0 = document.getElementById("0");
const AC = document.getElementById("AC");
const point = document.getElementById("point");
const dev = document.getElementById("dive");
const mul = document.getElementById("mul");
const egal = document.getElementById("egal");
const plus = document.getElementById("plus");
const moin = document.getElementById("moin");
const mode = document.getElementById("mode");
var ecron = document.querySelector(".ecron");
n1.addEventListener("click",()=>{
    ecron.textContent += n1.innerHTML;
}
)
n0.addEventListener("click",()=>{
    ecron.textContent += n0.innerHTML;
}
)
n2.addEventListener("click",()=>{
    ecron.textContent += n2.innerHTML;
}
)
n3.addEventListener("click",()=>{
    ecron.textContent += n3.innerHTML;
}
)
n4.addEventListener("click",()=>{
    ecron.textContent += n4.innerHTML;
}
)
n5.addEventListener("click",()=>{
    ecron.textContent += n5.innerHTML;
}
)
n6.addEventListener("click",()=>{
    ecron.textContent += n6.innerHTML;
}
)
n7.addEventListener("click",()=>{
    ecron.textContent += n7.innerHTML;
}
)
n8.addEventListener("click",()=>{
    ecron.textContent += n8.innerHTML;
}
)
n9.addEventListener("click",()=>{
    ecron.textContent += n9.innerHTML;
}
)
point.addEventListener("click",()=>{
    ecron.textContent += point.innerHTML;
}
)
dev.addEventListener("click",()=>{
    ecron.textContent += dev.innerHTML;
}
)
mul.addEventListener("click",()=>{
    ecron.textContent += mul.innerHTML;
}
)
plus.addEventListener("click",()=>{
    ecron.textContent += plus .innerHTML;
}
)
moin.addEventListener("click",()=>{
    ecron.textContent += moin.innerHTML;
}
)
mode.addEventListener("click",()=>{
    ecron.textContent += mode.innerHTML;
}
)
AC.addEventListener("click",()=>{
    ecron.textContent = "";
}
)
egal.addEventListener("click", () => {
    try {
        let expression = ecron.textContent;
        let result = eval(expression);
        if (Math.abs(result) > 1e12) {
            ecron.textContent = "Erreur";
        } else {
            ecron.textContent = result;
        }
        
    } catch (e) {
        ecron.textContent = "Erreur";
    }
});

