import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ServiceListItem({
  eachService = null,
  onServiceDeleteClick = () => {},
  isOwner = false,
}) {
  return (
    <div className="columns is-mobile border service-row">
      <div className="column">
        <p className="name">{eachService.title}</p>
      </div>
      <div className="column is-two-fifths-desktop">
        <p className="description">{eachService.description}</p>
        <p className="description">{eachService.credits} credits</p>
      </div>

      {isOwner && (
        <div>
          <Link
            className="buttons_profile "
            to={`/service/${eachService._id}/edit`}
          >
            EDIT
          </Link>
          <button
            className="buttons_profile "
            onClick={(event) => onServiceDeleteClick(event, eachService._id)}
          >
            DELETE
          </button>
        </div>
      )}
      {!isOwner && (
        <Link className="buttons_profile" to={`/service/${eachService._id}`}>
          More
        </Link>
      )}
    </div>
  );
}

ServiceListItem.prototype = {
  eachService: PropTypes.object,
  onServiceDeleteClick: PropTypes.func,
  isOwner: PropTypes.bool,
};
