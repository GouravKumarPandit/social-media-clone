import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const PostList = ({ post }) => {

    return <div className="col-4 px-4 d-flex jalign-items-start mb-5">
        <div className="row ">
            <div className="col-12 card">
                <div className='card-body'>
                    <h3 className="fs-2 text-body-emphasis overflow-hidden">{post.post_title}</h3>
                    <p>{post.post_detail}</p>
                    <p>
                        {post.post_tags.length > 0 && post.post_tags.map(tag => <span key={tag} className="badge bg-info text-dark me-2">{tag}</span>)}
                    </p>

                    <a xlinkHref="#" className="btn btn-sm btn-sm btn-primary me-2"><FaRegThumbsUp /> <b>{post.post_reactions}</b></a>
                    <a xlinkHref="#" className="btn btn-sm btn-sm btn-warning me-2"><FaRegHeart /></a>
                    <a xlinkHref="#" className="btn btn-sm btn-danger me-2"><FaRegThumbsDown /></a>
                    <a xlinkHref="#" className="btn btn-sm btn-outline-primary me-2">India <MdOutlineLocationOn /></a>
                </div>
            </div>
        </div>
    </div>;
}

export default PostList;