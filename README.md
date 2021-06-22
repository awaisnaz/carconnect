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

v1.x //Documentation at README.md. Admin Page: Comments functionality.   

APIs:  
API1: https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles  
API2: var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+carValuation.value;  
API3: var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+carFullVDICheck.value;  