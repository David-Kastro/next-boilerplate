import { list } from "@server/endpoints/todo/list";
import { create } from "@server/endpoints/todo/create";

export const endpoints = {
  todo: {
    list,
    create,
  },
};
