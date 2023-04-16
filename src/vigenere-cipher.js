const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const cipher = ['A','B','C','D','E','F','G','H','I','J','K', 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

class VigenereCipheringMachine {
  constructor(mode = true) {
   this.mode = mode;
 }

 encrypt(message, key) {
  if(!message || !key){
  throw new Error ('Incorrect arguments!')
  }
  let spaceIndex =[];
   for(let j = 0; j< message.length; j++){
     if(message[j] === ' '){
       spaceIndex.push([j])
     }
   }
    message = message.toUpperCase().split(' ').join('');
  key = key.toUpperCase();
   
   //str code
   let result = ''
   let textCode =[];
   let keyCode =[];
  let j=0;
   for(let i =0; i<message.length; i++){
   if(!cipher.includes(message[i])){
     result +=message[i]
     continue;
   }
let letterCode = cipher.indexOf(message[i]);
let keyLetter = cipher.indexOf(key[j%key.length])

result += cipher[(letterCode + keyLetter) % 26]
  j++
  }
  result = result.split('')
  spaceIndex.forEach(function(el){
 result.splice(el,0,' ')
 })
  return this.mode ? result.join('') : result.reverse().join('')
 }
 
 
 decrypt(message, key) {
  if(!message || !key){
  throw new Error ('Incorrect arguments!')
  } 
  let spaceIndex =[];
  for(let j = 0; j< message.length; j++){
  if(message[j] === ' '){
  spaceIndex.push([j])
     }
   }
   
  
   message = message.toUpperCase().split(' ').join('');
   key = key.toUpperCase();
   
   let result = ''
   let textCode =[];
   let keyCode =[];
  let j=0;
   for(let i =0; i<message.length; i++){
   if(!cipher.includes(message[i])){
      result +=message[i]
     continue
   }
   { 
let letterCode = cipher.indexOf(message[i]);
let keyLetter = cipher.indexOf(key[j%key.length])
let index = (letterCode - keyLetter) % 26
 if(index < 0){
   index = index +26
 }
 result += cipher[index]
  j++
  }
  
   }
  result = result.split('')
  spaceIndex.forEach(function(el){
 result.splice(el,0,' ')
 })
  return this.mode ? result.join('') : result.reverse().join('')
 }

}
const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

module.exports = {
  VigenereCipheringMachine
};
