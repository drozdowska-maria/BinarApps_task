import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyClee57-ePzmUkiwPWvYXPaB9Gj-h4W-Fo",
  authDomain: "binarapps-task.firebaseapp.com",
  projectId: "binarapps-task",
  storageBucket: "binarapps-task.appspot.com",
  messagingSenderId: "1001657499385",
  appId: "1:1001657499385:web:39a41288f5ddc7d7d12c28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const getGameData = async (callback) => {
    const gameDataSnapshot = await getDocs(collection(db, "gameData"))
    const gameList = gameDataSnapshot.docs.map((doc) => ({
        id: doc.id,
        question: doc.data().question,
        allWords: doc.data().all_words,
        goodWords: doc.data().good_words,
    }))
    const i =  Math.floor(Math.random() * gameList.length) //get random element of an array
    callback(gameList[i])
}

export { getGameData }