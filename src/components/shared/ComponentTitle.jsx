// import Link from "next/link";

export default function ComponentTitle({name, url}) {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-2xl">{name}</div>
        <div>
          {/* <Link className="text-wood" href={url}>
            See All
          </Link> */}
        </div>
      </div>{" "}
    </>
  );
}
