
/*
Makecounter
function makeCounter() {
    let count = 0;
    
    function counter(){
        return count ++;
    }

    counter.set= function(value){
        return count = value;
    }

    counter.decrease = function(){
        return count-=1;
    }
    
    return counter
  }
let x= makeCounter()
console.log(x())
console.log(x())
console.log(x.set(14))
console.log(x.decrease())
*/

/*
Printnumber

function PrintNumbers(from,to){
    let starting = from
    let timeid = setInterval(()=>{
        console.log(starting)
        if (starting == to){
            clearInterval(timeid)
        }
        starting +=1;
    },1000)
}
PrintNumbers(1,10)*/

/*
Searching algorithm
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

let head = {
    glasses: 1
  };
  
let table = {
pen: 3
};

let bed = {
sheet: 1,
pillow: 2
};

let pockets = {
money: 2000
};
pockets.__proto__ = bed;  
bed.__proto__ = table;  
table.__proto__ = head;  
console.log(pockets.pillow)
console.log(bed.glasses)
*/


/*
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
class ExtendedClock extends Clock{
    constructor(options){
        super(options);
        console.log(options)
        let {precision = 1} = options;
        this.precision = precision;
        console.log(this.precision)
        console.log(options)
    }
    start(){
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let lowResolutionClock = new ExtendedClock({template: 'h:m:s',precision: 1000})
lowResolutionClock.start()
*/

/*
Partial application for login
*/

/*
function askPassword(ok, fail) {
  const prompt = require('prompt-sync')();
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(function ok(){return user.login(true)},function fail(){return user.login(false)}); */


/*
Add string to dictionary

let dictionary = Object.create(null,{
  toString: {
value() { 
      return Object.keys(this).join();
    }
  }
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here
// only apple and __proto__ are in the loop
for(let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}
// your toString in action
console.log(dictionary.toString()); // "apple,__proto__"
*/

/*
Inherit from SyntaxError

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("formatting error");
console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack
console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true (because inherits from SyntaxError)*/

/*Rewrite using async/await
import alert from "alert";
import fetch from "node-fetch";

 async function loadJson(url) {
  const response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
}
loadJson('https://pokeapi.co/api/v2/pokemon?limit=50').then(function(result){console.log(result)})
*/
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));