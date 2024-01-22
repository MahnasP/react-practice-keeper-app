import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notesarr, setNotesarr] = React.useState([]);

  function addnewnote(newnote) {
    let newkey;
    if (notesarr.length > 0) {
      const { key: lastkey } = notesarr[notesarr.length - 1]; //getting last obj from arr and destructuring obj to get last key
      newkey = lastkey + 1;
    }
    else
      newkey = 0;
    setNotesarr((prevvalue) => {
      return [
        ...prevvalue,
        {
          key: newkey,
          title: newnote.title,
          content: newnote.content,
        },
      ]
    });
  }


  function delnote(currkey) {
    setNotesarr(notesarr.filter((eachnote) => eachnote.key !== currkey));
  }



  return (
    <div>
      <Header />
      <CreateArea addhandler={addnewnote} />
      {notesarr?.map((note) => {
        return <Note key={note.key} id={note.key} title={note.title} content={note.content} ondel={delnote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
