import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 w-full fixed bottom-0">
      <div className="bg-slate-900 flex justify-center items-center py-16 px-20 w-full ">
        <div className="w-full space-y-6">
          <h3 className="text-white font-bold text-3xl text-center">
            Newsletter
          </h3>
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-center items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="text-lg text-center px-1 py-1 lg:px-2 lg:text-left lg:w-60 focus:outline-none w-full  bg-slate-200"
            />
            <button className="text-lg px-1 py-1 lg:px-2 w-full lg:w-28 bg-slate-300 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="space-x-4 flex items-center justify-center px-4 py-4 text-lg text-white bg-black">
        <Link className="hover:underline" href={"/"}>
          About
        </Link>
        <Link className="hover:underline" href={"/"}>
          Store Location
        </Link>
        <Link className="hover:underline" href={"/"}>
          FAQs
        </Link>
        <Link className="hover:underline" href={"/"}>
          News
        </Link>
        <Link className="hover:underline" href={"/"}>
          Careers
        </Link>
        <Link className="hover:underline" href={"/"}>
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
