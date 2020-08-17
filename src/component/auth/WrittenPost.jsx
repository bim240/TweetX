import React from "react";
const WrittenPost = (props) => {
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";
  let dummyData = [
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
  ];
  return (
    <section className="written_post_container">
      {dummyData.map((feed, i) => {
        return (
          <div className="single_feed" key={i}>
            <div className="feed_header_section">
              <div className="sender_details">
                <img src={feed.image} className="sender_image" alt="img" />
                <div className="sender_time_name">
                  <h5 className="sender_name">{feed.name}</h5>
                  <h6 className="time">10 min</h6>
                </div>
              </div>
            </div>
            <div className="feed_body">{feed.text}</div>
          </div>
        );
      })}
    </section>
  );
};

export default WrittenPost;
