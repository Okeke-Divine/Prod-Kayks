export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex gap-2">
        <div className="py-10 px-3">Genre Beat</div>
        <div>{children}</div>
      </div>
    </>
  );
}
