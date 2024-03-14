import { PropsWithChildren } from "react";
import { MainSidebar } from "@components/sidebar/main-sidebar";
import { auth } from "@packages/auth";
import AppInitializer from "@/app/_components/app-initializer";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <AppInitializer user={session?.user}>
      <div className="grid grid-cols-[16rem_1fr]">
        <MainSidebar />
        <main>{children}</main>
      </div>
    </AppInitializer>
  );
}
