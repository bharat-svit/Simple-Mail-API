const nodemailer  = require('nodemailer')
const { EMAIL , PASSWORD } = require('../env.js')
const Mailgen = require('mailgen')

exports.send = async (req,res) => {
    // res.send("send")
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
          user: testAccount.user, 
          pass: testAccount.pass, 
        },
      });

      let message = {
        from: '"Fred Foo 👻" <foo@example.com>', 
        to: "bar@example.com, baz@example.com", 
        subject: "Hello ✔", 
        text: "Hello world?",
        html: "<b>Hello world?</b>", 
      }

      transporter.sendMail(message).then((info)=>{
            return res.status(201).json({msg:'send msg by me',
            preview: nodemailer.getTestMessageUrl(info)
        })
      }).catch(error => {
            return res.status(500).json({error})
      })
}

exports.gmailsend = (req,res) => {

    const {useremail} = req.body;

    let config  = {
        service : 'gmail' ,
        auth : {
            user : EMAIL,
            pass : PASSWORD
        }

    }

    let transportes = nodemailer.createTransport(config)
    let mailgenerator  = new Mailgen({
        theme : "default",
        product : {
            name : "Bharat",
            link : 'https:/mailgen.js'
        }
    })

    let response = {
        body : {
            name: "Bharat Raj",
            intro : "Order Details",
            table : {
                data : [
                    {
                        item:"T-shirt",
                        description:"XL",
                        price: "799₹"
                    }
                ]
            },
            outrow : "out row"
        }
    }

    let mail = mailgenerator.generate(response);
    let message = {
        from : EMAIL,
        to : useremail,
        subject: 'palceorder',
        html: mail 
    }

    transportes.sendMail(message).then(()=>{
        return res.status(201).json({MSG : "SEND SUCCESS"})
    }).catch( error =>{
        return res.status(500).json({error})
    })

}
   