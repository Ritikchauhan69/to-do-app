import { useState } from "react";
import "./App.css";
import photo from "./to-do-img.avif";
let Id = 0;
function App() {
  const [Name, setName] = useState("");
  const [Item, addItem] = useState([]);
  const handleDeleteItem = (id) => {
    addItem(Item.filter((item) => item.id !== id));
  };
  return (
    <>
    <div className="form"><div className="form-1">
        <h2>
          To-Do-List {" "} &nbsp;
          <img src={photo} alt="no-referrer" className="to-do-img" />
        </h2>
        <div className="input">
          <div className="input-1">
            <div className="input-2"><input placeholder="enter your task" className="input-task" value={Name} onChange={(e) => setName(e.target.value)} />
          <button className="add-btn" type="button"
              onClick={() => {
                addItem([...Item, { id: Id++, name: Name }]);
                setName("");
              }}
            >
              Add
            </button></div>
            
            
            <ul className="unordered-list">
              {Item.map((item) => (
                <li className="list-item" key={item.id}>
                  {item.name}{" "}
                  <button className="delete-btn" onClick={() => handleDeleteItem(item.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div></div>
      
    </>
  );
}

export default App;
