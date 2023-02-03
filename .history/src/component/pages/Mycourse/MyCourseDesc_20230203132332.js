/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Topbar from "../../navigation/Topbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router";
import axios from 'axios'

const MyCourseDesc = () => {


  const  { id } = useParams()
  const  [ data , setData ] = useState([])

  const fetchHandler = useCallback(async () => {
    try{
      const { data } = await axios.get(`http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5555/api/v1/course/main/${id}`)
      setData(data)
    }catch(err){
      console.log(err)
    }
  },[id])

  useEffect(() => {
    fetchHandler()
  },[ fetchHandler])

console.log(data?.message?.[0]?.mainInfo?.video)
  return (
    <>
      <div
        className="courses_main_container"
        style={{ backgroundColor: "black" }}
      >
        <div className="course_header_content">
          <div className="navbarss">
            <Topbar />
          </div>
        </div>
      </div>

      <div className="NewTeoSec">
        <div className="left">
          <p className="CourseHead"> {data?.message?.[0]?.mainInfo?.aboutcourse?.heading} </p>
          <video controls>
            <source
            src={data?.message?.[0]?.mainInfo?.video}
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
          <div className="Over">
            <p className="Overview">Overview</p>
            <hr />
          </div>

          <div className="desc">
            <p className="about-head">About This Course</p>
            <p className="about-desc">
            {data?.message?.[0]?.mainInfo?.aboutcourse?.desc}
            </p>
            <p className="about-head">{data?.message?.[0]?.mainInfo?.level?.heading}</p>
            <p className="course-desc">
            {data?.message?.[0]?.mainInfo?.level?.desc}
            </p>
            <p className="include-head">This course includes the following:</p>
            <ul>
            {data?.message?.[0]?.mainInfo?.include?.map((i , index) => (
              <li key={index}>
                {i}
              </li>
            ))}
              {/* <li>5 hours of recorded sessions</li>
              <li>3 assignments</li>
              <li>1 mini-project</li>
              <li>Real-time contents</li>
              <li>Questions & Answers</li> */}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="CourseHead">Course Content</div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p">
                  Section 1 : Course Model Video
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p">
                  Section 2 : Beginner level Model Video
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p">
                  Section 3 : Python Introduction
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 4 : Python Basic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 5 : Python Basic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 6 : Python Functions & Arrays{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 7 : Python DataStructures
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 8 : Python OOP
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 9 : Python Modules
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 10 : Python Input Output
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 11 : Python Date & Time
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 12 : Conclusion
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 13 : Documentation
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourseDesc;