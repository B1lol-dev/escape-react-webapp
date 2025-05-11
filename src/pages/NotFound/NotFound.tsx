import { Link } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";

export const NotFound = () => {
  return (
    <>
      <Header className="bg-es-gray" />
      <main className="pt-[90px]">
        <section className="flex flex-col py-75 justify-center items-center gap-5">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="text-2xl text-es-gray">
            The page you looking for is not found
          </p>
          <Link to="/">
            <button
              type="button"
              className="bg-es-orange text-white px-5 py-3 rounded-md"
            >
              Go to home
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};
