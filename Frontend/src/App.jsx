import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/createPost" element={<AddPost />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/editPost/:id" element={<EditPost/>}/>
      </Routes>
    </>
  );
}

export default App;
