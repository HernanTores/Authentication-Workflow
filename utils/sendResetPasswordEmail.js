const sendEmail = require('./sendEmail')

const sendResetPasswordEmail = async ({name, email, token, origin}) => {
    const resetURL = `${origin}/user/reset-password?token=${token}&email=${email}`
    const message = `Please reset the password by clicking on the following link: <a href ="${resetURL}">Reset Password</a>`
    return sendEmail({to: email, subject: 'Reset Password', html: `<h2>Hello ${name},</h2> ${message}`})
}

module.exports = sendResetPasswordEmail