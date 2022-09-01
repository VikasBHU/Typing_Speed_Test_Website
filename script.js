const setOfWords=[
    "Good morning!",
    "How are you?",
    "My name is Vikas Pandey and I am a web developer.",
    "This is a simple game for speed your typing",
    "Please! type this sentences.",
    "What a beautiful day it is on the bank of river Ganga.",
    "A bird in the hand is worth two in the bush.",
    "Just staying one day ahead of yesterday.",
    "All work and no play robs one of some fun in life.",
    "Thank you so much."
   ];
   
   const msg=document.getElementById("msg");
   const typeWords=document.getElementById("mywords");
   const btn=document.getElementById("btn");
   let startTime, endTime;

  const playGame=()=>{
    let randomNumber=Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText="Done";
  }

    const endPlay=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    let totalStr=typeWords.value;
    let wordCount=wordCounder(totalStr);

    let speed=Math.round((wordCount/totalTime)*60);
    let finalMsg=" You typed total at " +speed+ " words per minutes, ";

    finalMsg +=compareWords(msg.innerText,totalStr);
    msg.innerText=finalMsg;
   }

   const compareWords=(str1,str2)=>{
      let words1=str1.split(" ");
      let words2=str2.split(" ");
      let count=0;
      words1.forEach(function(item, index){
        if(item==words2[index]){
            count++;
        }
      })
      let errorWords=(words1.length - count);
      return(" And "+count + " correct out of " + words1.length + 
      " words and the total number of error are " + errorWords+ ".");
   }

   const wordCounder=(str)=>{
       let response=str.split(" ").length;
       return response;
   }

   btn.addEventListener('click', function(){
    if(this.innerText=='Start'){
         typeWords.disabled=false;
         playGame();
        }else if(this.innerText=="Done"){
            typeWords.disabled=true;
            btn.innerText="Start";
            endPlay();
        }

   })

    