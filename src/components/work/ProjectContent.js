export default [
  {
    name: "Chinese Idiom Chengyu",
    image: require("../../images/projects/chinese-idiom-chengyu.jpg"),
    tools: ["Node.js"],
    description:
      "A npm package that contains helper functions for Chinese idioms or chengyu.",
    details: [
      "Published on npm to support future web projects with Chinese idioms.",
      "Parsed JSON files that can be used efficiently for idiom search functions.",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/wenhuangzeng/chinese-idiom-chengyu",
      },
    ],
  },

  {
    name: "whzeng.com",
    image: require("../../images/projects/whzeng.jpg"),
    tools: ["Gatsby.js", "React.js", "SASS"],
    description: "My first personal website.",
    details: [
      "Built my first personal website with Gastby.js, a modern site generator for React.",
      "Practiced single responsibility of React components and divided website styling through SASS modules.",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/wenhuangzeng/wenhuangzeng.github.io",
      },
      {
        name: "Link",
        url: "http://whzeng.com",
      },
    ],
  },

  {
    name: "GenFit",
    image: require("../../images/projects/genfit.jpg"),
    tools: ["Java", "HTML", "CSS", "jQuery", "SQLite", "AWS"],
    description:
      "Group project to build a web-based application where users can compile a virtual inventory of their closet, easily create outfits, and receive outfit suggestions.",
    details: [
      "Developed multi-attribute matchings algorithms for suggesting clothing items to user when composing a new outfit and for user to outfit suggestions given existing clothing items.",
      "Integrated user account closet data from MySQL database and image storage hosted on AWS RDS and S3 respectively",
      "Implemented secured user authentication that hashes user account password on both client and server side using MD5 and bcrypt.",
      "Created personal and interactive data visualizations for users to better understand their current wardrobe.",
    ],
    links: [],
  },

  {
    name: "Clinical Intents Research",
    image: require("../../images/projects/clinical-intents-research.jpg"),
    tools: ["Python"],
    description:
      "A research project to examine the log files of a biomedical expert search engine in order to perform personalization and re-ranking of the search results.",
    details: [
      "Built a natural language model, using scikit-learn library, that classifies query log keywords as one of the three generic medical intents based on ~8 thousands PudMed Central Document Titles and their intents labeled by 2014&15 TREC Clinical Decision Support Track.",
      "Identified the medical intents of ~14,000 unique query log keywords and the frequency of medical intents of ~10,000 users of the search engine, based on unique IP address.",
      "Created data visualizations of the entire query log dataset to obtain a better understanding of the categorizations and behaviors of the search engine history.",
      "Extracted and parsed large-scale (~5M interactions) log files of a biomedical expert search engine into smaller JSON datasets.",
    ],
    links: [],
  },

  {
    name: "Map",
    image: require("../../images/projects/maps.jpg"),
    tools: ["Java", "HTML", "CSS", "jQuery", "SQLite"],
    description:
      "Paired project to build a map engine, similar to Google Maps.",
    details: [
      "Implemented a generic Graph data structure and A* algorithm from scratch to optimize finding the shortest path between two locations.",
      "Implemented a genric K-D Tree to efficiently search for the closest locations near a given coordinate.",
      "Built an interactive web app for a map that is capable of zooming, panning, and finding directions using Canvas API.",
      "Created a separate thread for traffic server endpoint to receive live traffic data in order to update GUI's street traffiic in real time.",
    ],
    links: [],
  },

  {
    name: "Autocorrect",
    image: require("../../images/projects/autocorrect.jpg"),
    tools: ["Java", "HTML", "CSS", "jQuery"],
    description: "A single-paged web app that implements autocorrect.",
    details: [
      "Implemented a generic Trie data structure from scratch for efficient prefix lookup.",
      "Built a single-paged web app with RESTful service to get autocorrect suggestions through AJAX calls.",
      "Composed suggestion logic using Levenshtein edit distance and prefix matching.",
    ],
    links: [],
  },

  {
    name: "TRON",
    image: require("../../images/projects/tron.jpg"),
    tools: ["Python"],
    description:
      "Paired project to build a computational decision model for AI to win the game of TRON.",
    details: [
      "Implemented Minimax with Alpha-Beta Pruning and Cutoff algorithm that finds the next optimal move that minimizes the possible loss.",
      "Implemented a heuristic function that utilizes the concept of a Voronoi diagram to calculate the amount of region that the AI can get to first after making a move.",
    ],
    links: [],
  },

  {
    name: "Pacman",
    image: require("../../images/projects/pacman.jpg"),
    tools: ["Java", "JavaFX"],
    description: "An desktop application of the iconic game Pacman.",
    details: [
      "Utilized OOP to categorize and encapsulate components of Pacman.",
      "Implemented breadth-first search to control Ghosts’ movement;. Created the game GUI through JavaFX.",
    ],
    links: [
      // { "name" : "Github", "url" : "https://github.com" },
      // { "name" : "Demo", "url" : "https://google.com" }
    ],
  },
]
