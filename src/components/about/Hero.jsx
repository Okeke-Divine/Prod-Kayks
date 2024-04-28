import {
  TWITTER_URL,
  TIKTOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  FACEBOOK_URL,
  EMAIL_URL,
} from "../../constants/shared/socials";
import Image from "next/image";
import Link from "next/link";
import Divider from "../shared/Divider";

export default function Hero() {
  const socials = [
    { name: "Email", url: EMAIL_URL, iconClass: "fi fi-brands-facebook" },
    { name: "Tiktok", url: TIKTOK_URL, iconClass: "fi fi-brands-tik-tok" },
    {
      name: "Instagram",
      url: INSTAGRAM_URL,
      iconClass: "fi fi-brands-instagram",
    },
    { name: "Youtube", url: YOUTUBE_URL, iconClass: "fi fi-brands-youtube" },
    { name: "Twitter", url: TWITTER_URL, iconClass: "fi fi-brands-twitter" },
    { name: "Facebook", url: FACEBOOK_URL, iconClass: "fi fi-brands-facebook" },
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
                <div className="flex justify-center items-center">
                  <img alt="Prod. Kayks" src="/assets/images/prod-kayks.jpg" className="rounded-full w-[100px] h-[100px] border-2 border-wood" />
                </div>
                <div className="mt-3 text-4xl font-bold text-center">
                  Prod. Kayks
                </div>
                <div className="text-gray-400 text-center mt-2">
                  Multi-Genre Music Producer/Audio Enginner
                </div>
                {/* <div className="text-wood text-center mt-2">
                  Get industry-ready instrumentals to fuel your next track.
                </div> */}
                <div className="mt-5 flex justify-center gap-x-5">
                  {socials.map((social, index) => (
                    <Link key={index} href={social.url} target={"_blank"}>
                      <i className={social.iconClass}></i>
                    </Link>
                  ))}
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
