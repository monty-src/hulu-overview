import Image from 'next/Image';
import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <header className=''>
      <h1>This is the header</h1>
      <div>
        <HeaderItem title='Home' Icon={} />
        <HeaderItem title='Home' />
      </div>
      <Image
        className="object-container"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}/>
    </header>
  )
};
export default Header;