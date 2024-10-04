import Image from "next/image";

const Cards = () => {
  return (
    <div className="mt-20">
      <h2 className="mb-11 text-3xl font-semibold">Products we are proud of</h2>
      <div>
        <div className="border-2 px-5 py-5">
          <Image
            className="w-full"
            width={100}
            height={100}
            src={
              "https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fproducts%2Fchair%2Flittle-sheepskin%2Fdisplay.png&w=1080&q=75"
            }
            alt="sofa"
          />
          <h3 className="px-2 py-1 text-xl tracking-tight">chair</h3>
          <h2 className="px-2 py-1 text-xl font-bold">$986</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
