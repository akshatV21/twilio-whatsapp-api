const { Router } = require("express")
const { validateTwilioCredentials, validateTextPostRequest, validateMediaPostRequest } = require("../middlewares/whatsapp.middlewares")
const { httpSendTextMessage, httpSendMediaMessage } = require("../controllers/whatsapp.controller")

const router = Router()

router.post("/text_message", validateTwilioCredentials, validateTextPostRequest, httpSendTextMessage)
router.post("/media_message", validateTwilioCredentials, validateMediaPostRequest, httpSendMediaMessage)

module.exports = router
