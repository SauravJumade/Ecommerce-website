import React from 'react'
import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_details_one'>
                    <h3>Contact Us</h3>
                    <p>Email : royalclothigs@gmail.com</p>
                    <p>Phone : 9373652669</p>
                    <p>Address : Amravati</p>
                </div>
                <div className='footer_details_one'>
                    <h3>Quick Links</h3>
                    <ul class="list">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className='footer_details_one'>
                    <h3>Follow Us</h3>
                    <ul class="social-icons">
                        <li><a href=""><InstagramIcon /></a></li>
                        <li><a href=""><FacebookIcon /></a></li>
                        <li><a href=""><TwitterIcon /></a></li>
                    </ul>
                </div>
            </div>
            <div className='lastdetails'>
                <p>condition of Use & Sale &nbsp;&nbsp;&nbsp;   Privacy Notice &nbsp;&nbsp;&nbsp;   Interest-Based Ads &nbsp;&nbsp;&nbsp;    @2024={year},sj_ecommerce.com,inc. or its affiliates &nbsp;&nbsp;&nbsp;</p>
            </div>
        </footer>
    )
}

export default Footer