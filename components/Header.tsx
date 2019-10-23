import Link from 'next/link';
import { BaseLink } from "./BaseStyle";

const Header = () => (
  <div>
    <Link href="/">
      <BaseLink>Home</BaseLink>
    </Link>
    <Link href="/about">
      <BaseLink>About</BaseLink>
    </Link>
  </div>
);

export default Header;
