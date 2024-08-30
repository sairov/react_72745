import './index.css';

const Title = ({ heading = "h3", text, className, action }) => {
  const Tag = heading;


  return <Tag className={className} onClick={action}>{ text }</Tag>
}

export default Title