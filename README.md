<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

To add it to this project, run this and approve the code it prints at [observe.nestjs.com/link](https://observe.nestjs.com/link) - signing up for free if you have no account:

```bash
$ npx @nestjs/observe link
```

It installs `@nestjs/observe`, wires it into `AppModule` and `main.ts`, and writes the app key and secret into `.env`, which every `nest start` script (`start`, `start:dev`, `start:debug`) then loads. In production, set `OBSERVE_APP_KEY` and `OBSERVE_APP_SECRET` in the environment instead.

Or do it by hand:

```bash
$ npm install @nestjs/observe
```

Then follow the [setup guide](https://docs.nestjs.com/observability/sdk) - it takes a single import and an app key.

The free plan needs no payment details and covers 300,000 events a month. You can also browse the [live demo](https://www.observe-demo.nestjs.com/dashboard) first - the whole dashboard over a busy service's data, with nothing to install.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observe](https://observe.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Schema Decisions

### Why Book references Genre via Foreign Key instead of Embedding

In this schema, the `Book` model references the `Genre` model using a `genreId` foreign key (`@relation`), rather than embedding the genre data directly inside the `Book` model. This is because PostgreSQL is a **relational database**.

By using a foreign key, we ensure **data normalization**. If we ever need to rename a genre (e.g., changing "Sci-Fi" to "Science Fiction"), we only have to update it in one place (the `Genre` table). If we embedded the genre name directly into every book, we would have to update hundreds of rows, risking data inconsistency and wasting storage space.

### Prisma vs. Document Database Modeling (Stretch Goal)

Modeling in Prisma (which targets relational databases like PostgreSQL) feels different from modeling in a document database (like MongoDB). In a document database, you might "embed" the genre directly inside the book document to make read operations faster, accepting some data duplication. With Prisma/PostgreSQL, the focus is on strict relationships, data integrity, and avoiding duplication through foreign keys and joins. Prisma's type-safe client makes navigating these relationships (`book.genre.name`) feel just as easy as accessing embedded data, giving us the best of both worlds.

---

## Week 2: Authentication & Security

This project implements a secure, role-based authentication system using JWT (JSON Web Tokens) and bcrypt password hashing.

### Security Features

- **Password Hashing**: All user passwords are hashed using `bcrypt` before being saved to the database. Plain-text passwords are never stored.
- **JWT Authentication**: Upon successful login, the server issues a signed JWT. Clients must include this token in the `Authorization: Bearer <token>` header for protected routes.
- **Role-Based Access Control (RBAC)**: Custom `@Roles('LIBRARIAN')` decorators and a `RolesGuard` ensure that sensitive operations (creating, updating, or deleting books/genres) can only be performed by users with the `LIBRARIAN` role. Patrons are automatically rejected with a `403 Forbidden` error.
- **Rate Limiting (Stretch Goal)**: The `/auth/login` and `/auth/register` endpoints are protected by `@nestjs/throttler` to prevent brute-force attacks (limited to 2 requests per 60 seconds).
- **Global Validation**: A global `ValidationPipe` with `whitelist: true` ensures that any undeclared or malicious fields in request bodies are automatically stripped out.

### API Endpoints Overview

_(A full Postman collection is available in `docs/postman_collection.json`)_

| Method   | Endpoint         | Description                                                       | Auth Required | Role Required |
| -------- | ---------------- | ----------------------------------------------------------------- | ------------- | ------------- |
| `POST`   | `/auth/register` | Create a new user account                                         | No            | None          |
| `POST`   | `/auth/login`    | Authenticate and receive a JWT                                    | No            | None          |
| `GET`    | `/users/profile` | Get the authenticated user's profile                              | Yes (JWT)     | Any           |
| `GET`    | `/books`         | Get all books (supports `?search`, `?genreId`, `?page`, `?limit`) | No            | None          |
| `POST`   | `/books`         | Create a new book                                                 | Yes (JWT)     | `LIBRARIAN`   |
| `PATCH`  | `/books/:id`     | Update an existing book                                           | Yes (JWT)     | `LIBRARIAN`   |
| `DELETE` | `/books/:id`     | Delete a book                                                     | Yes (JWT)     | `LIBRARIAN`   |
| `GET`    | `/genres`        | Get all genres                                                    | No            | None          |
| `POST`   | `/genres`        | Create a new genre                                                | Yes (JWT)     | `LIBRARIAN`   |

### Environment Variables

Ensure your `.env` file contains the following:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public&pgbouncer=true"
JWT_SECRET="your-super-secret-jwt-key-here"
```

---

## Week 3: React Frontend & Catalog UI

This week, we built a responsive, interactive frontend using React and Vite to consume the NestJS API. The UI is styled with Tailwind CSS and features a seamless, single-page application experience.

### Frontend Features

- **Responsive Book Grid**: Displays books in a clean, responsive grid using a reusable `BookCard` component.
- **Dynamic Routing**: Clicking a book navigates to a dedicated detail page (`/books/:id`) using `react-router-dom` without full page reloads.
- **Debounced Live Search**: A custom `SearchBar` component uses `useEffect` cleanup to delay API calls until the user stops typing (400ms), preventing server spam.
- **Genre Filtering & Sorting**: Users can filter books by genre or sort them alphabetically by title/author.
- **Skeleton Loading UI (Stretch Goal)**: Instead of a plain text spinner, the app displays animated skeleton placeholders while data is fetching.
- **Robust State Handling**: Gracefully handles loading, error, and empty (no results found) states.

### React Architecture

- **Lifting State Up**: The `HomePage` component acts as the source of truth for `searchQuery`, `genreFilter`, and `sortBy`, passing them down as props to the `BookGrid`.
- **Environment Variables**: The backend URL is securely managed via `VITE_API_URL` in the client `.env` file.
- **Component Composition**: The app is broken down into small, focused components (`SearchBar`, `BookGrid`, `BookCard`, `BookDetail`) for maintainability.

### Client Environment Variables

Ensure your `client/.env` file contains:

```env
VITE_API_URL=http://localhost:3000
```
