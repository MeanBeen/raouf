import Banners from "@/components/banners";
import BigCard from "@/components/bigcard";
import Cards from "@/components/cards";

const Homepage = () => {
  return (
    <div className="mx-auto mt-36 min-h-screen max-w-6xl p-4">
      <section id="hero">
        <BigCard />
      </section>
      <section id="products">
        <Cards />
      </section>
      <section id="banner">
        <Banners />
      </section>
    </div>
  );
};
export default Homepage;
