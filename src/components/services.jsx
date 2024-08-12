import { shieldTick, support, truckFast } from "../assets/icons";
import { shoe4 } from "../assets/images";

export function ServiceComp() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      <ServiceComponent
        image={truckFast}
        title={"Free Shipping"}
        description={
          "Enjoy seamless shopping with our complimentary shipping service."
        }
      ></ServiceComponent>
      <ServiceComponent
        image={shieldTick}
        title={"Secure Payment"}
        description={
          "Experience worry-free transactions with our secure payment options."
        }
      ></ServiceComponent>
      <ServiceComponent
        image={support}
        title={"Love to help you"}
        description={
          "Our dedicated team is here to assist you every step of the way."
        }
      ></ServiceComponent>
    </section>
  );
}

function ServiceComponent({ image, title, description }) {
  return (
    <div className="flex-1 w-full px-10 py-16 sm:w-[350px] sm:min-w-[350px] shadow-3xl rounded-[20px] ">
      <div className="flex items-center w-11 h-11 justify-center bg-coral-red rounded-full">
        <img src={image} alt="" width={24} height={24} />
      </div>

      <h1 className="text-3xl font-bold mt-5">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
