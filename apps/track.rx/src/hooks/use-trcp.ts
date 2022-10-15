import { createTRPCReact } from '@trpc/react';
import { AppRouter } from '@track.rx/trpc';

export const trpc = createTRPCReact<AppRouter>();
