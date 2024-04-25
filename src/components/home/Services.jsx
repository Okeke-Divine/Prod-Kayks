import CTag from "../shared/CTag";
import ServiceItem from "./ServiceItem";

export default function Services() {
  return (
    <>
      <div className="mainLayout" id="services">
        <div className="flex justify-center mb-2">
          <CTag name="Services" />
        </div>
        <div className="my-5 font-bold text-4xl text-center">Our Services</div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 mt-5">
          <ServiceItem
            title="Mixing & Mastering"
            desc="Pro mixing & mastering services to bring your your music to an industry-ready track."
            iconClass="fi fi-tr-waveform-path"
            col={{ 
                border_col: "border-[rgb(247,39,125)]",
                bg_col: "bg-[rgb(247,39,125)]",
                text_col: 'text-white',
             }}
          />
          <ServiceItem
            title="Beats"
            desc="Fire instrumentals, all crafted from scratch to knock out your next track."
            iconClass="fi fi-ts-user-music"
            col={{ 
                border_col: "border-[rgb(255,215,128)]",
                bg_col: "bg-[rgb(255,215,128)]",
                text_col: 'text-black',
        }}
          />
          <ServiceItem
            title="Ghost Production"
            desc="Need a magic touch? Get a ghost producer to craft your sound behind the scenes."
            iconClass="fi fi-tr-head-side-headphones"
            col={{ 
                border_col: "border-[rgb(40,247,180)]",
                bg_col: "bg-[rgb(40,247,180)]",
                text_col: 'text-black',
             }}
          />
        </div>
      </div>
    </>
  );
}
