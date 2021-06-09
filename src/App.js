import { Switch, Link, Route } from "react-router-dom"
import AlbumsPage from "./components/Album/AlbumsPage"

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Albums</Link></li>
        <li><Link to="/others">Others</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
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