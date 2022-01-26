import OwlCarousel from "../../features/owl-carousel";
import PostFour from "../../features/posts/post-four";

export default function BlogSection() {
    const options = {
        items: 3,
        margin: 60,
        responsive: {
            992: {
                items: 3
            },
            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    }

    return (
        <div className="blog-section">
            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/blog-logo.svg`} alt="blog-logo" className="blog-logo" />

            <OwlCarousel adClass="owl-theme" options={options}>
                <PostFour url="assets/images/blog/post-1.png" />
                <PostFour url="assets/images/blog/post-2.png" />
                <PostFour url="assets/images/blog/post-3.png" />
            </OwlCarousel>
        </div>
    )
}