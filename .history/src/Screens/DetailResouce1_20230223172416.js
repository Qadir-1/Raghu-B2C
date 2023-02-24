/** @format */

import React from "react";
import Header from "../Header/Header";
import img from "../images/image 1.png";
import img2 from "../images/image 2.png";
import img3 from "../images/image 3.png";
import img4 from "../images/image 4.png";
import img5 from "../images/image 5.png";
import img6 from "../images/image 6.png";

const data = [
  {
    image: img2,
    head: "1.	Prepare your portfolio according to the job title",
    desc: [
      "When you apply for a job, make sure your portfolio and skills match the job title. It’s very important to let the interviewer know that you’re 100% fit or eligible for the job role you’ve applied for. This will increase your chances of cracking the job interview."
    ],
  },
  {
    image: img3,
    head: "2.	Research about the company before attending the interview",
    desc: [
      "Researching about the company is the first and most important thing to be done right before you attend the job interview. You should know about the company where you’re interested to work. The interviewer may ask questions about the company, why you’re interested in joining their company, and how you can make a difference there with your skills and experience. Be prepared to answer these questions well in advance. ",
    ],
  },
  {
    image: img4,
    head: "3.	Communicate clearly with direct eye contact",
    desc: [
      " It is very important to communicate clearly with your interviewer. Answering questions with direct eye contact will show how confident you are and make your personality more attractive. You need to practice answering a few important questions at home in front of the mirror before attending the interview. But don’t practice too much and take stress. Just rehearse once or twice to stay relevant. ",
    ],
  },
  {
    image: img5,
    head: "4.	Dress appropriately and be punctual",
    desc: [
      "Pick up your formals and dress up in a decent way. Don’t apply too much makeup. You should look neat and dress appropriately for the job interview. Be punctual and reach the interview venue at least 15-20 mins in advance. Never ever rush to the venue at the last moment. Start early from home and also calculate the time you’d be stuck in the traffic. .     ",
      "AWS offers over 200 fully-featured services, and is also the only cloud provider that offers the highest number of services and respective features.",
    ],
  },
  {
    image: img6,
    head: "5.	SALESFORCE DEVELOPER",
    desc: [
      "Salesforce is an American cloud computing company, known for Customer Relationship Management (CRM). It is used to manage the customer interactions, and its products are used for administrator, consulting, and development. Salesforce has a lot of important applications like financial services cloud, health cloud, sales cloud, App cloud, service cloud, Force.com, chatter, commerce cloud, and marketing cloud. ",
      "Most of the Fortune 500 companies look for salesforce professionals to increase their Return-On-Investment or ROI. Salesforce developers are in huge demand everywhere, especially in the IT industry. Salesforce experts are paid very high, as they help the companies maintain a good relationship with the customers, market their products/services, and generate revenue. ",
    ],
  },
];

const DetailResouce1 = () => {
  return (
    <>
      <Header />
      <div className="detailResourceFirst">
        <img src={img} alt="" />
        <p style={{fontSize : '1.4rem' , marginTop : '20px'}}>Your first impression matters and it’s your responsibility to make sure that your first impression is up to the mark, especially in a job interview. Let’s discuss the top 5 tips to help you crack a job interview.</p>
      </div>


      {data.map((i, index) => (
        <div className="detailResourceSecond" key={index}>
          <p className="head"> {i.head} </p>
          <img src={i.image} alt="" />
          {i.desc.map((a, index) => (
            <p className="desc" key={index}>
              {a}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default DetailResouce1;
