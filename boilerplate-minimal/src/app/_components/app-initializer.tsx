"use client";

import { useAuthStore } from "@stores/auth-store";
import { Session } from "next-auth";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  user: Session["user"];
}

export default function AppInitializer({ user, children }: Props) {
  const setAuthUser = useAuthStore((state) => state.setAuthUser);
  setAuthUser(user);

  return children;
}
