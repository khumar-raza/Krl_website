import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OurCoreValues from './OurCoreValues/ourCoreValues';
import OurOffices from './OurOffices/ourOffices';
import OurTeam from './OurTeam/ourTeam';
import SocialMedia from './SocialMedia/socialMedia';
import Header2 from '../Header/header2';
import SeeProject from '../ContactPage/SeeProject/seeProject';
import AboutBanner from './AboutBanner/aboutBanner';
import '../../Components/ContactPage/SeeProject/seeProject.css';
import WeStandFor from './WeStandFor/weStandFor';

class About extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sendPrp: 'Send a request',
      hedngPrp: "Let's build something ",
      hedngPrp1: "awesome together!"
    };
  }

  componentWillMount() {
    let data = this.props.location.pathname;
    if(data){
      let routName;
      routName = data.slice(1);
      routName = routName.charAt(0).toUpperCase() + routName.slice(1);
      this.setState({ headerPath: routName });
    }
    window.scrollTo(0, 0);
  }
  
  render() {
    const { headerPath } = this.state
    return (
      <div className="all_backgrundImageAfter animateFadeIn">
        <Header2 headerPath={headerPath} headerDesktop="hederStickyProp" headerMob="hederStickyMob2Prop" /> 
          <AboutBanner 
            Consl_text='Consultation'
            solu_text='with solution'
            para_Text='divi_Colorsty'
            para_ClaSs='para_Textt'
            descrip_Text='KRL Creatives consults with businesses to help provide efficient solutions to their business problems. We listen astutely to understand your business needs and engage our teams to come up with digital solutions to maximise your return on investment.'
            mOR_texT=''
            conts_sol='Consultation '
            With_sool='with solution.'
            bigGerText="KRL Creatives provides consultation businesses to help them grow.
            We listen thouroughly to your problem, empathize with you and your
            customers and create useful digital solutions that maximise
            your return on investments."
            bigGerInSmall=''
            diviColotextt='divi_Colorsty_Mob'
            BnerAbtHome='col-10 backImgee_baner_Mob'
          />
        <br /><br />
        <OurCoreValues/>
        <WeStandFor/>

          <OurOffices
            backColor='row raw_background'
            headTextOff='off_head'
            decripText='demo'
          />

          <OurTeam />

          <SocialMedia />
  
          <Link to={`/contact`} className="changingColor">
          <SeeProject
            seeBckColr="row SEE_backColor"
            roWalign='row RwO_aboUT'
            se_Text="se_text"
            se_Text1="large_text"
            seeText="Let's build something awesome together"
            lrgText="Send a request"
            lgBrText=""
            arrow_Right="arrowRight1_aboUt"
          /></Link>

      </div>

    );
  }
}

export default About;