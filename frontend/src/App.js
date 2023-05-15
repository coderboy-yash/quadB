import React from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import List from "./components/List";

function App() {
  return (
    <div>
      <Navbar />
      <Stats />
      <List />
      <div className="h-20 text-zinc-700 mt-10">copyright@ yash</div>
      <div className="fixed bottom-0 left-0 right-0 w-full  flex justify-center bg-[#191D28]  mx-auto ">
        <button className="border-[#5dc7c2] border-[1px]   text-[#5dc7c2] p-2 font-InstrumentSans">
          Add hodlinfo to home screen
        </button>
      </div>
    </div>
  );
}

export default App;
