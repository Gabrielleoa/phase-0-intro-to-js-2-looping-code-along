const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, surprise) {
    for (let i = 0; i < names.length; i++) {
      names.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return names;
  }
  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
countDown(10);

