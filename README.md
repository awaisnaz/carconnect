MAIN COMMANDS  
npm run install  
npm run serve  
npm run git  
  
  
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
  
  
FUTURE WORKS  
Move API keys to backend.  
Implement config.js  
Implement GunDB. Replace Firebase.  
Implement 30 minutes monitoring to check server uptime.  
Install on AWS/GCP/Azure. Heroku is costly. 3 costs: storage, processing, bandwidth.  
/dashboard: sorted tables   
/dashboard: API3 call is not working for new registration number.   
/dashboard: Comments functionality.    