import React from "react"

function AlbumCard({album}) {
  return (
    <div className="album">
      <div className="album-img-container">
        <img className="album-img" src={album.url} alt={album.title} />
      </div>
      <div className="album-txt-container">
        <p className="album-title">{album.title}</p>
      </div>
    </div>
  )
}

export default AlbumCard
