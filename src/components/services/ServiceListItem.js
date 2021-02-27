import React from "react";
import { Link } from "react-router-dom";

export default function ServiceListItem({
  eachService,
  onServiceDeleteClick = () => {},
  isOwner = false,
}) {
  return (
    <div>
      <Link to={`/service/${eachService._id}`}>
    
        <h3>Service:{eachService.title}</h3>
      </Link>

      {isOwner && (
        <div>
          <p>Type:{eachService.type && eachService.type.title}</p>
          <Link to={`/service/${eachService._id}/edit`}>EDIT</Link>
          <button
            onClick={(event) => onServiceDeleteClick(event, eachService._id)}
          >
            DELETE
          </button>
        </div>
      )}
    </div>
  );
}
