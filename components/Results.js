import Thumbnail from './Thumbnail';

const Results = ({ results }) => {
  return (
    <div className="mt-8">
      {results.map(result => (
        <Thumbnail key={result.id} result={result} />
      ))}b
    </div>
  )
}

export default Results;