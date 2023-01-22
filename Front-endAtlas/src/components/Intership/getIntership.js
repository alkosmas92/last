import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Internshiprequest from "../Student/IntershipRequest";
import CreateInteship from "./createIntership";
import CheckRelasionship from "../Student/CheckRelasionship";
import IntershipNolink from "./IntershipNolink";

const GetIntership = () => {
  const { id, studentid } = useParams();
  const [userdata, setUserdata] = useState({});
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(0);
  const [count1, setCount1] = useState(0);
  const [flag1, setFlag1] = useState(0);
  function isEmptyObject(obj) {
    return obj === "{}";
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    console.log("flag", flag);
    console.log("count", count);

    console.log("flag", flag);
    console.log("count", count);
    const result = await fetch(`http://localhost:8080/api/intership/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserdata(data);
      });
  }

  return (
    <div className="main">
      {!isEmptyObject(userdata) ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <></>
              <div>
                hello
                {/*<div key={userdata.intership_id} className="infoadmin">*/}
                <IntershipNolink user={userdata} />
              </div>
            </div>
          </form>
          <CheckRelasionship
            count={count}
            setCount={setCount}
            flag={flag}
            setFlag={setFlag}
            count1={count1}
            setCount1={setCount1}
            flag1={flag1}
            setFlag1={setFlag1}
            id={id}
            studentid={studentid}
          />
        </>
      ) : (
        <div>
          <h1> loading... </h1>
        </div>
      )}
    </div>
  );
};

export default GetIntership;
