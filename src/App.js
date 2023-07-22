import { useEffect, useState } from 'react';
import './App.css';
import Post from './Component/Post';
import Header from './Component/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PostDetails from './Component/PostDetails';
function App() {
  const [post, setPost] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (

    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" element={
            post.map(pst => <Post key={pst.id} post={pst}></Post>)
          } />
          <Route exact path="/Post/:PostDetails" element={<PostDetails />} />
          {/* <Route exact path="/country" element={<Country />} /> */}
          {/* <Route exact path="*" element={<Notfound />} /> */}
        </Routes>
      </Router>


    </div>
  );
}

export default App;
