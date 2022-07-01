import { useEffect, useState, } from "react"

const useList = () =>{
    const [lists, setLists] = useState([])
    useEffect(() =>{
        fetch("https://vast-brook-93316.herokuapp.com/list")
        .then(res => res.json())
        .then(data => setLists(data));
    },[])
    return [lists, setLists];
}
 export default useList;