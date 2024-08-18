"use client";

import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Cross2Icon, RowsIcon } from "@radix-ui/react-icons";
import { NavItems } from "@/app/ui/components/Nav/NavItems";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="lg:hidden flex">
      <MenuToggleButtons isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      {isOpen && <MobileNavItems />}
    </div>
  );
}

export function MobileNavItems() {
  return (
    <nav className="w-screen min-h-20 p-3.5 bg-primary-light absolute top-20 left-0 ">
      <ul className="flex flex-col justify-center gap-5">
        <NavItems />
      </ul>
    </nav>
  );
}

type MenuToggleButtonProps = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

function MenuToggleButtons({ isOpen, toggleIsOpen }: MenuToggleButtonProps) {
  return (
    <ToggleGroup.Root
      className="ToggleGroup ml-auto flex"
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="center"
        aria-label="Center aligned"
        onClick={toggleIsOpen}
      >
        {!isOpen ? (
          <RowsIcon width={20} height={20} />
        ) : (
          <Cross2Icon width={20} height={20} />
        )}
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
