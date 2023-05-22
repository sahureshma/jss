import "./Searchlist.css";

export default function SearchResults({ results }) {
  return (
    <div className="results">
      {results.map((result, id) => {
        return (
          <div
            onClick={() => alert(result.state_name)}
            key={id}
            className="itenslist"
          >
            {result.state_name}{" "}
          </div>
        );
      })}
    </div>
  );
}