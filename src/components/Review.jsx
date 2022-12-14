const Review = ({ review }) => {
  return (
    <div>
      <div>
        <img src={review.author_details.avatar_path} alt="" />
      </div>
      <div>
        <p>{review.author_details.name}</p>
        <p>
          &#64;
          {review.author_details.username}
        </p>
        <p>{review.author_details.rating}</p>
      </div>
      <div>
        <p>{review.content}</p>
      </div>
    </div>
  );
};

export default Review;
