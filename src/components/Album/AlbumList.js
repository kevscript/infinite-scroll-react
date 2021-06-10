import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AlbumCard from './AlbumCard';

function AlbumList({ albums }) {
  return (
    <div className="albums-container">
      {albums &&
        albums.map((album) => (
          <div className="album-item" key={uuidv4()}>
            <AlbumCard album={album} />
          </div>
        ))}
    </div>
  );
}

export default AlbumList;
