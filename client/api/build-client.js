import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server

    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local', //This is the service name . namespace
      //cross namepsace communication pattern -> kubectl get services -n ingress-nginx
      //http://<SERVICE NAME>.<NAMESPACE>.svc.cluster.local
      headers: req.headers, //Add the headers to the api call
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/', //The browser will take care of headers for us
    });
  }
};
