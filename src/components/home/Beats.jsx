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
    {
      title: "Afro Groove",
      description: "Energetic Burna Boy type beat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Fusion",
      description: "Funky Wizkid type beat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Swing",
      description: "Smooth Afro B type beat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Pop",
      description: "Upbeat Davido type beat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Jazz",
      description: "Jazzy Fela Kuti type beat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Dancehall",
      description: "Danceable Patoranking type beat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Reggae",
      description: "Reggae-infused Afrobeat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Trap",
      description: "Trap-influenced Afrobeat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Highlife",
      description: "Classic Highlife style beat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro R&B",
      description: "Soulful Afrobeat with R&B vibes",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro House",
      description: "House music-inspired Afrobeat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Soca",
      description: "Soca-infused Afrobeat",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro EDM",
      description: "Electronic Dance Music with Afrobeat elements",
      genre: "Afrobeat",
      imgUrl: "",
    },
    {
      title: "Afro Chill",
      description: "Relaxed Afrobeat for chilling",
      genre: "Afrobeat",
      imgUrl: "",
    },
  ];
  const drill_beats = [
    {
      title: "Dark Turn",
      description: "Menacing drill beat with hard-hitting 808s",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Astral Drill",
      description: "Drill beat infused with celestial vibes",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Neon Blaze",
      description: "Electrifying New York drill beat",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Lunar Drill",
      description: "Drill beat with lunar melodies",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Savage Symphony",
      description: "High-energy drill beat for the streets",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Crimson Echo",
      description: "Echoing and intense drill beat",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Vortex Vibe",
      description: "Chilled-out drill beat with vortex vibes",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Shadow Strike",
      description: "Shadowy and raw drill beat",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Apex Aura",
      description: "Hard-hitting drill beat with an apex aura",
      genre: "Drill",
      imgUrl: "",
    },
    {
      title: "Eclipse Elegance",
      description: "Elegant and flex-worthy drill beat",
      genre: "Drill",
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
          <div className="beatFlex">
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
          <div className="beatFlex">
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
        {/* drills */}
        <div className="mb-5">
          <ComponentTitle name="Drills" url="/beats/?genre=drill" />
          <div className="beatFlex">
            {drill_beats.map((beat, index) => (
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
        {/* traps */}
        <div className="mb-5">
          <ComponentTitle name="Traps" url="/beats/?genre=trap" />
          <div className="beatFlex">
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
      </div>
      <br />
      <Divider />
    </>
  );
}
