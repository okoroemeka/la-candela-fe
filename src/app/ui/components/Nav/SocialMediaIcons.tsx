import Link from "next/link";
import { PropsWithChildren } from "react";

export function SocialMediaIcons() {
  return (
    <div className="flex gap-2">
      <IconContainer>
        <Link href="#" className="facebook" />
      </IconContainer>
      <IconContainer>
        <Link href="#" className="instagram" />
      </IconContainer>
      <IconContainer>
        <Link href="#" className="twitter" />
      </IconContainer>
    </div>
  );
}

function IconContainer({ children }: PropsWithChildren) {
  return <div className="w-6 h-6 bg-primary-social">{children}</div>;
}
