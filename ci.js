
var r = document.querySelector('#roi');
var t = document.querySelector('#years');
console.log(r);
r.addEventListener('change', () => {
    if (roi.value > 100) {
        alert("Rate of interest should be less than 100");
    }
})

t.addEventListener('change', () => {
    if (years.value > 100) {
        alert("year should be less than 100")
    }
})
var principle = document.getElementById("principle");
var roi = document.getElementById("roi");
var years = document.getElementById("years");
var outputspan = document.getElementById("outputspan");

function countCI() {
    p = parseFloat(principle.value);
    r = parseFloat(roi.value);
    t = parseFloat(years.value);
    if(r<100 && t<100){
        
console.log(CI)
    ci = p * (Math.pow((1 + r / 100), t));
    outputspan.innerHTML = ci;
}
else{
    alert("Wrong Input")
}


