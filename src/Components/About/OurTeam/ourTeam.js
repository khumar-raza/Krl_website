import React, { Component } from 'react';
import AllTeam from './allTeam';
import Handsome_img from '../../../Assets/Images/handsome.jpg';
import './ourTeam.css';


class OurTeam extends Component {

  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: '15vw' }}>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h2 className="team_txt">The Team</h2>
          </div>
        </div><br />
        <div className="d-none d-sm-block">
        <div className="row">
          <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <div className="row">
              <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <AllTeam drnClass='imG_teamMem' teamImg={Handsome_img} />
              </div>
              <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <AllTeam drnClass='imG_teamMem' teamImg={Handsome_img} />
              </div>
              <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <AllTeam drnClass='imG_teamMem' teamImg={Handsome_img} />
              </div>
              <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <AllTeam drnClass='imG_teamMem' teamImg={Handsome_img} />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
        </div>
        </div>
        
        <div className="d-block d-sm-none">       
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <AllTeam drnClass='imG_teamMem_Mob' teamImg={Handsome_img} />
                </div>
                <div className="col-1"></div>
            </div><br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <AllTeam drnClass='imG_teamMem_Mob' teamImg={Handsome_img} />
                </div>
                <div className="col-1"></div>
            </div><br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <AllTeam drnClass='imG_teamMem_Mob' teamImg={Handsome_img} />
                </div>
                <div className="col-1"></div>
            </div><br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <AllTeam drnClass='imG_teamMem_Mob' teamImg={Handsome_img} />
                </div>
                <div className="col-1"></div>
            </div>
        </div>
      </div>

    );
  }
}

export default OurTeam;