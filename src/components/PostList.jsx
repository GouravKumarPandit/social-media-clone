import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const PostList = () => {
    return <div className="col-4 d-flex align-items-start mb-5">
        <div className=''>
            <h3 className="fs-2 text-body-emphasis overflow-hidden">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <p>
                <span className="badge bg-info text-dark border">Tags</span>
                <span className="badge bg-info ms-2 text-dark border">Tags</span>
                <span className="badge bg-info ms-2 text-dark border">Tags</span>
                <span className="badge bg-info ms-2 text-dark border">Tags</span>
            </p>
            <a xlinkHref="#" className="btn btn-sm btn-primary"><FaRegThumbsUp /></a>
            <a xlinkHref="#" className="btn btn-sm btn-sm btn-warning ms-2"><FaRegHeart  /></a>
            <a xlinkHref="#" className="btn btn-sm btn-danger ms-2"><FaRegThumbsDown /></a>
            <a xlinkHref="#" className="btn btn-sm btn-outline-primary ms-2">India <MdOutlineLocationOn  /></a>
        </div>
    </div>;
}

export default PostList;