import React from "react";
import { Link } from "react-router-dom";
import Icon from "../services/Icon";
import PropTypes from "prop-types";
import "./TypesList.css";

export default function TypesList({ types = [] }) {
  return (
    <div className="wrapper">
      {types.map((eachType, index) => {
        return (
          <div key={index} className="boxCategory">
            <Link className="nameCategory" to={`/servicetype/${eachType._id}`}>
              <Icon code={eachType.iconCode} />
              <h6 className="h6Type">{eachType.title}</h6>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

TypesList.prototype = {
  types: PropTypes.array,
};
