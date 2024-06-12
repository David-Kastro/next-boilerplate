import { z } from "zod";

import { publicProcedure } from "@server/trpc";

export const create = publicProcedure
  .input(
    z.object({
      title: z.number(),
    })
  )
  .mutation(async (opts) => {
    const { title } = opts.input;
    return `${title} adicionado`;
  });
