import { useEffect } from 'react'
import throttle from "lodash.throttle"
import AlbumList from './AlbumList';

function AlbumsPage({ albums, addAlbums, scrollCount, triggerAlbumFetch }) {

  useEffect(() => {
    const checkScroll = throttle(() => {
      const { clientHeight, scrollHeight, scrollTop } = document.documentElement
      console.log(clientHeight, scrollHeight, scrollTop)
      // if at bottom of client window, trigger a new fetch
      if (scrollHeight === clientHeight + scrollTop) {
        console.log("BOTTOM")
        triggerAlbumFetch()
      }
    }, 500)

    window.addEventListener("scroll", checkScroll)

    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${scrollCount ? scrollCount*20 : 0}&_limit=20`)
      .then(res => res.json())
      .then(fetchedAlbums => addAlbums(fetchedAlbums))

      return () => {
        window.removeEventListener("scroll", checkScroll)
      }
  }, [scrollCount, triggerAlbumFetch, addAlbums])

  return (
    <div>
      <h1>Albums</h1>
      <AlbumList albums={albums} />
    </div>
  )
}

export default AlbumsPage