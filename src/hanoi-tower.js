const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  
  let result = {};
  const minNumberOfMovies = Math.pow(2, disksNumber);
  let  count = Math.floor(((minNumberOfMovies -1)*3600/turnsSpeed))
  result.turns = minNumberOfMovies -1;
  result.seconds = count;
  return result
  }

module.exports = {
  calculateHanoi
};
