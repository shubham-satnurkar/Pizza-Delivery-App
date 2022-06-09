import { APIURL } from "./URL";
import axios from "axios";

function getUser(email,pass){
    return axios.get(APIURL+"?email="+email+"&pass="+pass)
}

function addUSer(data){
    return axios.post(APIURL, data)
}
export {getUser,addUSer}