import CTag from "../shared/CTag";
export default function BeatCard() {
  return (
    <>
      <div className="w-[250px] p-2 rounded-lg border-2 border-white">
        <div className="w-full h-[120px] bg-blue-200 rounded-lg mb-3">

        </div>
        <div>
          <CTag name="Drill" />
        </div>
        <div className="font-bold mt-1">Darkness</div>
        <div className="text-gray-400 break-words">Metro Boomin x Central Cee x Pop Smoke type beat</div>
      </div>
    </>
  );
}
