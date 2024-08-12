import "./App.css";
import { NavComp } from "./components/NavCom";
import { ReviewComp } from "./components/customerReviews";
import { FooterComp } from "./components/footer";
import { HeroComp } from "./components/hero";
import { OfferComp } from "./components/offer";
import { ProductsComp } from "./components/products";
import { QualityComp } from "./components/quality";
import { ServiceComp } from "./components/services";
import { SubscibeComp } from "./components/subscribe";

function App() {
  return (
    <>
      <div className="">
        <NavComp></NavComp>
        <section className="xl:padding-1 wide:padding-r padding-b">
          {" "}
          <HeroComp></HeroComp>
        </section>

        <section className="padding">
          <ProductsComp></ProductsComp>
        </section>

        <section className="padding">
          <QualityComp></QualityComp>
        </section>

        <section className="padding">
          <ServiceComp></ServiceComp>
        </section>

        <section className="padding">
          <OfferComp></OfferComp>
        </section>

        <section className="padding bg-[#f6f6ff]">
          <ReviewComp></ReviewComp>
        </section>

        <section className="padding">
          <SubscibeComp></SubscibeComp>
        </section>

        <section className="padding bg-black">
          <FooterComp></FooterComp>
        </section>
      </div>
    </>
  );
}

export default App;
