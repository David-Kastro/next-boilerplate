import { router, createCallerFactory } from "./trpc";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { endpoints } from "./endpoints";

export const appRouter = router(endpoints);

export type AppRouter = typeof appRouter;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
export const createCaller = createCallerFactory(appRouter);
