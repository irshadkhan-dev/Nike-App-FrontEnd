import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

export function QualityComp() {
  return (
    <section className="max-container w-full flex flex-col lg:flex-row lg:gap-60">
      <div>
        <h1 className="text-4xl font-bold mb-5">
          <span>We Provide You </span>
          <br></br>
          <span className="text-coral-red">Super Quality </span>
          Shoes
        </h1>

        <p className="text-gray-500 text-lg mb-5 lg:max-w-lg leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="text-gray-500 text-lg lg:max-w-lg ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <button className="flex rounded-full w-[200px] items-center justify-center gap-3 px-7 text-lg border-2 border-coral-red text-white py-4 leading-none bg-[#ff6452] mt-10">
          Shop now
          <img src={arrowRight} alt="right arrow" className="" />
        </button>
      </div>

      <div className="bg-card-1">
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
}
