"use client";

import { Container } from "@/app/_components/container";
import { Button } from "@/app/_components/ui/button";
import { useAuthStore } from "@/app/_stores/auth-store";
import { signOut } from "next-auth/react";

export function DashboardTemplate() {
  const user = useAuthStore((state) => state.authUser);

  const handleSingout = () => {
    signOut();
  };

  return (
    <Container fill center>
      <h1>Welcome {user?.email}!</h1>
      <h2>Be ready for the new technology</h2>
      <h2>SIG - Sequenced Interaction Generation</h2>
      <Button onClick={handleSingout}>Sair</Button>
    </Container>
  );
}
