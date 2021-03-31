import React, { Component } from "react";
import { Layout, Typography, PageHeader, Divider } from "antd";

import { List, Card, Rate } from "antd";
import { Link } from "react-router-dom";
import get from 'lodash/get';
import { courseMap, subjectMap } from "../database";
const { Header, Content, Footer } = Layout;
const {Title} = Typography;
const getCourseCard = (courseId) => {
  let course = courseMap[courseId]
  let subject = get(course,'Field', "Management");
  let subjectId = get(subjectMap,subject, "management");
  
  return (
    <Link to={`/course/${subjectId}/${courseId}`}>
       <Card className="course-card-small" style={{ maxWidth: "90vw",  minWidth: "10vw" }}>
        <Title level={5}>{course["Name Course"]}</Title>
        <span>({course["Degree"]})</span>
      </Card>
    </Link>);
}
const CollegeCardSmall = (props) => {
  const { college, courses } = props;
  let collegeImage = get(college,'image', 'gothe.jpg')

  return (
      <Card className="college-card-small-with-courses">
        <div className="college-card-small-content">
          <img
            className="collage-card-small-image"
            src={`${process.env.PUBLIC_URL}/images/${collegeImage}`}
          />
          <div className="college-card-small-footer">
            <span>{college["University"]}</span>
            <span>Rank : {college["University Ranking"]}</span>
          </div>
         { courses &&
          <>
          <Divider/>
          <h4>Matching Courses</h4>
            <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 2,
            }}
            dataSource={courses}
            renderItem={(courseId) => (
              <List.Item>
                {getCourseCard(courseId)}
              </List.Item>
            )}
          />
          </>
         }
        </div>
      </Card>
  );
};

export default CollegeCardSmall;
