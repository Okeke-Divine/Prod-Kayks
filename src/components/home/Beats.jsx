import Link from "next/link";
import CTag from "../shared/CTag";
import Divider from "../shared/Divider";
import ComponentTitle from "../shared/ComponentTitle";
import BeatCard from "../shared/BeatCard";

export default function Beats() {
  return (
    <>
      <div className="mainLayout" id="services">
        <div className="flex justify-center mb-2">
          <CTag name="Beats" />
        </div>
        <div className="my-5 font-bold text-4xl text-center">Beats</div>

        <div className="">
          <ComponentTitle name="Drills" url="/beats/?genre=drill" />
          <div className="flex whitespace-nowrap overflow-x-auto">
            <BeatCard />
            <BeatCard />
            <BeatCard />
            <BeatCard />
            <BeatCard />
            <BeatCard />
            <BeatCard />
            <BeatCard />
            <BeatCard />
            <BeatCard />
            <BeatCard />
          </div>
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}
