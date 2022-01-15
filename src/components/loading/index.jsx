import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PropTypes from "prop-types";

export const Loading = ({ height, count }) => {
  return (
    <SkeletonTheme baseColor="#e9ecef" highlightColor="#f8f9fa">
      <Skeleton height={height} count={count} />
    </SkeletonTheme>
  );
};

Loading.propTypes = {
  height: PropTypes.number,
  count: PropTypes.number,
};
