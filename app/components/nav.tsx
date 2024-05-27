import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between px-10 py-8 text-black bg-white backdrop-blur-lg backdrop-filter bg-opacity-20">
      <p>juanmayahernandez@gmail.com</p>
      <section className="flex space-x-3 items-center">
        <Link href={""}>LinkedIn </Link>
        <p className="font-bold">/</p>
        <Link href={""}>Tiktok</Link>
        <p className="font-bold">/</p>
        <Link href={""}>Youtube</Link>
        <p className="font-bold">/</p>
        <Link href={""}>Instagram</Link>
      </section>
    </nav>
  );
}
