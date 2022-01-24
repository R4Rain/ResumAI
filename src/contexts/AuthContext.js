import React, { useContext , useState , useEffect} from 'react'
import { auth } from '../firebase'


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(true)

    function signup(email, name, password) {
        auth.createUserWithEmailAndPassword(email, password)
        .then( function(result) {
            setErrorMessage('')
            result.user.updateProfile({
                displayName: name
            })
        }).catch( function(error) {
            setErrorMessage(error.code)
        })
    }
    function login(email, password) {
        auth.signInWithEmailAndPassword(email, password)
        .catch( function(error) {
            setErrorMessage(error.code)
        })
    }
    function logout(){
        auth.signOut()
        .catch( function(error) {
            console.log(error.message)
        })
    }
    function resetPassword(email){
        auth.sendPasswordResetEmail(email)
        .then(() =>{
            setErrorMessage("Confirmed!")
        })
        .catch( function(error) {
            setErrorMessage(error.code)
        })
    }
    function updateEmail(email){
        return currentUser.updateEmail(email)
    }
    function updatePassword(password){
        return currentUser.updatePassword(password)
    }
    useEffect(() =>{
        const unsubsrcibe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubsrcibe
    }, [])

    const value = { 
        currentUser,
        errorMessage,
        setErrorMessage,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    }
    return (
        <AuthContext.Provider value = {value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}