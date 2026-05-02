import { useEffect, useState } from "react"
import '/Users/aj/Desktop/Desktop - Abhineet’s MacBook Air/untitled folder/logging_middleware/logging_middleware/src/index.css'
function Logging(){
    // const [notification ,setNotification] = useState([]);

    
    // useEffect(() =>{
    //     fetch("")
    //     .then((res)=> res.json("http://localhost:5000/logs"))
    //     .then(data =>{
    //         setNotification(data);

    //     })
    //     .catch((err) =>{
    //         console.log("Error",err)
    //     });
        
    // },[])
    return(
        <div className="div-border">
            <h1 className="Notification">Notification</h1>
            <form>
                <p>email: <input type="email" /></p>
                <p>name: <input type="name" /></p>
                <p>mobile no.: <input type="number" /></p>
                <p>rollNo.: <input type="text" /></p>
                <p>accessCode: <input type="text" /></p>
                <button type="submit">Submit</button>
            </form>
            


        </div>
    )
}

export default Logging