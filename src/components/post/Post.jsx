import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
        nulla quibusdam! Consectetur praesentium non enim culpa! Cumque,
        consectetur perspiciatis! Illo eaque similique magnam quasi quae iste
        optio consectetur cupiditate fugit. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deserunt, nulla quibusdam! Consectetur
        praesentium non enim culpa! Cumque, consectetur perspiciatis! Illo eaque
        similique magnam quasi quae iste optio consectetur cupiditate fugit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
        nulla quibusdam! Consectetur praesentium non enim culpa! Cumque,
        consectetur perspiciatis! Illo eaque similique magnam quasi quae iste
        optio consectetur cupiditate fugit.
      </p>
    </div>
  );
};

export default Post;
