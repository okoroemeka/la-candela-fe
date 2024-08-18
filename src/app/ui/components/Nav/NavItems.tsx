import Link from "next/link";

export function NavItems() {
  return (
    <>
      <NavItem title="Home" href="/salsa/home" />
      <NavItem title="Classes" href="/salsa/classes" />
      <NavItem title="About us" href="/salsa/about" />
      <NavItem title="Contact" href="/salsa/contact-us" />
    </>
  );
}

type NavItemWrapperProps = {
  title: string;
  href: string;
};

function NavItem({ title, href }: NavItemWrapperProps) {
  return (
    <li className="text-primary-default lg:text-primary-dark">
      <Link href={href}>{title}</Link>
    </li>
  );
}
