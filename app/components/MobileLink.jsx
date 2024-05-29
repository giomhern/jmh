import Link from "next/link";
export default function MobileLink({ href, label }) {
  return (
    <div>
      <Link className="text-xl" href={href}>{label}</Link>
    </div>
  );
}
