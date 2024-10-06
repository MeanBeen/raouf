// import Image from "next/image";

// const Banners = () => {
//   return (
//     <div className={"mt-20 grid grid-cols-1 lg:grid-cols-2"}>
//       <div
//         className={"flex flex-col justify-evenly gap-5 bg-gray-200 px-14 py-10"}
//       >
//         <h2 className={"text-3xl font-semibold"}>Creative harmonious living</h2>
//         <p className={"text-2xl"}>
//           RAOUF Products are all made to standard sizes so that you can mix and
//           match them freely.
//         </p>
//         {/* make button reusable */}
//         <button className={"w-28 bg-black px-5 py-3 font-semibold text-white"}>
//           SHOP NOW
//         </button>
//       </div>
//       <div>
//         <Image
//           src="https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fbanner%2Fimg-1.jpg&w=1920&q=75"
//           alt="shelve"
//           width={600}
//           height={300}
//           className={"h-80 w-full"}
//         />
//       </div>
//     </div>
//   );
// };

// export default Banners;
import Image from "next/image";

const Banners = ({ reverse = false }) => {
  return (
    <div className={"mt-20 grid grid-cols-1 lg:grid-cols-2"}>
      {reverse ? (
        <>
          <div
            className={
              "flex flex-col justify-evenly gap-5 bg-gray-200 px-14 py-10"
            }
          >
            <h2 className={"text-3xl font-semibold"}>
              Creative harmonious living
            </h2>
            <p className={"text-2xl"}>
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <button
              className={"w-28 bg-black px-5 py-3 font-semibold text-white"}
            >
              SHOP NOW
            </button>
          </div>
          <div className="max-h-[22rem]">
            <Image
              src="https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fbanner%2Fimg-1.jpg&w=1920&q=75"
              alt="shelve"
              width={600}
              height={350}
              className={"h-full w-full"}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <Image
              src="https://darrellrahan-ecommerce.vercel.app/_next/image?url=%2Fimages%2Fbanner%2Fimg-2.jpg&w=1920&q=75"
              alt="shelve"
              width={600}
              height={350}
              className={"h-96 w-full"}
            />
          </div>
          <div
            className={
              "flex flex-col justify-evenly gap-5 bg-gray-200 px-14 py-10"
            }
          >
            <h2 className={"text-3xl font-semibold"}>
              Comfortable & Elegante Living
            </h2>
            <p className={"text-2xl"}>
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <button
              className={"w-28 bg-black px-5 py-3 font-semibold text-white"}
            >
              SHOP NOW
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Banners;
