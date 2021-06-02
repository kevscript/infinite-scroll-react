import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

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

function App() {

  const [trigger, setTrigger] = useState(0)
  const [start, setStart] = useState(0)
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const checkScroll = throttle(() => {
      const { clientHeight, scrollHeight, scrollTop } = document.documentElement
      console.log(clientHeight, scrollHeight, scrollTop)
      if (scrollHeight === clientHeight + scrollTop) {
        console.log("BOTTOM")
        setTrigger(n => n+1)
        window.removeEventListener("scroll", checkScroll)
      }
    }, 500)

    window.addEventListener("scroll", checkScroll)

    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=20`)
      .then(res => res.json())
      .then(data => {
        setAlbums(list => [...list, ...data])
        setStart(s => s+20)
      })
  }, [trigger])

  return (
    <div>
      <div className="albums-container">
        {albums.length > 0 && albums.map(album => <AlbumCard album={album} key={`${album.id}-${album.albumId}-${album.title}`} />)}
      </div>
    </div>
  );
}

export default App;
