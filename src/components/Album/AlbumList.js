import React from "react"
import { v4 as uuidv4 } from "uuid"
import AlbumCard from "./AlbumCard"

function AlbumList({ albums }) {
  return (
    <div className="albums-container">
      { albums && albums.map((album) => <AlbumCard album={album} key={uuidv4()} />) }
    </div>
  )
}

export default AlbumList