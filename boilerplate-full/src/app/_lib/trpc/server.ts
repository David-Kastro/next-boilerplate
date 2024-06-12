import { httpBatchLink } from "@trpc/client";

import { createCaller } from "@/server";

export const serverApi = createCaller({
  links: [
    httpBatchLink({
      url: "/api",
      //   headers() {
      //     if (!ctx?.req?.headers) {
      //       return {};
      //     }
      //     return {
      //       cookie: ctx.req.headers.cookie,
      //     };
      //   },
    }),
  ],
});
