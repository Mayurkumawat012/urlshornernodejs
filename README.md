# urlshornernodejs

step 1: Clone this Repository
-----------------------------------------------------------------------------------------------

step 2: Enter this in Terminal.<br />
<br />
```git clone https://github.com/Mayurkumawat012/urlshornernodejs.git```
-----------------------------------------------------------------------------------------------

step 3: Enter command ```npm install```
-----------------------------------------------------------------------------------------------

step 4: Then add .env file where you have to declare crendentials of mysql DB.<br/>
    host=<YOUR_HOST><br/>
    user=<YOUR_USER><br/>
    password=<YOUR_PASSWORD><br/>
    database=<YOUR_DATABSE_NAME><br/>
-----------------------------------------------------------------------------------------------

step 5: In my Sql you have to create one table name urlmangement.

    create table urlmangement (urlid varchar(30) primary key, shorturl varchar(50) unique,longurl varchar(255), created_at timestamp);
-----------------------------------------------------------------------------------------------

step 6: In this Repo create one folder name in the main directory config and a file in it name cred.js and write below code.
         here hostname could be the localhost if it's running on loacal.
```
module.exports = { hostname: <WRITE HOSTNAME OF THIS APPLICATION>  };
```
-----------------------------------------------------------------------------------------------

step 7: Enter command   `npm start`.
-----------------------------------------------------------------------------------------------

step 6: In browser browse for localhost:3000
-----------------------------------------------------------------------------------------------




