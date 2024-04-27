export default function NewBeat() {
  async function createBeat(data) {
    "use server";

    console.log(data);
  }
  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Beat | New</h1>
        <form action={createBeat} className="mt-5">
          <div>
            <div className="adminInputContainer">
              <input type="text" name="name" placeholder="Beat name" className="adminInput" required />
            </div>
            <div className="adminInputContainer">
              <input type="number" name="code" placeholder="Beat code" className="adminInput" />
            </div>
          </div>
          <button className="bg-pink py-2 px-5 rounded mt-1">Submit</button>
        </form>
      </div>
    </>
  );
}
