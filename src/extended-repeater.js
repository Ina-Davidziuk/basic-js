const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(typeof str !== 'string'){
  str = String(str)
  }
  
 let repeatTimesParametr = options.repeatTimes || 1;
let  separatorParametr;
if('separator' in options){
separatorParametr = String(options.separator) } else{separatorParametr ='+'};

let  additionParametr;
if('addition' in options){
additionParametr = String(options.addition) }else{additionParametr =''}; 
let  additionRepeatTimesParametr = String(options.additionRepeatTimes) ;
if(!options.additionRepeatTimes) {
  additionRepeatTimesParametr = 1
} 
let   additionSeparatorParametr;
if('additionSeparator' in options){ additionSeparatorParametr = String(options. additionSeparator)}
  else{additionSeparatorParametr ='|'}


let result = ''

for (let i = 0; i < repeatTimesParametr; i++){
  result +=str
  for (let j = 0; j< additionRepeatTimesParametr; j++) {
    result += additionParametr
  if( j < additionRepeatTimesParametr -1 ){
    result += additionSeparatorParametr
  }
  }
 if(i < repeatTimesParametr -1) {
   result +=separatorParametr
 }
}
  return result
}

module.exports = {
  repeater
};
