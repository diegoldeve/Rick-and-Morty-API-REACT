
const Pagination = ({prev,next, onPrevious, onNext}) => {

	const handlePrevious = () => {
		onPrevious();
	}
	const handleNext = () => {
		onNext();
	}
  return (
    <>
			<ul className="pagination justify-content-center">
				{
					prev	?	
					(<li className="page-item">
						<button className="page-link m-1" onClick={handlePrevious}>Previous</button>
					</li>):null}
				{
					next?  
					(<li className="page-item">
						<button className="page-link m-1" onClick={handleNext}>Next</button>
					</li>):null}			
			</ul>
    </>
  )
}
export {Pagination}
