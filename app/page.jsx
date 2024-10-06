import Banners from "@/components/banners";
import BigCard from "@/components/bigcard";

import Cards from "@/components/cards";
import CardCarousel from "@/components/carousels";

const Homepage = () => {
  return (
    <div className="mx-auto mt-36 min-h-screen max-w-6xl p-4">
      <section id="hero">
        <BigCard />
      </section>
      <section id="products">
        <h2 className="mb-11 mt-10 text-3xl font-semibold">
          Products we are proud of
        </h2>
        <Cards />
      </section>
      <section id="banner">
        <Banners reverse={true} />
      </section>
      <section id="trend">
        <CardCarousel />
      </section>
      <section id="banner2">
        <Banners reverse={false} />
      </section>
    </div>
  );
};
export default Homepage;
