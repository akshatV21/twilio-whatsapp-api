const app = require("./app")

const PORT = process.env.PORT || 8080

const startServer = () => {
  app.listen(PORT, () => console.log(`Listening to requests on port: ${PORT}`))
}

startServer()
