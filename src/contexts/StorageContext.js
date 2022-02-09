import React, { useContext , useState } from 'react'
import { storage } from '../firebase'
import { useAuth } from './AuthContext'

const StorageContext = React.createContext()

export function useStorage(){
    return useContext(StorageContext)
}
export function StorageProvider({ children }) {
    const { currentUser } = useAuth()
    const [progress, setProgress] = useState(0)
    const [data, setData] = useState([])
    const [url, setUrl] = useState('')
    function getFile(){
        const storageRef = storage.ref('users/' + currentUser.uid);
        const temp = []
        storageRef.listAll().then(function (result) {
            result.items.forEach(fileRef => {
                temp.push({name: fileRef.name})
            })
        }).then(() =>{
            //console.log(temp)
            setData(temp)
        }).catch( error =>{
            console.log(error)
        })
    }
    function getUrl(filename){
        const storageRef = storage.ref('users/' + currentUser.uid + '/' + filename)
        storageRef.getDownloadURL().then(url_now =>{
            setUrl(url_now)
        }).catch(error =>{
            console.log(error.message)
        })
    }

    function deleteFile(filename){
        const storageRef = storage.ref('users/' + currentUser.uid + '/' + filename)
        storageRef.delete()
        .then(() =>{
            setData(data.filter((file) => file.name !== filename))
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    function uploadFile(file){
        const uploadTask = storage.ref(`users/${currentUser.uid}/${file.name}`).put(file)
        uploadTask.on("state_changed",
            snapshot => {
                const progress_now = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress_now)
            },
            error => {
                console.log(error)
            },
            () =>{
                if(!data.some(e => e.name === file.name)){
                    const temp = data
                    temp.push({name: file.name})
                    setData(temp)
                }
            }
        )
    }
    const value = { 
        progress,
        setProgress,
        data,
        uploadFile,
        deleteFile,
        getFile,
        getUrl,
        url,
        setUrl
    }
    return (
        <StorageContext.Provider value = {value}>
            { children }
        </StorageContext.Provider>
    )
}