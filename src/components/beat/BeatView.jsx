"use client";
import Divider from "../../components/shared/Divider";
import Seperator from "../../components/shared/Seperator";
import Swal from "sweetalert2";

const download_msg =
  "Purchase a license to use the beat in your music. Feel free to use this beat on TikTok or IG any other platform! Just be sure to tag/credit me (@prod.kayks)";

export const dynamic = "force-dynamic";

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

export default function BeatView({ beat }) {
  return (
    <>
      <div className="mainLayout">
        <div className="text-4xl font-bold break-words text-wrap">
          {beat.name}
        </div>
        {/* image container */}
        <div className="w-[300px] h-[300px] bg-wood rounded-lg my-3 overflow-hidden relative">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={beat.thumbnail}
            alt={beat.title + " - " + beat.desc}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="text-white text-3xl"
              onClick={() => playBeat(beat.mp3_url, beat.title, beat.thumbnail)}
            >
              <i className="fi fi-tr-play-circle opacity-50 group-hover:opacity-100 duration-300 text-6xl"></i>
            </button>
          </div>
        </div>
        {/* description */}
        <div className="break-words text-wrap">{beat.desc}</div>

        <div className="py-2">
          <Divider />
        </div>
        <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
          <div className="text-wood">${beat.price}</div>
          <Seperator />
          <div>{beat.bpm} BPM</div>
          <Seperator />
          <div>{beat.key}</div>
        </div>
        <div className="py-2">
          <Divider />
        </div>

        <div className="flex flex-wrap gap-2 py-2 items-center">
          {beat.sold === true ? (
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
          {beat.free_download === true ? (
            // <Link href={mp3_url} target="_blank" download>
            <button
              title={download_msg}
              onClick={() =>
                downloadFile(beat.mp3_url, beat.title + " - Prod. Kayks.mp3")
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
        </div>
      </div>
    </>
  );
}
