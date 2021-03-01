import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ServiceListItem({
  eachService = null,
  onServiceDeleteClick = () => {},
  isOwner = false,
}) {
  return (
    <div className="columns is-mobile border">
      <Link className="service-more" to={`/service/${eachService._id}`}>
        Service:{eachService.title} <br />
        Credits: {eachService.credits}
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

ServiceListItem.prototype = {
  eachService: PropTypes.object,
  onServiceDeleteClick: PropTypes.func,
  isOwner: PropTypes.bool,
};
