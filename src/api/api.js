const { Router } = require("express")
const whatsappRouter = require("./routes/whatsapp.router")

const api = Router()

api.use("/whatsapp", whatsappRouter)

module.exports = api
