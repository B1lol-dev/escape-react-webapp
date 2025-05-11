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
        <h1 className="text-2xl font-bold text-center mt-8">Our Story</h1>
        <ul className="mt-6 space-y-4 text-[#768088]">
          <li>
            Founded in 2020, we started as a small team with a big vision.
          </li>
          <li>
            Our mission is to provide exceptional services to our customers.
          </li>
          <li>We believe in innovation, collaboration, and integrity.</li>
          <li>Join us on our journey to make a difference in the world.</li>
        </ul>
      </div>
      <Footer className="mt-60" />
    </>
  );
};

export default About;
