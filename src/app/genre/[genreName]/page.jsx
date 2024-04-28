export default function ViewGenre({params}){
    const genreName = params.genreName;
    return (
        <>
        <div className="mainLayout">{genreName}</div>
        </>
    )
}