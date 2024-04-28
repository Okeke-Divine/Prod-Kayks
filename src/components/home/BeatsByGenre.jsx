// "use client";
import Link from "next/link";
import CTag from "../shared/CTag";
import Divider from "../shared/Divider";
import ComponentTitle from "../shared/ComponentTitle";
import BeatCard from "../shared/BeatCard";
import prisma from "../../db";

export default async function BeatsByGenre({ genre }) {
  return (
    <>
      <div className="mb-5">
        <ComponentTitle name={genre.name} url={`/beats/?genre=${genre.name}`} />
        <div className="beatFlex">

        </div>
      </div>
    </>
  );
}
