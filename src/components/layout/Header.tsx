import { v4 as uuidv4 } from "uuid";
import { Container } from "../helpers/Container";

export const Header = () => {
  const navLinks: string[] = ["home", "Categories", "about", "contact"];

  return (
    <header className="fixed w-full py-5">
      <Container>
        <nav className="flex items-center justify-between text-white">
          <a href="/" className="text-[26px]">
            <h1>Escape</h1>
          </a>

          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li className="" key={uuidv4()}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
