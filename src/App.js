import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar1 from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Jinder from "./pages/Jinder";
import AddNote from "./components/AddNote";
import Notes from "./pages/Notes";
import EditNotes from "./pages/EditNotes";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swipejobs" element={<Jinder />} />
        <Route path="/addnote/:id" element={<AddNote />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/edit-note/:id" element={<EditNotes />} />
      </Routes>
    </div>
  );
}

export default App;
