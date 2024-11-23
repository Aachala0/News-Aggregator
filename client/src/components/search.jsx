import React, { useState } from "react";
import Card from "./Card";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [page, setPage] = useState(1); // Current page for pagination
  const [pageSize] = useState(12); // Set default page size

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = async () => {
    if (!searchQuery) {
      return; // Do nothing if no search query
    }
    setIsLoading(true); // Set loading to true when search starts
    try {
      // Fetch news based on search query
      const response = await fetch(
        `http://localhost:5000/everything/${searchQuery}?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();

      console.log("Search response data:", data); // Log the full response

      if (
        data &&
        data.data &&
        data.data.articles &&
        data.data.articles.length > 0
      ) {
        setResults(data.data.articles); // Set the articles in state
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetch completes
    }
  };
  console.log(results);
  return (
    <div className="search-container min-h-screen">
      <form className="search-bar my-8 text-center px-2 xs:mb-10 md:mb-16">
        <input
          type="text"
          name="search"
          className="search-box md:w-2/4 sm:p-4 xs:px-2"
          placeholder="Search News"
          value={searchQuery}
          onChange={handleSearchChange} // Handle input change
        />
        <button type="button" className="btn" onClick={handleSearchClick}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Display search results */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="news-container">
          <div className="row">
            {results.length > 0 ? (
              results.map((article, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
                  <Card
                    title={article.title}
                    description={article.description}
                    imgUrl={article.urlToImage}
                    publishedAt={article.publishedAt}
                    url={article.url}
                    author={article.author}
                    source={article.source.name}
                  />
                </div>
              ))
            ) : (
              <p>No results found for "{searchQuery}".</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
