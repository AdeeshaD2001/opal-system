import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Opal Hotel Homepage"
      className="flex items-center text-white font-extrabold text-3xl md:text-5xl tracking-tighter"
    >
      <h1 className="text-primary">Opal</h1>
      <span className="text-white">Hotel</span>
    </Link>
  );
};

export default Logo;
