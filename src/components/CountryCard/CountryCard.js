export default function CountryCard({ name, iso2 }) {
  return (
    <div>
      <h1>{name}</h1>
      <img
        src={`https://flagcdn.com/96x72/${iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/192x144/${iso2.toLowerCase()}.png 2x`}
        width="96"
        height="72"
        alt={`${name}`}
      />
    </div>
  );
}
