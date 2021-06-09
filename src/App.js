import { useCallback, useState } from 'react'
import { Switch, Link, Route } from "react-router-dom"
import AlbumsPage from "./components/Album/AlbumsPage"

function App() {
  const [albums, setAlbums] = useState([]);
  const [scrollCount, setScrollCount] = useState(albums.length / 20)

  const addAlbums = useCallback((newAlbums) => {
    setAlbums(albs => [...albs, ...newAlbums])
  }, []) 

  const triggerAlbumFetch = useCallback(() => {
    setScrollCount(n => n+1)
  }, [])

  return (
    <div>
      <ul>
        <li><Link to="/">Albums</Link></li>
        <li><Link to="/others">Others</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <AlbumsPage albums={albums} addAlbums={addAlbums} scrollCount={scrollCount} triggerAlbumFetch={triggerAlbumFetch} />
        </Route>
        <Route path="/others">
          <h1>Others</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App