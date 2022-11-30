import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";
import { Link } from "react-router-dom";

function Notes() {
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setNotes(response.data.favoriteJobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, [user]);

  const deleteNote = async (notesId, jobId) => {
    try {
      let response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/notes/${notesId}/${jobId}/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      getNotes()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {notes &&
        notes.map((note) => {
          return (
            <div>
              <h3>{note.name}</h3>
              <h4>{note.title}</h4>

              {/* DESCRIPTION */}
              {/*             <div
                dangerouslySetInnerHTML={{ __html: note.description }}
                style={{
                  height: 250,
                  "overflow-y": "scroll",
                  "overflow-x": "hidden",
                  "text-align": "center",
                }}
              /> */}

              {/* NOTES */}
              <h5>Notes:</h5>
              <p>{note.notes.content}</p>
              <Link to={`/edit-note/${note.notes._id}`}>Edit note</Link>
              <Link onClick={() => deleteNote(note.notes._id, note._id)}>
                Delete note
              </Link>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default Notes;
