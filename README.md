<h1 align="center">Welcome to twilio-whatspp-api-wrapper 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> A twilio wrapper api for whatsapp.

## Install

```sh
npm i
```

## Usage

```sh
npm run start:dev
```

## API Routes

> The request headers for all routes should contain account SID and auth token.

```sh
request: {
  headers: {
    accoundsid: 'xxx-accountsid-xxx',
    authtoken: 'xxx-authtoken-xxx'
  }
}
```

### Sending text messages

> The request body should contain the following: from, to and body

```sh
request: {
  body: {
    from: 'whatsapp:xxx-senders-number-xxx',
    to: 'whatsapp:xxx-recievers-number-xxx',
    body: 'xxx-your-message-xxx'
  }
}
```

### Sending media messages

> The request body should contain the following: from, to, body[optional] and mediaUrl

```sh
request: {
  body: {
    from: 'whatsapp:xxx-senders-number-xxx',
    to: 'whatsapp:xxx-recievers-number-xxx',
    body: 'xxx-your-optional-message-xxx',
    mediaUrl: 'xxx-media-url-xxx'
  }
}
```

## Author

👤 **Akshat Vishwakarma**

- Github: [@akshatV21](https://github.com/akshatV21)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
