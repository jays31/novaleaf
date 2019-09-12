# nova-leaf

a [Sails v1](https://sailsjs.com) application. Hosted using Microsoft Azure's App Service and configured with a private Docker Container.

### Version info

This app was originally generated on Thu Jul 25 2019 12:46:41 GMT-0300 (Atlantic Daylight Time) using Sails v1.2.2.

### Tasks to Complete
- bold page header

### Working and Deployment

1. Login to GitLab and give access to the developer’s email ID under Project > Settings > Member https://gitlab.com/novaleafedu/novaleaf/-/project_members
2. The developer can now clone the repository (via HTTPS) to his workstation

> cd new_folder
> git init
> git clone https://gitlab.com/novaleafedu/novaleaf.git
> git remote add origin https://gitlab.com/novaleafedu/novaleaf.git

3. Open the folder in Visual Studio Code to see the project structure
4. Before moving on, you would require to install the latest Node.js on your computer. After installing, check the version:

> cd new_folder
> node -v
> sudo npm install -g npm
> npm -v

5. You would also have to install all the dependencies present in the project by:

> npm install

6. Website has been organized into the following structures:
- API (Controllers, Models)
- Assets (Dependencies, Images, JavaScript, Styles)
- Config (Routes, Datastores)
- Node Modules
- Views (Layout, Pages)
- DockerFile
- ReadMe

7. Whenever adding a page, please declare the custom route in Routes.js
8. When changing the database password, update it in Datastores.js
9. To create a new API

> sails generate api api_name

10. The above command will create a model and a controller. Model holds all the database’s table attributes

> sails lift

11. The website has been built on Sails.js MVC framework with Bootstrap.
+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)

12. You can find the global header and footers in layout.js
13. When you are done updating the website, deploy it using Docker. You will need to download Docker Desktop and give access to the developer’s Docker ID. Developer needs to login with his credentials and push the container build to DockerHub.

> cd novaleaf
> docker login
> docker build -t novaleafedu/devops .
> docker run -it --rm -p 1337:1337 novaleafedu/devops
> docker push novaleafedu/devops

14. Microsoft Azure has an App Service named ‘novaleafedu’ which must now be stopped and started again for the deployment to take effect. The app service is linked to DockerHub’s private repository and shall update automatically.