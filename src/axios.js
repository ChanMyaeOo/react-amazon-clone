import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-2a6f2.cloudfunctions.net/api", // API url (cloud function)
});

export default instance;

// http://localhost:5001/clone-2a6f2/us-central1/api
