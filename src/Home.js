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
            <span>WEB DEVELOPER</span>
            <p className="separator">Manages website content and web hosting setup. For example creating /maintaining web pages,creating /managing databases, IIS, Apache/Other setup,source version control etc. </p>

          </div>

          <div className="services-block">

            <i className="ion-ios-lightbulb-outline"></i>
            <span>SERVER MAINTENANCE</span>
            <p className="separator">Maintenance involves constant monitoring and continuously analysing the functioning of the server. This involves routine reviews of the performance and potential security risks as well as backup protocols</p>

          </div>

          <div className="services-block">

            <i className="ion-ios-color-wand-outline"></i>
            <span>SEO</span>
            <p className="separator">Improves the visibility of a website on organic search engine result pages accomplished through implementation of search engine website architecture, internal navigation & link landscape as well as optimization of the content. Its core is that the discipline of making user friendly & user content understandable and easily digestible for search engines</p>

          </div>

          <div className="services-block">

            <i className="ion-social-android-outline"></i>
            <span>SEM</span>
            <p className="separator">
Practice of marketing a business using paid advertisements that appear on search engine results pages. It offers advertisers the opportunity to put their ads in front of motivated customers who are ready to buy at the precise moment they're ready to make a purchase</p>

          </div>

          <div className="services-block">

            <i className="ion-ios-analytics-outline"></i>
            <span>SITE OPTIMIZATION</span>
            <p className="separator">Process of using controlled experimentation to improve a website's ability to drive business goals. Improves the performance of their website and to experiment with variations on pages of their website to determine which changes will ultimately result in more conversions</p>

          </div>

          <div className="services-block">

            <i className="ion-ios-camera-outline"></i>
            <span>SMM</span>
            <p className="separator"> improve communication with users increase brand visibility  and reach more customers. Its a type of internet marketing which uses the benefits of social networking sites as a tool of promoting websites, this increasing traffic towards them and learning from user's direct reactions</p>

          </div>
          <div className="services-block">

            <i className="ion-ios-camera-outline"></i>
            <span>REACT JS TECHNOLOGY</span>
            <p className="separator">React makes it painless to creat interactive UIs. Design simple views for each state in your application and react will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug</p>

          </div>
          <div className="services-block">

            <i className="ion-ios-camera-outline"></i>
            <span>CORE PHP</span>
            <p className="separator">
corephp isn't just a web development shop, specialized in e-commerce development. Marketing automation, SEO and SEM. From powerful robust products can develop the software you need, back it with top-notch support and deliver the results. It possess unique combination of abilities allows us to create websites and application</p>

          </div>
          <div className="services-block">

            <i className="ion-ios-camera-outline"></i>
            <span>CODEIGNITER</span>
            <p className="separator">
Enables to develop projects much faster than writing code from scratch, by providing a rich set of libraries for commonly needed tasks, as well as a simple interface and logical structure to access these libraries. CodeIgniter focus on your project by minimizing the amount of code needed for a given task</p>

          </div>
          <div className="services-block">

            <i className="ion-ios-camera-outline"></i>
            <span>WORDPRESS</span>
            <p className="separator">
