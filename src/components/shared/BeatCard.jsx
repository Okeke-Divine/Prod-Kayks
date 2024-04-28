import CTag from "../shared/CTag";
import Seperator from "../shared/Seperator";
import Divider from "../shared/Divider";

export default function BeatCard({
  title,
  desc,
  genre,
  thumbnail,
  bpm,
  beatKey,
  price,
}) {
  // const images = ["/assets/images/covers/1.jpg", "/assets/images/covers/2.jpg"];

  // function getRandomImageUrl(images) {
  // const randomIndex = Math.floor(Math.random() * images.length);
  // return images[randomIndex];
  // }
  // imgUrl = getRandomImageUrl(images);
  return (
    <>
      <div className="group w-[250px] h-fit p-2 rounded-lg border-2 border-white">
        {/* image container */}
        <div className="w-full h-[220px] bg-wood rounded-lg mb-3 overflow-hidden relative">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={thumbnail}
            alt={title+" - "+desc}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="text-white text-3xl">
              <i className="fi fi-tr-play-circle opacity-50 group-hover:opacity-100 duration-300 text-6xl"></i>
            </button>
          </div>
        </div>

        {/*  */}
        <div>
          <CTag name={genre} />
        </div>
        <div className="font-bold mt-1">{title}</div>
        <div className="text-gray-400 break-words text-wrap w-[250px]">
          {desc}
        </div>
        <div className="py-2">
          <Divider />
        </div>
        <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
          <div className="text-wood">${price}</div>
          <Seperator />
          <div>{bpm} BPM</div>
          <Seperator />
          <div>{beatKey}</div>
        </div>
        <div className="py-2">
          <Divider />
        </div>
        <div className="flex flex-wrap gap-2 py-2">
          <button className="bg-pink text-white py-2 px-3 text-sm rounded-lg cursor-pointer">
            Buy
          </button>
          <button className="bg-purple-dark-2 text-white py-2 px-3 text-sm rounded-lg cursor-pointer">
            Free Download
          </button>
        </div>
      </div>
    </>
  );
}
