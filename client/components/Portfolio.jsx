import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <div>
    <h2>Portfolio</h2>
      
      <div id="portflex">
      <div>
        <img src="../photos/PasswordGenerator.png" alt="Password Generator Image" />
        <a href="https://rpmcquigg.github.io/Module-03-Password-Generator-Vandy/">Password Generator</a> |{' '}
        <a href="https://github.com/RPMcQuigg/Module-03-Password-Generator-Vandy">GitHub</a>
      </div>
      <div>
        <img src="../photos/RideShareTracker.png" alt="Ride Share Income Tracker Image" />
        <a href="https://whispering-tor-04047-8a6e7b67d499.herokuapp.com/">Ride Share Income Tracker</a> |{' '}
        <a href="https://github.com/RPMcQuigg/Project-2-Vandy?tab=readme-ov-file">GitHub</a>
      </div>
      <div>
        <img src="../photos/LocalList.png" alt="Local Event Finder Image" />
        <a href="https://rpmcquigg.github.io/Vandy-Project-01/">Local Event Finder</a> |{' '}
        <a href="https://github.com/RPMcQuigg/Vandy-Project-01">GitHub</a>
      </div>
      <div>
        <img src="../photos/5DayForecast.png" alt="5 Day Forecast" />
        <a href="https://rpmcquigg.github.io/Five-Day-Weather/">5 Day Weather Forecast</a> |{' '}
        <a href="https://github.com/RPMcQuigg/Five-Day-Weather">GitHub</a>
      </div>
      <div id="comingSoon">
        <p>More projects coming soon!</p>
      </div>
      </div>
    </div>
  );
}

export default Portfolio;
