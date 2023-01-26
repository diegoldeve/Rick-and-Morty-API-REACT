const Characters = ({characters}) => {
  return (
    <>
        <div className="row">
            {
                characters.map((character,index) => (
                <>
                  <div key={index} className="col mb-5">
										<div className="card" style={{minWidth:"200px"}}>
											<img src={character.image} alt="" />
											<div className="card-body">
												<h5 className="card-title">{character.name}</h5>
												<hr />
												<p>Specie: <b>{character.species}</b></p>
												<p>Location: <b>{character.location.name}</b></p>
											</div>
										</div>
                  </div>
                </>
                ))
            }
        </div>
    </>
  )
}
export {Characters}
