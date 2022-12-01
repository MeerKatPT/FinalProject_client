import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function AddNote(props) {
  const [content, setContent] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const getToken = localStorage.getItem("authToken");

  const handleContent = (e) => setContent(e.target.value);

  const body = { content };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/jobs/${id}/notes`,
        body,
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
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;

//   content: { type: String, required: true },
//   author: { type: Schema.Types.ObjectId, ref: "User" },
