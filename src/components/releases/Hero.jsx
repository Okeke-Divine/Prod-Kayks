import Image from "next/image";
import Link from "next/link";
import Divider from "../shared/Divider";

import { SPOTIFY_URL } from "../../constants/shared/socials";

export default function Hero() {
  return (
    <>
      <div className="relative">
        {/* Studio background image */}
        <Image
          width="5376"
          height="3584"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          src="/assets/images/studio.jpg"
          priority
          alt="Studio background"
        />

        {/* Content */}
        <div className="mainLayout py-10 md:py-40 relative z-10">
          <div className="block md:flex items-center justify-center gap-x-5">
            <div className="w-full md:w-full flex justify-center">
              <div className="w-fit">
                <div className="mt-3 text-4xl font-bold">
                  My Spotify Catalog
                </div>
                <div className="text-gray-400 text-center mt-2">
                  List of songs/beats released on spotify.
                </div>
                <div className="flex flex-wrap gap-5 items-center justify-center mt-3">
                  <Link href={SPOTIFY_URL} target={"_blank"}>
                    <button className="border-2 border-gray-600 py-3 px-4 rounded-lg">
                      Spotify
                    </button>
                  </Link>
                  <Link href={"/releases#mySongs"}>
                    <button className="border-2 border-pink py-3 px-4 rounded-lg bg-pink">
                      Songs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
