export default function NewGenre() {
  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Beat | New</h1>
        <form action={createBeat} className="mt-5">
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
            <hr />
          </div>
          <div></div>
        </form>
      </div>
    </>
  );
}
