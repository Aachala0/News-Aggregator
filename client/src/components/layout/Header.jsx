import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/logo.png";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import countries from "../countries";

const Header = () => {
  const [activeLink, setActiveLink] = useState("All News");
  const [showCatDropdown, setShowCatDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
    setShowCatDropdown(false);
    setShowCountryDropdown(false);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className=""
        style={{
          borderBottom: "2px solid #ccc",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "300px",
              height: "80px",
              objectFit: "cover",
              marginLeft: "20px",
            }}
          />
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto"
              activeKey={activeLink}
              onSelect={handleSelect}
            >
              <Nav.Link href="/" eventKey="All News">
                All News
              </Nav.Link>
              <Nav.Link href="/top-headlines" eventKey="Top Headlines">
                Top Headlines
              </Nav.Link>
              {/* <NavDropdown
                title="Categories"
                id="categories-dropdown"
                show={showCatDropdown}
                onMouseEnter={() => {
                  setShowCatDropdown(true);
                  setShowCountryDropdown(false);
                }}
                onMouseLeave={() => setShowCatDropdown(false)}
                className={mode === "dark" ? "dropdown-dark" : "dropdown-light"}
              >
                {["General", "Business", "Sports", "Entertainment"].map(
                  (category, index) => (
                    <NavDropdown.Item key={index} eventKey={category}>
                      <Link
                        to={`/${category}`}
                        className="flex gap-3 country-custom"
                        onClick={() => setShowCountryDropdown(false)}
                      >
                        {category}
                      </Link>
                    </NavDropdown.Item>
                  )
                )}
              </NavDropdown> */}
              <NavDropdown
                title="Country"
                id="country-dropdown"
                show={showCountryDropdown}
                onMouseEnter={() => {
                  setShowCountryDropdown(true);
                  setShowCatDropdown(false);
                }}
                onMouseLeave={() => setShowCountryDropdown(false)}
                className={mode === "dark" ? "dropdown-dark" : "dropdown-light"}
              >
                <div className="country-menu">
                  {countries.map((element, index) => (
                    <NavDropdown.Item key={index}>
                      <Link
                        to={`/country/${element?.iso_2_alpha}`}
                        className="flex gap-3 country-custom"
                        onClick={() => setShowCountryDropdown(false)}
                      >
                        <img
                          src={element?.png}
                          srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                          alt={element?.countryName}
                        />
                        <span>{element?.countryName}</span>
                      </Link>
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>

              <Nav.Link href="#home" eventKey="Search">
                Search
              </Nav.Link>
              <Nav.Link>
                <button
                  className=""
                  onClick={toggleMode}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: mode === "light" ? "#B4121B " : "#696767",
                  }}
                >
                  {mode === "light" ? (
                    <FiSun className="" size={30} />
                  ) : mode === "dark" ? (
                    <BsFillCloudSunFill size={30} />
                  ) : (
                    ""
                  )}
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
