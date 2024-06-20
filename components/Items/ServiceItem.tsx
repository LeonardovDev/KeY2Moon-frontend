import React from "react";

import "@/app/assets/css/Item.css";

interface IServiceItemProps {
  children: React.ReactNode;
}

const ServiceItem = ({ children }: IServiceItemProps) => {
  return (
    <div className="service-item text-description md:text-miniTitle pr-4 md:pr-6">
      {" "}
      <p>
        {" "}
        <span className="bullet mr-6 text-4  md:text-[26px]">&#9900;</span>{" "}
        {children}
      </p>{" "}
    </div>
  );
};

export default ServiceItem;
