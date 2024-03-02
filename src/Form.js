import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

export const Form = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r24ify8', 'template_vhps1zk', form.current, {
        publicKey: 'ChuYpA25XmKj00BiR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );

    const onSubmit = (token) => {
      document.getElementById("contact-form").submit();
    }
  };

  return (
    <form method="post" ref={form} onSubmit={sendEmail} className='contact-form' id='contact-form'>
      <label htmlFor='user_name' className='input-label'>Name<span className='required'>*</span></label>
      <input type="text" id="user_name" name="user_name" className='input' required placeholder='Your name'/>

      <label htmlFor='user_email' className='input-label'>Email</label>
      <input type="email" id="user_email" name="user_email" className='input' placeholder='Where should we contact you?'/>

      <label htmlFor='user_message' className='input-label'>Message<span className='required'>*</span></label>
      <textarea name="message" id="user_message" className='input-box' required rows={4} placeholder="What's up?"/>

      <div className="g-recaptcha" data-sitekey="ChuYpA25XmKj00BiR"></div>
      <input type="submit" value="Send" className='g-recaptcha submit-btn' data-sitekey="6LdR8oYpAAAAAGUzXOLyxjOKd-Hkbp9p7tiSaCqp" 
        data-callback='onSubmit' 
        data-action='submit'/>
    </form>
  );
};

// import React from 'react';
// import emailjs from '@emailjs/browser';

// class Form extends React.Component {

//     state = { 
//         name: "",
//         email: "",
//         feedback: ""
//     }

//     handleInputChange = (event) => {
//         event.preventDefault();
//         const target = event.target;
//         const name = target.name;
//         const value = target.value;

//         this.setState({[name]:value})
//     }

//     sendMessage = (event) => {
//         event.preventDefault();

//         const templateParams = {
//             from_name: this.state.name + " (" + this.state.email + ")",
//             to_name: "Olivia",
//             feedback: this.state.feedback
//         };

//         emailjs.send("service_r24ify8", "portfoliocontactme", templateParams, "ChuYpA25XmKj00BiR").then(
//             function(response){
//                 alert("Your message has successfully sent!");
//                 console.log("SUCCESS!", response.status, response.text);
//             },
//             function(err){
//                 alert("Your message was not able to be sent!");
//                 console.log("FAILURE!", err.log);
//             }
//         )

//         this.setState({
//             name:"",
//             email:"",
//             feedback:""
//         });
//     }

//     render() { 
//         return (
//             <form className="" action={this.props.action} >
//                 <div className="input-container">
//                     <textarea id="name" name="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} required rows={1}/>
//                     <label className={this.state.name && "filled"}>Name</label>
//                 </div>
//                 <div className="input-container">
//                     <textarea id="email" name="email" onChange={this.handleInputChange.bind(this)} required value={this.state.email} rows={1}/>
//                     <label className={this.state.email && "filled"}>Email</label>
//                 </div>
//                 <div className="input-container">
//                     <textarea id="feedback" name="feedback" onChange={this.handleInputChange.bind(this)} required value={this.state.feedback} rows={3}/>
//                     <label className={this.state.feedback && "filled"}>Feedback</label>
//                 </div>
                
//                 <input type="button" value="Send" onClick={this.sendMessage.bind(this)}/>
//             </form>
//         );
//     }
// }
 
export default Form;
