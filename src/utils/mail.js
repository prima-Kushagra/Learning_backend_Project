import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendEmail = async(options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product:{
            name:"Task Manger",
            link:"https://taskmanagerlink.com"
        }
    })

   const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
   const emailHTML = mailGenerator.generatePlaintext(options.mailgenContent)
 nodemailer.createTransport({
    host: process.env.MAIL_SMTP_HOST,
    port:process.env.MAIL_SMTP_PORT,
    auth: { 
        user :process.env.MAIL_SMTP_USER,
        pass: process.env.MAIL_SMTP_PASS
    }
 })

 const mail = {
    from : "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHTML
 }
 try {
    await transporter.sendMail(mail)
 } catch (error) {
 console.error("Email service failed silently make sure you have provided mail credentials in .env file")   
 }
}

const emailVerificationMailgenContent = (username , verificationURL) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our app!",
        action:{
            instructions: "To verify your mail please click on th efollowing butoon",
            button: {
                color : "#36dfa7",
                text: "Verify your email",
                link: verificationURL
            },
        },
        outro: 
            "Need help , or have questions? Just reply to ythis email."
    }
    }
}



const forgetPasswordMailgenContent = (username , passResetURL) => {
    return {
        body: {
            name: username,
            intro: "Welcome got a request to reset the passwoed!",
        action:{
            instructions: "To vreset you pass click on th efollowing butoon",
            button: {
                color : "#2a0fb0",
                text: "Reset Pass",
                link: verificationURL
            },
        },
        outro: 
            "Need help , or have questions? Just reply to ythis email."
    }
    }
}

export{emailVerificationMailgenContent,
    forgetPasswordMailgenContent,sendEmail
}