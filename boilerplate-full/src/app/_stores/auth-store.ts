import { Session } from "next-auth";
import { create } from "zustand";

export type AuthStoreState = {
  authUser: Session["user"];
};

export interface AuthStore extends AuthStoreState {
  setAuthUser: (user?: Session["user"]) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  authUser: undefined,

  setAuthUser: (user) => {
    return set({
      authUser: user,
    });
  },
}));
