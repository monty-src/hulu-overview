import Image from 'next/Image';

const Thumbnail = ({id, result}) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
    <div key={id}>
      <Image
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||`${BASE_URL}${result.poster_path}`}
        height={1080}
        width={1920}
        layout="responsive"
      />
      <div>
        <p className="truncate max-w-mf">{result.overview}</p>
      </div>
    </div>
  )
}

export default Thumbnail;