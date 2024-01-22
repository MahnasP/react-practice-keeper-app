import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [expand, setExpand] = useState(false);
    function expandinput() {
    setExpand(true);
  }

  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value,
    });
  }

  return (
    <div>
      <form className="create-note">
        {expand && (
          <input
            onChange={changeHandler}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={expandinput}
          onChange={changeHandler}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              props.addhandler(note);
              setNote({ title: "", content: "" });
              setExpand(false);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
