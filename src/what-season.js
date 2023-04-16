const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!'
  }
  if(! (date instanceof Date)){
    throw new Error ('Invalid date!')
  }
  
  for (let key in date) {
    if (!key == 'toString'){
        throw new Error ('Invalid date!')
    }
  }
  try {
    date.getTime();
  } catch (error) {
    throw new Error ('Invalid date!');
  }
  
  const monthOfDate = date.getMonth();
  let result = '';
  if(monthOfDate <=1 || monthOfDate == 11 ){
    result = 'winter'
  }
  if (monthOfDate <=4 && monthOfDate >= 2 ) {
    result = 'spring'
  }
  if (monthOfDate <=7 && monthOfDate >= 5 ) {
    result = 'summer'
  }
  if (monthOfDate <=10 && monthOfDate >= 8 ) {
    result = 'autumn'
  }
  return result
  }

module.exports = {
  getSeason
};
