import React from "react";
import { Link } from "react-router-dom";

export default function TypesList({types=[]}) {
  return (
    <div>
      <ul>
        {types.map((eachType, index) => {
          return (
            <li key={index}>
              <Link to={`/servicetype/${eachType._id}`}>{eachType.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
