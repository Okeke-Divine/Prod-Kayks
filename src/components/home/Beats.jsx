import Link from "next/link";
import CTag from "../shared/CTag";
import Divider from "../shared/Divider";
import ComponentTitle from "../shared/ComponentTitle";
import BeatCard from "../shared/BeatCard";

export default function Beats() {
  const afro_beats = [
    {
      title: "Riddim",
      description: "Calm Arya Starr type beat",
      genre: "Afrobeat",
      imgUrl: "",
    },
  ];

  return (
    <>
      <div className="mainLayout" id="services">
        <div className="flex justify-center mb-2">
          <CTag name="Beats" />
        </div>
        <div className="my-5 font-bold text-4xl text-center">Beats</div>

        {/* afro */}
        <div className="mb-5">
          <ComponentTitle name="Afro Beats" url="/beats/?genre=afro-beats" />
          <div className="flex flex-nowrap whitespace-nowrap overflow-x-auto gap-3 pb-2">
            {afro_beats.map((beat, index) => (
              <div key={index}>
                <BeatCard
                  title={beat.title}
                  description={beat.description}
                  genre={beat.genre}
                  imgUrl={beat.imgUrl}
                />
              </div>
            ))}
          </div>
        </div>
        {/* amapiano */}
        <div className="mb-5">
          <ComponentTitle name="Amapiano" url="/beats/?genre=amapiano" />
        </div>
        {/* drills */}
        <div className="mb-5">
          <ComponentTitle name="Drills" url="/beats/?genre=drill" />
        </div>
        {/* traps */}
        <div className="mb-5">
          <ComponentTitle name="Traps" url="/beats/?genre=trap" />
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}
