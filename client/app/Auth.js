import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'taeminpak.auth0.com',
    clientID: 'Gn9QRrr1wAJou5J2E41RTpzQV4rZk4lO',
    redirectUri: 'http://localhost:3000',
    audience: 'https://taeminpak.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}