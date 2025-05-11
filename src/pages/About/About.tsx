import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="relative h-64 bg-[#232f38]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-9 flex items-center justify-center h-full text-white">
          <h1 className="text-4xl font-serif">About</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-lg text-[#768088]">
          Learn more about our journey
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
