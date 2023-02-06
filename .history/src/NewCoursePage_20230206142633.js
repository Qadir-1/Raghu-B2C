/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import img from "./images/cart 5.png";

const NewCoursePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/course"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div className="NewCourse">
        <p>ABOUT</p>
      </div>

      <div className="NewCourseHeader">
        <img src={img} alt="" />
        <div></div>
      </div>

      {/* <div className="NewCourseThree">
      {data?.message?.map((i, index) => (
        <>
        <div className="main" key={index}>
          <button className="list">{i.title}</button>
          <div className="hoverElement specialDiv">
          {i?.mainInfo?.levels?.map((b , index) => (
                <button onClick={() => navigate(`/myCourse/${b._id}`)}>
                    {b.level}
                </button>
          ))}
          </div> 
        </div>
        </>
      ))}
      </div> */}

      <div className="NewCourseThree">
        <div className="main">
          <button className="list">Java</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne" onClick={() => navigate('/')}>
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart">
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate('/')}>
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart">
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate('/')}>
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart">
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>

           
          </div>
        </div>


        <div className="main">
          <button className="list">Python</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne">
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>

            <div className="bigOne">
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>

            <div className="bigOne">
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>


        <div className="main">
          <button className="list">Power Bi</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne">
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>

            <div className="bigOne">
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>

            <div className="bigOne">
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>



        <div className="main">
          <button className="list">Artificial Intelligence</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne">
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>

            <div className="bigOne">
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>

            <div className="bigOne">
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart" style={{ color: "red" }}>
                  {" "}
                </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCoursePage;
