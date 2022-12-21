# Study project from [Yandex.Practicum](https://practicum.com/)
Sprint 3
Simple messenger for exchanging messages using web-sockets.
[Ссылка на Swagger](https://ya-praktikum.tech/api/v2/swagger/#/)
[Ссылка на Firma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1&t=Jl07SkgmFGCOEy18-1)
[Ссылка на Netlify](https://63a0784889c20f0a30a4cdf9--rad-pastelito-ee8625.netlify.app)


# Project with imitation own framework based on proxy-objects.
The main goal is to understand the bases of working react without its usage.

* Client router implementation (`core/Route.ts`, `core/BrowseRouter.ts`)
* Added `api` layer
* Added `services` layer
* Central storage implementation (`Store.ts`)
* Used `WebSocket` for chat messages
* Implemented virtual list for chat messages
* The following features are implemented in the application:
   * Registration
   * Login
   * Exit
   * Server error
   * Not found
   * Update profile data
   * Change avatar
   * Create and delete chat
   * Search, add and delete users in chat
   * Sending and receiving text messages

# Using technologies

- Parcel
- Express
- Postcss-nested
- Handlebars
- Typescript

# Using commands

- `npm run build` — create build,
- `npm run start` — create build and start express-server,
