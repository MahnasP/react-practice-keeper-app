import React from "react";

function CreateArea(props) {
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
      <form>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={changeHandler}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
                  onClick={(event) => {
                    event.preventDefault();
            props.addhandler(note);
                      setNote({title: "",content: "",});
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
