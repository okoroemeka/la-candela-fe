import { NavItems } from "@/app/ui/components/Nav/NavItems";
import { PropsWithChildren } from "react";
import { SocialMediaIcons } from "@/app/ui/components/Nav/SocialMediaIcons";

export function DesktopNav() {
  return (
    <nav className="hidden justify-end items-center lg:flex gap-20">
      <ul className="flex gap-5">
        <NavItems />
      </ul>
      <SocialMediaIcons />
    </nav>
  );
}
