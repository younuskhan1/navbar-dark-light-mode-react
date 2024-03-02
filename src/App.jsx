import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  
  useEffect(()=>{
    localStorage.setItem("current_theme", theme);
  },[theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
    </div>
  );
};

export default App;