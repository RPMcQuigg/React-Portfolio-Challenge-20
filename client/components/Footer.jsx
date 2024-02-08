function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Name</p>
      <ul>
        <li><a href="https://github.com/yourusername">GitHub</a></li>
        <li><a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
        <li><a href="https://twitter.com/yourusername">Twitter</a></li>
        {/* Add more social media links if desired */}
      </ul>
    </footer>
  );
}

export default Footer;
