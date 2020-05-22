NODE JS POC for Ecommerce web app(RESTful API building)

This project is supposed to be the backend of a MERN stack based ecommerce web app. This basically contains all the code required to perform the functions like adding new users, adding new products, adiing orders dynamically as the use adds them to thier cart.
Also this is just the baisc version containing all the basic functionalities. So some advanced features may be expected in the final web app only.


Getting started--
This file that has been shared to you as a poc Zip conatains all the necesarry things and there is no need to do anything extra
        --install all the dependencies with "npm install".
        --next up install some major tools/modules/packages for continous testing, like nodemon, env-cmd,supertest, jest (again installing nodemon as devDependencies is just an optional step, u can always use the alternative of typing in the command "node src/index.js" and if u install nodemon as a devDependency just run "npm run dev").
        --env files for testing as well as dev development is already made so no need to change the environment variable in case this is supposed to be deployed somewhere like heroku platform there we need to define it again


Start using/testing--
        --zip folder shared here also comprising the postman collection by the name "ecomm-1.postman_collection.json" this file can be readily imported in the postman and you can see all the requests that ae designed to get response from the routers
        --start sending http requests from the postman the shared collection is coded to automate some task like poviding auto login on signup and keep loged in with the token untill logged out or deleted.(this is only for users because making it for the products and orders will be useless, but once the user is deleted then its hitory ofordeer is also deleted automatically) 



Automatic testing--
        --automatic testing is also provided for User APIs similaly that can also be build with the other two APIs.
        --in order to automaticcally test the endpoints jus type in "npm test" this should work if u have installed all the dependencies and devDependencies as mentioned above.

Deployment--
        --project is ready to be deployed.

Built with--
        --MongoDB Express Node are the main things that are used.
        --Jest framework for testing.
        --Postman for client to server endpoint testings.
        --jsonwebtokens are used for authentication purposes(generating and approving tokens)
        --bcryptjs for password hashing
Contributing--
        --code has been uploaded to GitHub


Author-- Manoj More


Acknowledgments--
        --The complete Node.js developer course by Andrew Mead and Rob Percival from Udemy
        --Mentors at Blue Conch Technologies India