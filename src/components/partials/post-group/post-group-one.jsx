import PostOne from '../../features/posts/post-one';
import PostTwo from '../../features/posts/post-two';
import PostThree from '../../features/posts/post-three';

export default function PostGroupOne() {
    return (
        <div className="post-group grid">
            <div className="width-x2 height-x3 grid-item">
                <PostOne />
            </div>

            <div className="width-x2 height-x2 grid-item">
                <PostTwo />
            </div>

            <div className="width-x1 height-x1 grid-item">
                <PostThree />
            </div>

            <div className="width-x1 height-x1 grid-item">
                <PostThree />
            </div>
        </div>
    )
}