# urlshornernodejs

step 1: Clone this Repository
step 2: Enter this Repo from Terminal.
step 3: Enter command `npm install'
step 4: Then add .env file where you have to declare crendentials of mysql DB.
    host=<YOUR_HOST>
    user=<YOUR_USER>
    password=<YOUR_PASSWORD>
    database=<YOUR_DATABSE_NAME>

step 5: In my Sql you have to create one table name urlmangement.

    create table urlmangement (urlid varchar(30) primary key, shorturl varchar(50) unique,longurl varchar(255), created_at timestamp);
    
step 6: In this Repo create one folder name in the main directory config and a file in it name cred.js and write below code.
-----------------------------------------------------------------------------------------------
    module.exports = { hostname: <WRITE HOSTNAME OF THIS APPLICATION>  };
------------------------------------------------------------------------------------------------
here hostname could be the localhost if it's running on loacal.

step 7: Enter command   `npm start`.
step 6: In browser browse for localhost:3000



