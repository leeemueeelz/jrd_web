import React from "react";
import "../../src/resources/Skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="container py-5 text-center">
      <div className="skeleton mb-3" style={{ height: "40px", width: "50%" }}></div>
      <div className="skeleton mb-2" style={{ height: "20px", width: "80%" }}></div>
      <div className="skeleton mb-2" style={{ height: "20px", width: "90%" }}></div>
      <div className="skeleton mb-2" style={{ height: "20px", width: "70%" }}></div>
    </div>
  );
};

export default LoadingSkeleton;
