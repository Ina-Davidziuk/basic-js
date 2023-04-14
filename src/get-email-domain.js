const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if(email.indexOf('@') === email.lastIndexOf('@') ){
    return email.slice(1+email.indexOf("@"))
}
  return email.slice(1+email.lastIndexOf("@"))
}

module.exports = {
  getEmailDomain
};
