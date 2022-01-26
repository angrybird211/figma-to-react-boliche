import PostOne from "../../features/posts/post-one";
import PostTwo from "../../features/posts/post-two";
import PostThree from "../../features/posts/post-three";
import PostGroupOne  from "../../partials/post-group/post-group-one";

export default function noticias() {
    return (
        <main className="main noticias">
            <div className="ranking-list ranking-list-one">
                <div className="container">
                    <div className="list-header">
                        <div className="section-title mb-0">
                            <h2 className="text-secondary-dark">Ultimas<br />noticias.</h2>
                        </div>

                        <div className="select-box">
                            <label className="text-white">Escolha a categoria:</label>

                            <select name="category" className="form-control" defaultValue="default">
                                <option value="default" selected="selected">Adulto Masculino</option>
                                <option value="popularity">Adulto Masculion</option>
                                <option value="rating">Adulto Masculion</option>
                                <option value="date">Adulto Masculion</option>
                                <option value="price-low">Adulto Masculion</option>
                                <option value="price-high">Adulto Masculion</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <PostGroupOne />

                <div className="post-group grid">
                    <div className="width-x2 height-x2 grid-item">
                        <PostTwo />
                    </div>

                    <div className="width-x2 height-x3 grid-item">
                        <PostOne />
                    </div>

                    <div className="width-x1 height-x1 grid-item">
                        <PostThree />
                    </div>

                    <div className="width-x1 height-x1 grid-item">
                        <PostThree />
                    </div>
                </div>
            </div>
        </main>
    )
}