import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                AVOID VIOLENCE NOW OR NEVER
            </p>
            <p className="footer-subscription-text">
                You can join us today
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='Your Email' className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button> 
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/login'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/'>FaceBook</Link>
                    <Link to='/'>Twitter</Link>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Youtube</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        Group 5 <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className="website-rights">UTE © 2022</small>
            </div>
        </section>
    </div>
  )
}

export default Footer