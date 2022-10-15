import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { publicProcedure, router } from './trpc';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const getUser = () => {
    if (req.headers.authorization !== 'secret') {
      return null;
    }
    return {
      name: 'alex',
    };
  };

  return {
    req,
    res,
    user: getUser(),
  };
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

export function createRouter() {
  return trpc.router<Context>();
}

export const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
});

// Export only the **type** of a router to avoid importing server code on the client
export type AppRouter = typeof appRouter;
