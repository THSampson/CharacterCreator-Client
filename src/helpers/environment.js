let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:5432';
    break;
    case 'ts-character-creator-client.herokuapp.com':
        APIURL = 'https://ts-character-creator-server.herokuapp.com'
}

export default APIURL;