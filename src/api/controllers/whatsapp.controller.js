const { sendMessage } = require("../utils/twilio")

const httpSendTextMessage = async (req, res, next) => {
  try {
    const { accountsid, authtoken, msg } = req
    const response = await sendMessage({ accountsid, authtoken, ...msg })
    res.status(201).json({ success: true, body: response })
  } catch (error) {
    next(error)
  }
}

const httpSendMediaMessage = async (req, res, next) => {
  try {
    const { accountsid, authtoken, msg } = req
    const response = await sendMessage({ accountsid, authtoken, ...msg })
    res.status(201).json({ success: true, body: response })
  } catch (error) {
    next(error)
  }
}

module.exports = { httpSendTextMessage, httpSendMediaMessage }
