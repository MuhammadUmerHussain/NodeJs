![image](https://github.com/MuhammadUmerHussain/NodeJs/assets/108338561/4e689735-7c72-486d-824a-b047b37469e6)# NodeJs

This repo contains node js projects.


3- JWT Token:

JWT tokens ensures integrity of your data and protects from data modifications.JWT ensures Authorizations and Information Exchange for users after the process of authentication.

How JWT Works In Node JS?

For this first you have to set app.js similar to above, then sets routes in the below images i have made a authMiddleware to make private access of routes so that i can check login via JWT Token after login submition.

![image](https://github.com/MuhammadUmerHussain/NodeJs/assets/108338561/bc042794-3b02-4caf-9d8b-5b9faab72217)

Once route are set now its time to setup authentication Middlware to make private routes ,Below image code defines that request header will contain authorization headers.Where i have checked "bearer" jwt starts with this and JWT verify wtih token after removing bearer , and process.env.jwt_sct is my key in env file. If token is valid then next() controller is called.

![image](https://github.com/MuhammadUmerHussain/NodeJs/assets/108338561/c255d268-c356-4fc4-b4a6-7aab94a7695f)

Below image is of controller where login in public route so i am setting up my token.Note sign(payload,secret key, options) to generate token.
next() will call dashboard where i have return lucky number.
![image](https://github.com/MuhammadUmerHussain/NodeJs/assets/108338561/e9c062ec-32eb-4867-abb9-152e66b56099)

Read More? https://jwt.io/introduction hit this link.


No Token and No Login
![image](https://github.com/MuhammadUmerHussain/NodeJs/assets/108338561/3a03cf7f-df04-47e3-9a50-5f830417509b)
Token Present
![image](https://github.com/MuhammadUmerHussain/NodeJs/assets/108338561/b7fae25c-ab2e-4c07-bcbb-2a562b92f97c)
Now You Can Get Data
![image](https://github.com/MuhammadUmerHussain/NodeJs/assets/108338561/64e51e34-434f-446c-bdb4-27bc781d9602)



