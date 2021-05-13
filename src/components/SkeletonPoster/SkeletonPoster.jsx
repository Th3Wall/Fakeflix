import "./skeletonPoster.scss"
import SkeletonElement from "../SkeletonElement/SkeletonElement";

const SkeletonPoster = () => {
	return (
		<div className="Skeleton__Poster">
			<SkeletonElement type="poster" />
			<SkeletonElement type="poster" />
			<SkeletonElement type="poster" />
			<SkeletonElement type="poster" />
			<SkeletonElement type="poster" />
			<SkeletonElement type="poster" />
		</div>
	);
};

export default SkeletonPoster