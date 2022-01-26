import FeatureBox from "../partials/feature-box";
import Gallery from "../partials/gallery";
import PostGroupOne from "../partials/post-group/post-group-one";
import RankingListOne from "../partials/ranking-list/ranking-list-one";
import ScheduleOne from "../partials/schedule/schedule-one";

export default function HomePage() {
    return (
        <main className="main home">
            <div className="container-fluid">
                <PostGroupOne />
            </div>

            <ScheduleOne />

            <div className="container-fluid position-relative ranking-section">
                <RankingListOne />
            </div>

            <Gallery />

            <FeatureBox />
        </main>
    )
}