WordPress has a web template system using a template processor. Its architecture is a front controller, routing all requests for non-static URIs to a single PHP file which parses the URI and identifies the target page. This allows support for more human readable permalinks. It also feature integrated link management to assign multiple categories to post and support for tagging of posts</p>

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
              <a className="popup-img" href="images/portfolio/georges.png" title="Georges" data-id="https://www.georges.com.sg/" >
                <img src="images/portfolio/georges.png" alt="https://www.georges.com.sg/" />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits food_commerce">
              <a className="popup-img" href="images/portfolio/thebananaleafapolo.png" title="Thebananaleafapolo" data-id="http://www.thebananaleafapolo.com/" >
                <img src="images/portfolio/thebananaleafapolo.png"  alt="img"/>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding webdesig food_commerce">
              <a className="popup-img" href="images/portfolio/srisun.png" title="Srisun" data-id="http://www.jankosoftworks.com/srisun/" >
                <img src="images/portfolio/srisun.png" alt="img"/>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups webdesign food_commerce">
              <a className="popup-img" href="images/portfolio/aadhyaorganics.png" title="Aadhyaorganics" data-id="http://aadhyaorganics.com/" >
                <img src="images/portfolio/aadhyaorganics.png" alt="img"/>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits e_commerce">
              <a className="popup-img" href="images/portfolio/cuscaden.png" title="Cuscaden" data-id="http://www.cuscaden-parfumerie.com/" >
                <img src="images/portfolio/cuscaden.png" alt="img"/>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits react">
              <a className="popup-img" href="images/portfolio/eccsae.png" title="Eccsae" data-id="http://www.eccsae.com/#/" >
                <img src="images/portfolio/eccsae.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits digital_bussiness">
              <a className="popup-img" href="images/portfolio/carbuys.png" title="Carbuys" data-id="http://www.carbuysg.com/" >
                <img src="images/portfolio/carbuys.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/easysmart.png" title="Easysmart" data-id="https://www.easysmart.ae/" >
                <img src="images/portfolio/easysmart.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits erp">
              <a className="popup-img" href="images/portfolio/erp.png" title="ERP" data-id="http://erp.easysmart.ae/" >
                <img src="images/portfolio/erp.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/formula5.png" title="Formula5" data-id="http://www.formula5.in/" >
                <img src="images/portfolio/formula5.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits e_commerce">
              <a className="popup-img" href="images/portfolio/freelor.png" title="Freelor" data-id="https://freelor.com/" >
                <img src="images/portfolio/freelor.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits digital_bussiness">
              <a className="popup-img" href="images/portfolio/geniehut.png" title="Geniehut" data-id="https://www.geniehut.com/" >
                <img src="images/portfolio/geniehut.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits e_commerce">
              <a className="popup-img" href="images/portfolio/goodayshop.png" title="Goodayshop" data-id="http://goodayshop.com/" >
                <img src="images/portfolio/goodayshop.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits property">
              <a className="popup-img" href="images/portfolio/greenhomegroup.png" title="Georges" data-id="http://greenhomegroup.com/" >
                <img src="images/portfolio/greenhomegroup.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits property">
              <a className="popup-img" href="images/portfolio/gulfstarae.png" title="Gulfstarae" data-id="https://www.demo.gulfstarae.com/" >
                <img src="images/portfolio/gulfstarae.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/hvlpestservices.png" title="Hvlpestservices" data-id="http://www.hvlpestservices.com/" >
                <img src="images/portfolio/hvlpestservices.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/krishnapriyafoundation.png" title="Krishnapriyafoundation" data-id="http://krishnapriyafoundation.org/" >
                <img src="images/portfolio/krishnapriyafoundation.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/mefitness.png" title="Mefitness" data-id="http://mefitness.in/" >
                <img src="images/portfolio/mefitness.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits digital_bussiness">
              <a className="popup-img" href="images/portfolio/mekkahaj.png" title="Mekkahaj" data-id="http://mekkahaj.com/" >
                <img src="images/portfolio/mekkahaj.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits food_commerce">
              <a className="popup-img" href="images/portfolio/portopantry.png" title="Portopantry" data-id="https://www.portopantry.com/" >
                <img src="images/portfolio/portopantry.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits e_commerce">
              <a className="popup-img" href="images/portfolio/theroyalcards.png" title="Theroyalcards" data-id="https://www.theroyalcards.com/" >
                <img src="images/portfolio/theroyalcards.png" alt="img"/>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits cms">
              <a className="popup-img" href="images/portfolio/zenithfood.png" title="Zenithfood" data-id="http://www.zenithfoodsolutions.com/" >
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
