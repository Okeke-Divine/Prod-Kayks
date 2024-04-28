import Link from "next/link";

export default function RootLayout({ children }) {
  const urls = [
    { name: "Genre", url: "/private/admin/genre" },
    { name: "Beat", url: "/private/admin/beat" },
  ];

  return (
    <>
      <div className="block md:flex gap-2">
        <div className="py-10 px-5 w-full md:w-fit">
          {urls.map((url, index) => (
            <Link href={url.url} key={index}>
              <div className="py-2 px-3 bg-slate-900 rounded mb-2 w-full">{url.name}</div>
            </Link>
          ))}
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
