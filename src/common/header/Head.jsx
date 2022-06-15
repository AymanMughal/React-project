import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> 0315-4456744</label>
            <i className="fa fa-envelope"></i>
            <label> Ayman@cuilahore.edu.pk</label>
          </div>
          <div className="right row RText">
            {/* <label>Theme FAQ"s</label> */}
            <label>Need Help?</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
