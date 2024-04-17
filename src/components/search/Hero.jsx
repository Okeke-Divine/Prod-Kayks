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
        <div className="mainLayout py-10 md:py-10 relative z-10">
          <div>
            <input placeholder="Search..." className="w-full py-2 px-5 border-wood border-2 rounded-lg" />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
