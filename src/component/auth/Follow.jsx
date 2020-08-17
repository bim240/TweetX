import React from "react";
const Follow = (props) => {
  let image =
    "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png";
  let dummyData = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5];
  return (
    <section className="follow_container">
      {dummyData.map((data) => {
        return (
          <div className="single_follow">
            <div className="single_follow_container">
              <img src={image} alt="" />
              <h3 className="user_name">
                {" "}
                Bimlendu Kumar <br /> <small> Following : 200</small>
              </h3>
            </div>
            <button className="follow_btn"> Follow</button>
          </div>
        );
      })}
    </section>
  );
};

export default Follow;
