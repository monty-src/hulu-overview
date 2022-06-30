
import FlipMove from 'react-flip-move';
import Thumbnail from './Thumbnail';

const Results = ({ results }) => {
  return (
      <FlipMove className="
      px-5
      my-10
      sm:grid
      sm:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-4
      3xl:grid-cols-5
      ">
        {results.map(result => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </FlipMove>

  )
}

export default Results;