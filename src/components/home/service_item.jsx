export default function service_item({ title, desc, iconClass, col }) {
  const border_col = col.border_col;
  const bg_col = col.bg_col;
  const text_col = col.text_col;
  return (
    <>
      <div className={`${border_col} p-10 rounded-lg border-2 `}>
        <div className={`flex justify-center`}>
          <div
            className={`${bg_col} w-12 h-12 rounded-full flex justify-center items-center`}
          >
            <i className={iconClass + " font-bold text-2xl relative top-[3px] "+ text_col}></i>
          </div>
        </div>
        <div className="text-2xl font-bold text-center my-3">{title}</div>
        <div className="text-gray-400 text-center">{desc}</div>
      </div>
    </>
  );
}
