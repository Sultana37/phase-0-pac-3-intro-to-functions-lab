
const string = "Hello";
function shout(string) {
    return string.toUpperCase();
}
shout("Hello").log;

function whisper(string) {
    return string.toLowerCase();
}
whisper("Hello");

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
   console.log(string.toLowerCase());
}


function sayHiToGrandma(string){
  if(string.toLowerCase()=== string){
      return "I can't hear you!";
    }
    if(string.toUpperCase()=== string){
        return "YES INDEED!";
      }
      if(string ==="I love you, Grandma."){
        return "I love you, too.";
      }  
     
}
sayHiToGrandma();