const categoryThemes: { [key: string]: {name:string, badge: string, header: string, content: string, sideNav: string, imgUrl: string } } = {
  character_pets: {
    name: 'characters & pets',
    badge: 'rgb(91, 72, 130)',
    header: 'rgb(40, 29, 64)',
    content: 'rgb(56, 44, 68)',
    sideNav: 'rgb(61, 52, 88)',
    imgUrl: "category-icon-characters-and-pets-mobile.svg"
  },
  objects: {
    name: 'objects',
    badge: 'rgb(108, 68, 118)',
    header: 'rgb(46, 31, 50)',
    sideNav: 'rgb(74, 55, 80)',
    content: 'rgb(53, 41, 56)',
    imgUrl: "category-icon-objects-mobile.svg"
  },
  locations: {
    name: 'locations',
    badge: 'rgb(131, 93, 113)',
    header: 'rgb(47, 30, 34)',
    content: 'rgb(59, 40, 45)',
    sideNav: 'rgb(81, 58, 64)',
    imgUrl: "category-icon-locations-mobile.svg"
  },
  plants_potions: {
    name: 'plants & potions',
    badge: 'rgb(109, 117, 77)',
    header: 'rgb(27, 31, 20)',
    sideNav: 'rgb(53, 58, 42)',
    content: 'rgb(36, 38, 28)',
    imgUrl: "category-icon-plants-and-potions-mobile.svg"
  },
  creatures: {
    name: 'creatures',
    badge: 'rgb(79, 107, 106)',
    header: 'rgb(28, 40, 40)',
    sideNav: 'rgb(49, 62, 61)',
    content: 'rgb(39, 45, 46)',
    imgUrl: "category-icon-creatures-mobile.svg"
  },
  spells: {
    name: 'spells',
    badge: 'rgb(61, 87, 118)',
    header: 'rgb(33, 42, 53)',
    sideNav: 'rgb(59, 74, 91)',
    content: 'rgb(46, 58, 72)',
    imgUrl: "category-icon-spells.svg"
  },
  magical_miscellany: {
    name: 'magical miscellany',
    badge: 'rgb(83, 76, 70)',
    header: 'rgb(44, 38, 33)',
    sideNav: 'rgb(74, 67, 60)',
    content: 'rgb(57, 50, 44)',
    imgUrl: "category-icon-magical-miscellany-mobile.svg"
  }
};

export const environment = {
  production: true,
  authApiEndPoint: 'https://api.escuelajs.co/api/v1',
  API_KEY: '68cd0494fa2e4420b71918442e9fa34d',
  firebaseConfig: {
    apiKey: "AIzaSyAtX-vSMbvTywUsxETPiL9YvoiN1h3C2eo",
    authDomain: "harry-potter-abe0a.firebaseapp.com",
    databaseURL: "https://harry-potter-abe0a-default-rtdb.firebaseio.com",
    projectId: "harry-potter-abe0a",
    storageBucket: "harry-potter-abe0a.appspot.com",
    messagingSenderId: "405033936683",
    appId: "1:405033936683:web:936e8ce35bd6d4934c476e"
  },
  categoryThemes // Assign the previously defined object here
};
