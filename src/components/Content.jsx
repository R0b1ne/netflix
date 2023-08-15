const Content = ({ category, images }) => {
  return (
    <>
      <h1>{category}</h1>
      <div className="scroll">
        {images.map((image, indexImage) => {
          return (
            <div key={indexImage}>
              <div className="vignette">
                <img src={image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;
