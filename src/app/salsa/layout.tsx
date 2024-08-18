import React from "react";
import { Nav } from "@/app/ui/components/Nav";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default Layout;
