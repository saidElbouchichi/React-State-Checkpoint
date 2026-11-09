import React, { Component } from 'react';

// Composant basé sur une classe
class App extends Component {
  constructor(props) {
    super(props);
    // État : une personne + un booléen "show" + le temps écoulé depuis le montage
    this.state = {
      person: {
        fullName: 'Said El Bouchichi',
        bio: "Ingénieur en génie électrique passionné par l'automatisme, l'IA et le développement web.",
        imgSrc: '/profile.svg',
        profession: 'Développeur Full-Stack (GOMYCODE)',
      },
      show: false,
      elapsed: 0,
    };
  }

  // Cycle de vie : démarre l'intervalle quand le composant est monté
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => ({ elapsed: prev.elapsed + 1 }));
    }, 1000);
  }

  // Cycle de vie : nettoie l'intervalle avant le démontage
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prev) => ({ show: !prev.show }));
  };

  render() {
    const { person, show, elapsed } = this.state;
    const { fullName, bio, imgSrc, profession } = person;

    return (
      <div className="app">
        <h1>React State Checkpoint</h1>
        <button className="toggle" onClick={this.toggleShow}>
          {show ? 'Masquer le profil' : 'Afficher le profil'}
        </button>

        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <h3>{profession}</h3>
            <p>{bio}</p>
          </div>
        )}

        <p className="timer">
          Temps écoulé depuis le montage du composant : <strong>{elapsed}</strong> s
        </p>
      </div>
    );
  }
}

export default App;
