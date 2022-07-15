import {useState}  from "react";
import { useHistory} from "react-router-dom";




const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Doss");
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsPending("true");

        fetch("http://localhost:3000/", {
            method: "POST",
            headers: { "Content-type": "application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog addded");
            setIsPending("false");
            // history.go(-1); redirect back 1 time
            history.push("/");
        })
        
    }

    return (
        <div className="create">
            <h2>Add a New blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Blog title:
                </label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>
                    Blog body:
                </label>
               <textarea required value={body} onChange={(e) => setBody(e.target.value)}>
                   
               </textarea>
               <label>
                   Blog author:
               </label>
               <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                   <option value="Doss">Doss</option>
                   <option value="MeowDell">MeowDell</option>
               </select>
               { !isPending && <button> Add Blog  </button>}
               { isPending && <button disabled> Adding Blog...  </button>}
               <p>
                   {title}
               </p>
               <p>
                   {body}
               </p>
               <p>
                   {author}
               </p>
            </form>
        </div>
     );
}
 
export default Create;