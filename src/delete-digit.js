const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString()
  let res = []
for(let i = 0; i<n.length; i++){
  let variants = n.replace(n[i],'')
  res.push(variants)
}
  let result = res.sort()
  
  return Number(result[result.length-1])
}


module.exports = {
  deleteDigit
};
