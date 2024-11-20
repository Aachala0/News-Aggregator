import { React, useState, useEffect } from "react";
import Card from "../Card";
import Loader from "../Loader";

function AllNews() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  let pageSize = 12;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`http://localhost:5000/news?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((myJson) => {
        if (myJson.success) {
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        } else {
          setError(myJson.message || "An error occurred");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to fetch news. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return (
    <>
      {error && <div className="text-danger mb-4">{error}</div>}

      <div className="news-container">
        <div className="row">
          {!isLoading ? (
            data.map((element, index) => (
              <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
                <Card
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  publishedAt={element.publishedAt}
                  url={element.url}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>

      {!isLoading && data.length > 0 && (
        <div className="d-flex justify-content-center my-4">
          <div className="pagination">
            <button
              disabled={page <= 1}
              className="btn btn-secondary"
              onClick={handlePrev}
            >
              &larr; Prev
            </button>
            <span className="mx-2 mt-2">
              {page} of {Math.ceil(totalResults / pageSize)}
            </span>
            <button
              className="btn btn-secondary"
              disabled={page >= Math.ceil(totalResults / pageSize)}
              onClick={handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AllNews;
