function Files(props) {
  return (
    <div>
      <p className="file-text">{props.props.type}</p>
      <p className="file-text">{props.props.name}</p>
    </div>
  )
}

export default Files;