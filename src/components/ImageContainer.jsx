import sofaImg from "../assets/sofa.png";

const ImageContainer = () => {
  return (
    <div className="absolute top-[30%] left-[-100px]">
      <img src={sofaImg} alt="Sofa" />
    </div>
  );
};

export default ImageContainer;
