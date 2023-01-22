import { useState, useEffect } from "react";
import SearchAndInternship from "../SearchAndInternship";
import Menu from "./Menu";

const Home = () => {
  const [userdata, setUserdata] = useState({});
  function isEmptyObject(obj) {
    return JSON.stringify(obj) === "{}";
  }
  useEffect(() => {}, []);

  return (
    <>
      <Menu />
      <div className="Mainhome">
        <SearchAndInternship />
      </div>
    </>
  );
};

export default Home;
