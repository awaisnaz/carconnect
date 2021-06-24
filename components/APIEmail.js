//NODEMAILER

module.exports = function email(receiver_email, message) {

	return new Promise((res, rej) => {

		const nodemailer = require("nodemailer");
		process.env.sender_email="info@carconnect.uk";
		process.env.sender_password="CarConnect@202!";
		// const sender_email = "awais.nazir.ch2@gmail.com";
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: 'smtpout.europe.secureserver.net',
			port: 465,
			secure: true, // secure:true for port 465, secure:false for port 587
			auth: {
				user: process.env.sender_email,
				pass: process.env.sender_password
			},
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: false
			}
		});
		let mailOptions = {
			from: `"Car Connect 🚗" <${process.env.sender_email}>`, // sender address
			to: `${receiver_email}`, // list of receivers
			subject: 'Message from Car Connect!', // Subject line
			text: `${message}`, // plain text body
			// html: '<b>Hello world ?</b>' // html body
		};
		transporter.sendMail(mailOptions, (error) => {
			if (error) {
				rej(error);
				// return console.log(error);
			}
			// console.log('Message %s sent: %s', info.messageId, info.response);
			res('Email sent.');
		});
	})
}
// email("awais.nazir.ch@gmail.com", "3MayB"); 