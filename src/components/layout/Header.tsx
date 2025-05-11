// hooks
import { useEffect, useState } from "react";

// utils
import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "../helpers/Container";
import { Link } from "react-router-dom";

export const Header = ({ className }: { className?: string }) => {
  const navLinks: string[] = ["home", "categories", "about", "contact"];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-10 w-full py-5 duration-200 ${
        isScrolled ? "bg-white *:*:text-es-black" : ""
      } ${className}`}
    >
      <Container>
        <nav className="flex items-center justify-between text-white">
          <Link to="/" className="text-[26px]">
            <h1>Escape</h1>
          </Link>

          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <Link to={`/${link}`} key={uuidv4()}>
                <li className="">{link}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
