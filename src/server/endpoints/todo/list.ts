import { publicProcedure } from "@server/trpc";

export const list = publicProcedure.query(async () => {
  return "Funcionando...";
});
