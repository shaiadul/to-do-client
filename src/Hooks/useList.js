import { useEffect, useState, } from "react"

const useList = () =>{
    const [lists, setLists] = useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/list")
        .then(res => res.json())
        .then(data => setLists(data));
    },[])
    return [lists, setLists];
}
 export default useList;