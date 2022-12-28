import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Accepts content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  // creates a connection to the database
  const jateDB = await openDB('jate', 1);
  // creates a transaction and specifies database and privileges
  const tx = jateDB.transaction('jate', 'readwrite');
  // opens desired object store
  const store = tx.objectStore('jate');
  // adds content to the database
  const request = store.put({ id: id, jate: content });;
  // gets confirmation of the request
  const result = await request;
  console.log('Data successfully saved to the database.', result);
};
// Gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  // creates a connection to the database
  const jateDB = await openDB('jate', 1);
  // creates a transaction and specifies database and privileges
  const tx = jateDB.transaction('jate', 'readonly');
  // opens desired object store
  const store = tx.objectStore('jate');
  // gets all the content from the database
  const request = store.getAll();
  // gets confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
