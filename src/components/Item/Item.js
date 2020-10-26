import React from "react";
import "./Item.css";
import { connect } from "react-redux";

const Item = (props) => {
  const renderInfo = () => {
    const { image, title, description } = props;
    return (
      <div className="itemInfo">
        <img src={image} alt={title} className="itemImage" title={title} />
        <h2>{title}</h2>
        <p className="itemDescription">{description}</p>
      </div>
    );
  };

  const renderTags = () => {
    const { tags } = props;
    if (tags !== undefined) {
      return (
        <div className="tagsContainer">
          <ul className="tagsList">
            {tags.map((tag, i) => {
              return (
                <li className="tag" key={i}>
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  const renderHr = () => {
    return (
      <div className="hrLine">
        <hr />
      </div>
    );
  };

  return (
    <>
      {renderInfo()}
      {renderHr()}
      {renderTags()}
    </>
  );
};

const mapStateToProps = (state) => {
  const { loadingReducer } = state;
  const { data } = loadingReducer;
  return {
    title: data.title,
    description: data.subtitle,
    tags: data.tags,
    image: data.image,
  };
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
