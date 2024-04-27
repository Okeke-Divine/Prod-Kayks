export default function NewBeat() {
  async function createBeat(data) {
    "use server"

    console.log(data)
  }
  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Beat | New</h1>
        <form action={createBeat}></form>
      </div>
    </>
  );
}
