import _ from 'lodash/fp';
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

/**
 * Get all guitars from api
 * @returns {*}
 */
export const getAll = function() {
  return axios.get(apiUrl + '/api?search=fender')
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
};
