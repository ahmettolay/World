import React, { useState } from "react";
import "../Pages/educations.css";

const Educations = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);

  const handleButton = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButton2 = () => {
    setIsExpanded1(!isExpanded1);
  };

  return (
    <div>
      <h1>Educations</h1>
      <div className="blog-sarmali">
        <div className="blog-wrapper">
          <div className="blog-card">
            <div className="card-img">
              <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
              <h1>Yurt Dışı Yüksek Lisans</h1>
            </div>
            <div className="card-details">
              <span>
                <i className="fa fa-calendar" />
                AUG 4
              </span>
              <span>
                <i className="fa fa-heart" />
                102
              </span>
            </div>
            <div className="card-text">
              <p>
                {isExpanded
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum. Aenean at lacus at turpis rutrum elementum. Nullam vel mauris quis magna fringilla gravida eu vel risus. Fusce in felis et magna pharetra euismod sed id quam. Nam vulputate placerat tortor. In suscipit tincidunt justo, in gravida risus elementum non. Vestibulum non enim vel magna faucibus ornare quis nec dui. Donec quis lorem at erat pellentesque porta sit amet et ipsum."
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum."}
              </p>
              <button className="read-more" onClick={handleButton}>
                Show {isExpanded ? "Less" : "More"}
              </button>
            </div>
          </div>
        </div>
        <div className="blog-wrapper">
          <div className="blog-card">
            <div className="card-img">
              <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
              <h1>Yurt Dışı Dil Okulları</h1>
            </div>
            <div className="card-details">
              <span>
                <i className="fa fa-calendar" />
                AUG 4
              </span>
              <span>
                <i className="fa fa-heart" />
                102
              </span>
            </div>
            <div className="card-text">
              <p>
                {isExpanded1
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum. Aenean at lacus at turpis rutrum elementum. Nullam vel mauris quis magna fringilla gravida eu vel risus. Fusce in felis et magna pharetra euismod sed id quam. Nam vulputate placerat tortor. In suscipit tincidunt justo, in gravida risus elementum non. Vestibulum non enim vel magna faucibus ornare quis nec dui. Donec quis lorem at erat pellentesque porta sit amet et ipsum."
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum."}
              </p>

              <button className="read-more" onClick={handleButton2}>
                Show {isExpanded1 ? "Less" : "More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
