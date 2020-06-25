import React from "react";

const Card = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="col-xl-4 col-md-6 mt-3">
      <div className="card">
        <img
          src={avatar_url}
          width="200px"
          className="card-img-top"
          alt="User"
        />
        <div className="card-body bg-primary text-white justify-content-center">
          <h5 className="card-title d-flex justify-content-center">{login}</h5>
          <a
            href={html_url}
            className="btn btn bg-light d-flex justify-content-center"
          >
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
