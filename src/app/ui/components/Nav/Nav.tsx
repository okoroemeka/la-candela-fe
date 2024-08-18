import { MobileNav } from "@/app/ui/components/Nav/MobileNav";
import { NavBrand } from "@/app/ui/components/Nav/NavBrand";
import { DesktopNav } from "@/app/ui/components/Nav/DestopNav";

export function Nav() {
  return (
    <div className="grid grid-cols-[2fr_1fr] lg:grid-cols-[1fr_3fr] grid-rows-1 px-5 pt-5 pb-2.5 relative">
      <NavBrand />
      <MobileNav />
      <DesktopNav />
    </div>
  );
}
