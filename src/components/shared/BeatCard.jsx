import CTag from "../shared/CTag";
import Seperator from "../shared/Seperator";
import Divider from "../shared/Divider";

export default function BeatCard({
  title,
  description,
  genre,
  imgUrl,
  bpm,
  key,
  price,
  beatUrl,
  beatDownloadUrl,
}) {
  const images = ["/assets/images/covers/1.jpg", "/assets/images/covers/2.jpg"];

  function getRandomImageUrl(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  imgUrl = getRandomImageUrl(images);
  return (
    <>
      <div className="w-[250px] h-full p-2 rounded-lg border-2 border-white">
        {/* image container */}
        <div className="w-full h-[220px] bg-blue-200 rounded-lg mb-3 overflow-hidden relative">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={imgUrl}
            alt={title}
          />
        </div>
        {/*  */}
        <div>
          <CTag name={genre} />
        </div>
        <div className="font-bold mt-1">{title}</div>
        <div className="text-gray-400 break-words text-wrap w-[250px]">
          {description}
        </div>
        <div className="py-2">
          <Divider />
        </div>
        <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
          <div className="text-wood">$19</div>
          <Seperator />
          <div>127 BPM</div>
          <Seperator />
          <div>C# Maj</div>
        </div>
        <div className="py-2">
          <Divider />
        </div>
        <div>
          <button>Free Download</button>
        </div>
      </div>
    </>
  );
}
