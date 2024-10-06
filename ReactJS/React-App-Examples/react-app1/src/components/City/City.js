import './City.css';

function importAll(req) {
  return req.keys().map((item) => req(item));
}

const imgs = importAll(require.context('src/img', false, /\.jpg$/));

const City = () => {
  return (
    <div className="city-container">
      <h1 className="city-name">Тюмень</h1>
      <p className="city-country">Страна: Россия</p>
      <p className="city-founded">Год основания: 1586</p>
      <div className="city-images">
        {imgs.map((img, index) => (
          <img key={index} src={img} alt={`Тюмень ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default City;
