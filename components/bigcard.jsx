import Image from "next/image";
import Link from "next/link";

const BigCard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full lg:grid-cols-4 max-h-[50vh]">
      <div className="relative group lg:col-span-2 lg:row-span-2">
        <Link href={"/container/furniture"}>
          <Image
            width={500}
            height={400}
            alt="furniture"
            src={
              "https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fhero%2Fimg-1.jpg&w=1080&q=75"
            }
            className="w-full h-full object-cover"
          />
          <h2 className="absolute bottom-0 text-3xl font-bold text-white px-4 py-4 z-10">
            Live Comfortably
          </h2>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-0"></div>
        </Link>
      </div>
      <div className="relative group lg:col-span-1 lg:row-span-2">
        <Link href={"/container/furniture"}>
          <Image
            width={500}
            height={400}
            alt="furniture"
            src={
              "https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fhero%2Fimg-2.jpg&w=1080&q=75"
            }
            className="w-full h-full object-cover"
          />
          <h2 className="absolute bottom-0 text-3xl font-bold text-white px-4 py-4 z-10">
            HW Skincare
          </h2>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-0"></div>
        </Link>
      </div>
      <div className="relative group">
        <Link href={"/container/furniture"}>
          <Image
            width={500}
            height={400}
            alt="furniture"
            src={
              "https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fhero%2Fimg-3.jpg&w=1080&q=75"
            }
            className="w-full h-full object-cover"
          />
          <h2 className="absolute bottom-0 text-3xl font-bold text-white px-4 py-4 z-10">
            Kitchen & Dining
          </h2>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-0"></div>
        </Link>
      </div>
      <div className="relative group">
        <Link href={"/container/furniture"}>
          <Image
            width={500}
            height={400}
            alt="furniture"
            src={
              "https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fhero%2Fimg-4.jpg&w=1080&q=75"
            }
            className="w-full h-full object-cover"
          />
          <h2 className="absolute bottom-0 text-3xl font-bold text-white px-4 py-4 z-10">
            Home Electronic
          </h2>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-0"></div>
        </Link>
      </div>
    </div>
  );
};

export default BigCard;

// <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full mt-10 md:grid-cols-4 max-h-[80vh]">
//   <div className="bg-[url('https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fhero%2Fimg-1.jpg&w=1080&q=75')] lg:col-span-2 lg:row-span-2 relative before:absolute before:inset-0 before:bg-black/30 hover:before:bg-black/50 bg-cover bg-center w-96 h-96   before:transition-hover before:duration-300 flex flex-col justify-end ">
//     <h2 className="z-10 text-3xl font-bold text-white px-4 py-4">
//       Live Comfortably
//     </h2>
//   </div>
//   <div className="bg-[url('https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fhero%2Fimg-2.jpg&w=1080&q=75')] lg:col-span-2 lg:row-span-2 relative before:absolute before:inset-0 before:bg-black/30 hover:before:bg-black/50 bg-cover bg-center w-96 h-96   before:transition-hover before:duration-300 flex flex-col justify-end ">
//     <h2 className="z-10 text-3xl font-bold text-white px-4 py-4">
//       HW Skincare
//     </h2>
//   </div>
//   <div className="bg-[url('https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fhero%2Fimg-3.jpg&w=1080&q=75')] relative before:absolute before:inset-0 before:bg-black/30 hover:before:bg-black/50 bg-cover bg-center w-96 h-96   before:transition-hover before:duration-300 flex flex-col justify-end ">
//     <h2 className="z-10 text-3xl font-bold text-white px-4 py-4">
//       Kitchen & Dining
//     </h2>
//   </div>
//   <div className="bg-[url('https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fhero%2Fimg-4.jpg&w=1080&q=75')] relative before:absolute before:inset-0 before:bg-black/30 hover:before:bg-black/50 bg-cover bg-center w-96 h-96   before:transition-hover before:duration-300 flex flex-col justify-end ">
//     <h2 className="z-10 text-3xl font-bold text-white px-4 py-4">
//       Home Electronic
//     </h2>
//   </div>
// </div>
