// components
import { Header } from "../../components/layout/Header";
import { Categories } from "./components/Categories";
import { Hero } from "./components/Hero";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
      </main>
    </>
  );
};
