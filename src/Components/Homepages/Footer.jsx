import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";





function Footer() {
    return (
      <>
        <footer id="footer" className="footer-1">
          <div className="main-footer widgets-dark typo-light">
            <div className="container">
              <div className="row">

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="widget subscribe no-box">
                    <img className="img-fluid logo-footer" src="/nutrikid-logo/nutrikid-text-only-blue-png.png" alt="logofooter" />
                    <p>XYZ Tower</p>
                    <p>Jl. Kemana Saja No. 15</p>
                    <p>Jakarta </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="widget no-box">
                    <h5 className="widget-title">About<span></span></h5>
                  <ul className="thumbnail-widget">
                    <li>
                    <div className="thumb-content"><a href="#.">FAQ</a></div> 
                    </li>
                    <li>
                    <div className="thumb-content"><a href="#.">Syarat dan Ketentuan</a></div> 
                    </li>
                    <li>
                    <div className="thumb-content"><a href="#.">Kebijakan Privasi</a></div> 
                    </li>
                    <li>
                    <div className="thumb-content"><a href="#.">Kebijakan Finansial</a></div> 
                    </li>
                  </ul>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="widget no-box">
                    <h5 className="widget-title">Collaboration<span></span></h5>
                    <ul className="thumbnail-widget">
                      <li>
                      <div className="thumb-content"><a href="#.">Karir</a></div> 
                      </li>
                      <li>
                      <div className="thumb-content"><a href="#.">Kerjasama</a></div> 
                      </li>
                      <li>
                      <div className="thumb-content"><a href="#.">Membership</a></div> 
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="widget no-box">
                    <h5 className="widget-title">Contact Us<span></span></h5>
                    <p><a href="mailto:info@domain.com" title="glorythemes">Email: nutrikid@gmail.com</a></p>
                    <p>Phone : +621 234 567 890</p>
                </div>
              </div>
            </div>
          </div>
            
            <div className="footer-copyright">
              <div className="container">
                <div className="row justify-content-between copyright">
                  <div className="col-6 ol-sm-3 text-left">
                    <p>Copyright Nutrikid © 2023. All rights reserved.</p>
                  </div>
                  <div className="col-6 col-sm-3 text-right">
                    <ul className="social-footer2">
                      <li className=""><a title="Youtube" href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube style={{height:"30px", width:"30px", color:"red"}}/></a></li>
                      <li className=""><a href="https://facebook.com" target="_blank" title="Facebook" rel="noreferrer"><FaFacebook style={{height:"30px", width:"30px", color:"blue"}}/></a></li>
                      <li className=""><a href="https://x.com" target="_blank" title="Linkedin" rel="noreferrer"><FaSquareXTwitter style={{height:"30px", width:"30px", color:"black"}}/></a></li>
                      <li className=""><a href="https://instagram.com" target="_blank" title="Linkedin" rel="noreferrer"><FaInstagram style={{height:"30px", width:"30px", color:"black"}} /></a></li>
                    </ul>  
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  