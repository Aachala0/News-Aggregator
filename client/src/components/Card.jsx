import React from "react";

function Card(props) {
  return (
    <div
      className="border border-gray-300 shadow-lg flex flex-col"
      style={{
        height: "600px",
        overflow: "hidden",
        margin: "10px auto",
        width: "100%",
      }}
    >
      <div className="p-5 gap-1 mb-1">
        <b className="title">{props.title}</b>
        <div className="mx-auto mb-4">
          <img
            className="mx-auto"
            src={props.imgUrl}
            alt="img"
            style={{ width: "100%", height: "200px", objectFit: "cover" }} // Responsive image
          />
        </div>
        <div className="description">
          <p className="leading-7">{props.description?.substring(0, 200)}</p>
        </div>
        <div className="info">
          <div className="source-info flex items-center gap-2">
            <span className="font-semibold">Source:</span>
            <a
              href={props.url}
              target="_blank"
              className="underline break-words"
            >
              {props.source.substring(0, 70)}
            </a>
          </div>
          <div className="origin flex flex-col">
            <p>
              <span className="font-semibold">Author:</span> {props.author}
            </p>
            <p>
              <span className="font-semibold">Published At:</span>{" "}
              {props.publishedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
