import { useRef } from "react";

const CreatePost = ({ addPost }) => {
    let post_title = useRef();
    let post_detail = useRef();
    let post_tags = useRef();

    function submitCreateForm(event){
        event.preventDefault();
        let new_post_title = post_title.current.value;
        let new_post_detail = post_detail.current.value;
        let new_post_tags = post_tags.current.value;
        new_post_tags = new_post_tags.split(",");

        post_title.current.value = "";
        post_detail.current.value = "";
        post_tags.current.value = "";

        addPost({
            ID: Date.now(),
            post_title: new_post_title,
            post_detail: new_post_detail,
            post_tags: new_post_tags,
            post_reactions: 100,
        });
    }
    
    return <form className="col-6 card mx-auto my-5" onSubmit={(event) => submitCreateForm(event)}>
        <div className="row  px-3">
            <div className="card-body">
                <h3 className="mb-3 overflow-hidden">Create Your Post Here</h3>
                <hr />
                <div className="col-12 mb-3">
                    <label htmlFor="postTitle" className="form-label">Post Title</label>
                    <input type="text" ref={post_title} className="form-control" placeholder="Post Title" id="postTitle" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="postDetail" className="form-label">Post Detail</label>
                    <textarea type="text" ref={post_detail} className="form-control" rows={4} placeholder="Post Detail..." id="postDetail"></textarea>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="postTags" className="form-label">Post Tags</label>
                    <input type="text" ref={post_tags} className="form-control" placeholder="Post Tags" id="postTags" />
                    <span className="fs-6">Please Enter Comma(,) Seperated Values</span>
                </div>
                <div className="col-2 mt-3 mx-auto">
                    <button type="submit" className="btn btn-primary border">Create</button>
                </div>
            </div>
        </div>
    </form>;
}

export default CreatePost;