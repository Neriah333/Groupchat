import axios from "axios";
import { io } from "socket.io-client";

const BackendBaseUrl = "http://localhost:5000";
const APIBaseUrl = "https://localhost:5000/api";

const API = axios.create({
  baseURL: APIBaseUrl,
});



export const registerUser = ( username )=> API.post("/register", { username });

export const getRooms = ()=> API.get("/rooms");
export const createRooms = (name) =API.post("/rooms", { name });

export const getMessages = (roomId) => API.get(`/message/${roomId}`);

export const socket = io(BackendBaseUrl, { autoConnect: false });