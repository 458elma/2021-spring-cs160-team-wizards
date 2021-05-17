# 2021-spring-cs160-team-wizards
​
##Features 
-LogIn and LogOut
-Register
-Profile Setting 
-Review and Rate Courses
-Create New Sessions
-Search Filter
-Upload Course/User Photo
​
###Env Variables 
Create a .env file in then root and add the following code
```
NODE_ENV = development
PORT = 8000
MONGO_URI = Mongodb URI 
```
​
###Install Dependencies- frontend/backend
```
npm install
cd frontend 
npm install
```

###Run 
```
# Run frontend (:3000) & backend (:8000)
npm run dev
​
# Run backend only
npm run server
```

##Build
```
# Create frontend prod build
cd frontend
npm run build
```
###Database
```
# Import data
npm run data:import
​
# Destroy data
npm run data:destroy
```
```
Sample User Logins
test01@gmail.com (Tutor)
12345
​
test02@gmail.com (not a tutor)
12345
```
