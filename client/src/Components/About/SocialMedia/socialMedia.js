import React, { Component } from 'react';
import './socialMedia.css';


class SocialMedia extends Component {

  render() {
    return (
      <div>
        <div className="d-none d-sm-block">
          <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row sm1">
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12"></div>
              <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-12">
                <p className="sm2">Social media</p>
              </div>
            </div>
            <div className="row" style={{ paddingBottom: '10.5vw' }}>
              <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
              <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                <ul className="social_lst">
                  <li>
                    <a href="https://www.facebook.com/krlcreatives/" target="_blank" className="linkColor">
                      <p className="fB_sitesNam">Facebook</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/krl-creatives/" target="_blank" className="linkColor">
                      <p className="linKDi_sitesNam">Linkedin</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/KrlCreatives" target="_blank" className="linkColor">
                      <p className="twiTer_sitesNam">Twitter</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/krlcreatives/" target="_blank" className="linkColor">
                      <p className="insta_sitesNam">Instagram</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
            </div>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="animatedup animatedFadeInUp fadeInUp">
            <div className="row sm1">
              <div className="col-1"></div>
              <div className="col-11">
                <p className="sm2_MoB">Social media</p>
              </div>
            </div>
            <div className="row" style={{ marginBottom: '17vw' }}>
              <div className="col-1"></div>
              <div className="col-10">
                <ul className="social_lst">
                  <li className="fB_sitesNam_mob"><a href="https://www.facebook.com/krlcreatives/" target="_blank" className="MobLinkColorF">Facebook</a></li>
                  <li className="linKDi_sitesNam_mob"><a href="https://www.linkedin.com/company/krl-creatives/" target="_blank" className="MobLinkColorL">Linkedin</a></li>
                  <li className="twiTer_sitesNam_mob"><a href="https://twitter.com/KrlCreatives" target="_blank" className="MobLinkColorT">Twitter</a></li>
                </ul>
                <ul className="social_lst">
                  <li className="insta_sitesNam_mob"><a href="https://www.instagram.com/krlcreatives/" target="_blank" className="MobLinkColorI">Instagram</a></li>
                </ul>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SocialMedia;