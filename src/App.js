import { Switch, Link, Route } from "react-router-dom"
import AlbumsPage from "./components/Album/AlbumsPage"

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/others">Others</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/albums">
          <AlbumsPage/>
        </Route>
        <Route path="/others">
          <h1>Others</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App