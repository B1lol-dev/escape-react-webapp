// components
import { Container } from "../../../components/helpers/Container";

// assets
import hero_bg_img from "../assets/Hero/hero_bg.png";

export const Hero = () => {
  return (
    <section
      className={`bg-cover bg-center bg-no-repeat min-h-10 py-[184px_157px]`}
      style={{ backgroundImage: `url(${hero_bg_img})` }}
    >
      <Container className="flex items-center flex-col">
        <h1 className="text-white text-[50px]">Let's do it together.</h1>
        <p className="text-[#FFFFFFA1] text-[17px] mt-5">
          We travel the world in search of stories. Come along for the ride.
        </p>
        <button
          type="button"
          className="text-white bg-es-orange text=[13px] py-3 px-8 rounded-[3px] mt-[31px]"
        >
          View Latest Posts
        </button>
      </Container>
    </section>
  );
};
