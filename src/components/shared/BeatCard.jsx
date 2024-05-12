"use client";
import CTag from "../shared/CTag";
import Seperator from "../shared/Seperator";
import Divider from "../shared/Divider";
import Swal from "sweetalert2";
import Link from "next/link";

const download_msg =
  "Purchase a license to use the beat in your music. Feel free to use this beat on TikTok or IG any other platform! Just be sure to tag/credit me (@prod.kayks)";

const playBeat = (mp3_url, title, thumbnail) => {
  window.dispatchEvent(
    new CustomEvent("trackChange", { detail: { mp3_url, title, thumbnail } })
  );
};

function buyBeat() {
  Swal.fire({
    icon: "info",
    text: "This feature isn't ready yet. To purchase this beat message me on WhatsApp (Discount Included)",
  });
}

async function downloadFile(url, filename) {
  Swal.fire({
    title: "Beat Usage Information",
    html: download_msg,
    icon: "info",
  });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const fileUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Download error:", error);
  }
}

export default function BeatCard({
  title,
  desc,
  genre,
  thumbnail,
  bpm,
  beatKey,
  price,
  sold,
  free_download,
  mp3_url,
  beatId
}) {
  return (
    <>
      <div className="group w-[250px] h-fit p-2 rounded-lg border-2 border-white">
        {/* image container */}
        <div className="w-full h-[220px] bg-wood rounded-lg mb-3 overflow-hidden relative">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={thumbnail}
            alt={title + " - " + desc}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="text-white text-3xl"
              onClick={() => playBeat(mp3_url, title, thumbnail)}
            >
              <i className="fi fi-tr-play-circle opacity-50 group-hover:opacity-100 duration-300 text-6xl"></i>
            </button>
          </div>
        </div>

        {/*  */}
        <div>
          <CTag name={genre} />
        </div>
        <div className="font-bold mt-1 ">
          {sold === true ? "[SOLD] " : ""}
          <div className="break-words text-wrap">{title}</div>
        </div>
        <div className="text-gray-400 break-words text-wrap w-[250px]">
          {desc}
        </div>
        <div className="py-2">
          <Divider />
        </div>
        <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
          <div className="text-wood">${price}</div>
          <Seperator />
          <div>{bpm} BPM</div>
          <Seperator />
          <div>{beatKey}</div>
        </div>
        <div className="py-2">
          <Divider />
        </div>
        <div className="flex flex-wrap gap-2 py-2 justify-center items-center">
          {sold === true ? (
            <></>
          ) : (
            <>
              <button
                onClick={buyBeat}
                className="bg-pink text-white py-2 px-3 text-sm rounded-lg cursor-pointer"
              >
                Buy
              </button>
            </>
          )}
          {free_download === true ? (
            // <Link href={mp3_url} target="_blank" download>
            <button
              title={download_msg}
              onClick={() =>
                downloadFile(mp3_url, title + " - Prod. Kayks.mp3")
              }
              className="bg-purple-dark-2 text-white py-2 px-3 text-sm rounded-lg cursor-pointer"
            >
              Free Download
            </button>
          ) : (
            // </Link>
            <>
              <div></div>
            </>
          )}
          <Link href={window.location.protocol+"//"+window.location.host+"/beat/"+beatId} className="">L</Link>
        </div>
      </div>
    </>
  );
}
