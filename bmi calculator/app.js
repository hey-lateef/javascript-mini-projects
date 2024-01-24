const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
e.preventDefault()
const height = parseInt(document.querySelector("#height").value);
const weight = parseInt (document.querySelector("#weight").value);
const results = document.querySelector("#results");
const msg = document.querySelector("#msg");
if(height === '' || height < 0 || isNaN(height)){
results.innerHTML = "please Give a vaild height"
}
else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "please Give a vaild weight"
    }
    else {
       const bmi = ( weight / ((height*height)/10000).toFixed(2))
       //show the result
       results.innerHTML = `<span>${bmi}<span/><br></br> `;

       if (parseFloat(bmi) < 18.6) {
        msg.innerText = "Underweight";
    } else if (parseFloat(bmi) >= 18.6 && parseFloat(bmi) <= 24.9) {
        msg.innerText = "Normal Range";
    } else {
        msg.innerText = "Overweight";
    }



    }
   
   
});