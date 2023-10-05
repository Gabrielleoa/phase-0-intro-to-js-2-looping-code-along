 let i = 0
let names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, eventName) {
    for (i=0; i <= names.length; i++) {
      let eventName = 'surprise'
      console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return writeCards(names, eventName);
  
  }
 
  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
countDown(10);



