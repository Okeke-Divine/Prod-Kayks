export default function ViewGenre({params}){
    let genreName = params.genreName;
    return (
        <>
        <div className="mainLayout">{genreName}</div>
        </>
    )
}