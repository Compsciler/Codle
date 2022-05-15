# Codle

This is an programming-based Wordle variant where the answer is a special character-heavy code snippet. Made using React, Typescript, Tailwind, Node.js, Express, and Mongoose.

[**Daily game link**](https://codle.herokuapp.com/)

Demo game links: 
- [Demo game 0](https://codle.herokuapp.com/examples/0)
- [Demo game 1](https://codle.herokuapp.com/examples/1)

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd codle
$> npm install
$> npm run start
```

### To build/run docker container:

#### Development

```bash
$> docker build -t codle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name codle-dev codle:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t codle:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name codle-prod codle:prod
```

Open [http://localhost](http://localhost) in browser.
