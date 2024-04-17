import CTag from "../shared/CTag";
export default function BeatCard({ title, description, genre, imgUrl }) {
  return (
    <>
      <div className="w-[250px] p-2 rounded-lg border-2 border-white">
        <div className="w-full h-[120px] bg-blue-200 rounded-lg mb-3"></div>
        <div>
          <CTag name={genre} />
        </div>
        <div className="font-bold mt-1">{title}</div>
        <div className="text-gray-400 break-words text-wrap w-[250px]">
          {description}
        </div>
      </div>
    </>
  );
}
