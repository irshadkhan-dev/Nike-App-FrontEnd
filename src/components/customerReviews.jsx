import { star } from "../assets/icons";
import { aman, customer1, sakshyam } from "../assets/images";

export function ReviewComp() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold m-auto text-center">
          What Our <span className="text-coral-red">Customer</span> Say?
        </h1>
        <span className="text-[#7f8794] text-xl mt-3 text-center m-auto leading-7 max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </span>
      </div>
      <div className="flex mt-28 w-full justify-center gap-36 max-lg:flex-wrap max-lg:gap-20 max-lg:mt-20">
        <div className="flex flex-col items-center gap-4">
          <img
            className="rounded-full w-[120px] h-[120px] object-cover"
            src={aman}
            alt=""
          />
          <span className="text-[#7f8794] text-xl  text-center m-auto leading-7 max-w-sm">
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </span>
          <div className="flex text-[#7f8794] gap-2">
            <img src={star} alt="" />
            <span>(4.5)</span>
          </div>
          <h1 className="text-2xl font-semibold">Aman Thapa</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            className="rounded-full w-[120px] h-[120px] object-cover"
            src={sakshyam}
            alt=""
          />
          <span className="text-[#7f8794] text-xl  text-center m-auto leading-7 max-w-sm">
            The product not only met but exceeded my expectations. I'll
            definitely be a returning customer!
          </span>
          <div className="flex text-[#7f8794] gap-2">
            <img src={star} alt="" />
            <span>(4.5)</span>
          </div>
          <h1 className="text-2xl font-semibold">Sakshyam Shrestha</h1>
        </div>
      </div>
    </div>
  );
}
