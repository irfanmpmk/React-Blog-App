import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia
          accusamus explicabo quae optio, asperiores autem reprehenderit esse
          repellendus fuga. Blanditiis doloribus tempore, dolorem esse qui vero
          commodi officia reiciendis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae quia accusamus explicabo quae optio,
          asperiores autem reprehenderit esse repellendus fuga. Blanditiis
          doloribus tempore, dolorem esse qui vero commodi officia reiciendis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia
          accusamus explicabo quae optio, asperiores autem reprehenderit esse
          repellendus fuga. Blanditiis doloribus tempore, dolorem esse qui vero
          commodi officia reiciendis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae quia accusamus explicabo quae optio,
          asperiores autem reprehenderit esse repellendus fuga. Blanditiis
          doloribus tempore, dolorem esse qui vero commodi officia reiciendis?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
