import React from "react";

function Body() {
  return (
    <div className="row mx-5 my-4 shadow-sm p-4 bg-light rounded-3">
      <div className="col-sm-5 col-12 dealer-content bg-white p-4 rounded-3">
        <div className="fw-bold fs-5 mb-3 d-flex align-items-center">
          SHREE HEMKUNT TYRES AND SERVICES
          <span className="offer-text ms-2 bg-success text-white px-2 py-1 rounded-pill d-inline-flex align-items-center">
            <i className="fa fa-check-circle me-1"></i> Verified
          </span>
        </div>
        <div className="row">
          <div className="d-flex align-items-center mt-2">
            <span className="ratingNumber-bg bg-primary text-white px-3 py-1 rounded-circle me-2">
              4.9
            </span>
            <ul className="list-inline stars d-inline-block mb-0 d-flex align-items-center top-item-rating">
              {Array.from({ length: 5 }).map((_, idx) => (
                <li
                  key={idx}
                  className={`star ${idx < 4 ? "selected" : ""}`}
                  title={["Poor", "Fair", "Good", "Excellent", "WOW!!!"][idx]}
                >
                  <i className="fa fa-star fa-fw text-warning"></i>
                </li>
              ))}
            </ul>
            <span className="text-muted ms-3">2278 Reviews</span>
            <button
              type="button"
              className="btn btn-outline-primary ms-3"
            >
              Rate
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-secondary">
            <i className="fa fa-map-marker-alt me-2"></i>
            PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-secondary">
            <i className="fa fa-clock me-2"></i>
            Open - Monday to Sunday - 10:00AM to 8:00PM
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-5">
            <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">
              <i className="fa fa-directions me-2"></i>
              Get Directions
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-7 col-12 text-end dealer-info-bg d-none d-sm-block bg-white p-4 rounded-3">
        <ul className="custom-carousel d-flex gap-3">
          {[
            "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
            "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
            "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
          ].map((imgSrc, idx) => (
            <li className="gallery-item item" key={idx}>
              <a href="#" className="custom-card" data-slide-to={idx + 1}>
                <div className="gallery_img">
                  <img
                    className="img-fluid rounded shadow-sm"
                    src={imgSrc}
                    alt={`Gallery Image ${idx + 1}`}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Body;
