import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditNotes() {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const getToken = localStorage.getItem("authToken");

  const getNote = async () => {
    try {
      const foundNote = await axios.get(
        `${process.env.REACT_APP_API_URL}/getnote/${id}`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      console.log(foundNote.data);
      setContent(foundNote.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNote();
  }, []);

  const handleContent = (e) => setContent(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/notes/${id}`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      navigate("/notes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="notesDiv">
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Write your notes here</label>
        <textarea
          name="content"
          value={content}
          cols="30"
          rows="10"
          onChange={handleContent}
        ></textarea>
        <button type="submit">Edit Note</button>
      </form>
    </div>
  );
}

export default EditNotes;
