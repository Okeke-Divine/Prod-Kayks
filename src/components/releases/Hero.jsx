import Image from "next/image";
import Link from "next/link";
import Divider from "../shared/Divider";
import CTag from "../shared/CTag";

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
            <div className="w-full md:w-1/2">
              <CTag name="Producer" />
              <div className="mt-3 text-4xl">
                Prod. <span className="font-bold">Kayks</span>
              </div>
              <div className="mt-5 text-gray-400">
                Over 3 years of crafting fire beats for renowned artists like
                Schway, Joven Lastkid, Ecoh MDK, Biggie Fx, VoltageIsNotAKid etc as
                well as top labels like{" "}
                <Link
                  className="text-wood"
                  href="https://www.instagram.com/bluenax1"
                  target={"_blank"}
                >
                  Bluenax Productions
                </Link>{" "}
                (Tega Boi DC, Edo Zamani, Kenzo Ik, Endeetone, Datboi Smee). Get
                industry-ready instrumentals to fuel your next track.
              </div>
              <div className="flex flex-wrap gap-5 items-center mt-10">
                <Link href="/#services">
                  <button className="border-2 border-gray-600 py-3 px-4 rounded-lg">
                    Services
                  </button>
                </Link>
                <Link href="/beats">
                  <button className="border-2 border-pink py-3 px-4 rounded-lg bg-pink">
                    Beats
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-fit flex">
              <Image
                alt="Music producer illustration"
                className="hidden md:block w-[500px]"
                src="/assets/images/10315339.png"
                draggable={false}
                width="612"
                height="408"
              />
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
