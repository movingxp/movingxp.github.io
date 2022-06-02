import React from "react";
import "./Education.css";

const Education = ({
  startDate,
  endDate,
  SchoolName,
  SchoolIcon,
  Program,
  Minor,
  Grade,
}) => {
  return (
    <div className="education--container">
        <SchoolIcon
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "16px"
          }}
          className="education--grid--3"
        />
      <p className="education--date s6 education--grid--2">
        {endDate ? `${startDate} - ${endDate}` : `${startDate}`}
      </p>
      <div className="education--information education--grid--4">
        <p className="education--school-name s8">{`${SchoolName}`}</p>
        {Program && <p className="education--program s7">{`${Program}`}</p>}
        {Minor && <p className="education--minor s7">{`${Minor}`}</p>}
        {Grade && <p className="education--grade s7">{`${Grade}`}</p>}
      </div>
    </div>
  );
};

export default Education;
