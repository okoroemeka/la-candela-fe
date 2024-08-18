import Image from "next/image";
import brandImage from "@/assets/images/img_1.png";

export function NavBrand() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={brandImage}
        alt={"logo"}
        width={22}
        height={22}
        className="w-30 h-30"
      />
      <h1 className="self-center text-2xl whitespace-nowrap font-extrabold">
        La Candela
      </h1>
    </div>
  );
}
