let setValue; 
let setClickValue; 
let clickValue = []; 
let setView; 
let setResult = 0; 

$('#display').text(setResult);

//keep the value when the button is cliked
function calculation(value){
  clickValue.push(setClickValue)
  setView = clickValue.join("");
  $('#display').text(setView);
}

//clear the value when the button is clicked
function clearResult(){
    clickValue.length = 0;
    setView = 0;
    setResult = 0;
    $('#display').text(setResult);
}

//start the eventlistner when button is clicked
setValue = document.querySelectorAll(".button");

  for (let i = 0; i < setValue.length; i++) {
    setValue[i].addEventListener("click", function() {
    setClickValue = this.value;

//when the clickValue array is length 0
    if(clickValue.length == 0){
      
      if (setClickValue == "AC"){
        clearResult();

      }else if(/^[0-9]$/.test(setClickValue)){
        calculation(setClickValue);
        console.log(clickValue);
        console.log(setView);

      }else{
        return;      
      }

//when the clickValue array is over length 1 
    }else if(clickValue.length >= 1){

      if (setClickValue == "AC"){
      clearResult();

      }else if(/^[1-9]$/.test(setClickValue) && /^(?!0$).+/.test(setView) ){
        calculation(setClickValue);
      
      }else if(setClickValue == "0" && /^[1-9]/.test(setView)){
        calculation(setClickValue);
      
      }else if(setClickValue == "0" && /^0.+$/.test(setView)){
        calculation(setClickValue);

      }else if(setClickValue == "00" && /^[0-9]+$/.test(setView)){
        calculation(setClickValue);
      
      }else if(setClickValue == "00" && /^[0-9]*[^\+\ \-\ \*\ \/\ ]$/.test(setView)){
        calculation(setClickValue);
      
      }else if(setClickValue == "="){
        setResult = math.evaluate(setView);
        clickValue.length = 0;
        clickValue.push(setResult);
        $('#display').text(setResult);
    
      }else if(setClickValue == "+" && /[0-9]$/.test(setView)){
        calculation(setClickValue);

      }else if(setClickValue == "-" && /[0-9]$/.test(setView)){
        calculation(setClickValue);

      }else if(setClickValue == "*" && /[0-9]$/.test(setView)){
        calculation(setClickValue);
      
      }else if(setClickValue == "/" && /[0-9]$/.test(setView)){
        calculation(setClickValue);
    
      }else if(setClickValue == "." && /^(?!.*[0-9]\.[0-9]*$).*/.test(setView) && /[0-9]$/.test(setView)){
        calculation(setClickValue);
      }
  }});
}
