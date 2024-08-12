import { copyrightSign, facebook, instagram, twitter } from "../assets/icons";
import { footerLogo } from "../assets/images";

export function FooterComp() {
  return (
    <div className="w-full flex flex-col gap-14">
      <div className="w-full flex justify-center">
        <div className="flex gap-20 justify-between items-start flex-wrap max-lg:flex-col">
          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-col gap-10">
              <img src={footerLogo} alt="" width={170} />
              <span className="text-[#9ba5ac] sm:max-w-sm">
                Get shoes ready for the new term at your nearest Nike store.
                Find Your perfect Size In Store. Get Rewards
              </span>
            </div>
            <div className="flex w-full gap-4">
              <div className="bg-white w-[50px] h-[50px] flex rounded-full justify-center items-center">
                <img src={facebook} alt="" className="" />
              </div>
              <div className="bg-white w-[50px] h-[50px] flex rounded-full justify-center items-center">
                <img src={instagram} alt="" />
              </div>
              <div className="bg-white w-[50px] h-[50px] flex rounded-full justify-center items-center">
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>

          <div className="flex gap-20 flex-wrap justify-between flex-1">
            <div className="text-white flex flex-col gap-6 text-lg ">
              <h1 className="text-2xl font-semibold">Products</h1>
              <div className="flex flex-col gap-5 text-[#c1bcb6] cursor-pointer">
                <span className="hover:text-[#585857]">Air Force 1</span>
                <span className="hover:text-[#585857]">Air Max 1</span>
                <span className="hover:text-[#585857]">Air Jordan 1</span>
                <span className="hover:text-[#585857]">Air Force 2</span>
                <span className="hover:text-[#585857]">Nike Waffle Racer</span>
                <span className="hover:text-[#585857]">Nike Cortez</span>
              </div>
            </div>
            <div className="text-white flex flex-col gap-6  ">
              <h1 className="text-2xl font-semibold">Help</h1>
              <div className="flex flex-col gap-5 text-[#c1bcb6] cursor-pointer">
                <span className="hover:text-[#585857]">About us</span>
                <span className="hover:text-[#585857]">FAQs</span>

                <span className="hover:text-[#585857]">How it works</span>
                <span className="hover:text-[#585857]">Privacy Policy</span>
                <span className="hover:text-[#585857]">Payment Policy</span>
              </div>
            </div>
            <div className="text-white flex flex-col gap-6">
              <h1 className="text-2xl font-semibold">Get in touch</h1>
              <div className="flex flex-col gap-5 text-[#c1bcb6] cursor-pointer">
                <span className="hover:text-[#585857]">customer@nike.com</span>
                <span className="hover:text-[#585857]">+9234567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center gap-10 mt-10  flex-wrap ">
        <div className="text-white flex hover:text-[#585857]">
          <a href="" className="flex">
            <img src={copyrightSign} alt="" />
            Copyright. All rights reserved.
          </a>
        </div>
        <div className="hover:text-[#585857]">Terms & Conditions</div>
      </div>
    </div>
  );
}
