const inputElement = document.querySelector('.input');
const bodyElment = document.querySelector('body');
// console.log(inputElement.checked);
// inputElement.checked = false;
// Get Local Data
inputElement.checked = JSON.parse(localStorage.getItem('mode'));
updateToggle();
function updateToggle (){
if(inputElement.checked){
    bodyElment.style.backgroundColor = "black";
}else{
    bodyElment.style.backgroundColor = "white";
}
}
// this is for toggles when we change the toggle state   of the input element
inputElement.addEventListener("input" , ()=>{
    updateToggle();
    updateToggelLS();
})
// Localstorages work
function updateToggelLS(){
    localStorage.setItem('mode', JSON.stringify(inputElement.checked));
}