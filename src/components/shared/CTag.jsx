export default function CTag({ name }) {
  return (
    <>
      <div className="text-wood border-2 border-wood rounded-lg py-1 px-3 uppercase text-xs bg-[rgba(255,215,128,0.1)] bg-opacity-20 w-fit">
        <span className="relative top-[1px]">{name}</span>
      </div>
    </>
  );
}
