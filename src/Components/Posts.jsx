import { useEffect, useState } from "react";
import Post from "./Post";
import "./style.css";

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [records, setRecords] = useState([]);

  const url = "https://dummyjson.com/products";

  const getSearchInput = (event) => {
    // The records state was populated with all the returned data from the api. Now,
    // when someone searches, we want to display all the matching results from the 
    // records array, filtering this array by title.
    setBlogs(
      records.filter((record) =>
        record.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); // Set loading to true before fetching

      try {
        const response = await fetch(url); // Example API endpoint
        if (!response.ok) {
          // Check for HTTP errors (status outside 200-299)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        const returnedJsonData = json.products;
        setBlogs(returnedJsonData); // Access data as needed
        setRecords(returnedJsonData);
        console.log(returnedJsonData); // Log to verify
      } catch (err) {
        setError(err); // Set the error in state
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false); // Set loading to false whether success or failure to ensure
        // the loading indicator is removed
      }
    };

    fetchBlogs(); // Calling the async function you created within the useEffect
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <p>Loading Posts...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error.message}</p>;
  }

  return (
    <div className="posts">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={getSearchInput}
        />
      </div>
      <div className="blog-icon">
        <h3>Blog Articles</h3>
        <i className="fa fa-calculator"></i>
      </div>
      {/* Posts container section */}
      <div className="posts-container">
        {blogs.map((blog, index) => (
          <Post blog={blog} key={index} />
          // <div key={index}><h2>{blog}</h2></div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
