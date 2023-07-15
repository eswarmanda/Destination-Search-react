import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails
  return (
    <li className="list-item">
      <img className="img" src={imgUrl} alt={name} />
      <p className="heading1">{name}</p>
    </li>
  )
}

export default DestinationItem
