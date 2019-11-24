import React from "react";

const Images = props => {
  const { list } = props.imageCats;
  const RenderList = list.map(imageCat => {
    return (
      <div key={imageCat.id}>
        <p>
          <img
            style={{ width: "500px", height: "320px" }}
            alt={imageCat.id}
            src={imageCat.url}
          />
        </p>
      </div>
    );
  });
  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div>{RenderList}</div>
    </div>
  );
};

export default Images;
