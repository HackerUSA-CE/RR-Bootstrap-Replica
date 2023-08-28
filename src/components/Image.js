import Image from 'react-bootstrap/Image';

function Image() {
  return <Image src={process.env.PUBLIC_URL + '/instacartlogo.png'} fluid />;
}

export default Image 