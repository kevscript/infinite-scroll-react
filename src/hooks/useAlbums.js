import { useState, useEffect, useCallback, useContext, createContext } from "react"
import throttle from "lodash.throttle"

const useAlbumsHook = () => {
  const [albums, setAlbums] = useState([])
  const [scrollCount, setScrollCount] = useState(albums.length / 20)

  const addAlbums = useCallback((newAlbums) => {
    setAlbums(albs => [...albs, ...newAlbums])
  }, [])
  
  const triggerAlbumFetch = useCallback(() => {
    setScrollCount(n => n+1)
  }, [])

  useEffect(() => {
    const checkScroll = throttle(() => {
      const { clientHeight, scrollHeight, scrollTop } = document.documentElement
      // if at bottom of client window, trigger a new fetch
      if (scrollHeight === clientHeight + scrollTop) {
        console.log("BOTTOM OF CLIENT WINDOW, TRIGGER REFETCH")
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

  return {
    albums,
    scrollCount,
    addAlbums,
    triggerAlbumFetch
  }
}

const albumsContext = createContext()

export const AlbumsProvider = ({ children }) => {
  const albumsData = useAlbumsHook()
  return (
    <albumsContext.Provider value={albumsData} >
      { children }
    </albumsContext.Provider>
  )
}

export const useAlbums = () => useContext(albumsContext)