'use strict';

const Controllers = require('keyfob').load({ path: './controllers', fn: require });

module.exports = [
  // healthcheck
  { method: 'GET', path: '/__healthcheck__', config: Controllers.healthcheck },

  { method: 'GET', path: '/', config: Controllers.pages.home },

  // login
  { method: 'GET', path: '/login', config: Controllers.pages.login },
  { method: 'POST', path: '/login', config: Controllers.actions.login },

  // api
  { method: 'GET', path: '/key', config: Controllers.pages.key },
  { method: 'GET', path: '/jwk', config: Controllers.pages.jwk },
  { method: 'GET', path: '/user', config: Controllers.pages.user },
  { method: 'GET', path: '/proof/{user_id}/{session_id}', config: Controllers.pages.proof },

  // authenticated routes
  { method: 'GET', path: '/sign', config: Controllers.pages.sign },
  { method: 'POST', path: '/sign', config: Controllers.actions.sign },
  { method: 'GET', path: '/sign2', config: Controllers.pages.sign2 },
  { method: 'POST', path: '/sign2', config: Controllers.actions.sign2 },

  // static assets
  { method: 'GET', path: '/{path*}', config: { handler: { directory: { path: './public', listing: false } }, auth: false } }
];
