import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

const isAuthed = t.middleware(({ next, ctx }) => {
  // if (!ctx.user) {
  //   throw new TRPCError({ code: 'UNAUTHORIZED' });
  // }
  // return next({
  //   ctx: {
  //     user: ctx.user,
  //   },
  // });

  return next({
    ctx: {},
  });
});

// We explicitly export the methods we use here
// This allows us to create reusable & protected base procedures
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
