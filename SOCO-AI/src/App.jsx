import e from "cors";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export default function App() {
  const handleinputchange = (e) => {
    setText(e.target.value);
  };
  const handledsubmit = (e) => {
    e.preventDefault();
    alert(text);
    setText("");
  }
  const handleThemeChange = (e) => {
    e.preventDefault();
    setTheme(theme == "light" ? "dark" : "light");
  }
  const [theme, setTheme] = useState(" DARK ");
  const [text,  setText] = useState("");
  return (
    <div className={`h-screen wwcreen flex-col justify-center item-center ${theme=="light"? "bg-white":"bg-gray-900"}` }>
      <div className="p-9 bg-gray-400  rounded-md py-20 ">
        <input type="flex"className=" py-2 border-1  bg-gray-300 rounded-md " value ={text} onChange={handleinputchange}/>
        <button className="p-10 px-1 py-1 bg-green-900 rounded-md   px-5 m-2 " onClick={handledsubmit} >Submit</button>
        <button className="" onClick={handleThemeChange}>
          {theme === "light" ?
            <SunIcon/>
:
            <MoonIcon />
          }
        </button>
      </div>
    </div>
  );
}
