import {
  TWITTER_URL,
  TIKTOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  FACEBOOK_URL,
} from "../../constants/shared/socials";
import Image from "next/image";
import Link from "next/link";
import Divider from "../shared/Divider";

export default function Hero() {
  const socials = [
    { name: "Tiktok", url: TIKTOK_URL, iconClass: "fi fi-brands-tik-tok" },
    {
      name: "Instagram",
      url: INSTAGRAM_URL,
      iconClass: "fi fi-brands-tik-tok",
    },
    { name: "Youtube", url: YOUTUBE_URL, iconClass: "fi fi-brands-tik-tok" },
    { name: "Twitter", url: TWITTER_URL, iconClass: "fi fi-brands-tik-tok" },
    { name: "Facebook", url: FACEBOOK_URL, iconClass: "fi fi-brands-tik-tok" },
  ];

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
                <div className="mt-3 text-4xl font-bold text-center">
                  Prod. Kayks
                </div>
                <div className="text-gray-400 text-center mt-2">
                  Music Producer
                </div>
                <div className="text-wood text-center mt-2">
                  Get industry-ready instrumentals to fuel your next track.
                </div>
                <div className="mt-5 flex gap-x-5">
                  {socials.map((social, index) => (
                    <div key={index}>test</div>
                  ))}
                </div>
                <div className="mt-10 flex gap-x-5">
                  <div>
                    <Link href={socials[0].url} target="_blank">
                      <i className="footerIcon fi fi-brands-tik-tok"></i>
                    </Link>
                  </div>
                  <div>
                    <Link href={socials[1].url} target="_blank">
                      <i className="footerIcon fi fi-brands-instagram"></i>
                    </Link>
                  </div>
                  <div>
                    <Link href={socials[2].url} target="_blank">
                      <i className="footerIcon fi fi-brands-youtube"></i>
                    </Link>
                  </div>
                  <div>
                    <Link href={socials[4].url} target="_blank">
                      <i className="footerIcon fi fi-brands-facebook"></i>
                    </Link>
                  </div>
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
