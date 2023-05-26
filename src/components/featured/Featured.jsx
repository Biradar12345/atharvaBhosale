import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.fULtrynaDlX3BTHgwWZDtwHaE8?pid=ImgDet&rs=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Hospiatls</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.hOvVQp9FYU3j1nvzl8EuTQHaE2?pid=ImgDet&w=694&h=454&rs=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 hospitals</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.n3nynOaV0v51w92V4JzkXAHaE8?pid=ImgDet&rs=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 hospitals</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
