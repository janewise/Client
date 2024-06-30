// firebaseFunctions.ts
import { db } from './firebase';
import { ref, set, update } from 'firebase/database'; // Import necessary database functions

export const sendUserDataToFirebase = (userId: string, autoIncrement: number) => {
  if (!userId) return;

  set(ref(db, 'users/' + userId), {
    autoIncrement: autoIncrement,
    timestamp: new Date().toISOString(),
  });
};

export const updateUserAutoIncrementInFirebase = (userId: string, autoIncrement: number) => {
  if (!userId) return;

  update(ref(db, 'users/' + userId), {
    autoIncrement: autoIncrement,
  });
};
