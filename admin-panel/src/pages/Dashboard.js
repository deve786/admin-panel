import React from "react";

function Dashboard() {
  return (
    <div>
      <div className="row pl-4 d-flex justify-content-evenly pr-4 ">
        <div
          className="card text-white bg-primary mb-3 "
          style={{ maxWidth: "18rem",minHeight:'10rem' }}
        >
          <div className="card-header">Customer</div>
          <div className="card-body">
            <h5 className="card-title">10000+</h5>
            <p className="card-text">
              
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-secondary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Post</div>
          <div className="card-body">
            <h5 className="card-title">37</h5>
            <p className="card-text">
            </p>
          </div>
        </div>
      </div>
      <div className="row pl-4 d-flex justify-content-evenly pr-4">
        <div
          className="card text-white bg-primary mb-3 "
          style={{ maxWidth: "18rem",minHeight:'10rem' }}
        >
          <div className="card-header">Comments</div>
          <div className="card-body">
            <h5 className="card-title">600+</h5>
            <p className="card-text">
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-secondary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Earning</div>
          <div className="card-body">
            <h5 className="card-title">$100</h5>
            <p className="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
