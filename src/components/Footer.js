import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
    <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title">Redirect</header> 
    <Link to={'/'} className="link link-hover">Services</Link>
    <Link to={'/'} className="link link-hover">Home</Link>
    <Link to={'/'} className="link link-hover">About</Link>
    <Link to={'/'} className="link link-hover">Projects</Link>
  </nav> 
</footer>
    </>
  )
}

export default Footer