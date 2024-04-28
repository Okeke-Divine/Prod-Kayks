import prisma from "../../../../../db";
import { redirect } from "next/navigation";

export default function NewGenre() {
  async function createGenre(data) {
    "use server";

    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    const uname = data.get("uname");
    const pswd = data.get("pswd");

    if (uname !== username || password !== pswd) {
      return;
    }

    const name = data.get("name");
    // const thumbnail = data.get("thumbnail");

    if (typeof name !== "string" || name.length === 0) {
      return;
    } else {
      await prisma.genre.create({ data: { name } });
      redirect("/private/admin/genre");
    }
  }

  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Beat | New</h1>
        <form action={createGenre} className="mt-5">
          <div>
            <div className="adminInputContainer">
              <input
                type="text"
                className="adminInput"
                placeholder="Uname"
                name="uname"
              />
            </div>
            <div className="adminInputContainer">
              <input
                type="password"
                className="adminInput"
                placeholder="Pswd"
                name="pswd"
              />
            </div>
            <div className="py-5 px-10">
              <hr />
            </div>
          </div>
          <div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="adminInput"
              />
            </div>
            {/* <div className="adminInputContainer">
              <label className="adminInputLabel">Thumbnail</label>
              <input
                type="file"
                name="thumbnail"
                className="adminInput text-white"
                accept="image/*"
              />
            </div> */}
          </div>
          <button className="bg-pink py-2 px-5 rounded mt-1">Submit</button>
        </form>
      </div>
    </>
  );
}
