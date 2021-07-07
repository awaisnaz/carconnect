MAIN COMMAND  
git clone https://github.com/awaisnazir21/car-connect.git  
npm install  
npm run all  
npm run git  
  
git remote add origin https://github.com/awaisnazir21/car-connect.git  
git remote add origin https://github.com/teknikality-central/carconnect.git  
  
FUTURE WORKS  
Move API keys to backend.
/dashboard: sorted tables  
/dashboard: API3 call is not working for new registration number.   
/dashboard: Comments functionality.    
  
EMAIL CREDENTIALS  
carconnect.central@gmail.com, Cardata@202!  
  
API2/3 CREDENTIALS  
API2/3 test key: 87715f2c-f6a3-4f77-8527-94511f3ee5a4  
API2/3 live key: fa6b2f50-90f0-4f58-af30-585e45457b2a  
  
APIs    
API1: https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles   
API2: var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+carValuation.value;    
API3: var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+carFullVDICheck.value;    
  
FOLDER STRUCTURE  
vue.config.js > configureWebpack.devServer.proxy // connects backend and frontend through proxy.  
vue.config.js > configureWebpack.devServer.headers // implement CORS for REST API communication.  
test.js // not implemented.  
tsconfig.json // not implemented.  
tailwind.config.js // for tailwind CSS Framework configuration.  
server.js // main server file which implements express server, email server, but not database server. Database is implemented through firebase in Clientside/Vue3.  
Procfile // File required by heroku for server DevOps Configuration.  
package.json // installed npm libraries.  
LICENSE.md // not implemented.  
CarConnect.pdf // Sketch of the website in Adobe.  
public Folder // placed google analytics code, title, and other header code for the Frontend. All other code must remain untouched.  
node_modules // populated through "npm install" command. It is generated automatically.  
dist Folder // result of build Vue3 Files/Folders which are served by the express server. It is generated automtically.  
.github Folder // has git details. It is generated automatically.  
src/main.js // main Vue3 file which calls App.vue. It also have firebase credentials, and Routing details.  
src/App.vue // main component file which calls other Vue3 component files.  
src/Recycle Binnn // Deleted assets, components, html, js, css which is no longer needed from the main free template at https://www.creative-tim.com/product/vue-notus  
src/assets // contains all images used in the website.  
src/components // all components used in the Vue3 website.  
src/Home.vue // Home page component.  
src/Accordion.vue // FAQ component.  
src/AuthNavbar.vue, TableDropdown.vue // implements Top Menu component.  
src/Footer.vue // Footer Component.  
src/Details.vue, Details2.vue, CardSettings.vue, CardProfile.vue // Details page after client enters vehicle registration number. It shows Vehicle Details and Client Form.   
src/Dashboard.vue, CardTable.vue // Admin Dashboard component.  
src/Register.vue, Register2.vue // It is implemented fully, and stores useraccounts in firebase. But currently, it redirects to /login page and thus this page is no longer active. New users must get registered through firebase admin panel.  
src/Login.vue, Login2.vue // For login into Admin Dashboard panel at /dashboard page.  

