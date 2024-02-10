import React from 'react';
import FooterFoot from './FooterFoot';
import './css/Footer.css';


const Footer = () => {
  return (
       <>
       <footer>
        <div className="contains">
           <div className=" footerlogo">
            <div className="htlogo">
            <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '40px' }}>
                    The Bharat News
             </h1>
            </div>
            <div className="downloadapp">
                    <a  href="https://htiphoneenglish.page.link/?link=https://www.hindustantimes.com&amp;apn=com.ht.news&amp;ct=HT_Masthead_download&amp;efr=1&amp;ibi=com.ht.htiphoneenglishapp&amp;isi=1000991178&amp;mt=8&amp;pt=660495&amp;utm_campaign=HT_Masthead_download&amp;utm_medium=HTwebAMP&amp;utm_source=HTwebAMP" className="appBtn__for__mweb"><img src="https://images.hindustantimes.com/images/app-images/2022/2/mweb_button_svg.svg"/></a>
                    </div>
            
           </div>
           <div className="subscribe">
            <div className="subscribebox">
                <label className="label1">Subscribe to our best newsletters</label>
                <div className="subscribeinput">
                    <select name="HTHUNT" className="HTHUNTSELECT">
                        <option className="hthunt1">HT daily capsule</option>
                        <option className="hthunt1" >@HT_Ed Calling</option> 
                        <option className="hthunt1">HT WkNd</option>
                        <option className="hthunt1">Ht Capital Letters</option>
                        <option className="hthunt1">Wierd Wisdom</option>
                        <option className="hthunt1">HT City</option>
                        <option className="hthunt1">HT kickoff</option>
                    </select>
                    <input type="text" id="email" placeholder="Enter Email Address"/>
                    {/* <BUTTON id="btn">SUBSCRIBE</BUTTON> */}
                </div>
            </div>
            <div className="socialmedia">
              <div id="socialicon">
                 <a href="https://www.facebook.com/hindustantimes"><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/fb-logo.svg" alt="" /></a>
               <a href="https://www.linkedin.com/company/hindustantimes/"> <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/in-logo.svg" alt="" /></a>
                <a href="https://www.instagram.com/hindustantimes/"><img src="https://images.hindustantimes.com/images/app-images/2022/2/instagram.svg" alt="" /></a>
                <a href="https://twitter.com/htTweets"><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/tw-logo.svg" alt="" /></a>
              </div>
                
            </div>
           </div>
          
            <div id="footer_menu">
               <ul>
                <li className="heading"><a href="https://www.hindustantimes.com/latest-news"> LATEST NEWS</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/world-news"> WORLD NEWS</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/india-news"> INDIA NEWS</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/cricket">CRICKET</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/cities">CITY NEWS</a></li>
                <li><a href="https://www.hindustantimes.com/cities/bengaluru-news">Bengaluru</a></li>
                <li><a href="https://www.hindustantimes.com/cities/bhopal-news">Bhopal</a></li>
                <li><a href="https://www.hindustantimes.com/cities/chandigarh-news">Chandigarh</a></li>
                <li><a href="https://www.hindustantimes.com/cities/dehradun-news">Dehradun</a></li>
              
               </ul>
               <ul>
                <li><a href="https://www.hindustantimes.com/cities/ranchi-news">Ranchi</a></li>
                <li><a href="https://www.hindustantimes.com/cities/pune-news">Others</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/cities/others">ENTERTAINMENT</a></li>
                <li><a href="https://www.hindustantimes.com/entertainment/bollywood">Bollywood</a></li>
                <li><a href="https://www.hindustantimes.com/entertainment/hollywood">Hollywood</a></li>
                <li><a href="https://www.hindustantimes.com/entertainment/bollywood">Music</a></li>
                <li><a href="https://www.hindustantimes.com/entertainment/telugu-cinema">Tamil Cinema</a></li>
                <li><a href="https://www.hindustantimes.com/entertainment/telugu-cinema">Telegu Cinema</a></li>
                <li><a href="https://www.hindustantimes.com/entertainment/tv">Tv</a></li>
                <li><a href="https://www.hindustantimes.com/entertainment/web-series">Web Stories</a></li>
               
                 </ul>
               <ul>
                <li className="heading"><a href="https://www.hindustantimes.com/education">EDUCATION</a></li>
                <li><a href="https://www.hindustantimes.com/education">Admission News</a></li>
                <li><a href="https://www.hindustantimes.com/education">Board Exam</a></li>
                <li><a href="https://www.hindustantimes.com/education">Competitive Exam</a></li>
                <li><a href="https://www.hindustantimes.com/education">Employment News</a></li>
                <li><a href="https://www.hindustantimes.com/education">Exam Result</a></li>
                <li><a href="https://www.hindustantimes.com/education">Education News</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/lifestyle">LIFESTYLE</a></li>
                <li><a href="https://www.hindustantimes.com/lifestyle">Art and Culture</a></li>
                <li><a href="https://www.hindustantimes.com/lifestyle">Brunch</a></li>
                <li><a href="https://www.hindustantimes.com/lifestyle">Fashion</a></li>
               
               </ul>
               <ul>
                <li className="heading"><a href="https://www.hindustantimes.com/science">BUSSINESS</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/photos">PHOTO</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/videos">VIDEOS</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/budget">BUDGET</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/enviroment">ENVIROMENT</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/science">SCIENCE</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/opinion">OPINION</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/editorials">EDITORIALS</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/sports">SPORTS</a></li>
               
               </ul>
               <ul>
                <li className="heading"><a href="https://www.hindustantimes.com/science">BRAND STORIES</a></li>
                 <li className="heading"><a href="https://www.hindustantimes.com/science">ELECTIONS</a></li>
                 <li><a href="https://www.hindustantimes.com/sports">UTTAR PRADESH ASSEMBLY ELECTION</a></li>
                 <li><a href="https://www.hindustantimes.com/sports">Punjab assembly election</a></li>
                 <li><a href="https://www.hindustantimes.com/sports">Goa assembly election</a></li>
                 <li><a href="https://www.hindustantimes.com/sports">Uttrakhand assembly election</a></li>
                 <li><a href="https://www.hindustantimes.com/sports">Manipur assembly election</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/science">QUICK READS</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/science">COVID 19</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/science">OMICRON</a></li>
                
               </ul>
               <ul>
                <li className="heading"><a href="https://www.hindustantimes.com/science">TRENDING NEWS</a></li>
                <li><a href="https://www.hindustantimes.com/india-news/after-3-days-of-national-herald-stir-detentions-congress-mps-meet-today-101655351045569.html">National herald case</a></li>
                <li><a href="https://www.hindustantimes.com/sports">Horoscope today</a></li>      
                <li><a href="https://www.hindustantimes.com/sports">UP borad 10th ,12th result</a></li>
                <li><a href="https://www.hindustantimes.com/sports">Covid Cases in india</a></li>
                <li className="heading"><a href="https://www.hindustantimes.com/science">TRENDING TOPICS</a></li>
                <li><a href="https://www.hindustantimes.com/sports">India vs South africa</a></li>
                <li><a href="https://www.hindustantimes.com/sports">Today's horoscope</a></li>
                <li><a href="https://www.hindustantimes.com/sports">Russia ukraine crisis</a></li>
                <li><a href="https://www.hindustantimes.com/sports">Petrol prices</a></li>
                
              </ul>
            </div>
          </div>
          </footer>
             <FooterFoot/>
          </> 
      

  )
}

export default Footer;
