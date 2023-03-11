# Simple-Mail-API

This is simple mail api project built using nodejs-express 

steps :
- download zip file 
- run npm command : npm install
- setup env.js file 
    EMAIL : sender_email@gmail.com
    PASSWORD : GMAIL_APP_PASSWORD
- RUN app.js file 
----------------------------------------------------------

using Postman or thunderbird test api :

http://localhost:5000/api/user/gmailsend  && in body pass :

{
    "useremail" : "receiver_email@gmail.com"
}
