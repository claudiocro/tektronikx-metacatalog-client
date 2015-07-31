import DS from 'ember-data';
import config from '../config/environment';

var ApplicationAdapter;
if (config.environment === 'asdfasdfasdf') {
  ApplicationAdapter = DS.FixtureAdapter.extend();
}
else {
  ApplicationAdapter = DS.RESTAdapter.extend({
    coalesceFindRequests: true,
    namespace: 'api/v1',
    //this is dependent on production/development environment
    //It is configured in config/environment.js
    //host: ClientENV.hostUrl
    //add IP from $DOCKER_HOST if --docker flag is set
    //host: 'http://192.168.59.103:1337'
  });
}


export default ApplicationAdapter;
