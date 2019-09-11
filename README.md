# nova-leaf

a [Sails v1](https://sailsjs.com) application. Hosted using Microsoft Azure's App Service and configured with a private Docker Container.


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Thu Jul 25 2019 12:46:41 GMT-0300 (Atlantic Daylight Time) using Sails v1.2.2.

### Deploy via Docker
1. cd novaleaf
2. docker login
3. docker build -t novaleafedu/devops .
4. docker run -it --rm -p 1337:1337 novaleafedu/devops
5. docker push novaleafedu/devops

### Tasks to Complete
- bold page header
- connect 
- add registration form after buttons
- connect the timetable with database
- add children to database
- customer (Intended, Trial, Paid, Custom-Manual-Add)
- registration (C.Attendance, TimeTable, Marks)
- employee (Contract, Full-Time, Part-Time)
- feedback Evaluation