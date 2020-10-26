import React from "react";
import "./Item.css";
import { connect } from "react-redux";

const Item = (props) => {
  const renderImage = () => {
    const { image, title, description } = props;
    return (
      <div>
        <img src={image} alt={title} className="itemImage" title={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

  const renderTags = () => {
    const { tags } = props;
    if (tags !== undefined) {
      return (
        <ul className="tagsContainer">
          {tags.map((tag, i) => {
            return (
              <li className="tag" key={i}>
                {tag}
              </li>
            );
          })}
        </ul>
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
    <div>
      {renderImage()}
      {renderHr()}
      {renderTags()}
    </div>
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
