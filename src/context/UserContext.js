import { createContext,useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState()
    const provider = new GoogleAuthProvider();

    const SignInWithFirebase = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            });
    }
    const userData = {
        SignInWithFirebase,
        user
    }

    return(
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider, UserContext};