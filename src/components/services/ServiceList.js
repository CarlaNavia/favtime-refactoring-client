import React from "react";
import ServiceListItem from "./ServiceListItem";

export default function ServiceList({
  services = [],
  onServiceDeleteClick = () => {},
  isOwner = false,
}) {
  return (
    <div>
      {services.length === 0 && "Unfortunately there are not services."}

      {services.map((eachService) => {
        return (
          <ServiceListItem
            key={eachService._id}
            eachService={eachService}
            onServiceDeleteClick={onServiceDeleteClick}
            isOwner={isOwner}
          />
        );
      })}
    </div>
  );
}
