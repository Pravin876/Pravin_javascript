let containerDiv=document.querySelector(".container");
let btn=document.querySelector("#myBtn");

//with addEventListener 
btn.addEventListener("click",()=>{
    console.log(containerDiv)
    containerDiv.classList.toggle("hidden");
})

//with function calling directly
const changeColor= (value) =>{
  if (value ==="add"){
    containerDiv.classList.add("red");   //directly classlist added
  }else if(value==="remove"){
    containerDiv.classList.remove("red");  
} else if(value === "toggle"){
    containerDiv.classList.toggle("hidden");
}
};