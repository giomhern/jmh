import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between px-10 py-8 text-black bg-white backdrop-blur-lg text-md font-medium backdrop-filter bg-opacity-20">
      <p>Logo</p>
      <section className="flex space-x-8 items-center">
        <Link href={"/main"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={""}>About</Link>
        <button className="">
            Login 
        </button>
      </section>
    </nav>
  );
}
