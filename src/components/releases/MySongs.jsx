import Divider from "../shared/Divider";
import Link from "next/link";

export default function MySongs() {
  const songs = [
    {
      name: "Testify - Amapiano Version",
      imgUrl:
        "https://i.scdn.co/image/ab67616d00001e02ff579eba6d0ef38f9985a780",
      artist: "Bluenax ft. Prod. Kayks",
      url: "https://open.spotify.com/track/2bXcTyOXcyoIgjm4gDeXAp",
      text: "500k+ streams (all platforms)",
    },
    {
      name: "Black Santa Amapiano",
      imgUrl:
        "https://i.scdn.co/image/ab67616d00001e02a65b2df75d46e3c5066580bd",
      artist: "Prod. Kayks",
      url: "https://open.spotify.com/track/5eg6ulV8GIOxvODisYE53c",
    },
    {
      name: "Amapiano Haven",
      imgUrl:
        "https://i.scdn.co/image/ab67616d00001e0226b72ee6d24e80c649bb0f87",
      artist: "Prod. Kayks",
      url: "https://open.spotify.com/track/6UkJRQXTiTS54M8Wv9Ver0",
    },
  ];

  return (
    <>
      <div className="mainLayout" id="mySongs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {songs.map((song, index) => (
            <Link href={song.url}>
              <div
                key={index}
                className="flex items-center gap-x-3 duration-300 hover:opacity-80 p-2 border-2 border-transparent cursor-pointer hover:border-pink-500 rounded-lg"
              >
                <div>
                  <img
                    src={song.imgUrl}
                    alt={song.name}
                    className="w-[100px] rounded-lg"
                  />
                </div>
                <div>
                  {/* {song.text ? ( */}
                  <div className="text-xs text-green-300  w-fit">
                    {song.text}
                  </div>
                  {/* ) : (<></>)} */}
                  <div className="font-bold">{song.name}</div>
                  <div className="text-gray-400">{song.artist}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
