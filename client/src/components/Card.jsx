import React from "react";

function Card(props) {
  return (
    <div
      className="everything-card border border-gray-300 shadow-lg flex flex-col"
      style={{
        height: "auto",
        width: "400px",
        marginTop: "10px",
        marginLeft: "60px",
      }}
    >
      <div className="everything-card flex flex-wrap p-5 gap-1 mb-1">
        <b className="title">{props.title}</b>
        <div className="everything-card-img mx-auto">
          <img
            className="everything-card-img"
            src={props.imgUrl}
            alt="img"
            style={{ width: "128px", height: "128px" }}
          />
        </div>
        <div className="description">
          <p className="description-text leading-7">
            {props.description?.substring(0, 200)}
          </p>
        </div>
        <div className="info">
          <div className="source-info flex items-center gap-2">
            <span className="font-semibold">Source:</span>
            <a
              href={props.url}
              target="_blank"
              className="link underline break-words"
            >
              {props.source.substring(0, 70)}
            </a>
          </div>
          <div className="origin flex flex-col">
            <p className="origin-item">
              <span className="font-semibold">Author:</span>
              {props.author}
            </p>
            <p className="origin-item">
              <span className="font-semibold">Published At:</span>(
              {props.publishedAt})
            </p>
          </div>
        </div>
      </div>

      {/* Additional card content with styles */}
      <div className="flex lg:flex-row">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${props.imageUrlLeft})` }}
          title={props.imageLeftTitle}
        ></div>

        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            {props.memberIcon && (
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                {props.memberIcon}
              </svg>
            )}
            {props.memberText}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.cardTitle}
          </div>
          <p className="text-gray-700 text-base">{props.cardDescription}</p>
        </div>
        <div className="flex items-center">
          {props.authorImage && (
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={props.authorImage}
              alt="Avatar"
            />
          )}
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{props.authorName}</p>
            <p className="text-gray-600">{props.publishedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;