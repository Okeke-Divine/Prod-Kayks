import Link from "next/link";
import Divider from "./Divider";

// constants
import {TWITTER_URL, TIKTOK_URL, INSTAGRAM_URL, YOUTUBE_URL, SPOTIFY_URL, WHATSAPP_URL} from "../../constants/shared/socials"

export default function Footer() {
  const socials = [
    { name: "Tiktok", url: TIKTOK_URL },
    { name: "Instagram", url: INSTAGRAM_URL },
    { name: "Youtube", url: YOUTUBE_URL},
    { name: "Twitter", url: TWITTER_URL },
    // { name: "Facebook", url: FACEBOOK_URL },
    // { name: "Push.fm", url: "" },
    { name: "Spotify", url: SPOTIFY_URL },
    {name:"Whatsapp", url: WHATSAPP_URL}
  ];

  const links = [
    { name: "Home", url: "/" },
    { name: "Beats", url: "/beats" },
    { name: "Search", url: "/search" },
    { name: "Releases", url: "/releases" },
    { name: "About", url: "/About" },
  ];

  return (
    <>
      <Divider />
      <div className="bg-purple-dark-2 mainLayout pt-10 pb-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* intro */}
          <div className="block justify-between items-center">
            <div className="flex gap-x-3 items-center">
              <div className="w-7 h-7 bg-pink rounded-full"></div>
              <div className="text-xl font-bold">Prod. Kayks</div>
            </div>
            <div className="mt-4 flex gap-x-5">
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
            <div className="text-gray-400 mt-2">
              Get industry-ready instrumentals to fuel your next track.
            </div>
          </div>
          {/* socials */}
          <div className="">
            <div className="font-bold text-md">Socials</div>
            <div className="mt-2 block">
              {socials.map((social, index) => (
                <div className="mb-1" key={index}>
                  <Link target={"_blank"} href={social.url}>
                    {social.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="font-bold text-md">Links</div>
            <div className="mt-2 block">
              {links.map((link, index) => (
                <div className="mb-1" key={index}>
                  <Link href={link.url}>{link.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full py-5">
          <Divider />
        </div>
        <div className="text-center">
          &copy; Prod. Kayks 2024 | Designed and Built by{" "}
          <Link
            target="_blank"
            className="text-wood"
            href="https://okekedivine.vercel.app?ref=prod_kayks"
          >
            Dev Divine
          </Link>
        </div>
      </div>
    </>
  );
}
