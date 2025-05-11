// components
import { Header } from "../../components/layout/Header";
import { Categories } from "./components/Categories";
import { RecentPosts } from "./components/common/RecentPosts";
import { Contact } from "./components/Contact";
import { FeaturedPosts } from "./components/FeaturedPosts";
import { Hero } from "./components/Hero";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedPosts />
        <RecentPosts />
        <Contact />
      </main>
    </>
  );
};
