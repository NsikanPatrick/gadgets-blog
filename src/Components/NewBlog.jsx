const NewBlog = () => {
    return(
        <div className="form-container">
            <form>
                <input type="text" name="title" placeholder="Blog Title" />
                <input type="text" name="description" placeholder="Blog description" />
                <input type="file" name="description" placeholder="Blog description" />
                <button className="newblog-btn">Submit</button>
            </form>
        </div>
    )
}

export default NewBlog;