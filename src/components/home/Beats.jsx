import Link from "next/link";
import CTag from "../shared/CTag";
import Divider from "../shared/Divider";

export default function Beats() {
  return (
    <>
      <div className="mainLayout" id="services">
        <div className="flex justify-center mb-2">
          <CTag name="Beats" />
        </div>
        <div className="my-5 font-bold text-4xl text-center">Beats</div>

        <div className="">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">Drills</div>
            <div>
              <Link className="text-wood" href={"/beats/?genre=drill"}>
                See All
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}
