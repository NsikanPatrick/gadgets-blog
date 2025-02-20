import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [postDetail, setPostDetail] = useState(null); // Initialize to null
    const [imagesArray, setImagesArray] = useState([]); // Initialize to empty array

    const { id } = useParams(); // useParams helps you trap ids from the url
    const url = `https://dummyjson.com/products/${id}`; // Template literal for cleaner URL

    useEffect(() => {
        const fetchPostDetail = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();

                setPostDetail(json); // Set the single product object
                setImagesArray(json.images || []); // Handle missing images gracefully

                console.log(json); // Log the entire JSON to inspect the structure
            } catch (err) {
                setError(err);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPostDetail();
    }, [url]);

    if (loading) {
        return <p>Loading Post...</p>;
    }

    if (error) {
        return <p style={{ color: "red" }}>Error: {error.message}</p>;
    }

    if (!postDetail) { // Handle the case where postDetail is still null
        return <p>Product not found.</p>; // Or a better "no product" message
    }

    return (
        <div className="detail-post-container">
            <div className="title-description">
                <h2>{postDetail.title}</h2>
                <p>{postDetail.description}</p>
            </div>
            <div className="images-container">
                {imagesArray.map((image, index) => (
                    <img src={image} alt={`Product Image ${index + 1}`} key={index} />
                ))}
            </div>
        </div>
    );
};

export default PostDetail;