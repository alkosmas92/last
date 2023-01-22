import { Link } from "react-router-dom";

const Internship = (props) => {
  const {
    employer,
    file,
    flag_online,
    flag_save,
    for_company_id,
    infocomp,
    infointer,
    intership_id,
    jobtype,
    posision,
    postdate,
    salary,
    startdate,
    studies,
    title,
  } = props.user;

  console.log("props", props.url.concat(intership_id));

  return (
    <>
    <div>
      <nav>
        <ul>
          <div className="main">
            employer<p>{employer}</p>
            company id<p>{for_company_id}</p>
            company id<p>{for_company_id}</p>
            <Link to={props.url.concat(intership_id)} className="pet">
              <button className="button"> Continue </button>
            </Link>
          </div>
        </ul>
        </nav>

        </div>
    </>
  );
};

export default Internship;
