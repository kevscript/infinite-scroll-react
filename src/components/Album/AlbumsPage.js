import AlbumList from './AlbumList';
import { useAlbums } from "../../hooks/useAlbums"

function AlbumsPage() {

  const { albums } = useAlbums()

  return (
    <div>
      <h1>Albums</h1>
      <AlbumList albums={albums} />
    </div>
  )
}

export default AlbumsPage