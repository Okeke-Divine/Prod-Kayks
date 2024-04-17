import Divider from "../shared/Divider";
import Link from "next/link";

export default function MySongs() {
  const songs = [
    {
      name: "Black Santa Amapiano",
      imgUrl:
        "https://i.scdn.co/image/ab67616d00001e02a65b2df75d46e3c5066580bd",
      artist: "Prod. Kayks",
      url: "https://open.spotify.com/track/5eg6ulV8GIOxvODisYE53c",
    },
    {
      name: "Black Santa Amapiano",
      imgUrl:
        "https://i.scdn.co/image/ab67616d00001e02a65b2df75d46e3c5066580bd",
      artist: "Prod. Kayks",
      url: "https://open.spotify.com/track/5eg6ulV8GIOxvODisYE53c",
    },
    {
      name: "Black Santa Amapiano",
      imgUrl:
        "https://i.scdn.co/image/ab67616d00001e02a65b2df75d46e3c5066580bd",
      artist: "Prod. Kayks",
      url: "https://open.spotify.com/track/5eg6ulV8GIOxvODisYE53c",
    },
  ];

  return (
    <>
      <div className="mainLayout">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
