import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const PostList = ({ post }) => {

    return <div className="col-4 d-flex align-items-start mb-5">
        <div className=''>
            <h3 className="fs-2 text-body-emphasis overflow-hidden">{post.post_title}</h3>
            <p>{post.post_detail}</p>
            <p>
                {post.post_tags.length > 0 && post.post_tags.map(tag => <span key={tag} className="badge bg-info text-dark me-2">{tag}</span>)}
            </p>

            <a xlinkHref="#" className="btn btn-sm btn-sm btn-primary ms-2"><FaRegThumbsUp /> <b>{post.post_reactions}</b></a>
            <a xlinkHref="#" className="btn btn-sm btn-sm btn-warning ms-2"><FaRegHeart /></a>
            <a xlinkHref="#" className="btn btn-sm btn-danger ms-2"><FaRegThumbsDown /></a>
            <a xlinkHref="#" className="btn btn-sm btn-outline-primary ms-2">India <MdOutlineLocationOn /></a>
        </div>
    </div>;
}

export default PostList;