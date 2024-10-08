import { cardData } from "@/utils/constant";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-4">
      {cardData.map((data) => (
        <div key={data.id} className="border-2 px-5 py-5">
          <Image
            className="w-full"
            width={100}
            height={100}
            src={data.imageUrl}
            alt="sofa"
          />
          <h3 className="px-2 py-1 text-xl tracking-tight">{data.title}</h3>
          <h2 className="px-2 py-1 text-xl font-bold">{data.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cards;
