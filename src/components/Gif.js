export const Gif = ({ title, url }) => {
  return (
    <div className="border m-2">
      <img className="img-fluid img-center" src={url} alt={title}></img>
      <hr />
      <p className="text-center p-1">{title}</p>
    </div>
  );
};
