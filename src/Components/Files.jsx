function Files(props) {
  // console.log(props)


  return (
    <div id="uploaded-files">
      { props.files ? <img className="uploaded-image" src={props.images} width="80px"/> : null }
      <p className="file-text">{props.files.name}</p>
    </div>
  
  )
}

export default Files;