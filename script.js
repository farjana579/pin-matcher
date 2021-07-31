document.getElementById('generate-btn').addEventListener('click',function(){
    const randomPin = generateRandomNumber();
    document.getElementById('pin-display').value = randomPin;
})

const buttons =  document.querySelectorAll("#button");
for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click',function(event){
        const currentClickValue = event.target.innerText;
        if(currentClickValue == "C")
        {
            clearScreen();
        }
        else if(currentClickValue == "<")
        {
            backSpace();
        }
        else{
            display(currentClickValue);
        }
     })
    
}
//capture submit btn and add event
document.getElementById('submit-btn').addEventListener('click',function(){
    comparisonBothDisplay();
    // const actionNumber =actionCount();
    // if(actionNumber==0){
    //     document.getElementById('submit-btn').style.visibility = "hidden" 
    // }
})
//create random number
function generateRandomNumber(){
    const randomPin =  Math.floor(1000 + Math.random() * 9000);
    return randomPin;
}
//capture click value
function display(currentClickValue){
    document.getElementById('display').value += currentClickValue;
}
// clear the whole display
function clearScreen(){
        document.getElementById('display').value  = "";
 }
//clear one by one
function backSpace(){
    const displayValue = document.getElementById('display').value;
    document.getElementById('display').value  = displayValue.slice(0,displayValue.length-1);
}
function comparisonBothDisplay(){
    const randomDisplay=document.getElementById('pin-display').value;
    const displayValue = document.getElementById('display').value;
    if(randomDisplay != displayValue ){
        document.getElementById('not-match-id').style.display ="inline-block";
        actionCount(); 
          }
     else{
        document.getElementById('match-id').style.display ="inline-block";
     }
}
function actionCount(){
    const actionLeft = document.getElementById("action-left").innerText;
    const actionNumber = parseInt(actionLeft);
    if(actionNumber>0){
        document.getElementById("action-left").innerText=actionNumber-1;

     }
    //  return actionNumber;
    if(actionNumber==0){
                document.getElementById('submit-btn').style.visibility = "hidden" 

    }
}