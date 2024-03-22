// import card from "../public/img.png";
import { CiSearch } from "react-icons/ci";
import "./App.css";

const Card = () => {
  return (
    <div className="container">
      <div className="box" style={{ color: "white" }}>
        <div className="content">
          <div className="icon">
            <CiSearch />
          </div>
          <div className="text">
            <h3>Designing</h3>
            <p>
              Lorem, ipsum dolor sit 
            </p>
        
          </div>
        </div>
      </div>
      <div className="box" style={{ color: "white" }}>
        <div className="content">
          <div className="icon">
            <CiSearch />
          </div>
          <div className="text">
            <h3>Designing</h3>
            <p>
              Lorem, ipsum dolor sit 
              distinctio?
            </p>
        
          </div>
        </div>
      </div>
      <div className="box" style={{ color: "white" }}>
        <div className="content">
          <div className="icon">
            <CiSearch />
          </div>
          <div className="text">
            <h3>Designing</h3>
            <p>
              Lorem, ipsum dolor sit 
            </p>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
