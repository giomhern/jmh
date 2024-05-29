import Image from "next/image";
export default function Signup() {
  return (
    <form className="md:gap-5 gap-1 border-2 border-gray-800 py-2 px-3 flex items-center">
      <Image src="/email.png" width={32} height={32} alt="Subscribe" />
      <input
        type="email"
        placeholder="Your Email Address"
        className="p-2 font-regular md:text-lg text-sm focus:ring-0 focus:ring-offset-0"
      />
      <button className=" text-white md:text-lg text-xs py-2 md:px-6 px-4 font-medium border border-transparent bg-gray-800">
        Subscribe
      </button>
    </form>
  );
}
