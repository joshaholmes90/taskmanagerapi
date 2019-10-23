const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'jholmes@kirkhallamacademy.co.uk',
    from: 'joshholmes90@live.co.uk',
    subject: 'This is my first EMAIL',
    text: 'I hope this one actually gets to me.'
})