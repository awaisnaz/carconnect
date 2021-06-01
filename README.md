CLONING AND RUNNING Local
git clone https://github.com/awaisnazir21/car-connect.git
npm install

BASIC COMMANDS  
npm install  
npm run serve  
npm run build  
npm run lint  
npm run start  

git init    
git add .  
git commit -m "first commit"   
git checkout -b 1.10  
git branch   
git branch -M main    
git remote remove origin  
git remote add origin https://github.com/teknikality-central/carconnect.git   
git remote add origin https://github.com/awaisnazir21/car-connect.git  
git push -u origin main  
git push -u origin 1.7:1.7  

Heroku deployment using website directly.  

MONGODB STRUCTURE  
db(car-connect).collection(car-connect).find({"category": "user/admin/customer/contact/registrationNumber/etc"})  

VERSION:  
1.0.0 // Base  
1.1.0 //Contact, Register form successfully saves into mongodb through express route  
1.2.0 //enters API vehicle data into database.  
1.3.0 //Vehicle details get retrieved from MongoDB and gets displayed to the user in next window after form submission.  
1.4.0 //Frontend: made Menu Neat, Created Admin Dashboard Page, Created Vehicles and Customer Details Page.  
1.5.0 //Firebase authentication implemented.  
1.6 // updated some Frontend, and Backend    
1.7 // updated some Frontend and Backend  
1.8 // In Admin Dashboard: 1. Contact Us Form Table. 2. Vehicle Registration and Customer Details. 3. 2nd API Call implemented. 4. 3rd API Call implemented. Other pages complete from my side except some CSS changes and text change which is required from the client.  
1.9 //Implemented Dark Theme.  
1.10 //In Admin Dashboard Page: Removed Contact Us Database and its display. Added Client Requests Table generated from Firestore Database. Added API1, API2, API3 calls using Form Input which takes Vehicle Registration Number as input, and outputs Collapsible JSON.  
1.11 //Some UI Changes  
1.12 //Some UI Changes  
1.13 //UI Changes in Home Page. Redesigned menu to remove double hierarchy. Created FAQ Section. Created "Where can I scrap my car?" Section. Redesigned Footer.  
1.14 // Details Page: Fetched and displayed API1 and API2 data, added Mileage and How Long Vehicle Ownership to the form, made form button bugger, changed form success message to include contact number. Registration Page: removed Google/Github icons. Home Page: changed 3 car icons,changed registration form input style to make it bigger and more padding for input text, made eu-gb flag as backgrouind image to form registration input field, made top navigation background as grey limited to hyperlink only not whole div.

1.nextversions // Email in contact us, Firebase contactus email. Home Page: Make navbar and registration form as sticky. First store api's in firestore, use axios only if not in firestore. Cost Analysis of Firebase, Heroku, etc. In Dashboard page, Add 3 Tabs for Vehicle Requests, Contact Requests, API Calls; Collapsible Cards with Title for first tab; Title has 4 fields from API 1; In Card body, First Customer Details, then API1, then button for API2 which on press displays collapsible json replacing the button, then same for API3. Form validations in all pages. Extensive testing on Desktop and mobiles for Functionality and Design.

APIs:  
API1: https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles  
API2: var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+carValuation.value;  
API3: var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+carFullVDICheck.value;  