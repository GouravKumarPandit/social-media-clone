const CreatePost = () => {
    return <>
        <h3 className="mb-3 overflow-hidden">Create Your Post Here</h3>
        <div className="col-12 mb-3">
            <label htmlFor="postTitle" className="form-label">Post Title</label>
            <input type="text" className="form-control" placeholder="Post Title" id="postTitle" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="postDetail" className="form-label">Post Detail</label>
            <textarea type="text" className="form-control" rows={4} placeholder="Post Detail" id="postDetail"></textarea>
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="postTags" className="form-label">Post Tags</label>
            <input type="text" className="form-control" placeholder="Post Tags" id="postTags" />
            <span className="fs-6">Please Enter Comma(,) Seperated Values</span>
        </div>
        <div className="col-2 mt-3 mx-auto">
            <button type="submit" className="btn btn-primary border">Create</button>
        </div>
    </>;
}

export default CreatePost;