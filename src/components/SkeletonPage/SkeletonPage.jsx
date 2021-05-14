import "./skeletonPage.scss"
import SkeletonElement from "../SkeletonElement/SkeletonElement";
import SkeletonPoster from "../SkeletonPoster/SkeletonPoster";

const SkeletonPage = () => {
	return (
		<div className="Skeleton__Page">
			<SkeletonElement type="title" />
			<SkeletonPoster />
		</div>
	);
};

export default SkeletonPage;