import { arrowRight } from "../assets/icons";
import {
  bigShoe1,
  collection,
  thumbnailBackground,
  thumbnailShoe1,
} from "../assets/images";

export function HeroComp() {
  return (
    <section className="w-full flex flex-col justify-center xl:flex-row min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center w-full max-xl:padding-x pt-28">
        <p className="text-[#ff6452] text-xl ">Our Summer collections</p>
        <h1 className="text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold  mt-10 ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br></br>
          <span className="text-[#ff6452] inline-block mt-4">Nike </span>
          Shoes
        </h1>

        <p className="text-slate-500 text-lg mt-6 leading-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovtion for
          your active life.
        </p>

        <button className="flex rounded-full w-[200px] items-center justify-center gap-3 px-7 text-lg border-2 border-coral-red text-white py-4 leading-none bg-[#ff6452] mt-10">
          Shop now
          <img src={arrowRight} alt="right arrow" className="" />
        </button>

        <div className="w-full flex gap-16 justify-start items-start flex-wrap mt-20">
          <div>
            <p className="text-4xl font-extrabold">1k+</p>
            <p className="font-500 text-gray-400 text-lg leading-7">Brands</p>
          </div>

          <div>
            <p className="text-4xl font-extrabold">500+</p>
            <p className="font-500 text-gray-400 text-lg">Shops</p>
          </div>

          <div>
            <p className="text-4xl font-extrabold">250k+</p>
            <p className="font-500 text-gray-400 text-lg">Customers</p>
          </div>
        </div>
      </div>

      <div className="relative flex-1 xl:min-h-screen max-xl:py-40 w-full flex justify-center items-center bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt=""
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
}
