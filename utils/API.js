import axios from "axios";

/*
It’s set up to use the RandomUser API as a base URL and also specify that we’d like JSON in return.
*/

export default axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json"
});