import PostList from '../components/PostList.jsx';

const Posts = ({ allPosts }) => {
    return <div className="row m-5">
        <div className="col-12">
            <div className="row">
                { allPosts.map(post => <PostList key={post.id} post={post} />) }
            </div>
        </div>
    </div>;
}

export default Posts;