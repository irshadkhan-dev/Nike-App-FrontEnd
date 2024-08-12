import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

export function OfferComp() {
  return (
    <section className="flex max-container xl:gap-40 gap-9 xl:flex-row flex-col justify-center">
      <div className="flex flex-col w-full flex-1">
        <h1 className="text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="text-gray-500 mt-5 text-xl leading-6 lg:max-w-lg lg:leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-gray-500 mt-5 text-xl leading-6 lg:max-w-lg lg:leading-7">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-5 justify-start">
          <button className="flex rounded-full w-[200px] items-center justify-center gap-3 px-7 text-lg border-2 border-coral-red text-white py-4 leading-none bg-[#ff6452] mt-10">
            Shop now
            <img src={arrowRight} alt="right arrow" className="" />
          </button>

          <button className="flex rounded-full w-[200px] items-center justify-center gap-3 px-7 text-lg border-2 border-gray-600 text-gray-500 py-4 leading-none bg-white mt-10">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full flex  items-center ">
        <img src={offer} alt="" width={773} height={687} />
      </div>
    </section>
  );
}
