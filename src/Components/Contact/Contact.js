import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import AWN from "awesome-notifications";
let globalOptions = {};
let notifier = new AWN(globalOptions);

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pal8syv",
        "template_wfqr6i4",
        formRef.current,
        "user_A7eoE1fFD5fe3WDT5Q4Av"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          notifier.success("hello world");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Get in Touch</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +44 79077 33825
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="" className="contact-icon" />
              atomcgarry@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={Address} alt="" className="contact-icon" />
              357 Leyland Road, Penwortham, Preston
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="user_name" />
            <input type="text" placeholder="subject" name="user_subject" />
            <input type="text" placeholder="email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            {done ? (
              <h3>
                Thanks for submitting a message, I get back to you as soon as
                possible.
              </h3>
            ) : (
              <button>Submit</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
