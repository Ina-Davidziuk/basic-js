const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === ''){
    return ''
  }
 let code='';
 str= str.match((/(.)\1*/g) || [])
 for(let i = 0; i<str.length; i++){
   code = code + str[i].length + str[i][0]
 
 }
 return code.replace(/[1]/g,'')
}


module.exports = {
  encodeLine
};
