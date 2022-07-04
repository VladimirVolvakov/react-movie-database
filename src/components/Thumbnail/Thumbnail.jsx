import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ imageSrc, movieId, isClickable }) => {
  return (
    <div>
      <Image src={imageSrc} alt="movie-thumbnail" />
    </div>
  );
};

export default Thumbnail;
