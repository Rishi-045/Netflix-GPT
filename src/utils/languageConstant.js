const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today ?",
    navItems: {
      home: "Home",
      tvShows: "TV Shows",
      movies: "Movies",
      newAndPopular: "New & Popular",
      myList: "My List",
      browseByLanguages: "Browse By Languages",
    },
    signOut: "Sign Out",
    trailer: {
      title: "Ice Road: Vengeance",
      description:
        "Big rig ice road driver Mike McCann travels to Nepal to scatter his late brother’s ashes on Mt. Everest. While on a packed tour bus traversing the deadly 12,000 ft. terrain of the infamous Road to the Sky, McCann and his mountain guide encounter a group of mercenaries and must fight to save themselves, the busload of innocent travelers, and the local villagers’ homeland.",
    },
     movieType:{
    nowPlayingMovies: "Now Playing Movies",
    upcomingMovies: "Upcoming Movies",
    popularMovies: "Popular Movies",
    topRatedMovies: "Top Rated Movies"
  },
   controls:{
     play: "Play",
    moreInfo: "More Info"
  }

  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे ?",
    navItems: {
      home: "होम",
      tvShows: "टीवी शो",
      movies: "फ़िल्में",
      newAndPopular: "नया और लोकप्रिय",
      myList: "मेरी सूची",
      browseByLanguages: "भाषाओं के अनुसार खोजें",
    },
    signOut: "साइन आउट",
    trailer: {
      title: "आइस रोड: प्रतिशोध",
      description:
        "आइस रोड ड्राइवर माइक मैककैन अपने दिवंगत भाई की राख को माउंट एवरेस्ट पर विसर्जित करने के लिए नेपाल यात्रा करता है। जब वह एक भरे हुए टूर बस से 'रोड टू द स्काई' की खतरनाक 12,000 फीट ऊंची यात्रा पर होता है, तो माइक और उसका पर्वत गाइड भाड़े के सैनिकों से टकराते हैं और उन्हें खुद को, निर्दोष यात्रियों से भरी बस को, और स्थानीय गांववालों के घरों को बचाने के लिए संघर्ष करना पड़ता है।",
    },
     movieType: {
    nowPlayingMovies: "चल रही फिल्में",
    upcomingMovies: "आने वाली फिल्में",
    popularMovies: "लोकप्रिय फिल्में",
    topRatedMovies: "शीर्ष रेटेड फिल्में"
  },
   controls:{
      play: "देखें",
    moreInfo: "अधिक जानकारी"
  }

  },
  spanish: {
    search: "Buscay",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy ?",
    navItems: {
      home: "Inicio",
      tvShows: "Programas de TV",
      movies: "Películas",
      newAndPopular: "Nuevos y populares",
      myList: "Mi lista",
      browseByLanguages: "Explorar por idiomas",
    },
    signOut: "Cerrar sesión",
    trailer: {
      title: "Camino de Hielo: Venganza",
      description:
        "El conductor de camiones Mike McCann viaja a Nepal para esparcir las cenizas de su difunto hermano en el Monte Everest. Mientras recorre el mortal terreno de 12,000 pies de la infame Carretera al Cielo en un autobús turístico lleno, McCann y su guía de montaña se encuentran con un grupo de mercenarios y deben luchar para salvarse a sí mismos, a los inocentes pasajeros y a la tierra natal de los aldeanos locales.",
    },
    movieType: {
    nowPlayingMovies: "Películas en cartelera",
    upcomingMovies: "Próximas películas",
    popularMovies: "Películas populares",
    topRatedMovies: "Películas mejor valoradas"
  },
  controls:{
     play: "Reproducir",
    moreInfo: "Más información"
  }

  },
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export default lang;
