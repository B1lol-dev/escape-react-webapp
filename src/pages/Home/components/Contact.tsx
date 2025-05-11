import { useState } from "react";
import landscape_img from "../assets/Contact/landscape_img.png";
import toast, { Toaster } from "react-hot-toast";
import { PostsTitle } from "./common/PostsTitle";
import { Footer } from "../../../components/layout/Footer";

export const Contact = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="relative pt-[81px] h-[385px] pb-[120px]">
      <div className="absolute inset-0 z-0">
        <img
          src={landscape_img}
          alt="Landscape background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <PostsTitle
          text="Stay in Touch"
          className="text-white text-2xl! mb-5"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("We send an email to " + email);
          }}
          className="flex max-w-md mx-auto overflow-hidden"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="bg-white flex-grow px-9 py-[18px] text-black text-xs outline-none rounded-l-[3px] user-invalid:border-1 user-invalid:border-red-500 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#FFFFFF47] hover:bg-[#FFFFFF30] px-[44px] py-[18px] text-sm transition-colors rounded-r-[3px]"
          >
            Submit
          </button>
        </form>
        <Footer className="mt-[89px] w-full absolute" />
      </div>
      <Toaster />
    </div>
  );
};
