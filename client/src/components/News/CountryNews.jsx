import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";
import countries from "../countries";

const CountryNews = () => {
  const { iso } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(iso || "us"); // Default to 'us'

  const pageSize = 12;

  // Update selectedCountry when the URL changes
  useEffect(() => {
    if (iso) {
      setSelectedCountry(iso);
    }
  }, [iso]);

  // Fetch news data
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(
      `http://localhost:5000/country/${selectedCountry}?page=${page}&pageSize=${pageSize}`
    )
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
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to fetch news. Please try again later.");
      })
      .finally(() => setIsLoading(false));
  }, [page, selectedCountry]);

  return (
    <div className="news-container">
      <div className="my-2">
        <label htmlFor="country-select" className="form-label">
          Select Country:
        </label>
        <select
          id="country-select"
          className="form-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {Array.isArray(countries) && countries.length > 0 ? (
            countries.map((country) => (
              <option key={country.iso_2_alpha} value={country.iso_2_alpha}>
                {country.countryName}
              </option>
            ))
          ) : (
            <option value="us">United States</option> // Fallback option
          )}
        </select>
      </div>

      {error && <div className="text-danger mb-4">{error}</div>}

      <div className="news-container">
        <div className="row">
          {!isLoading && Array.isArray(data) && data.length > 0 ? (
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
            <div>No news available.</div>
          )}
        </div>
      </div>

      {!isLoading && Array.isArray(data) && data.length > 0 && (
        <div className="d-flex justify-content-center my-4">
          <div className="pagination">
            <button
              disabled={page <= 1}
              className="btn btn-secondary"
              onClick={() => setPage(page - 1)}
            >
              &larr; Prev
            </button>
            <span className="mx-2 mt-2">
              {page} of {Math.ceil(totalResults / pageSize)}
            </span>
            <button
              className="btn btn-secondary"
              disabled={page >= Math.ceil(totalResults / pageSize)}
              onClick={() => setPage(page + 1)}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryNews;
