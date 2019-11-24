import React from "react";

const Image = props => {
  // console.log(props);
  const { imageCat } = props;
  return (
    <div style={{ marginTop: "20px" }} key={props.id}>
      {imageCat.url ? (
        <div>
          <p>
            <img
              style={{ width: "500px", height: "320px" }}
              alt={imageCat.id}
              src={imageCat.url}
            />
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default Image;
