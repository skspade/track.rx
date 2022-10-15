import * as express from 'express';
import { appRouter, createContext } from '@track.rx/trpc';
import * as trpcExpress from '@trpc/server/adapters/express';
import * as cors from 'cors';

// express implementation
const app = express();
const port = process.env.port || 3333;

app.use((req, _res, next) => {
  // request logger
  console.log('⬅️ ', req.method, req.path, req.body ?? req.query);

  next();
});

app.use(cors());
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
