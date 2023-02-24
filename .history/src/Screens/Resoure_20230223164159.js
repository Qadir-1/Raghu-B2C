/** @format */

import React, { useEffect, useState } from "react";
import img from "../images/66.png";
import img2 from "../images/111.png";
import img3 from "../images/Rectangle 11.png";
import axios from "axios";

const Resoure = () => {
  const [blog, setBlog] = useState("");

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog"
      );
      setBlog(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getVideo = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/videos"
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="ResourceFirst">
        <img src={img} alt="" />
      </div>
      <div className="ResourceSecond">
        <div className="text">
          <p className="first">Our Latest</p>
          <p className="second">Articles & Blogs</p>
        </div>

        {blog?.data?.map((i, index) => (
          <div className="other" key={index}>
            <img src={i.image} alt="" />
            <div className="down">
              <p className="upper"> {i.date} </p>
              <p className="mid">{i.desc.substring(0, 100) + "..."}</p>
              <p className="last">Read More...</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ResourceFirst" style={{ marginTop: "2%" }}>
        <img src={img3} alt="" />
      </div>

      <div className="ResourceThird">
        <p className="Text">
          Informative <br />
          <span style={{ color: "#423C84" }}>Videos</span>
        </p>
        <div className="videoDiv">
          <video
            controls
            src={
              "https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
            }
          >
            {/* <source src={video} type="video/mp4" /> */}
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </>
  );
};

export default Resoure;