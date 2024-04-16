import { v4 } from "uuid";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBJZXDb8juJhVeAuQTZvgB3rQy0kWhtw7U",
  authDomain: "e-commerce-images-761b7.firebaseapp.com",
  projectId: "e-commerce-images-761b7",
  storageBucket: "e-commerce-images-761b7.appspot.com",
  messagingSenderId: "417296449344",
  appId: "1:417296449344:web:c32e7f0e149f28b9ed84a5"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)  

export async function uploadFile(file) {
   const storageRef =  ref(storage, v4())
   await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}