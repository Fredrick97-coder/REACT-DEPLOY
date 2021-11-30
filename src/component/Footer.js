import React from 'react'
import '../assets/footer.css'
import logo from '../assets/constants/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__link">
        <h2>Jobs</h2>
        {/* <a href="#job"> Job Search</a> */}
        <Link to="/">Job Search</Link>
        <Link to="/jobs">Browse Jobs</Link>
        <a href="#job">Trending Jobs</a>
        <Link to="/">Help</Link>
      </div>
      <div className="footer__link">
        <h2>Recruiter</h2>
        <Link to="/">Recruiter Site</Link>
        <Link to="/postjobs">Post a job</Link>
        <Link to="/">Recruitment Agencies</Link>
        <Link to="/">Recruiter Advice</Link>
      </div>
      <div className="footer__link">
        <h2>B2B DESK</h2>
        <Link to="/contact">Contact Us</Link>
        <Link to="/contact">Lodge Complaint</Link>
        <Link to="/">Newsletters</Link>
        <Link to="/">Sponsors and Top Employers</Link>
      </div>
      <div className="footer__logo__section">
        <img src={logo} alt="b2b agency" />
        <p className="text-white">Copyright &copy; 2021</p>
      </div>
    </div>
  )
}

export default Footer
