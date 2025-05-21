import React from 'react'
import './Contact.css'
import indentIcon from '../../assets/indent-icon.png'
import lineIcon from '../../assets/line-icon.png'

const benefitList = [
  {
    imgUrl: indentIcon,
    title: "Client oriented"
  },
  {
    imgUrl: indentIcon,
    title: "Results driven"
  },
  {
    imgUrl: indentIcon,
    title: "Strategy Driven Design"
  },
  {
    imgUrl: indentIcon,
    title: "Scalable for Growth"
  },
  {
    imgUrl: indentIcon,
    title: "Problem solving"
  },
  {
    imgUrl: indentIcon,
    title: "Full Service Support"
  },
]

const lineList = [
  {
    no: "1",
    title: "We Schedule calls at your convenience",
    imgUrl: lineIcon,
  },
  {
    no: "2",
    title: "We offer discovery and consulting meeting",
    imgUrl: lineIcon,
  },
  {
    no: "3",
    title: "We prepare proposals",
    imgUrl: lineIcon,
  }
]

const Contact = () => {
  // const [result, setResult] = useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "b437c21f-f80a-424b-b88a-cf4e4387ecff");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }
  // };
  return (
    <div className='contact' id='contact'>
      <div className="contact-top">
        <span>CONTACT US</span>
        <h1>Partner with Us 
        for Comprehensive IT</h1>
      </div>
      <div className="contact-middle">
        <p className='contact-middle-text'>We’re happy to answer any question you may have and 
        help you determine which of our services best fit your needs.</p>
        <h4 className='contact-middle-email'>Email us: aikdesignlab@gmail.com</h4>
        <h4 className='contact-middle-subheading'>Your benefits:</h4>
        <div className="contact-benefist">
          {
            benefitList.map((item, index)=>(
              <div key={index} className='contact-benefit-wrapper'>
                <img src={item.imgUrl} alt="indentition" />
                <p>{item.title}</p>
              </div>
            ))
          }
        </div>
        <h4 className='contact-middle-subheading'>What happens next?</h4>
        <div className="contact-next">
          {
            lineList.map((item,index)=>(
              <div key={index} className='contact-next-wrapper'>
                <div className='context-top'>
                <p>{item.no}</p>
                <p>{item.title}</p>
                </div>
                <img className='contact-next-image' src={item.imgUrl} alt="line image" />
              </div>
            ))
          }
        </div>
      </div>
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
      <input type="hidden" name="access_key" value="b437c21f-f80a-424b-b88a-cf4e4387ecff" />
        <h3>Schedule a Free Consultation</h3>
        <div className='contact-form-top'>
          <div>
            <label>First Name</label>
            <input type="text" name='first_name' required />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name='last_name' required />
          </div>
        </div>
        <div className='contact-form-content'>
          <div>
            <label>Company / Organisation</label>
            <input type="text" name='company_name' required />
          </div>
          <div>
            <label>Company email</label>
            <input type="text" name='email' required />
          </div>
          <div>
            <label>Phone No</label>
            <input type="text" name='phone' required />
          </div>
          <div>
            <label>How Can we Help You?</label>
            <select className='contact-select'>
              <option value="">Select option</option>
              <option name='Web Design' value="Web Design">Web Design</option>
              <option name='Graphic Design' value="Graphic Design">Graphic Design</option>
              <option name='Social media Management' value="Social media Management">Social media Management</option>
            </select>
          </div>
          <div>
            <label>Message</label>
            <textarea name='message' required></textarea>
          </div>
        </div>
        <button type='submit' className='contactform-btn'>Submit</button>
      </form>
    </div>
  )
}

export default Contact