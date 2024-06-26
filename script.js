const apiurl ="https://api.quotable.io/random";
const apiText = document.querySelector(".apiText");
const textInput =document.querySelector(".textInput");
const timer = document.querySelector(".timer");
let correct=true;



textInput.addEventListener('input',()=>{
    const arrayQuote =apiText.querySelectorAll('span');
    const arrayValue = textInput.value.split('');

    arrayQuote.forEach((characterSpan,index)=>{
        const character=arrayValue[index];
        if(character==null){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
            correct=false;
        }
        else if(character===characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');

        }else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct=false;

        }

    })
      if(correct){ 
       return getnextQuote()};
      

})





function getRandomquote(){
  return  fetch(apiurl)
  .then(response=>response.json())
  .then(data=>data.content);
}

async function getnextQuote(){
      textInput.innerHTML=null;
      const quote = await getRandomquote();
      apiText.textContent='';
      quote.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerHTML=character;
        apiText.appendChild(characterSpan);
         });
        
        


    startTimer();
    textInput.value = '';
}
let startTime;
function startTimer(){
    timer.innerHTML=0;
    startTime=new Date();
    setInterval(()=>{
        timer.innerHTML=getTimerTime();

    },1000)
}
function getTimerTime(){
    return Math.floor((new Date()-startTime)/1000)
}


getnextQuote();

