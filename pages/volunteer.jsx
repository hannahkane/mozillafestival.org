var React = require('react');
var Header = require('../components/header.jsx');
var Footer = require('../components/footer.jsx');
var HeroUnit = require('../components/hero-unit.jsx');
var generateHelmet = require('../lib/helmet.jsx');

var Volunteer = React.createClass({
  pageMetaDescription: "Volunteers are integral to what we do at Mozilla, and MozFest is no different.",
  render: function() {
    return (
      <div className="volunteer-page">
        {generateHelmet(this.pageMetaDescription)}
        <Header/>
        <HeroUnit image="/assets/images/hero/volunteer.jpg"
                  image2x="/assets/images/hero/volunteer.jpg">
          <h1>volunteer</h1>
        </HeroUnit>
        <div className="content centered wide">
          <p>Volunteers are integral to what we do at Mozilla, and MozFest is no different. The annual festival could not take place without the time, dedication and love of our local volunteers.</p>

          <p>Drawn from the local community, volunteers at MozFest do so much, from running the welcome desk and arranging swag bags to assisting press and helping with programming. We try to place people in roles they’re most interested in, and rotation of roles is encouraged. We provide training before the event, and we host several volunteer socials.</p>

          <p>Volunteers are asked to share four hours of their time. As a thank you, we’ll cover the festival’s ticket cost. Volunteers also receive meals and a MozFest t-shirt. Unfortunately, we cannot cover travel to and from the event or provide accommodation.</p>

          <p>The MozFest team meets bi-monthly in Mozilla’s London office, so come say hi and learn more.</p>
          
          <p><strong>All volunteer roles for MozFest 2016 have been filled.</strong></p>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Volunteer;
