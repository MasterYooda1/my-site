export default function Song( { index, image, title, artist, year, description } ) {
    return (
        <div className="song-box">
            <div className="song-index">{index}.</div>
            <div className="song-cover"><img src={image} height={150} width={150} alt="album cover"/></div>
            <div className="song-info">
                <h2 className="song-title">{title} <span className="song-artist">{artist}, {year}</span></h2>
                <p>{description}</p>
            </div>
        </div>
    );
}