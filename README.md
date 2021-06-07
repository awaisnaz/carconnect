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
git commit -m "main"   
<!-- git checkout -b 1.10   -->
git branch   
<!-- git branch -M main     -->
<!-- git remote remove origin   -->
git remote add origin https://github.com/teknikality-central/carconnect.git   
git remote add origin https://github.com/awaisnazir21/car-connect.git  
git push -u origin main  
<!-- git push -u origin main:main   -->

<!-- git checkout main   -->
<!-- git branch   -->
<!-- git reset --hard 1.14   -->
<!-- git push --force origin main   -->

Heroku deployment using website directly.  

MONGODB STRUCTURE  
db(car-connect).collection(car-connect).find({"category": "user/admin/customer/contact/registrationNumber/etc"})  

v1.x // Email in contact us, Firebase contactus email. Home Page: Make navbar and registration form as sticky. First store api's in firestore, use axios only if not in firestore. Cost Analysis of Firebase, Heroku, etc. In Dashboard page, Add 3 Tabs for Vehicle Requests, Contact Requests, API Calls; Collapsible Cards with Title for first tab; Title has 4 fields from API 1; In Card body, First Customer Details, then API1, then button for API2 which on press displays collapsible json replacing the button, then same for API3. Form validations in all pages. Extensive testing on Desktop and mobiles for Functionality and Design. Home Page: eu-gb flag shouldn't get removed on text input. 

v2.x // API1,2,3 as JSON Treeview.

APIs:  
API1: https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles  
API2: var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+carValuation.value;  
API3: var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+carFullVDICheck.value;  