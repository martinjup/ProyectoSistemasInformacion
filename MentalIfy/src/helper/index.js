import {
    doc,
    addDoc,
    collection,
    updateDoc,
    getDoc,
    setDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

export const USERS_COLLECTION = "users";

export async function getUserProfile(email) {
    const userQuery = query(
        collection(db, USERS_COLLECTION),
        where("email", "==", email)
    );

    const results = await getDocs(userQuery);

    if (results.size > 0) {
        const [user] = results.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }));
        return user;
    }

    return null;
}