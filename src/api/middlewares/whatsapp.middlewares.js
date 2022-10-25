const HttpException = require("../../error/exceptions")

const validateTwilioCredentials = (req, res, next) => {
  const { accountsid, authtoken } = req.headers
  if (!accountsid) throw new HttpException("Please provide accountSid", 400)
  if (!authtoken) throw new HttpException("Please provide auth token", 400)

  req.accountsid = accountsid
  req.authtoken = authtoken
  next()
}

const validateTextPostRequest = (req, res, next) => {
  const { body, from, to } = req.body
  if (!body) throw new HttpException("Please provide text message", 400)
  if (!from) throw new HttpException("Please provide 'from'", 400)
  if (!to) throw new HttpException("Please provide 'to'", 400)

  req.msg = { body, from, to }
  next()
}

const validateMediaPostRequest = (req, res, next) => {
  const { mediaUrl, from, to, body } = req.body
  if (!mediaUrl) throw new HttpException("Please provide media url", 400)
  if (!from) throw new HttpException("Please provide 'from'", 400)
  if (!to) throw new HttpException("Please provide 'to'", 400)

  req.msg = { body, from, to, mediaUrl }
  next()
}

module.exports = { validateTwilioCredentials, validateTextPostRequest, validateMediaPostRequest }
