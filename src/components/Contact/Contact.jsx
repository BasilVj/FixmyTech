import React from "react";
import "./Contact.css";
import images from "../../images";
const Contact = () => {
  return (
    <div className="app__contact section__padding">
      <div className="app__header">
        <div className="app__wrapper_img">
          <img src={images.contact_us_image} alt="" />
        </div>
        <div className="app__wrapper_info">
          <p className="p__contact">
            We're always here to help. Whether you have a question or feedback,
            don't hesitate to reach out. Our friendly support team is available
            by phone, email, or through the contact form on this page. Thank you
            for choosing FixMyTech. We look forward to hearing from you.
          </p>
        </div>
      </div>
      <div className="app__section">
        <div className="main">
          <h1>Get in touch</h1>
          <div className="row-1">
            <div>
              <input className="item-1" type="text" placeholder="Name" />
            </div>
            <div>
              <input className="item-2" type="text" placeholder="Email" />
            </div>
          </div>
          <div>
            <div>
              <input className="subject" type="text" placeholder="Subject" />
            </div>
            <div>
              <textarea
                className="txt-area-size"
                placeholder="Message"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="btn-send-msg btn-primary-send-msg"
            />
          </div>
        </div>

        <div className="box-right">
          <h1 className="h1">Contact us</h1>
          <div className="details">
            <p>
              <i className="fa fa-map-marker"></i>
              <span className="span">Address:</span> 123, Park Street,
              <br />
              <span className="space-box-right-first-p">
                Mumbai, Maharashtra , India
              </span>
            </p>
            <p>
              <i className="fa fa-phone"></i>
              <span class="span">Phone:</span> +91 9465345671
            </p>
            <p>
              <i className="fa fa-paper-plane"></i>
              <span className="span">Email:</span> info@fixmytech.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
