// "use client";
import Link from "next/link";
import CTag from "../shared/CTag";
import Divider from "../shared/Divider";
import ComponentTitle from "../shared/ComponentTitle";
import BeatCard from "../shared/BeatCard";
import prisma from "../../db";

async function getBeatsByGenre(id) {
  return await prisma.beat.findMany({ where: { genreId: id } });
}

export default async function BeatsByGenre({ genre }) {
  const beats = await getBeatsByGenre(genre.id);

  return (
    <>
      <div className={`mb-5 ${(beats.length === 0 ? 'hidden' : 'block')}`} id={genre.id}>
        <ComponentTitle name={genre.name} url={`/beats/?genre=${genre.name}`} />
        <div className="beatFlex">
          {beats.map((beat, index) => (
            <div key={index}>
              <BeatCard
                title={beat.name}
                desc={beat.desc}
                genre={genre.name}
                thumbnail={beat.thumbnail}
                bpm={beat.bpm}
                beatKey={beat.key}
                price={beat.price}
                sold={beat.sold}
                free_download={beat.free_download}
                mp3_url={beat.mp3_url}
                beatId={beat.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
