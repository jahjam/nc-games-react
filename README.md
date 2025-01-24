# ReRoll | Board Game Reviews

Try ReRoll 👉 [HERE](nc-games-react.onrender.com)

**What is ReRoll?**

ReRoll is a full-stack web application built over a 2 week period whilst on Northcoders Software Development Bootcamp.
It uses Typescript on the frontend and Node.js with Express on the backend. In hindsight, I should have used Typescript
on the backend also. On the backend, I implemented unit/integration testing using Jest and Supertest, this helped greatly
reduce bugs and also made my code much more readable when jumping back to it whilst working on the frontend. On the backend
I also used PostgreSQL for my relational data. This made sense as the data in the app (reviews, comments, and users) were
all closely related and benefited from using such a database, opposed to a non-relational database such as MongoDB, although
admittedly, the implementation of such data within either type of database wouldn't have differed too much given the basic dataset.

This frontend was built using React & Typescript and connects to a [REST API](https://github.com/dreamingOfSoy/nc-games-api) built using NodeJS and Express.
