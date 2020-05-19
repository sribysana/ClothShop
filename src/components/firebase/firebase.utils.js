import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCXkzKNmyn78f1n3ldch0setg85g19M3BE',
	authDomain: 'cloth-store-8de2c.firebaseapp.com',
	databaseURL: 'https://cloth-store-8de2c.firebaseio.com',
	projectId: 'cloth-store-8de2c',
	storageBucket: 'cloth-store-8de2c.appspot.com',
	messagingSenderId: '245681729585',
	appId: '1:245681729585:web:a091ba047903f99b88e510',
	measurementId: 'G-ZV4HBSG4K0'
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const store = firebase.firestore();
const user = store.collection('users').doc('oDkrDROIFTqhx60Sd3Gz');
// console.log('Fire Store User>>>> ', user);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = store.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	console.log(snapShot);
	if (!snapShot.exists) {
		const { email, displayName, phoneNumber } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				phoneNumber,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log('error creating the user', err.messaage);
		}
	}
	return userRef;
};
// new firebase.auth.GoogleAuthProvider();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
