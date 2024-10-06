import { cardData } from "@/utils/constant";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex w-full gap-2">
      {cardData.map((data) => (
        <div
          key={data.id}
          className="max-w-[16rem] flex-shrink-0 border-2 px-5 py-5"
        >
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

export default Card;
