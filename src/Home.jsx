import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";


const Home = () => {
    // let name = "mario"; <-NOT REACTIVE
    
    const [name, setName] = useState("mario");  //<- REACTIVE
    const [age, setAge] = useState(25);  
    const [blogs, setBlogs] = useState([
        {title: "My new web", body:"lorem ipsum shit...", author:"Doss", id:1},
        {title: "Welcome dog", body:"lorem ipsum shit...", author:"Doss", id:2},
        {title: "Web tool tips", body:"lorem ipsum shit...", author:"MeowDell", id:3}
    ]);
    
    const handleClick =(e) => {
     setName("luigi");
     setAge(40);
     
    }
    const handleClickAgain =(name, e) =>{
        console.log('hello' + " " + name, e.target);
    }

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log('use effect ran');
        console.log(blogs)
    }, [blogs] );

    return ( 
        <div className="home"> 
           
            <Bloglist blogs={blogs} title="All title" handleDelete={handleDelete}></Bloglist> 
            <Bloglist blogs={blogs.filter((blog) => blog.author === "MeowDell")} title="MeowDell's Blogs"></Bloglist> 
            <h2>homepage</h2>
            <p>
                {name} is {age} years old
            </p>
            <button onClick={handleClick}>
                click me
            </button>
            <button onClick={(e) =>handleClickAgain("dosss", e)}>
                click again
            </button>
        </div>
     );
}
 
export default Home;