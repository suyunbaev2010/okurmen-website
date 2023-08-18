import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function AppFooter() {
  const [showtopBtn, setShowTopBtn] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scroll > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Container fluid>
      <div className="copyright">&copy; 2023 Okurmen. All Right Reseved.</div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      {showtopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}
export default AppFooter;
