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
                <div className="mt-3 text-4xl font-bold">Prod. Kayks</div>
                <div className="text-gray-400 text-center mt-2">
                  Music Producer{" "}
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
