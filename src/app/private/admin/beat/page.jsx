import Link from "next/link";

export default function Beats() {
  return (
    <>
      <div className="mainLayout">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl">Beat | New</h1>
          <Link
            href="/private/admin/beat/new"
            className="border border-pink bg-pink rounded py-1 px-2"
          >
            New
          </Link>
        </div>
      </div>
    </>
  );
}
