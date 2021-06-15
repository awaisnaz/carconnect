//NODEMAILER

module.exports = function email(receiver_email, message) {

	return new Promise((res, rej) => {

		const nodemailer = require("nodemailer");
		process.env.sender_email="awais.nazir.ch2@gmail.com";
		process.env.sender_password="RedWater5$";
		// const sender_email = "awais.nazir.ch2@gmail.com";
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
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
			subject: 'Someone sent you a message from Website Contact Form!', // Subject line
			text: `${message}`, // plain text body
			// html: '<b>Hello world ?</b>' // html body
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				rej(error);
				// return console.log(error);
			}
			// console.log('Message %s sent: %s', info.messageId, info.response);
			res('Message %s sent: %s', info.messageId, info.response);
		});
	})
}
// email("awais.nazir.ch@gmail.com", "3MayB"); 