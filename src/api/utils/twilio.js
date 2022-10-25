const twilio = require("twilio")

/**
 * @param {object} options
 * @param {string} options.accountsid
 * @param {string} options.authtoken
 * @param {string} options.from
 * @param {string} options.to
 * @param {string} options.body
 */
const sendMessage = async options => {
  const client = twilio(options.accountsid, options.authtoken)
  const res = await client.messages.create({ ...options })
  return res
}

module.exports = { sendMessage }
