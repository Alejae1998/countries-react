export default function CountryCard({ name, iso2 }) {
  return (
    <div>
      <h1>{name}</h1>
      <img
        src={`https://flagcdn.com/112x84/${iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/224x168/${iso2.toLowerCase()}.png 2x`}
        width="112"
        height="84"
        alt={`${name}`}
      />
    </div>
  );
}
