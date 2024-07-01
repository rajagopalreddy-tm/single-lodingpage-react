import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="footer__heading">Get to Know Us</h3>
            <ul className="footer__list">
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer__heading">Join us on</h3>
            <ul className="footer__list">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>FaceBook</li>
            </ul>
          </div>
    
          <div className="col-md-3">
            <h3 className="footer__heading">Let Us Help You</h3>
            <ul className="footer__list">
              <li>Your Account</li>
              <li>Your Data</li>
              <li>Customer Care</li>
            </ul>
          </div>
        </div>
        <hr className="footer__divider mt-4 mb-3" />
        <div className="text-center">
          <img src="favicon-16x16.png" alt="GIGA App" className="footer__logo" />
          <p className="footer__text mt-3">© {new Date().getFullYear()} GIGA.com, Inc. </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
