import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1>This is a blog!</h1>
      <Link href={`/blog/basketball`}>Blog about basketball</Link>
      <Link href={`/blog/cricket`}>Blog about cricket</Link>
    </div>
  );
}
