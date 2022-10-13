import { realtimeDatabase } from './../helpers/firebase';
import { ref, set, onValue } from "firebase/database";
import { generateUUID } from "~~/helpers/uuid";

export async function createSession(): Promise<string> {
  const db = realtimeDatabase;
  const uuid = generateUUID();
  const host = window.location.protocol + '//' + window.location.host;
  try {
    await set(ref(db, 'sessions/' + uuid), {
      lastLogContent: `🎉 ¡Sesión creada! -> ${host}/api/log/${uuid} | POST { message: 'algún mensaje' }`,
      lastLogDateTime: new Date().toISOString(),
    });
    return uuid
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export function setLogsListener(sessionUUID: string, callback: Function) {
  const db = realtimeDatabase;
  const sessionReference = ref(db, 'sessions/' + sessionUUID);
  onValue(sessionReference, (snapshot) => {
    const data = snapshot.val();
    callback(data)
  });
}

export async function writeLog(sessionUUID, content): Promise<void> {
  const db = realtimeDatabase;
  try {
    await set(ref(db, 'sessions/' + sessionUUID), content);
  } catch (error) {
    throw new Error(`${error}`)
  }
}