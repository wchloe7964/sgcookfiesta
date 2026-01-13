"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body?.classList.add("menu-show");
      if (body) body.style.overflow = "hidden";
    } else {
      body?.classList.remove("menu-show");
      if (body) body.style.overflow = "auto";
    }

    return () => {
      body?.classList.remove("menu-show");
      if (body) body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 9999,
          padding: "20px",
        }}>
        <div className="container">
          <div className="colorlib-navbar-brand">
            <a className="colorlib-logo" href="/">
              Markies
              <br />
              <span>Talents Agency</span>
            </a>
          </div>
          {/* Main Toggle Button (Hamburger) */}
          <a
            href="#"
            className={`js-colorlib-nav-toggle colorlib-nav-toggle ${
              isOpen ? "active" : ""
            }`}
            onClick={toggleMenu}
            style={{ zIndex: 2001 }}>
            <i></i>
          </a>
        </div>
      </header>

      {/* OVERLAY NAV: Slides in/out */}
      <nav
        id="colorlib-main-nav"
        role="navigation"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 1 : 0,
          transition: "all 0.5s ease",
          zIndex: 1500, // Base layer for the overlay
        }}>
        {/* The X Close Icon: Positioned absolutely to sit ABOVE the background image */}

        <div className="js-fullheight colorlib-table">
          <div
            className="img"
            style={{
              backgroundImage: "url(/images/image_4.jpg)",
              zIndex: 1, // Keep background behind content
            }}></div>

          <div
            className="colorlib-table-cell js-fullheight"
            style={{ position: "relative", zIndex: 2 }}>
            <div className="row no-gutters">
              <div className="col-md-12 text-center">
                <h1 className="mb-4">
                  <a href="/" className="logo">
                    Markies
                    <br />
                    <span>Talents Agency</span>
                  </a>
                </h1>

                <ul className="list-unstyled">
                  <li className="active">
                    <a href="#">
                      <span>
                        Live: Vote Now <i className="voting-dot"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Leaderboard</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
