/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/home': { view: 'pages/homepage' },
  '/about': { view: 'pages/about' },
  '/adults': { view: 'pages/adults' },
  '/kids': { view: 'pages/kids' },
  '/camps': { view: 'pages/camps' },
  '/events': { view: 'pages/events' },
  '/contact-us': { view: 'pages/contact-us' },
  '/register': { view: 'pages/register' },
  '/sign-in': { view: 'pages/sign-in' },
  '/time-table': { view: 'pages/time-table' },
  '/dashboard': { view: 'pages/dashboard' },
  '/dashboard/customer': { view: 'pages/customer' },
  '/dashboard/customer/intended': { view: 'pages/intended' },
  '/dashboard/customer/paid': { view: 'pages/paid' },
  '/dashboard/customer/offline': { view: 'pages/offline' },
  '/dashboard/registration': { view: 'pages/registration' },
  '/dashboard/employee': { view: 'pages/employee' },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
