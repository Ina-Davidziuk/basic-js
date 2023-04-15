const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!')};
  let newArr = Array.from(arr)
  if (newArr.length === 0){
    return []
  }
  if ((newArr.indexOf('--discard-prev')-newArr.indexOf('--discard-next') === 2) ||(newArr.indexOf('--double-prev')-newArr.indexOf ('--discard-next') === 2))
      {
newArr.splice(newArr.indexOf('--discard-next') + 2,1)
      }
for(let i = 0; i<newArr.length; i++){
  switch(newArr[i]){
    case '--double-next':
      if(newArr[newArr.length - 1] === '--double-next'){
        newArr.splice(i,1)
        break;
      }
    newArr.splice(i,1,newArr[i+1])
    break;
    
    case '--double-prev':
      if(newArr[0] === '--double-prev'){
        newArr.splice(0,1)
        break;
      }
    newArr.splice(i,1,newArr[i-1])
    break;
      
    case '--discard-prev':
        if(newArr[0] === '--discard-prev'){
          newArr.splice(0,1)
          break;
        }
    newArr.splice(i - 1,2)
    break;
    

    case '--discard-next':
    newArr.splice(i, 2)
    break;
  }
}
return newArr
}

module.exports = {
  transform
};
