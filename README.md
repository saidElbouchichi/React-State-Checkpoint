# React State Checkpoint — GOMYCODE

Projet create-react-app avec un **composant basé sur une classe** (`App.js`).

- État : `person = { fullName, bio, imgSrc, profession }` + booléen `show`.
- Un bouton bascule `show` ; quand `show` est vrai, le profil s'affiche.
- `componentDidMount` lance un `setInterval` qui compte les secondes écoulées depuis le montage ; `componentWillUnmount` le nettoie.

```bash
npm install
npm start
```
