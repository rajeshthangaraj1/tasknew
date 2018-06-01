/* global $, angular, React */
import React from 'react';
import DocumentMeta from 'react-document-meta';
/*import cookie from 'react-cookie';*/
import './App.css';

const lang = require('./lang');
const config = require('./config');
const APIURL = config.path.apiUrl;
const APIBASE = config.path.apiBaseUrl;
 
 /* Load meta tags */
  const meta = {
      title: lang.home_meta_title,
      description: lang.home_meta_title,
      meta: {
        name: {
          keywords: lang.home_meta_title
        }
      }
    };
 
class Home extends React.Component {
 
  constructor(props) 
     {
       super(props);
     }
	 componentWillMount(){
		
			
						
	 }
	 componentDidMount() {
		
	 }
  

 
  
 
 
   


  render() {
   
    return (

	<div>   	<DocumentMeta  {...meta} />
	
 
  <nav id="main-nav">
    <div className="row">
      <div className="container">

        <div className="logo">
          <a href="index.html"><img src="images/logo.png" alt="logo"/></a>
        </div>

        <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

        <ul className="nav-menu list-unstyled">
          <li><a href="javascript:void(0);" data-id="header" className="smoothScroll">Home</a></li>
          <li><a href="javascript:void(0);" data-id="about" className="smoothScroll">About</a></li>
          <li><a href="javascript:void(0);" data-id="portfolio" className="smoothScroll">Portfolio</a></li>
          <li><a href="javascript:void(0);" data-id="contact" className="smoothScroll">Contact</a></li>
        </ul>

      </div>
    </div>
  </nav>
  
  <div id="header" className="home">

    <div className="container">
      <div className="header-content">
        <h1>I'm <span className="typed"></span></h1>
        <p>Web Developer, Web Designer, Freelancer</p>

        <ul className="list-unstyled list-social">
          <li><a href="#"><i className="ion-social-facebook"></i></a></li>
          <li><a href="#"><i className="ion-social-twitter"></i></a></li>
          <li><a href="#"><i className="ion-social-instagram"></i></a></li>
          <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
          <li><a href="#"><i className="ion-social-tumblr"></i></a></li>
          <li><a href="#"><i className="ion-social-dribbble"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
 
  <div id="about" className="paddsection">
    <div className="container">
      <div className="row justify-content-between">

        <div className="col-lg-4 ">
          <div className="div-img-bg">
            <div className="about-img">
              <img src="images/me.jpg" className="img-responsive" alt="me" />
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="about-descr">

            <p className="p-heading">About Me </p>
            <p className="separator">I'm a back end developer as well as freelauncher specialised in developing dynamic e-commerce sites.I contributed my work in software devlopement,back end web,database/server management as per the business needs of the clients and product based that are user-friendly.
            </p>

          </div>

        </div>
      </div>
    </div>
  </div>
  
  <div id="services">
    <div className="container">

        <div className="services-carousel owl-theme">

          <div className="services-block">

            <i className="ion-ios-browsers-outline"></i>
            <span>UI/UX DESIGN</span>
            <p className="separator">To an English person, it will seem like simplified English,told me what </p>

          </div>

          <div className="services-block">

            <i className="ion-ios-lightbulb-outline"></i>
            <span>BRAND IDENTITY</span>
            <p className="separator">To an English person, it will seem like simplified English,told me what </p>

          </div>

          <div className="services-block">

            <i className="ion-ios-color-wand-outline"></i>
            <span>WEB DESIGN</span>
            <p className="separator">To an English person, it will seem like simplified English,told me what </p>

          </div>

          <div className="services-block">

            <i className="ion-social-android-outline"></i>
            <span>MOBILE APPS</span>
            <p className="separator">To an English person, it will seem like simplified English,told me what </p>

          </div>

          <div className="services-block">

            <i className="ion-ios-analytics-outline"></i>
            <span>Analytics</span>
            <p className="separator">To an English person, it will seem like simplified English,told me what </p>

          </div>

          <div className="services-block">

            <i className="ion-ios-camera-outline"></i>
            <span>PHOTOGRAPHY</span>
            <p className="separator">To an English person, it will seem like simplified English,told me what </p>

          </div>

        </div>

    </div>

  </div>
  
  <div id="portfolio" className="text-center paddsection">

    <div className="container">
      <div className="section-title text-center">
        <h2>My Portfolio</h2>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12">

          <div className="portfolio-list">

            <ul className="nav list-unstyled" id="portfolio-flters">
              <li className="filter filter-active" data-filter=".all">all</li>
              <li className="filter" data-filter=".food_commerce">Food Commerce</li>
              <li className="filter" data-filter=".e_commerce">E-commerce</li>
              <li className="filter" data-filter=".property">Property</li>
              <li className="filter" data-filter=".cms">CMS</li>
              <li className="filter" data-filter=".react">React</li>
              <li className="filter" data-filter=".erp">Erp</li>
              <li className="filter" data-filter=".digital_bussiness">Digital business</li>
            </ul>

          </div>

          <div className="portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits food_commerce">
              <a className="popup-img" href="images/portfolio/georges.png" >
                <img src="images/portfolio/georges.png" alt="https://www.georges.com.sg/" />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits food_commerce">
              <a className="popup-img" href="images/portfolio/thebananaleafapolo.png">
                <img src="images/portfolio/thebananaleafapolo.png"  alt="img"/>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding webdesig food_commerce">
              <a className="popup-img" href="images/portfolio/srisun.png">
                <img src="images/portfolio/srisun.png" alt="img"/>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups webdesign food_commerce">
              <a className="popup-img" href="images/portfolio/aadhyaorganics.png">
                <img src="images/portfolio/aadhyaorganics.png" alt="img"/>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits e_commerce">
              <a className="popup-img" href="images/portfolio/cuscaden.png">
                <img src="images/portfolio/cuscaden.png" alt="img"/>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits react">
              <a className="popup-img" href="images/portfolio/eccsae.png">
                <img src="images/portfolio/eccsae.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits digital_bussiness">
              <a className="popup-img" href="images/portfolio/carbuys.png">
                <img src="images/portfolio/carbuys.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/easysmart.png">
                <img src="images/portfolio/easysmart.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits erp">
              <a className="popup-img" href="images/portfolio/erp.png">
                <img src="images/portfolio/erp.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/formula5.png">
                <img src="images/portfolio/formula5.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits e_commerce">
              <a className="popup-img" href="images/portfolio/freelor.png">
                <img src="images/portfolio/freelor.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits digital_bussiness">
              <a className="popup-img" href="images/portfolio/geniehut.png">
                <img src="images/portfolio/geniehut.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits e_commerce">
              <a className="popup-img" href="images/portfolio/goodayshop.png">
                <img src="images/portfolio/goodayshop.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits property">
              <a className="popup-img" href="images/portfolio/greenhomegroup.png">
                <img src="images/portfolio/greenhomegroup.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits property">
              <a className="popup-img" href="images/portfolio/gulfstarae.png">
                <img src="images/portfolio/gulfstarae.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/hvlpestservices.png">
                <img src="images/portfolio/hvlpestservices.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/krishnapriyafoundation.png">
                <img src="images/portfolio/krishnapriyafoundation.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/mefitness.png">
                <img src="images/portfolio/mefitness.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits digital_bussiness">
              <a className="popup-img" href="images/portfolio/mekkahaj.png">
                <img src="images/portfolio/mekkahaj.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits food_commerce">
              <a className="popup-img" href="images/portfolio/portopantry.png">
                <img src="images/portfolio/portopantry.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits e_commerce">
              <a className="popup-img" href="images/portfolio/theroyalcards.png">
                <img src="images/portfolio/theroyalcards.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/zenithfood.png">
                <img src="images/portfolio/zenithfood.png" alt="img"/>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
  <div id="contact" className="paddsection">
    <div className="container">
      <div className="contact-block1">
        <div className="row">

          <div className="col-lg-6">
            <div className="contact-contact">

              <h2 className="mb-30">GET IN TOUCH</h2>

              <ul className="contact-details">
                <li><span>APT#6,Block#2,Villa# 11,</span></li>
                <li><span>Mohammed Bin Zayed City,Abudhabi,UAE</span></li>
                <li><span>+971 545771757</span></li>
                <li><span>rajeshthangaraj1@gmail.com</span></li>
              </ul>

            </div>
          </div>

          <div className="col-lg-6">
            <form action="" method="post" role="form" className="contactForm">
              <div className="row">

                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>

                <div className="col-lg-6">
                  <div className="form-group contact-block1">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation"></div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validation"></div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows="12" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validation"></div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <input type="submit" className="btn btn-defeault btn-send" value="Send message" />
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="footer" className="text-center">
    <div className="container">
      <div className="socials-media text-center">

        <ul className="list-unstyled">
          <li><a href="#"><i className="ion-social-facebook"></i></a></li>
          <li><a href="#"><i className="ion-social-twitter"></i></a></li>
          <li><a href="#"><i className="ion-social-instagram"></i></a></li>
          <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
          <li><a href="#"><i className="ion-social-tumblr"></i></a></li>
          <li><a href="#"><i className="ion-social-dribbble"></i></a></li>
        </ul>

      </div>

      <p>&copy; Copyrights Rajesh Thangaraj. All rights reserved.</p>

      <div className="credits">
       
        Designed by <a href="rajesh.heroku.com">Rajesh Thangaraj</a>
      </div>

    </div>
  </div>
  

	</div>
    );
  }
}
export default Home;
