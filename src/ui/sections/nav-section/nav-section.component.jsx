import Styles from './nav-section.module.css';

const NavBar = () => {
  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
      <div className={Styles.navWrapper}>
        <div className={Styles.logo}><a href="#">WESTEND DIGITAL</a></div>
        <input type="radio" name="slide" id={Styles.cancelButton} />
        <input type="radio" name="slide" id="menu-button" />

        <ul className={Styles.navLinks}>
          <label className={`${Styles.navButton} ${Styles.cancelButton}`} htmlFor={Styles.cancelButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L17.94 6M18 18L6.06 6"/></svg>
          </label>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#" className={Styles.desktopItem}>Dropdown Menu</a>
            <input type="checkbox" name="" id="showDrop" />
            <label htmlFor="showDrop" className={Styles.mobileItem}>Dropdown Menu</label>
            <ul className={Styles.dropMenu}>
              <li><a href="#">Dropdown Menu 1</a></li>
              <li><a href="#">Dropdown Menu 2</a></li>
              <li><a href="#">Dropdown Menu 3</a></li>
              <li><a href="#">Dropdown Menu 4</a></li>
              <li><a href="#">Dropdown Menu 5</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className={Styles.desktopItem}>Mega Menu</a>
            <input type="checkbox" name="" id={Styles.showMega} />
            <label htmlFor={Styles.showMega} className={Styles.mobileItem}>Mega Menu</label>
            <div className={Styles.megaMenu}>

                <div className={Styles.megaMenuContent}>
                  <div className={Styles.megaMenuContent__row}>
                    <header>WebFlow</header>
                    <ul className={Styles.megaLinks}>
                      <li><a href="#">Mega Link 1</a></li>
                      <li><a href="#">Mega Link 2</a></li>
                      <li><a href="#">Mega Link 3</a></li>
                      <li><a href="#">Mega Link 4</a></li>
                      <li><a href="#">Mega Link 5</a></li>
                    </ul>
                  </div>
                  <div className={Styles.megaMenuContent__row}>
                    <header>FullStack</header>
                    <ul className={Styles.megaLinks}>
                      <li><a href="#">Mega Link 1</a></li>
                      <li><a href="#">Mega Link 2</a></li>
                      <li><a href="#">Mega Link 3</a></li>
                      <li><a href="#">Mega Link 4</a></li>
                      <li><a href="#">Mega Link 5</a></li>
                    </ul>
                  </div>
                  <div className={Styles.megaMenuContent__row}>
                    <header>Onderhoud</header>
                    <ul className={Styles.megaLinks}>
                      <li><a href="#">Mega Link 1</a></li>
                      <li><a href="#">Mega Link 2</a></li>
                      <li><a href="#">Mega Link 3</a></li>
                      <li><a href="#">Mega Link 4</a></li>
                      <li><a href="#">Mega Link 5</a></li>
                    </ul>
                  </div>
                  <div className={Styles.megaMenuContent__row}>
                    <header>Hosting</header>
                    <ul className={Styles.megaLinks}>
                      <li><a href="#">Mega Link 1</a></li>
                      <li><a href="#">Mega Link 2</a></li>
                      <li><a href="#">Mega Link 3</a></li>
                      <li><a href="#">Mega Link 4</a></li>
                      <li><a href="#">Mega Link 5</a></li>
                    </ul>
                  </div>
                  <div className={Styles.megaMenuContent__row}>
                    <header>Hosting</header>
                    <ul className={Styles.megaLinks}>
                      <li><a href="#">Mega Link 1</a></li>
                      <li><a href="#">Mega Link 2</a></li>
                      <li><a href="#">Mega Link 3</a></li>
                      <li><a href="#">Mega Link 4</a></li>
                      <li><a href="#">Mega Link 5</a></li>
                    </ul>
                  </div>
                </div>

            </div>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>

        <label className={`${Styles.navButton} ${Styles.menuButton}`} htmlFor={Styles.menuButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path  fill="currentColor" fillRule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5" clipRule="evenodd"/></svg>
        </label>
      </div>
      </nav>
    </header>
  )
}

export default NavBar;
