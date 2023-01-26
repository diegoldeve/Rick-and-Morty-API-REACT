
const Navbar = ({titulo}) => {
  return (
    <div>
      <nav className='navbar bg-light color-red'>
        <div className='container'>
          <a href="/" className='navbar-brand text-uppercase '>{titulo}</a>
        </div>
      </nav>
    </div>
  )
}

export {Navbar}
