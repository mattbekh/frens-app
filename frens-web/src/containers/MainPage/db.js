const initialFrensList = [
  {
    "Mike Hannigan": {
      email: "mike@gmail.com",
      password: "111", //dm5 encryption

      social: {
        facebook: "mike_facebook",
        instagram: "mike_instagram",
        photo:
          "https://i.pinimg.com/736x/f2/be/12/f2be127a5f756232c393da6d6fe09a3d.jpg",
      },
      interests: {
        cooking: 0,
        music: 1,
        drawing: 1,
        workout: 1,
      },
      additional_interests: [
        {
          "Attck on Titan": 1,
          "Demon Slayer": 1,
          "Tokoyo Ghoul": 1,
          Naruto: 0,
          "Jujutsu Kaisen": 0,
        },
        {
          Cat: 1,
          Gog: 1,
          "I hate Animal": 0,
        },
        {
          Expert: 0,
          Average: 0,
          "I am stupid, but I do not hate math": 1,
          Hater: 0,
        },
        {
          UBC: 0,
          SFU: 0,
          BCIT: 0,
          Langara: 1,
          Other: 0,
        },
        {
          Sushi: 1,
          Hotpot: 1,
          Salad: 0,
          Pizza: 0,
          Pho: 1,
        },
        {
          "High School": 0,
          "Year 1": 0,
          "Year 2": 0,
          "Year 3": 0,
          "Year 4": 0,
          Graduated: 1,
        },
        {
          Art: 0,
          Science: 1,
          Engineering: 0,
          Business: 0,
          Undeclared: 0,
        },
        {
          "Of course": 1,
          Nope: 0,
          "I hate Jokes": 0,
        },
      ],
    },
  },
  {
    "Phoebe Buffay": {
      email: "phoebe_buffay@gmail.com",
      password: "222", //dm5 encryption

      social: {
        facebook: "phoebe_buffay_facebook",
        instagram: "phoebe_buffay_instagram",
        photo:
          "https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg",
      },
      interests: {
        cooking: 1,
        music: 1,
        drawing: 1,
        workout: 0,
      },
      additional_interests: [
        {
          "Attck on Titan": 1,
          "Demon Slayer": 1,
          "Tokoyo Ghoul": 1,
          Naruto: 0,
          "Jujutsu Kaisen": 0,
        },
        {
          Cat: 1,
          Gog: 1,
          "I hate Animal": 0,
        },
        {
          Expert: 0,
          Average: 0,
          "I am stupid, but I do not hate math": 1,
          Hater: 0,
        },
        {
          UBC: 0,
          SFU: 0,
          BCIT: 0,
          Langara: 0,
          Other: 1,
        },
        {
          Sushi: 1,
          Hotpot: 1,
          Salad: 1,
          Pizza: 0,
          Pho: 1,
        },
        {
          "High School": 0,
          "Year 1": 0,
          "Year 2": 0,
          "Year 3": 0,
          "Year 4": 0,
          Graduated: 1,
        },
        {
          Art: 1,
          Science: 0,
          Engineering: 0,
          Business: 0,
          Undeclared: 0,
        },
        {
          "Of course": 1,
          Nope: 0,
          "I hate Jokes": 0,
        },
      ],
    },
  },
  {
    "Rachel Green": {
      email: "rachel_green@gmail.com",
      password: "333", //dm5 encryption

      social: {
        facebook: "rachel_green_facebook",
        instagram: "rachel_green_instagram",
        photo:
          "https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w700.jpg",
      },
      interests: {
        cooking: 0,
        music: 1,
        drawing: 0,
        workout: 1,
      },
      additional_interests: [
        {
          "Attck on Titan": 1,
          "Demon Slayer": 1,
          "Tokoyo Ghoul": 0,
          Naruto: 0,
          "Jujutsu Kaisen": 0,
        },
        {
          Cat: 1,
          Gog: 1,
          "I hate Animal": 0,
        },
        {
          Expert: 0,
          Average: 0,
          "I am stupid, but I do not hate math": 0,
          Hater: 1,
        },
        {
          UBC: 1,
          SFU: 0,
          BCIT: 0,
          Langara: 0,
          Other: 0,
        },
        {
          Sushi: 1,
          Hotpot: 1,
          Salad: 1,
          Pizza: 0,
          Pho: 1,
        },
        {
          "High School": 0,
          "Year 1": 0,
          "Year 2": 0,
          "Year 3": 0,
          "Year 4": 0,
          Graduated: 1,
        },
        {
          Art: 1,
          Science: 0,
          Engineering: 0,
          Business: 1,
          Undeclared: 0,
        },
        {
          "Of course": 1,
          Nope: 0,
          "I hate Jokes": 0,
        },
      ],
    },
  },
  {
    "Ross Geller": {
      email: "ross_geller@gmail.com",
      password: "444", //dm5 encryption

      social: {
        facebook: "ross_geller_facebook",
        instagram: "ross_geller_instagram",
        photo:
          "https://upload.wikimedia.org/wikipedia/en/6/6f/David_Schwimmer_as_Ross_Geller.jpg",
      },
      interests: {
        cooking: 1,
        music: 1,
        drawing: 0,
        workout: 1,
      },
      additional_interests: [
        {
          "Attck on Titan": 1,
          "Demon Slayer": 1,
          "Tokoyo Ghoul": 0,
          Naruto: 0,
          "Jujutsu Kaisen": 0,
        },
        {
          Cat: 1,
          Gog: 1,
          "I hate Animal": 0,
        },
        {
          Expert: 1,
          Average: 0,
          "I am stupid, but I do not hate math": 0,
          Hater: 0,
        },
        {
          UBC: 1,
          SFU: 0,
          BCIT: 0,
          Langara: 0,
          Other: 0,
        },
        {
          Sushi: 1,
          Hotpot: 1,
          Salad: 0,
          Pizza: 0,
          Pho: 1,
        },
        {
          "High School": 0,
          "Year 1": 0,
          "Year 2": 0,
          "Year 3": 0,
          "Year 4": 0,
          Graduated: 1,
        },
        {
          Art: 1,
          Science: 1,
          Engineering: 0,
          Business: 1,
          Undeclared: 0,
        },
        {
          "Of course": 1,
          Nope: 0,
          "I hate Jokes": 0,
        },
      ],
    },
  },
  {
    "Carol Willick": {
      email: "carol_willick@gmail.com",
      password: "555", //dm5 encryption

      social: {
        facebook: "carol_willick_facebook",
        instagram: "carol_willick_instagram",
        photo:
          "https://i.pinimg.com/originals/b4/8c/6b/b48c6b4aa141caed9b6ff29851e27483.jpg",
      },
      interests: {
        cooking: 1,
        music: 1,
        drawing: 1,
        workout: 0,
      },
      additional_interests: [
        {
          "Attck on Titan": 0,
          "Demon Slayer": 1,
          "Tokoyo Ghoul": 1,
          Naruto: 0,
          "Jujutsu Kaisen": 0,
        },
        {
          Cat: 1,
          Gog: 1,
          "I hate Animal": 0,
        },
        {
          Expert: 0,
          Average: 1,
          "I am stupid, but I do not hate math": 0,
          Hater: 0,
        },
        {
          UBC: 1,
          SFU: 0,
          BCIT: 0,
          Langara: 0,
          Other: 0,
        },
        {
          Sushi: 1,
          Hotpot: 1,
          Salad: 0,
          Pizza: 0,
          Pho: 1,
        },
        {
          "High School": 0,
          "Year 1": 0,
          "Year 2": 0,
          "Year 3": 0,
          "Year 4": 0,
          Graduated: 1,
        },
        {
          Art: 1,
          Science: 1,
          Engineering: 0,
          Business: 0,
          Undeclared: 0,
        },
        {
          "Of course": 1,
          Nope: 0,
          "I hate Jokes": 0,
        },
      ],
    },
  },
  {
    "Charlie Wheeler": {
      email: "charlie_wheeler@gmail.com",
      password: "666", //dm5 encryption

      social: {
        facebook: "charlie_wheeler_facebook",
        instagram: "charlie_wheeler_instagram",
        photo:
          "https://i.pinimg.com/originals/0a/d9/3c/0ad93c4bc4ce9405652b439b8034c406.jpg",
      },
      interests: {
        cooking: 1,
        music: 1,
        drawing: 1,
        workout: 1,
      },
      additional_interests: [
        {
          "Attck on Titan": 1,
          "Demon Slayer": 1,
          "Tokoyo Ghoul": 1,
          Naruto: 0,
          "Jujutsu Kaisen": 0,
        },
        {
          Cat: 1,
          Gog: 1,
          "I hate Animal": 0,
        },
        {
          Expert: 1,
          Average: 0,
          "I am stupid, but I do not hate math": 0,
          Hater: 1,
        },
        {
          UBC: 1,
          SFU: 0,
          BCIT: 0,
          Langara: 0,
          Other: 0,
        },
        {
          Sushi: 1,
          Hotpot: 1,
          Salad: 1,
          Pizza: 0,
          Pho: 1,
        },
        {
          "High School": 0,
          "Year 1": 0,
          "Year 2": 0,
          "Year 3": 0,
          "Year 4": 0,
          Graduated: 1,
        },
        {
          Art: 1,
          Science: 1,
          Engineering: 0,
          Business: 0,
          Undeclared: 0,
        },
        {
          "Of course": 0,
          Nope: 1,
          "I hate Jokes": 0,
        },
      ],
    },
  },
  {
    "Joey Tribbiani": {
      email: "joey_tribbiani@gmail.com",
      password: "777", //dm5 encryption

      social: {
        facebook: "joey_tribbiani_facebook",
        instagram: "joey_tribbiani_instagram",
        photo:
          "https://i.guim.co.uk/img/media/ae14333615408ab5d5ba6c23810be683e0d6f631/389_282_1481_889/master/1481.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=fe8e04916fba748b25cc93727609a391",
      },
      interests: {
        cooking: 0,
        music: 1,
        drawing: 0,
        workout: 1,
      },
      additional_interests: [
        {
          "Attck on Titan": 1,
          "Demon Slayer": 1,
          "Tokoyo Ghoul": 1,
          Naruto: 1,
          "Jujutsu Kaisen": 0,
        },
        {
          Cat: 1,
          Gog: 1,
          "I hate Animal": 0,
        },
        {
          Expert: 0,
          Average: 0,
          "I am stupid, but I do not hate math": 0,
          Hater: 1,
        },
        {
          UBC: 0,
          SFU: 0,
          BCIT: 0,
          Langara: 0,
          Other: 1,
        },
        {
          Sushi: 1,
          Hotpot: 1,
          Salad: 1,
          Pizza: 1,
          Pho: 1,
        },
        {
          "High School": 1,
          "Year 1": 0,
          "Year 2": 0,
          "Year 3": 0,
          "Year 4": 0,
          Graduated: 0,
        },
        {
          Art: 1,
          Science: 0,
          Engineering: 0,
          Business: 0,
          Undeclared: 0,
        },
        {
          "Of course": 1,
          Nope: 0,
          "I hate Jokes": 0,
        },
      ],
    },
  },
  {
    "Chandler Bing": {
      email: "chandler_bing@gmail.com",
      password: "888", //dm5 encryption

      social: {
        facebook: "chandler_bing_facebook",
        instagram: "chandler_bing_instagram",
        photo:
          "https://cdn.onebauer.media/one/media/6019/638b/6bf6/c622/d91d/b871/chandler-from-friends-now.png?format=jpg&quality=80&width=440&ratio=1-1&resize=aspectfit",
      },
      interests: {
        cooking: 0,
        music: 1,
        drawing: 0,
        workout: 1,
      },
      additional_interests: [
        {
          "Attck on Titan": 1,
          "Demon Slayer": 1,
          "Tokoyo Ghoul": 1,
          Naruto: 1,
          "Jujutsu Kaisen": 0,
        },
        {
          Cat: 0,
          Gog: 0,
          "I hate Animal": 1,
        },
        {
          Expert: 1,
          Average: 0,
          "I am stupid, but I do not hate math": 0,
          Hater: 0,
        },
        {
          UBC: 1,
          SFU: 0,
          BCIT: 0,
          Langara: 0,
          Other: 0,
        },
        {
          Sushi: 1,
          Hotpot: 1,
          Salad: 0,
          Pizza: 1,
          Pho: 1,
        },
        {
          "High School": 0,
          "Year 1": 0,
          "Year 2": 0,
          "Year 3": 0,
          "Year 4": 0,
          Graduated: 1,
        },
        {
          Art: 0,
          Science: 1,
          Engineering: 0,
          Business: 1,
          Undeclared: 0,
        },
        {
          "Of course": 1,
          Nope: 0,
          "I hate Jokes": 0,
        },
      ],
    },
  },
];

export default initialFrensList;
