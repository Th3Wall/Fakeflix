import "./skeletonPoster.scss"
import useViewport from "../../hooks/useViewport";
import SkeletonElement from "../SkeletonElement/SkeletonElement";

const SkeletonPoster = () => {

	const { width } = useViewport();
	const numberOfTiles = width >= 1378 ? 6 : width >= 998 ? 4 : width >= 625 ? 3 : 2;
	console.log("numberOfTiles => ", numberOfTiles);

	return (
		<div className="Skeleton__Poster">
			{
				[...Array(numberOfTiles)].map((el, i) => (
					<SkeletonElement key={i} type="poster" />
				))
			}
		</div>
	);
};

export default SkeletonPoster