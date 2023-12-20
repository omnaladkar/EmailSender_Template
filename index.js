const nodemailer = require('nodemailer');
const fs = require('fs');
const emailTemplate = fs.readFileSync('email_template.html', 'utf-8');

// Create a transporter object using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'easyhire.ai@gmail.com',
    pass: 'zlhzncoiywrgsshq '
  }
});

const message = {
  from: 'EasyHire.ai',
  subject: 'Revolutionizing HR: Enhancing Productivity 100X! Need Your Expertise',
  html: emailTemplate // Use the HTML template as the email content
};

  const jsonData = [
    { "email": "kumarakhilesh.370@gmail.com" },
    { "email": "sanjivthakur@gmail.com" },
    { "email": "tsmith.shc@gmail.com" },
    { "email": "vgnewyork@gmail.com" },
    { "email": "katcogan@gmail.com" },
    { "email": "aspectjobs@gmail.com" },
    { "email": "nishantsah05@gmail.com" },
    { "email": "adi.kjha@gmail.com" },
    { "email": "amitrash@gmail.com" },
    { "email": "vitthalbobade@gmail.com" },
    { "email": "charanjeet.singh14@gmail.com" },
    { "email": "vitthaliosmaster@gmail.com" },
    { "email": "sonawane.manoj@gmail.com" },
    { "email": "rvijay.lic@gmail.com" },
    { "email": "hr.nectarbits@gmail.com" },
    { "email": "nandi.linkedin@gmail.com" },
    { "email": "maildaves@gmail.com" },
    { "email": "deykaus@gmail.com" },
    { "email": "fvmannjr@gmail.com" },
    { "email": "rachie.jackson@gmail.com" },
    { "email": "ranaglasses@gmail.com" },
    { "email": "dsmith9735@gmail.com" },
    { "email": "sneha.thakur@apptunix.com" },
    { "email": "vinayakshedge@gmail.com" },
    { "email": "hr4.gruham@gmail.com" },
    { "email": "r.khatavkar@gmail.com" },
    { "email": "shivaa.hr@gmail.com" }
  ]
  ;
  
  const emailList = jsonData.map(obj => obj.email);
  emailList.forEach(email => {
    // Update the 'to' property of the message object
    message.to = email;
  
    // Send the email
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.error('Error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  });
  
  
