import { db } from "./db";
import * as jsonServer from "json-server";

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(db);
const port = 3001;

server.use(function (req, res, next) {
  setTimeout(next, 500);
});

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
