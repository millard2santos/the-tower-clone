import { type FirebaseApp, initializeApp } from "firebase/app";
import {
  doc,
  type Firestore,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import firebaseConfig from "./config";

class FirestoreApi {
  private app: FirebaseApp;
  private db: Firestore;
  controller: AbortController;
  signal: AbortSignal;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.controller = new AbortController();
    this.fetchSettings = {
      signal: this.controller.signal,
    };
  }

  setDoc(collection: string, document: { [key: string]: any }) {
    try {
      setDoc(doc(this.db, collection), document);
    } catch (error) {
      console.log(error);
      throw new Error("Error al registrar el documento");
    }
  }

  async getDoc(collection: string, uid: string) {
    const docRef = doc(this.db, collection, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      throw new Error();
    }
    return docSnap.data();
  }
}

const crud = new FirestoreApi();
export default crud;
