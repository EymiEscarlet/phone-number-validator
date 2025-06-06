const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkBtn.addEventListener("click", ()=>{
  const userInput = document.getElementById("user-input");
  if(!userInput.value){
    alert("Please provide a phone number");
  }else{
    const valid = isValid(userInput.value);
     results.innerText +=`${valid} \n`;
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", ()=>{
  results.innerText="";
});

const isValid = (input)=>{
  const regex = /^1?\s?(?:\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/g;
  return regex.test(input) ? `Valid US number: ${input}` : `Invalid US number: ${input}`;
}
