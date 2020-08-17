import React from "react";
const Follow = (props) => {
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";
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
