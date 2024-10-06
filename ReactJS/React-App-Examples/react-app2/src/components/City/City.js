import styleCity from './City.module.css';

function importAll(req) {
  return req.keys().map((item) => req(item));
}

const imgs = importAll(require.context('/src/img', false, /\.jpg$/));

const City = ({count}) => {
  return (
    <div className={styleCity.cityContainer}>
      <h1 className={styleCity.cityName}>Тюмень</h1>
      <p className={styleCity.cityCountry}>Страна: Россия</p>
      <p className={styleCity.cityFounded}>Год основания: 1586</p>
      <a href="https://www.tyumen-city.ru/" className={styleCity.link}>Ссылка на главный сайт про город</a>
      <div className={styleCity.cityImages}>
        {imgs.slice(0, count).map((img, index) => (
          <img key={index} src={img} alt={`Тюмень ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default City;
