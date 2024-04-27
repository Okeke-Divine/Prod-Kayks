"use client";
import CTag from "../shared/CTag";
import Divider from "../shared/Divider";

export function Genres() {
  return (
    <>
      <div className="mainLayout" id="beats">
        <div className="flex justify-center mb-2">
          <CTag name="Genres" />
        </div>
        <div className="mt-5 font-bold text-4xl text-center">Genres</div>

        <div className="mb-5"></div>
      </div>
    </>
  );
}
