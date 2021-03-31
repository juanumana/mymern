import React, { Component } from "react";
import { Layout, Typography, PageHeader } from "antd";

import { List, Card, Rate } from "antd";
import { Link } from "react-router-dom";
import get from 'lodash/get';
const { Header, Content, Footer } = Layout;

const CollegeCardSmall = (props) => {
  const { college } = props;
  let collegeImage = get(college,'image', 'gothe.jpg')

  return (
      <Card className="college-card-small">
        <div className="college-card-small-content">
          <img
            className="collage-card-small-image"
            src={`${process.env.PUBLIC_URL}/images/${collegeImage}`}
          />
          <div className="college-card-small-footer">
            <span>{college["University"]}</span>
            <span>Rank : {college["University Ranking"]}</span>
          </div>
         
        </div>
      </Card>
  );
};

export default CollegeCardSmall;
