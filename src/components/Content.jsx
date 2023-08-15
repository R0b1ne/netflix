const Content = ({ category, images }) => {
  return (
    <>
      <h1>{category}</h1>
      <div className="scroll">
        {images.map((image, indexImage) => {
          return (
            <div key={indexImage}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;
