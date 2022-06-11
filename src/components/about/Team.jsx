import TeamFour from "../team/TeamFour";


const Team = () => {
  return (
    <div className="team-section-two mt-200 md-mt-100">
      <div className="shapes shape-one"></div>
      <div className="shapes shape-two"></div>
      <div className="shapes shape-three"></div>
      <div className="shapes shape-four"></div>
      <div className="container">
        <div className="row align-items-center justify-content-between mb-80 md-mb-10">
          <div className="col-lg-8">
            <div className="title-style-two">
              <p>Our Team</p>
              <h2>Our talented team member waiting to help you.</h2>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
        <div className="row">
          <TeamFour />
        </div>
        {/* End .row */}
      </div>
    </div>
  );
};

export default Team;
