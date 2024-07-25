import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const getLinks = async (userId: string) => {
  const q = query(collection(db, "links"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const addLink = async (link: any) => {
  await addDoc(collection(db, "links"), link);
};
