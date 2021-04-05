export const SERVER_URL = "http://localhost:8888";

const axios = require('axios');

export const API = {
  nonAuthorizedGET: async (path, handleSuccess, handleFail) => {
    await axios({
      method: "GET",
      url: SERVER_URL + path,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 200) {
        handleSuccess(response);
      } else {
        handleFail(response.status);
      }
    }).catch(error => {
      console.log(error);
    })
  },
  authorizedGET: async (path, token, handleSuccess, handleFail) => {
    await axios({
      method: "GET",
      url: SERVER_URL + path,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "x-demo-token": token
      }
    }).then(response => {
      if (response.status === 200) {
        handleSuccess(response);
      } else {
        handleFail(response.status);
      }
    }).catch(error => {
      console.log(error);
    })
  },
  nonAuthorizedPOST: async (path, data) => {
    await axios({
      method: "POST",
      url: SERVER_URL + path,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json"
      },
      data: JSON.stringify(data)
    }).catch(e => {
      return { status: 500 };
    });
  },
  authorizedPOST: async (path, data, token) => {
    await axios({
      method: "POST",
      url: SERVER_URL + path,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "x-demo-token": token
      },
      data: JSON.stringify(data)
    })
  }
}
