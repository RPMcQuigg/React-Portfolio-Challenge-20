import'../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Rutter P. McQuigg</p>
      <ul>
        <li><a href="https://github.com/RPMcQuigg">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/rutter-mcquigg-a691bb222">LinkedIn</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
