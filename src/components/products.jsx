import { useDebugValue } from "react";
import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";
import { star } from "../assets/icons";

export function ProductsComp() {
  return (
    <section className="w-full max-container max-sm:mt-12">
      <h1 className="text-4xl font-bold mb-5">
        Our <span className="text-coral-red">Popular</span> Products
      </h1>
      <p className="text-xl text-gray-400 lg:max-w-lg leading-7 sm:leading-none">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4">
        <CardComp
          shoe={shoe4}
          star={star}
          rating={`(4.5)`}
          name={`Nike Air Jordan-01`}
          price={`$200.20`}
        ></CardComp>
        <CardComp
          shoe={shoe5}
          star={star}
          rating={`(4.5)`}
          name={`Nike Air Jordan-01`}
          price={`$200.20`}
        ></CardComp>
        <CardComp
          shoe={shoe6}
          star={star}
          rating={`(4.5)`}
          name={`Nike Air Jordan-01`}
          price={`$200.20`}
        ></CardComp>
        <CardComp
          shoe={shoe7}
          star={star}
          rating={`(4.5)`}
          name={`Nike Air Jordan-01`}
          price={`$200.20`}
        ></CardComp>
      </div>
    </section>
  );
}

function CardComp({ star, rating, name, price, shoe }) {
  return (
    <div className="flex flex-col gap-3 w-full flex-1 max-sm:w-full">
      <div className="bg-card-1">
        <img src={shoe} alt="" className="w-[280px] h-[280px]" />
      </div>
      <div>
        <div className="flex gap-2 text-lg text-gray-400 font-300">
          <img src={star} alt="" /> {rating}
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-coral-red text-md font-semibold">{price}</p>
      </div>
    </div>
  );
}
