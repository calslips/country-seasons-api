const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const countries = {
  afghanistan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 8],
          maxAverageRange: [12, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [33, 47],
          maxAverageRange: [54, 74],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [12, 15],
          maxAverageRange: [29, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [54, 59],
          maxAverageRange: [85, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-1, 10],
          maxAverageRange: [14.5, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [31, 49],
          maxAverageRange: [58, 82],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-9, -5],
          maxAverageRange: [3, 8],
        },
        fahrenheitTemps: {
          minAverageRange: [16, 23],
          maxAverageRange: [38, 46],
        }
      },
    }
  },
  albania: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [6, 13],
          maxAverageRange: [14, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [42, 55],
          maxAverageRange: [57, 72],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [17, 18],
          maxAverageRange: [27, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [62, 65],
          maxAverageRange: [80, 85],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [8, 15],
          maxAverageRange: [15, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 59],
          maxAverageRange: [59, 77],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [3, 4],
          maxAverageRange: [10, 11],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 40],
          maxAverageRange: [50, 52],
        }
      },
    }
  },
  algeria: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [10, 14],
          maxAverageRange: [17, 22.5],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 57],
          maxAverageRange: [63, 73],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [17.5, 21],
          maxAverageRange: [26, 29.5],
        },
        fahrenheitTemps: {
          minAverageRange: [63, 70],
          maxAverageRange: [78, 85],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [11.5, 19.5],
          maxAverageRange: [19, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 67],
          maxAverageRange: [66, 81],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [8, 9],
          maxAverageRange: [15, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [47, 48],
          maxAverageRange: [59, 61],
        }
      },
    }
  },
  andorra: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1, 7],
          maxAverageRange: [10, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 44],
          maxAverageRange: [50, 61],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [10, 13],
          maxAverageRange: [20, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [51, 55],
          maxAverageRange: [68, 74],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2, 11],
          maxAverageRange: [10, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 51],
          maxAverageRange: [50, 68],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-1, 0],
          maxAverageRange: [6, 7],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 34],
          maxAverageRange: [43, 45],
        }
      },
    }
  },
  angola: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [22, 24],
          maxAverageRange: [28, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 75],
          maxAverageRange: [82, 86],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [18, 19],
          maxAverageRange: [23, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 77],
          maxAverageRange: [73, 77],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [19.5, 23],
          maxAverageRange: [25, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 73],
          maxAverageRange: [78, 83],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [23, 23.5],
          maxAverageRange: [29, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 74],
          maxAverageRange: [84, 86],
        }
      },
    }
  },
  argentina: {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [8, 13],
          maxAverageRange: [18, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 55],
          maxAverageRange: [64, 75],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [16, 17],
          maxAverageRange: [28, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 63],
          maxAverageRange: [82, 84],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [8, 16],
          maxAverageRange: [18, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 61],
          maxAverageRange: [64, 79],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [5, 6],
          maxAverageRange: [14, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 43],
          maxAverageRange: [57, 61],
        }
      },
    }
  },
  armenia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 10],
          maxAverageRange: [11, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 50],
          maxAverageRange: [52, 75],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 17],
          maxAverageRange: [28, 32.5],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 63],
          maxAverageRange: [83, 90],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [1, 12],
          maxAverageRange: [12, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 54],
          maxAverageRange: [54, 82],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-7, -4],
          maxAverageRange: [1, 4.5],
        },
        fahrenheitTemps: {
          minAverageRange: [19, 25],
          maxAverageRange: [34, 40],
        }
      },
    }
  },
  australia: {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [4, 10],
          maxAverageRange: [16, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 50],
          maxAverageRange: [61, 73],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [12, 14],
          maxAverageRange: [26, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [54, 57],
          maxAverageRange: [79, 82],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [4, 11],
          maxAverageRange: [16, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 52],
          maxAverageRange: [61, 75],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [0, 3],
          maxAverageRange: [11, 13],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 37],
          maxAverageRange: [52, 55],
        }
      },
    }
  },
  austria: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1, 10],
          maxAverageRange: [8, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 50],
          maxAverageRange: [46, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 15],
          maxAverageRange: [23, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 59],
          maxAverageRange: [73, 77],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [3, 11],
          maxAverageRange: [7, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 52],
          maxAverageRange: [45, 68],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-4, -1],
          maxAverageRange: [1, 3],
        },
        fahrenheitTemps: {
          minAverageRange: [25, 30],
          maxAverageRange: [34, 37],
        }
      },
    }
  },
  azerbaijan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [4, 14],
          maxAverageRange: [10, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 58],
          maxAverageRange: [50, 72],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [19, 22.5],
          maxAverageRange: [27, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 73],
          maxAverageRange: [81, 87],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [12, 19],
          maxAverageRange: [17, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 66],
          maxAverageRange: [63, 78],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [1.5, 4],
          maxAverageRange: [6, 10],
        },
        fahrenheitTemps: {
          minAverageRange: [35, 40],
          maxAverageRange: [43, 50],
        }
      },
    }
  },
  'the bahamas': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [19, 22],
          maxAverageRange: [26, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 71],
          maxAverageRange: [79, 84],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 24.5],
          maxAverageRange: [30, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [74, 76],
          maxAverageRange: [87, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [21, 24],
          maxAverageRange: [27, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 75],
          maxAverageRange: [80, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [18, 19],
          maxAverageRange: [24, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 66],
          maxAverageRange: [76, 78],
        }
      },
    }
  },
  bahrain: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [17, 25],
          maxAverageRange: [25, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [62, 78],
          maxAverageRange: [77, 93],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [28, 30],
          maxAverageRange: [36, 38],
        },
        fahrenheitTemps: {
          minAverageRange: [82, 86],
          maxAverageRange: [97, 101],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [20.5, 28],
          maxAverageRange: [28, 36],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 82],
          maxAverageRange: [83, 97],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [14, 16],
          maxAverageRange: [20, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 60],
          maxAverageRange: [69, 72],
        }
      },
    }
  },
  bangladesh: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [15, 24],
          maxAverageRange: [31.5, 36],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 76],
          maxAverageRange: [89, 97],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [25.5, 26],
          maxAverageRange: [32, 34.5],
        },
        fahrenheitTemps: {
          minAverageRange: [77, 78],
          maxAverageRange: [90, 94],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [14, 25],
          maxAverageRange: [28, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 77],
          maxAverageRange: [83, 89],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [9, 10.5],
          maxAverageRange: [23, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 51],
          maxAverageRange: [73, 78],
        }
      },
    }
  },
  belarus: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-7, 8],
          maxAverageRange: [1, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [19, 46],
          maxAverageRange: [34, 64],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 12],
          maxAverageRange: [22, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 54],
          maxAverageRange: [72, 73],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-1, 8],
          maxAverageRange: [3, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 46],
          maxAverageRange: [37, 63],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-13, -8],
          maxAverageRange: [-7, -3],
        },
        fahrenheitTemps: {
          minAverageRange: [9, 18],
          maxAverageRange: [19, 27],
        }
      },
    }
  },
  belgium: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [2, 8],
          maxAverageRange: [10, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 46],
          maxAverageRange: [50, 64],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 12],
          maxAverageRange: [22, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 54],
          maxAverageRange: [72, 73],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [3, 11],
          maxAverageRange: [9, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 52],
          maxAverageRange: [48, 68],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-1, 0],
          maxAverageRange: [4, 7],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 32],
          maxAverageRange: [39, 45],
        }
      },
    }
  },
  belize: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [20, 22],
          maxAverageRange: [28.5, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 72],
          maxAverageRange: [83, 88],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [22, 23],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 73],
          maxAverageRange: [86, 87],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [19, 23],
          maxAverageRange: [28, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 73],
          maxAverageRange: [82, 86],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [18, 19],
          maxAverageRange: [27, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 66],
          maxAverageRange: [80, 83],
        }
      },
    }
  },
  bhutan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [2.5, 9.5],
          maxAverageRange: [15, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 49],
          maxAverageRange: [60, 68],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [13, 14],
          maxAverageRange: [21, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 57],
          maxAverageRange: [70, 71],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [1.5, 12],
          maxAverageRange: [15, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [35, 54],
          maxAverageRange: [59, 69],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-3, -1],
          maxAverageRange: [11, 12],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 31],
          maxAverageRange: [51, 54],
        }
      },
    }
  },
  bolivia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 4],
          maxAverageRange: [17.5, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 40],
          maxAverageRange: [63, 64],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [-3, -1],
          maxAverageRange: [17, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 31],
          maxAverageRange: [63, 64],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2, 4],
          maxAverageRange: [18, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [35, 39],
          maxAverageRange: [64, 68],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [4, 5],
          maxAverageRange: [17, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [40, 41],
          maxAverageRange: [63, 65],
        }
      },
    }
  },
  'bosnia and herzegovina': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1, 9],
          maxAverageRange: [11, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [33, 48],
          maxAverageRange: [52, 68],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [12, 13],
          maxAverageRange: [23.5, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 56],
          maxAverageRange: [74, 80],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2, 10],
          maxAverageRange: [9, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 50],
          maxAverageRange: [49, 73],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-4, -1.5],
          maxAverageRange: [3, 6],
        },
        fahrenheitTemps: {
          minAverageRange: [25, 29],
          maxAverageRange: [37, 43],
        }
      },
    }
  },
  brazil: {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [16, 17],
          maxAverageRange: [27, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 63],
          maxAverageRange: [81, 82],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [17, 17],
          maxAverageRange: [26, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [63, 63],
          maxAverageRange: [79, 81],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [15, 17],
          maxAverageRange: [26, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 63],
          maxAverageRange: [79, 81],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [13, 15],
          maxAverageRange: [25, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 59],
          maxAverageRange: [77, 81],
        }
      },
    }
  },
  bulgaria: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1, 10],
          maxAverageRange: [10, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 50],
          maxAverageRange: [50, 70],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [13, 16],
          maxAverageRange: [24, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 61],
          maxAverageRange: [75, 81],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2, 11],
          maxAverageRange: [9, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 52],
          maxAverageRange: [48, 72],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-4, -2],
          maxAverageRange: [2, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [25, 28],
          maxAverageRange: [36, 39],
        }
      },
    }
  },
  cambodia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [24, 25],
          maxAverageRange: [34, 34.5],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 77],
          maxAverageRange: [93, 94],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [24, 24.5],
          maxAverageRange: [31.5, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [76, 76],
          maxAverageRange: [89, 91],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [23, 24],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [74, 76],
          maxAverageRange: [86, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [21, 22],
          maxAverageRange: [30, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [70, 72],
          maxAverageRange: [86, 90],
        }
      },
    }
  },
  canada: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-7, 8],
          maxAverageRange: [2, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [19, 45],
          maxAverageRange: [36, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [13, 15],
          maxAverageRange: [24, 26.5],
        },
        fahrenheitTemps: {
          minAverageRange: [54, 59],
          maxAverageRange: [73, 79],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-3, 9],
          maxAverageRange: [5, 19.5],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 48],
          maxAverageRange: [41, 66],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-15, -11],
          maxAverageRange: [-6, -3],
        },
        fahrenheitTemps: {
          minAverageRange: [5, 12],
          maxAverageRange: [21, 27],
        }
      },
    }
  },
  'canary islands': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [15, 17],
          maxAverageRange: [22, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 62],
          maxAverageRange: [72, 75],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [18, 19],
          maxAverageRange: [25, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 67],
          maxAverageRange: [78, 83],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [18, 20],
          maxAverageRange: [24, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [65, 68],
          maxAverageRange: [75, 81],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [15, 16],
          maxAverageRange: [21, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 60],
          maxAverageRange: [69, 72],
        }
      },
    }
  },
  'cape verde': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [19.5, 21],
          maxAverageRange: [28, 28.5],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 70],
          maxAverageRange: [82, 83],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [22, 24],
          maxAverageRange: [29.5, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [71, 75],
          maxAverageRange: [85, 86],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [22, 25],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 77],
          maxAverageRange: [86, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [19, 21],
          maxAverageRange: [26.5, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 69],
          maxAverageRange: [80, 81],
        }
      },
    }
  },
  chile: {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [6, 9],
          maxAverageRange: [19, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [43, 48],
          maxAverageRange: [66, 79],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [11, 12],
          maxAverageRange: [22, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 54],
          maxAverageRange: [82, 84],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [5, 9],
          maxAverageRange: [18, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 48],
          maxAverageRange: [64, 81],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [3, 4],
          maxAverageRange: [14, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 39],
          maxAverageRange: [57, 63],
        }
      },
    }
  },
  china: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-1, 13],
          maxAverageRange: [11, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 55],
          maxAverageRange: [52, 81],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [19, 21],
          maxAverageRange: [30, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 70],
          maxAverageRange: [86, 90],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-2, 14],
          maxAverageRange: [10, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [28, 57],
          maxAverageRange: [50, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-11, -8],
          maxAverageRange: [1, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [12, 18],
          maxAverageRange: [34, 39],
        }
      },
    }
  },
  colombia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [10, 11],
          maxAverageRange: [19, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 52],
          maxAverageRange: [66, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [10, 11],
          maxAverageRange: [18, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 52],
          maxAverageRange: [64, 66],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [9, 10],
          maxAverageRange: [19, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 50],
          maxAverageRange: [66, 66],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [9, 9],
          maxAverageRange: [19, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 48],
          maxAverageRange: [66, 68],
        }
      },
    }
  },
  'costa rica': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [16, 17],
          maxAverageRange: [26.5, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 62],
          maxAverageRange: [80, 81],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [16, 17],
          maxAverageRange: [25.5, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [62, 62],
          maxAverageRange: [78, 79],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [16, 16],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 61],
          maxAverageRange: [77, 78],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [15, 15],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 59],
          maxAverageRange: [77, 79],
        }
      },
    }
  },
  croatia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [3, 12],
          maxAverageRange: [11, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 54],
          maxAverageRange: [52, 70],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 17],
          maxAverageRange: [25, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 63],
          maxAverageRange: [77, 81],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [4, 13],
          maxAverageRange: [9, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 54],
          maxAverageRange: [48, 72],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-2, 0],
          maxAverageRange: [3, 5],
        },
        fahrenheitTemps: {
          minAverageRange: [28, 32],
          maxAverageRange: [37, 41],
        }
      },
    }
  },
  cuba: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [19, 22],
          maxAverageRange: [27, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 72],
          maxAverageRange: [81, 86],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 24],
          maxAverageRange: [31, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 75],
          maxAverageRange: [88, 90],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [21, 24],
          maxAverageRange: [27, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [70, 75],
          maxAverageRange: [81, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [18, 19],
          maxAverageRange: [26, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 66],
          maxAverageRange: [79, 79],
        }
      },
    }
  },
  cyprus: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [7, 14],
          maxAverageRange: [19, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [44, 57],
          maxAverageRange: [66, 84],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [18, 20],
          maxAverageRange: [33, 36],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 68],
          maxAverageRange: [91, 97],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [10, 17.5],
          maxAverageRange: [22, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 64],
          maxAverageRange: [72, 91],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [5, 7],
          maxAverageRange: [15, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 44],
          maxAverageRange: [59, 63],
        }
      },
    }
  },
  'czech republic': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 9],
          maxAverageRange: [7, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 48],
          maxAverageRange: [45, 64],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 13],
          maxAverageRange: [22, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 55],
          maxAverageRange: [72, 75],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2, 10],
          maxAverageRange: [6, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 50],
          maxAverageRange: [43, 66],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-4, -3],
          maxAverageRange: [0, 1],
        },
        fahrenheitTemps: {
          minAverageRange: [25, 27],
          maxAverageRange: [32, 34],
        }
      },
    }
  },
  denmark: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-1, 7],
          maxAverageRange: [5, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 44],
          maxAverageRange: [41, 61],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 14],
          maxAverageRange: [19, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 57],
          maxAverageRange: [66, 72],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [3, 10],
          maxAverageRange: [7, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 50],
          maxAverageRange: [45, 63],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-2, 1],
          maxAverageRange: [2, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [28, 34],
          maxAverageRange: [36, 39],
        }
      },
    }
  },
  'dominican republic': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [19.5, 21.5],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 71],
          maxAverageRange: [86, 87],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [22, 22],
          maxAverageRange: [31, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 72],
          maxAverageRange: [88, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [21, 22],
          maxAverageRange: [30.5, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [70, 72],
          maxAverageRange: [87, 89],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [19, 19.5],
          maxAverageRange: [29, 29.5],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 67],
          maxAverageRange: [84, 85],
        }
      },
    }
  },
  ecuador: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [8, 9],
          maxAverageRange: [21, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 48],
          maxAverageRange: [70, 72],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [7, 8],
          maxAverageRange: [21, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 48],
          maxAverageRange: [70, 73],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [7, 8],
          maxAverageRange: [21, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 48],
          maxAverageRange: [70, 73],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [8, 8],
          maxAverageRange: [21, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 46],
          maxAverageRange: [70, 72],
        }
      },
    }
  },
  egypt: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [10.5, 16],
          maxAverageRange: [24, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [51, 61],
          maxAverageRange: [76, 90],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [19, 21],
          maxAverageRange: [34.5, 35],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 69],
          maxAverageRange: [94, 95],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [13, 19],
          maxAverageRange: [25, 32.5],
        },
        fahrenheitTemps: {
          minAverageRange: [56, 66],
          maxAverageRange: [78, 91],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [7, 9],
          maxAverageRange: [19, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 48],
          maxAverageRange: [67, 70],
        }
      },
    }
  },
  'el salvador': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [16, 18],
          maxAverageRange: [31, 32.5],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 65],
          maxAverageRange: [88, 91],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [18, 18],
          maxAverageRange: [29, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 64],
          maxAverageRange: [84, 86],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [16, 18],
          maxAverageRange: [29, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [62, 64],
          maxAverageRange: [84, 84],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [15, 15],
          maxAverageRange: [29.5, 31.5],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 59],
          maxAverageRange: [85, 89],
        }
      },
    }
  },
  estonia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-7, 5],
          maxAverageRange: [0, 14],
        },
        fahrenheitTemps: {
          minAverageRange: [19, 41],
          maxAverageRange: [32, 57],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [10, 12],
          maxAverageRange: [19, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 54],
          maxAverageRange: [66, 68],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-1, 9],
          maxAverageRange: [3, 15],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 48],
          maxAverageRange: [37, 59],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-10, -7],
          maxAverageRange: [-4, -1],
        },
        fahrenheitTemps: {
          minAverageRange: [14, 19],
          maxAverageRange: [25, 30],
        }
      },
    }
  },
  eswatini: {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [10, 13],
          maxAverageRange: [23, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [49, 56],
          maxAverageRange: [73, 75],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [14, 15],
          maxAverageRange: [24, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [58, 59],
          maxAverageRange: [76, 76],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [8, 14],
          maxAverageRange: [21, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [47, 57],
          maxAverageRange: [70, 75],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [6, 7],
          maxAverageRange: [19, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [42, 45],
          maxAverageRange: [66, 69],
        }
      },
    }
  },
  ethiopia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [10.5, 11],
          maxAverageRange: [25, 25.5],
        },
        fahrenheitTemps: {
          minAverageRange: [51, 52],
          maxAverageRange: [77, 78],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [10.5, 11],
          maxAverageRange: [21, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [51, 52],
          maxAverageRange: [69, 74],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [7, 11],
          maxAverageRange: [22, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [44, 51],
          maxAverageRange: [71, 73],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [7, 9],
          maxAverageRange: [23, 24.5],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 48],
          maxAverageRange: [73, 76],
        }
      },
    }
  },
  fiji: {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [20, 22],
          maxAverageRange: [26, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [68, 71],
          maxAverageRange: [79, 83],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [22, 23],
          maxAverageRange: [29, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 73],
          maxAverageRange: [85, 86],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [21, 23],
          maxAverageRange: [27, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [70, 73],
          maxAverageRange: [81, 85],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [20, 21],
          maxAverageRange: [26, 26.5],
        },
        fahrenheitTemps: {
          minAverageRange: [68, 70],
          maxAverageRange: [78, 80],
        }
      },
    }
  },
  finland: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-6, 4],
          maxAverageRange: [0, 13],
        },
        fahrenheitTemps: {
          minAverageRange: [21, 39],
          maxAverageRange: [32, 55],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [9, 12],
          maxAverageRange: [18, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 54],
          maxAverageRange: [64, 70],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-1, 7],
          maxAverageRange: [2, 15],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 45],
          maxAverageRange: [36, 59],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-9, -4],
          maxAverageRange: [-3, 0],
        },
        fahrenheitTemps: {
          minAverageRange: [16, 25],
          maxAverageRange: [27, 32],
        }
      },
    }
  },
  france: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [4, 10],
          maxAverageRange: [11, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 50],
          maxAverageRange: [52, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [13, 15],
          maxAverageRange: [22, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 59],
          maxAverageRange: [72, 75],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [5, 12],
          maxAverageRange: [10, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 54],
          maxAverageRange: [50, 70],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [2, 3],
          maxAverageRange: [6, 8],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 37],
          maxAverageRange: [43, 46],
        }
      },
    }
  },
  georgia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1.5, 12],
          maxAverageRange: [12, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [35, 53],
          maxAverageRange: [53, 75],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [16, 19],
          maxAverageRange: [28, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 66],
          maxAverageRange: [82, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [4, 14.5],
          maxAverageRange: [13, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 58],
          maxAverageRange: [55, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-3, -1],
          maxAverageRange: [6, 8],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 30],
          maxAverageRange: [43, 46],
        }
      },
    }
  },
  germany: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 8],
          maxAverageRange: [8, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 46],
          maxAverageRange: [46, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 13],
          maxAverageRange: [22, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 55],
          maxAverageRange: [72, 73],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2, 10],
          maxAverageRange: [7, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 50],
          maxAverageRange: [45, 66],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-3, -1],
          maxAverageRange: [2, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 30],
          maxAverageRange: [36, 39],
        }
      },
    }
  },
  greece: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [8, 16],
          maxAverageRange: [15, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 61],
          maxAverageRange: [59, 77],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [20, 23],
          maxAverageRange: [30, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [68, 73],
          maxAverageRange: [86, 91],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [15, 19],
          maxAverageRange: [24, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 66],
          maxAverageRange: [75, 84],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [6, 8],
          maxAverageRange: [13, 15],
        },
        fahrenheitTemps: {
          minAverageRange: [43, 46],
          maxAverageRange: [55, 59],
        }
      },
    }
  },
  guatemala: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [13, 15],
          maxAverageRange: [26, 26.5],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 59],
          maxAverageRange: [79, 80],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 15.5],
          maxAverageRange: [24, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 60],
          maxAverageRange: [76, 77],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [13, 15],
          maxAverageRange: [23, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [56, 59],
          maxAverageRange: [74, 75],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [12, 12],
          maxAverageRange: [23, 24.5],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 53],
          maxAverageRange: [74, 76],
        }
      },
    }
  },
  guyana: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [24, 24.5],
          maxAverageRange: [29.5, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 76],
          maxAverageRange: [85, 86],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [24, 24],
          maxAverageRange: [29, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [74, 74],
          maxAverageRange: [85, 86],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [24, 24],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 75],
          maxAverageRange: [86, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [24, 24],
          maxAverageRange: [29, 29.5],
        },
        fahrenheitTemps: {
          minAverageRange: [74, 74],
          maxAverageRange: [84, 85],
        }
      },
    }
  },
  haiti: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [20, 22],
          maxAverageRange: [32, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [68, 71],
          maxAverageRange: [89, 90],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [22, 22],
          maxAverageRange: [33, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 72],
          maxAverageRange: [92, 93],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [21, 22],
          maxAverageRange: [31, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [70, 72],
          maxAverageRange: [89, 92],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [19, 20],
          maxAverageRange: [31, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 67],
          maxAverageRange: [87, 88],
        }
      },
    }
  },
  honduras: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [15, 18],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 65],
          maxAverageRange: [86, 87],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [18, 18],
          maxAverageRange: [28, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 64],
          maxAverageRange: [83, 83],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [16, 18],
          maxAverageRange: [26, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 64],
          maxAverageRange: [78, 83],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [14, 15],
          maxAverageRange: [25.5, 27.5],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 59],
          maxAverageRange: [78, 82],
        }
      },
    }
  },
  hungary: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [2, 11],
          maxAverageRange: [10.5, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 51],
          maxAverageRange: [51, 71],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 16],
          maxAverageRange: [25, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 60],
          maxAverageRange: [77, 80],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2.5, 12],
          maxAverageRange: [8, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 53],
          maxAverageRange: [47, 72],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-3, -1],
          maxAverageRange: [1.5, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [26, 30],
          maxAverageRange: [35, 39],
        }
      },
    }
  },
  iceland: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-1, 4],
          maxAverageRange: [4, 10],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 39],
          maxAverageRange: [39, 50],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [7, 9],
          maxAverageRange: [12, 14],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 48],
          maxAverageRange: [54, 57],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [0, 6],
          maxAverageRange: [4, 11],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 43],
          maxAverageRange: [39, 51],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-2, -1],
          maxAverageRange: [2, 3],
        },
        fahrenheitTemps: {
          minAverageRange: [28, 30],
          maxAverageRange: [36, 37],
        }
      },
    }
  },
  india: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [14, 26],
          maxAverageRange: [29, 40],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 79],
          maxAverageRange: [84, 104],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [26, 28],
          maxAverageRange: [34, 39],
        },
        fahrenheitTemps: {
          minAverageRange: [79, 82],
          maxAverageRange: [93, 102],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [11, 24],
          maxAverageRange: [28, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 75],
          maxAverageRange: [82, 93],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [6, 10],
          maxAverageRange: [21, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [43, 50],
          maxAverageRange: [70, 75],
        }
      },
    }
  },
  indonesia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [23, 24],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 75],
          maxAverageRange: [86, 88],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [31, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [88, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [86, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [29, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [84, 84],
        }
      },
    }
  },
  iran: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [4, 14],
          maxAverageRange: [15, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 58],
          maxAverageRange: [60, 83],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [19, 22],
          maxAverageRange: [34, 37],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 71],
          maxAverageRange: [93, 98],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [5, 17],
          maxAverageRange: [17, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 63],
          maxAverageRange: [62, 89],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-2, 0],
          maxAverageRange: [8, 11],
        },
        fahrenheitTemps: {
          minAverageRange: [28, 32],
          maxAverageRange: [46, 51],
        }
      },
    }
  },
  ireland: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [3, 6],
          maxAverageRange: [10, 15],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 43],
          maxAverageRange: [50, 59],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [9, 11],
          maxAverageRange: [18, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 52],
          maxAverageRange: [64, 68],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [4, 9],
          maxAverageRange: [10, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 48],
          maxAverageRange: [50, 63],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [1, 3],
          maxAverageRange: [8, 8],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 37],
          maxAverageRange: [46, 46],
        }
      },
    }
  },
  israel: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [7, 13],
          maxAverageRange: [17, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [44, 55],
          maxAverageRange: [63, 81],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 17.5],
          maxAverageRange: [29, 30.5],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 64],
          maxAverageRange: [85, 87],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [11, 16],
          maxAverageRange: [21, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 61],
          maxAverageRange: [70, 85],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [5, 7],
          maxAverageRange: [13, 15],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 44],
          maxAverageRange: [55, 59],
        }
      },
    }
  },
  italy: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [5, 11],
          maxAverageRange: [16, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 52],
          maxAverageRange: [61, 75],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 18],
          maxAverageRange: [28, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 64],
          maxAverageRange: [82, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [7, 15],
          maxAverageRange: [17, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 59],
          maxAverageRange: [63, 81],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [3, 4],
          maxAverageRange: [12, 14],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 39],
          maxAverageRange: [54, 57],
        }
      },
    }
  },
  jamaica: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [21, 23],
          maxAverageRange: [29, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [70, 74],
          maxAverageRange: [85, 86],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [24, 24],
          maxAverageRange: [31, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 75],
          maxAverageRange: [88, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [22, 24],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 75],
          maxAverageRange: [86, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [20.5, 21],
          maxAverageRange: [29, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 71],
          maxAverageRange: [85, 86],
        }
      },
    }
  },
  japan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [2, 12],
          maxAverageRange: [12, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 54],
          maxAverageRange: [54, 72],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [17, 22],
          maxAverageRange: [24, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [63, 72],
          maxAverageRange: [75, 86],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [6, 19],
          maxAverageRange: [16, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [43, 66],
          maxAverageRange: [61, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-2, 1],
          maxAverageRange: [8, 11],
        },
        fahrenheitTemps: {
          minAverageRange: [28, 34],
          maxAverageRange: [46, 52],
        }
      },
    }
  },
  jordan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [6, 13],
          maxAverageRange: [16, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [42, 55],
          maxAverageRange: [61, 81],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 18],
          maxAverageRange: [30, 31.5],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 64],
          maxAverageRange: [86, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [9, 15.5],
          maxAverageRange: [20, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 60],
          maxAverageRange: [68, 86],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [3, 5],
          maxAverageRange: [12, 14],
        },
        fahrenheitTemps: {
          minAverageRange: [38, 41],
          maxAverageRange: [53, 57],
        }
      },
    }
  },
  kazakhstan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-14, 6],
          maxAverageRange: [-5, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [6, 44],
          maxAverageRange: [23, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11.5, 14.5],
          maxAverageRange: [24, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 58],
          maxAverageRange: [75, 80],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [6, 9],
          maxAverageRange: [19, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [43, 48],
          maxAverageRange: [66, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-21, -17],
          maxAverageRange: [-12, -9],
        },
        fahrenheitTemps: {
          minAverageRange: [-6, 1],
          maxAverageRange: [10, 16],
        }
      },
    }
  },
  kenya: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [14, 15],
          maxAverageRange: [24, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 59],
          maxAverageRange: [76, 81],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 12],
          maxAverageRange: [22, 23.5],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 54],
          maxAverageRange: [72, 74],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [12, 14],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 57],
          maxAverageRange: [77, 80],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [13, 13.5],
          maxAverageRange: [25, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 56],
          maxAverageRange: [77, 82],
        }
      },
    }
  },
  kyrgyzstan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-1, 10],
          maxAverageRange: [9, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 51],
          maxAverageRange: [50, 74],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 17],
          maxAverageRange: [28, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [58, 62],
          maxAverageRange: [83, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-2, 10],
          maxAverageRange: [9, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [28, 50],
          maxAverageRange: [48, 77],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-9, -7],
          maxAverageRange: [2, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [15, 20],
          maxAverageRange: [36, 39],
        }
      },
    }
  },
  laos: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [19.5, 23],
          maxAverageRange: [32, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 74],
          maxAverageRange: [90, 93],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [24, 24],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 75],
          maxAverageRange: [87, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [18, 23],
          maxAverageRange: [29.5, 30.5],
        },
        fahrenheitTemps: {
          minAverageRange: [65, 74],
          maxAverageRange: [85, 87],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [14, 16.5],
          maxAverageRange: [28, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 61],
          maxAverageRange: [82, 86],
        }
      },
    }
  },
  latvia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-7, 6],
          maxAverageRange: [2, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [19, 43],
          maxAverageRange: [36, 61],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [9, 11],
          maxAverageRange: [21, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 52],
          maxAverageRange: [70, 72],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-1, 8],
          maxAverageRange: [4, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 46],
          maxAverageRange: [39, 63],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-10, -7],
          maxAverageRange: [-4, -2],
        },
        fahrenheitTemps: {
          minAverageRange: [14, 19],
          maxAverageRange: [25, 28],
        }
      },
    }
  },
  lebanon: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [12, 17],
          maxAverageRange: [19, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 63],
          maxAverageRange: [67, 79],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [20.5, 23],
          maxAverageRange: [29, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 74],
          maxAverageRange: [84, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [15.5, 22],
          maxAverageRange: [23, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 72],
          maxAverageRange: [73, 86],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [10, 12],
          maxAverageRange: [17, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [51, 54],
          maxAverageRange: [62, 66],
        }
      },
    }
  },
  liechtenstein: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1, 8],
          maxAverageRange: [10, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 53],
          maxAverageRange: [54, 74],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 13],
          maxAverageRange: [21.5, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 56],
          maxAverageRange: [71, 75],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [1, 10],
          maxAverageRange: [8, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 50],
          maxAverageRange: [47, 68],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-4, -2],
          maxAverageRange: [3, 5],
        },
        fahrenheitTemps: {
          minAverageRange: [25, 28],
          maxAverageRange: [37, 41],
        }
      },
    }
  },
  lithuania: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-7, 7],
          maxAverageRange: [1, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [19, 45],
          maxAverageRange: [34, 61],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 12],
          maxAverageRange: [21, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 54],
          maxAverageRange: [70, 73],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-1, 8],
          maxAverageRange: [4, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 46],
          maxAverageRange: [39, 63],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-11, -1],
          maxAverageRange: [-5, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [12, 30],
          maxAverageRange: [23, 39],
        }
      },
    }
  },
  luxembourg: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1, 7],
          maxAverageRange: [9, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 45],
          maxAverageRange: [49, 65],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 12],
          maxAverageRange: [21, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [51, 54],
          maxAverageRange: [70, 73],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2, 9.5],
          maxAverageRange: [7, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 49],
          maxAverageRange: [45, 66],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-1, 0],
          maxAverageRange: [3, 5],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 32],
          maxAverageRange: [37, 41],
        }
      },
    }
  },
  madagascar: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [11.5, 16],
          maxAverageRange: [23, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 60],
          maxAverageRange: [73, 78],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [9.5, 10],
          maxAverageRange: [20, 21.5],
        },
        fahrenheitTemps: {
          minAverageRange: [49, 50],
          maxAverageRange: [69, 71],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [10.5, 14],
          maxAverageRange: [22.5, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [51, 58],
          maxAverageRange: [73, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [15.5, 16],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 61],
          maxAverageRange: [78, 79],
        }
      },
    }
  },
  malaysia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [33, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [91, 91],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [32, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [90, 90],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [31, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [88, 90],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [22, 22],
          maxAverageRange: [31, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 72],
          maxAverageRange: [88, 91],
        }
      },
    }
  },
  maldives: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [26, 27],
          maxAverageRange: [31, 31.5],
        },
        fahrenheitTemps: {
          minAverageRange: [79, 80],
          maxAverageRange: [88, 89],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [25.5, 26],
          maxAverageRange: [30.5, 30.5],
        },
        fahrenheitTemps: {
          minAverageRange: [78, 79],
          maxAverageRange: [87, 87],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [25, 25],
          maxAverageRange: [30, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [78, 78],
          maxAverageRange: [86, 86],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [25.5, 26],
          maxAverageRange: [30, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [78, 79],
          maxAverageRange: [87, 87],
        }
      },
    }
  },
  malta: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [10, 15],
          maxAverageRange: [17, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 59],
          maxAverageRange: [63, 74],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [18.5, 22],
          maxAverageRange: [27, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [65, 72],
          maxAverageRange: [81, 87],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [14, 20],
          maxAverageRange: [20, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 69],
          maxAverageRange: [67, 83],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [9.5, 11],
          maxAverageRange: [15.5, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [49, 52],
          maxAverageRange: [60, 63],
        }
      },
    }
  },
  mexico: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [7, 10],
          maxAverageRange: [25, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 50],
          maxAverageRange: [77, 81],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 11],
          maxAverageRange: [23, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 52],
          maxAverageRange: [73, 77],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [6, 11],
          maxAverageRange: [21, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [43, 52],
          maxAverageRange: [70, 72],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [4, 6],
          maxAverageRange: [21, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 43],
          maxAverageRange: [70, 73],
        }
      },
    }
  },
  moldova: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1, 11],
          maxAverageRange: [7, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [31, 52],
          maxAverageRange: [44, 71],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 16],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 61],
          maxAverageRange: [77, 79],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [1, 11],
          maxAverageRange: [8, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 52],
          maxAverageRange: [46, 71],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-6, -3],
          maxAverageRange: [0, 3],
        },
        fahrenheitTemps: {
          minAverageRange: [21, 27],
          maxAverageRange: [32, 37],
        }
      },
    }
  },
  monaco: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [6, 12],
          maxAverageRange: [14, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [44, 54],
          maxAverageRange: [58, 69],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [16, 18],
          maxAverageRange: [24, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 65],
          maxAverageRange: [75, 81],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [8, 16],
          maxAverageRange: [16, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 61],
          maxAverageRange: [61, 77],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [4, 5],
          maxAverageRange: [12, 13],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 41],
          maxAverageRange: [54, 55],
        }
      },
    }
  },
  mongolia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-15, 3],
          maxAverageRange: [-2, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [4, 37],
          maxAverageRange: [28, 62],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [8, 11],
          maxAverageRange: [21.5, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [47, 52],
          maxAverageRange: [71, 73],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-16, 2],
          maxAverageRange: [-4, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [3, 36],
          maxAverageRange: [24, 60],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-26.5, -24],
          maxAverageRange: [-16, -11],
        },
        fahrenheitTemps: {
          minAverageRange: [-16, -11],
          maxAverageRange: [4, 12],
        }
      },
    }
  },
  montenegro: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [5, 13],
          maxAverageRange: [15, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [42, 55],
          maxAverageRange: [58, 75],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [17, 20],
          maxAverageRange: [29, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [62, 68],
          maxAverageRange: [83, 91],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [7, 16],
          maxAverageRange: [15, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [44, 61],
          maxAverageRange: [59, 82],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [1.5, 3],
          maxAverageRange: [9, 11],
        },
        fahrenheitTemps: {
          minAverageRange: [35, 38],
          maxAverageRange: [49, 53],
        }
      },
    }
  },
  morocco: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [10, 13],
          maxAverageRange: [20, 23.5],
        },
        fahrenheitTemps: {
          minAverageRange: [49, 56],
          maxAverageRange: [69, 74],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [16, 18.5],
          maxAverageRange: [26, 28.5],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 65],
          maxAverageRange: [79, 83],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [11, 17],
          maxAverageRange: [21, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 63],
          maxAverageRange: [71, 81],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [8, 9],
          maxAverageRange: [17.5, 18.5],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 48],
          maxAverageRange: [63, 66],
        }
      },
    }
  },
  mozambique: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [15, 20],
          maxAverageRange: [27, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 69],
          maxAverageRange: [81, 86],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [12, 14],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [54, 57],
          maxAverageRange: [77, 78],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [16, 19],
          maxAverageRange: [27, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 67],
          maxAverageRange: [80, 84],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [20, 22],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 71],
          maxAverageRange: [86, 87],
        }
      },
    }
  },
  myanmar: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [20, 25],
          maxAverageRange: [35, 38],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 76],
          maxAverageRange: [96, 101],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [24, 24],
          maxAverageRange: [30, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 75],
          maxAverageRange: [86, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [20, 24],
          maxAverageRange: [31, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 75],
          maxAverageRange: [88, 89],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [14, 16],
          maxAverageRange: [29, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [58, 61],
          maxAverageRange: [84, 92],
        }
      },
    }
  },
  nepal: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [8, 16],
          maxAverageRange: [24, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [47, 60],
          maxAverageRange: [75, 82],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [19, 20],
          maxAverageRange: [27, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 68],
          maxAverageRange: [81, 83],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [8, 18],
          maxAverageRange: [22, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 65],
          maxAverageRange: [71, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [3, 4],
          maxAverageRange: [17, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [38, 40],
          maxAverageRange: [63, 67],
        }
      },
    }
  },
  netherlands: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [2, 8],
          maxAverageRange: [9, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 46],
          maxAverageRange: [48, 63],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [10, 13],
          maxAverageRange: [20, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 55],
          maxAverageRange: [68, 72],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [4, 10],
          maxAverageRange: [9, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 50],
          maxAverageRange: [48, 64],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [0, 2],
          maxAverageRange: [5, 6],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 36],
          maxAverageRange: [41, 43],
        }
      },
    }
  },
  'new zealand': {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [8, 10],
          maxAverageRange: [14, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 50],
          maxAverageRange: [57, 63],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [12, 13],
          maxAverageRange: [19, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [54, 55],
          maxAverageRange: [66, 70],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [8, 12],
          maxAverageRange: [14, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 54],
          maxAverageRange: [57, 66],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [6, 7],
          maxAverageRange: [12, 13],
        },
        fahrenheitTemps: {
          minAverageRange: [43, 45],
          maxAverageRange: [54, 55],
        }
      },
    }
  },
  nicaragua: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [22.5, 24],
          maxAverageRange: [34.5, 35],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 75],
          maxAverageRange: [94, 95],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [32, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [74, 74],
          maxAverageRange: [89, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [22, 22.5],
          maxAverageRange: [31, 31.5],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 73],
          maxAverageRange: [88, 89],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [21, 21.5],
          maxAverageRange: [32, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 71],
          maxAverageRange: [89, 92],
        }
      },
    }
  },
  nigeria: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [22, 23],
          maxAverageRange: [32, 35],
        },
        fahrenheitTemps: {
          minAverageRange: [71, 73],
          maxAverageRange: [89, 95],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [20, 21],
          maxAverageRange: [28, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [68, 69],
          maxAverageRange: [82, 85],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [19, 20],
          maxAverageRange: [29, 32.5],
        },
        fahrenheitTemps: {
          minAverageRange: [66, 68],
          maxAverageRange: [84, 91],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [17, 19.5],
          maxAverageRange: [32.5, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [62, 67],
          maxAverageRange: [91, 94],
        }
      },
    }
  },
  'north korea': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-3, 9],
          maxAverageRange: [7, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 48],
          maxAverageRange: [45, 72],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 20],
          maxAverageRange: [26, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 68],
          maxAverageRange: [79, 84],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2, 13],
          maxAverageRange: [9, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 55],
          maxAverageRange: [48, 75],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-13, -9],
          maxAverageRange: [-3, 0],
        },
        fahrenheitTemps: {
          minAverageRange: [9, 16],
          maxAverageRange: [27, 32],
        }
      },
    }
  },
  'north macedonia': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [3, 10.5],
          maxAverageRange: [13, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 51],
          maxAverageRange: [56, 73],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 15],
          maxAverageRange: [27, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 60],
          maxAverageRange: [81, 86],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [3, 12],
          maxAverageRange: [11, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [38, 54],
          maxAverageRange: [52, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-3, -1],
          maxAverageRange: [4, 8],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 30],
          maxAverageRange: [40, 46],
        }
      },
    }
  },
  norway: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-4, 6],
          maxAverageRange: [4, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [25, 43],
          maxAverageRange: [39, 61],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [10, 13],
          maxAverageRange: [20, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 55],
          maxAverageRange: [68, 72],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-1, 8],
          maxAverageRange: [3, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 46],
          maxAverageRange: [37, 61],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-7, -4],
          maxAverageRange: [-2, 0],
        },
        fahrenheitTemps: {
          minAverageRange: [19, 25],
          maxAverageRange: [28, 32],
        }
      },
    }
  },
  oman: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [21.5, 29],
          maxAverageRange: [29, 37.5],
        },
        fahrenheitTemps: {
          minAverageRange: [71, 84],
          maxAverageRange: [84, 100],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [28, 30],
          maxAverageRange: [34, 38],
        },
        fahrenheitTemps: {
          minAverageRange: [83, 87],
          maxAverageRange: [93, 101],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [22, 28],
          maxAverageRange: [30, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [71, 82],
          maxAverageRange: [86, 94],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [18, 19],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [65, 67],
          maxAverageRange: [77, 80],
        }
      },
    }
  },
  pakistan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [10, 19.5],
          maxAverageRange: [24, 35],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 67],
          maxAverageRange: [75, 95],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 24.5],
          maxAverageRange: [34, 39],
        },
        fahrenheitTemps: {
          minAverageRange: [83, 87],
          maxAverageRange: [93, 101],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [8, 21],
          maxAverageRange: [26, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 70],
          maxAverageRange: [76, 92],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [3, 5],
          maxAverageRange: [17, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 42],
          maxAverageRange: [62, 67],
        }
      },
    }
  },
  panama: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [23, 24],
          maxAverageRange: [31, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 75],
          maxAverageRange: [88, 91],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 24],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [74, 75],
          maxAverageRange: [87, 87],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [30, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [86, 86],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [22, 22.5],
          maxAverageRange: [31, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 73],
          maxAverageRange: [87, 89],
        }
      },
    }
  },
  'papua new guinea': {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [22, 23],
          maxAverageRange: [30, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 73],
          maxAverageRange: [86, 90],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [23, 23.5],
          maxAverageRange: [32, 32.5],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 74],
          maxAverageRange: [89, 91],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [23, 23.5],
          maxAverageRange: [30.5, 31.5],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 74],
          maxAverageRange: [87, 89],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [22, 22],
          maxAverageRange: [29, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 72],
          maxAverageRange: [84, 85],
        }
      },
    }
  },
  paraguay: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [14, 19],
          maxAverageRange: [25, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [58, 66],
          maxAverageRange: [77, 89],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [12, 13],
          maxAverageRange: [23, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [54, 55],
          maxAverageRange: [73, 78],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [15, 19],
          maxAverageRange: [27, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 66],
          maxAverageRange: [80, 89],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [20.5, 21],
          maxAverageRange: [33, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [69, 70],
          maxAverageRange: [91, 93],
        }
      },
    }
  },
  peru: {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [14, 16],
          maxAverageRange: [19, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 61],
          maxAverageRange: [66, 72],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [17, 19],
          maxAverageRange: [24, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [63, 66],
          maxAverageRange: [75, 79],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [16, 19],
          maxAverageRange: [22, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 66],
          maxAverageRange: [72, 79],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 15],
          maxAverageRange: [18, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 59],
          maxAverageRange: [64, 66],
        }
      },
    }
  },
  philippines: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [22, 24],
          maxAverageRange: [33, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 75],
          maxAverageRange: [91, 93],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [24, 24],
          maxAverageRange: [31, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 75],
          maxAverageRange: [88, 91],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [22, 24],
          maxAverageRange: [31, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 75],
          maxAverageRange: [88, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [21, 21],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [70, 70],
          maxAverageRange: [86, 88],
        }
      },
    }
  },
  poland: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-1, 8],
          maxAverageRange: [7, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 46],
          maxAverageRange: [45, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 13],
          maxAverageRange: [22, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 55],
          maxAverageRange: [72, 75],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [0, 9],
          maxAverageRange: [6, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 48],
          maxAverageRange: [43, 64],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-5, -3],
          maxAverageRange: [0, 2],
        },
        fahrenheitTemps: {
          minAverageRange: [23, 27],
          maxAverageRange: [32, 36],
        }
      },
    }
  },
  portugal: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [10, 13],
          maxAverageRange: [17, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [50, 55],
          maxAverageRange: [63, 70],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 17],
          maxAverageRange: [25, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 63],
          maxAverageRange: [77, 82],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [11, 16],
          maxAverageRange: [17, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 61],
          maxAverageRange: [63, 81],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [8, 8],
          maxAverageRange: [14, 15],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 46],
          maxAverageRange: [57, 59],
        }
      },
    }
  },
  qatar: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [17, 25],
          maxAverageRange: [27, 38],
        },
        fahrenheitTemps: {
          minAverageRange: [62, 77],
          maxAverageRange: [80, 100],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [28, 29],
          maxAverageRange: [40, 41],
        },
        fahrenheitTemps: {
          minAverageRange: [82, 84],
          maxAverageRange: [105, 106],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [19.5, 27],
          maxAverageRange: [29, 39],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 80],
          maxAverageRange: [85, 101],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [13, 15],
          maxAverageRange: [22, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 59],
          maxAverageRange: [71, 75],
        }
      },
    }
  },
  romania: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 10.5],
          maxAverageRange: [10, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 51],
          maxAverageRange: [50, 73],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 16],
          maxAverageRange: [27, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 60],
          maxAverageRange: [80, 84],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [1, 11],
          maxAverageRange: [9.5, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 51],
          maxAverageRange: [49, 75],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-5.5, -3],
          maxAverageRange: [1, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [22, 27],
          maxAverageRange: [35, 39],
        }
      },
    }
  },
  russia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-8, 8],
          maxAverageRange: [0, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [18, 46],
          maxAverageRange: [32, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 13],
          maxAverageRange: [21, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 55],
          maxAverageRange: [70, 74],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [-3, 7],
          maxAverageRange: [2, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 45],
          maxAverageRange: [36, 61],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-16, -10],
          maxAverageRange: [-9, -5],
        },
        fahrenheitTemps: {
          minAverageRange: [3, 14],
          maxAverageRange: [16, 23],
        }
      },
    }
  },
  'san marino': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [3, 10],
          maxAverageRange: [10, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [38, 50],
          maxAverageRange: [50, 66],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 17],
          maxAverageRange: [23, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 62],
          maxAverageRange: [73, 79],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [5, 14],
          maxAverageRange: [11, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 57],
          maxAverageRange: [52, 71],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [0, 1],
          maxAverageRange: [5, 7],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 34],
          maxAverageRange: [42, 45],
        }
      },
    }
  },
  'saudi arabia': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [14.5, 24],
          maxAverageRange: [28, 39],
        },
        fahrenheitTemps: {
          minAverageRange: [58, 75],
          maxAverageRange: [83, 102],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 27],
          maxAverageRange: [42, 43],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 80],
          maxAverageRange: [107, 109],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [14, 24],
          maxAverageRange: [27, 40],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 75],
          maxAverageRange: [81, 104],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [8, 10],
          maxAverageRange: [20, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [47, 51],
          maxAverageRange: [69, 74],
        }
      },
    }
  },
  serbia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [2.5, 11.5],
          maxAverageRange: [12, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 53],
          maxAverageRange: [54, 74],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 16.5],
          maxAverageRange: [26, 28.5],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 62],
          maxAverageRange: [78, 84],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [4, 12.5],
          maxAverageRange: [11, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 55],
          maxAverageRange: [51, 75],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-1.5, 0],
          maxAverageRange: [4, 6],
        },
        fahrenheitTemps: {
          minAverageRange: [29, 32],
          maxAverageRange: [39, 44],
        }
      },
    }
  },
  seychelles: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [25, 25],
          maxAverageRange: [29, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [77, 77],
          maxAverageRange: [85, 86],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [24, 25],
          maxAverageRange: [27, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 77],
          maxAverageRange: [81, 83],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [24, 24.5],
          maxAverageRange: [28, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 76],
          maxAverageRange: [82, 84],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [24, 25],
          maxAverageRange: [28, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 77],
          maxAverageRange: [83, 84],
        }
      },
    }
  },
  singapore: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [23, 23.5],
          maxAverageRange: [31, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 75],
          maxAverageRange: [88, 88],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 23.5],
          maxAverageRange: [31, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [74, 75],
          maxAverageRange: [88, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [87, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [22, 22.5],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 73],
          maxAverageRange: [86, 87],
        }
      },
    }
  },
  slovakia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 9],
          maxAverageRange: [9, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 48],
          maxAverageRange: [50, 69],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [13, 14],
          maxAverageRange: [24, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 57],
          maxAverageRange: [76, 79],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [1.5, 9.5],
          maxAverageRange: [8, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [35, 49],
          maxAverageRange: [47, 70],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-4, -2],
          maxAverageRange: [1.5, 4],
        },
        fahrenheitTemps: {
          minAverageRange: [24, 29],
          maxAverageRange: [35, 39],
        }
      },
    }
  },
  slovenia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [1, 9],
          maxAverageRange: [10, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [33, 48],
          maxAverageRange: [51, 68],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [12.5, 14.5],
          maxAverageRange: [24, 26.5],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 60],
          maxAverageRange: [81, 86],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2.5, 11],
          maxAverageRange: [9, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 52],
          maxAverageRange: [48, 71],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-3, 0],
          maxAverageRange: [3, 6],
        },
        fahrenheitTemps: {
          minAverageRange: [26, 32],
          maxAverageRange: [37, 42],
        }
      },
    }
  },
  'south africa': {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [9, 14],
          maxAverageRange: [26, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 58],
          maxAverageRange: [79, 83],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [15, 16],
          maxAverageRange: [28, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 61],
          maxAverageRange: [83, 84],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [6, 14],
          maxAverageRange: [22.5, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [42, 57],
          maxAverageRange: [73, 81],
        }
      },
      winter: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [2, 5],
          maxAverageRange: [20, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 40],
          maxAverageRange: [68, 73],
        }
      },
    }
  },
  'south korea': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-2, 11],
          maxAverageRange: [8, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [28, 52],
          maxAverageRange: [46, 72],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [16, 22],
          maxAverageRange: [27, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 72],
          maxAverageRange: [81, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [0, 15],
          maxAverageRange: [11, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 59],
          maxAverageRange: [52, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-9, -7],
          maxAverageRange: [0, 3],
        },
        fahrenheitTemps: {
          minAverageRange: [16, 19],
          maxAverageRange: [32, 37],
        }
      },
    }
  },
  spain: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [5, 10],
          maxAverageRange: [15, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 50],
          maxAverageRange: [59, 72],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 18],
          maxAverageRange: [27, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 64],
          maxAverageRange: [81, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [5, 14],
          maxAverageRange: [13, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 57],
          maxAverageRange: [55, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [2, 3],
          maxAverageRange: [10, 11],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 37],
          maxAverageRange: [50, 52],
        }
      },
    }
  },
  'sri lanka': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [23, 25],
          maxAverageRange: [31, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [74, 77],
          maxAverageRange: [87, 89],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [25, 25],
          maxAverageRange: [30, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [77, 77],
          maxAverageRange: [86, 86],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [23, 25],
          maxAverageRange: [30, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 76],
          maxAverageRange: [86, 86],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [22, 22],
          maxAverageRange: [30, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 72],
          maxAverageRange: [86, 87],
        }
      },
    }
  },
  suriname: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [22.5, 23],
          maxAverageRange: [30, 30.5],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 73],
          maxAverageRange: [86, 87],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [30, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [86, 89],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [23, 23],
          maxAverageRange: [32, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 73],
          maxAverageRange: [89, 91],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [22, 23],
          maxAverageRange: [39.5, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [72, 73],
          maxAverageRange: [85, 86],
        }
      },
    }
  },
  sweden: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-3, 6],
          maxAverageRange: [3, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 41],
          maxAverageRange: [37, 61],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [11, 13],
          maxAverageRange: [20, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 55],
          maxAverageRange: [68, 72],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [1, 9],
          maxAverageRange: [5, 15],
        },
        fahrenheitTemps: {
          minAverageRange: [34, 48],
          maxAverageRange: [41, 59],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-5, -3],
          maxAverageRange: [-1, 1],
        },
        fahrenheitTemps: {
          minAverageRange: [23, 27],
          maxAverageRange: [30, 34],
        }
      },
    }
  },
  switzerland: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 12],
          maxAverageRange: [9, 17],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 45],
          maxAverageRange: [48, 63],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [10, 12],
          maxAverageRange: [21, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [51, 54],
          maxAverageRange: [69, 74],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [1, 10],
          maxAverageRange: [8, 19],
        },
        fahrenheitTemps: {
          minAverageRange: [46, 61],
          maxAverageRange: [61, 77],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-3, -2],
          maxAverageRange: [3, 5],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 29],
          maxAverageRange: [37, 40],
        }
      },
    }
  },
  tajikistan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [4, 13],
          maxAverageRange: [14, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [40, 56],
          maxAverageRange: [58, 79],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [17, 19],
          maxAverageRange: [32, 35],
        },
        fahrenheitTemps: {
          minAverageRange: [62, 66],
          maxAverageRange: [90, 95],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [3.5, 12],
          maxAverageRange: [15, 29.5],
        },
        fahrenheitTemps: {
          minAverageRange: [38, 54],
          maxAverageRange: [59, 85],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-1.5, 1],
          maxAverageRange: [7, 9],
        },
        fahrenheitTemps: {
          minAverageRange: [29, 33],
          maxAverageRange: [45, 48],
        }
      },
    }
  },
  tanzania: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [16, 18],
          maxAverageRange: [28, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 64],
          maxAverageRange: [83, 85],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [13, 14],
          maxAverageRange: [26.5, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 56],
          maxAverageRange: [80, 81],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [15, 18],
          maxAverageRange: [29, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 64],
          maxAverageRange: [85, 89],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [18, 18],
          maxAverageRange: [29, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 64],
          maxAverageRange: [85, 87],
        }
      },
    }
  },
  thailand: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [25, 26],
          maxAverageRange: [34, 35],
        },
        fahrenheitTemps: {
          minAverageRange: [77, 79],
          maxAverageRange: [93, 95],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [25, 25],
          maxAverageRange: [32, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [77, 77],
          maxAverageRange: [90, 90],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [23, 25],
          maxAverageRange: [31, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [73, 77],
          maxAverageRange: [88, 90],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [21, 23],
          maxAverageRange: [31, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [70, 73],
          maxAverageRange: [88, 91],
        }
      },
    }
  },
  tunisia: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [8, 13],
          maxAverageRange: [18, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [47, 56],
          maxAverageRange: [64, 76],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [17, 20.5],
          maxAverageRange: [29, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [63, 69],
          maxAverageRange: [84, 90],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [11, 19],
          maxAverageRange: [20, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 66],
          maxAverageRange: [67, 86],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [6.5, 7.5],
          maxAverageRange: [15, 16],
        },
        fahrenheitTemps: {
          minAverageRange: [44, 46],
          maxAverageRange: [59, 61],
        }
      },
    }
  },
  turkey: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [0, 9],
          maxAverageRange: [11, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 48],
          maxAverageRange: [52, 72],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [13, 15],
          maxAverageRange: [27, 30],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 59],
          maxAverageRange: [81, 86],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [3, 11],
          maxAverageRange: [13, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 52],
          maxAverageRange: [54, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-4, -1],
          maxAverageRange: [4, 6],
        },
        fahrenheitTemps: {
          minAverageRange: [25, 30],
          maxAverageRange: [39, 43],
        }
      },
    }
  },
  turkmenistan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [3, 14],
          maxAverageRange: [15, 27.5],
        },
        fahrenheitTemps: {
          minAverageRange: [38, 57],
          maxAverageRange: [59, 82],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [19, 21.5],
          maxAverageRange: [34.5, 37],
        },
        fahrenheitTemps: {
          minAverageRange: [67, 71],
          maxAverageRange: [94, 99],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [3, 14],
          maxAverageRange: [15, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 58],
          maxAverageRange: [59, 87],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-4, 0],
          maxAverageRange: [6, 9.5],
        },
        fahrenheitTemps: {
          minAverageRange: [24, 32],
          maxAverageRange: [43, 49],
        }
      },
    }
  },
  uganda: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [16.5, 17],
          maxAverageRange: [26, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 62],
          maxAverageRange: [78, 82],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 16],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 60],
          maxAverageRange: [77, 78],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [15.5, 16],
          maxAverageRange: [26.5, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 61],
          maxAverageRange: [80, 81],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [16, 16],
          maxAverageRange: [27, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 61],
          maxAverageRange: [81, 83],
        }
      },
    }
  },
  ukraine: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [-4, 11],
          maxAverageRange: [3, 21],
        },
        fahrenheitTemps: {
          minAverageRange: [25, 52],
          maxAverageRange: [37, 70],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [14, 15],
          maxAverageRange: [24, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 59],
          maxAverageRange: [75, 77],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [0, 10],
          maxAverageRange: [6, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [32, 50],
          maxAverageRange: [43, 68],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-10, -6],
          maxAverageRange: [-4, -1],
        },
        fahrenheitTemps: {
          minAverageRange: [14, 21],
          maxAverageRange: [25, 30],
        }
      },
    }
  },
  'united arab emirates': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [17, 22],
          maxAverageRange: [28, 34],
        },
        fahrenheitTemps: {
          minAverageRange: [63, 72],
          maxAverageRange: [82, 93],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [24, 28],
          maxAverageRange: [36, 39],
        },
        fahrenheitTemps: {
          minAverageRange: [75, 82],
          maxAverageRange: [97, 102],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [18, 28],
          maxAverageRange: [29, 39],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 82],
          maxAverageRange: [84, 102],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [13, 14],
          maxAverageRange: [23, 25],
        },
        fahrenheitTemps: {
          minAverageRange: [55, 57],
          maxAverageRange: [73, 77],
        }
      },
    }
  },
  'united kingdom': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [3, 9],
          maxAverageRange: [11, 18],
        },
        fahrenheitTemps: {
          minAverageRange: [38, 48],
          maxAverageRange: [52, 64],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [12, 14],
          maxAverageRange: [21.5, 23.5],
        },
        fahrenheitTemps: {
          minAverageRange: [53, 57],
          maxAverageRange: [71, 75],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [4.5, 11],
          maxAverageRange: [11, 20],
        },
        fahrenheitTemps: {
          minAverageRange: [40, 52],
          maxAverageRange: [52, 68],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [2, 3],
          maxAverageRange: [8, 9],
        },
        fahrenheitTemps: {
          minAverageRange: [35, 37],
          maxAverageRange: [46, 48],
        }
      },
    }
  },
  'united states': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [2, 13],
          maxAverageRange: [12, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [36, 55],
          maxAverageRange: [54, 75],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [18, 21],
          maxAverageRange: [29, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 70],
          maxAverageRange: [84, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [4, 16],
          maxAverageRange: [14, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 61],
          maxAverageRange: [57, 79],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-1, -1],
          maxAverageRange: [7, 8],
        },
        fahrenheitTemps: {
          minAverageRange: [30, 30],
          maxAverageRange: [44, 46],
        }
      },
    }
  },
  uruguay: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [9, 15],
          maxAverageRange: [18, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 59],
          maxAverageRange: [64, 79],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [6, 6],
          maxAverageRange: [14, 15],
        },
        fahrenheitTemps: {
          minAverageRange: [43, 43],
          maxAverageRange: [57, 59],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [7, 12],
          maxAverageRange: [17, 23],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 54],
          maxAverageRange: [63, 73],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [15, 17],
          maxAverageRange: [26, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 63],
          maxAverageRange: [79, 82],
        }
      },
    }
  },
  uzbekistan: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [4, 14],
          maxAverageRange: [14, 28],
        },
        fahrenheitTemps: {
          minAverageRange: [39, 57],
          maxAverageRange: [58, 82],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [17, 19.5],
          maxAverageRange: [33, 36],
        },
        fahrenheitTemps: {
          minAverageRange: [63, 67],
          maxAverageRange: [92, 96],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [2.5, 12],
          maxAverageRange: [13.5, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 54],
          maxAverageRange: [56, 84],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [-3, -1],
          maxAverageRange: [6, 8],
        },
        fahrenheitTemps: {
          minAverageRange: [27, 30],
          maxAverageRange: [43, 47],
        }
      },
    }
  },
  'vatican city': {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [5, 11],
          maxAverageRange: [16, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [41, 52],
          maxAverageRange: [61, 75],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [15, 18],
          maxAverageRange: [28, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 64],
          maxAverageRange: [82, 88],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [7, 15],
          maxAverageRange: [17, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [45, 59],
          maxAverageRange: [63, 81],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [3, 4],
          maxAverageRange: [12, 14],
        },
        fahrenheitTemps: {
          minAverageRange: [37, 39],
          maxAverageRange: [54, 57],
        }
      },
    }
  },
  venezuela: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [14, 16.5],
          maxAverageRange: [27, 27.5],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 62],
          maxAverageRange: [80, 81],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [16, 17],
          maxAverageRange: [26, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [61, 63],
          maxAverageRange: [79, 80],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [15.5, 16],
          maxAverageRange: [26, 27],
        },
        fahrenheitTemps: {
          minAverageRange: [60, 61],
          maxAverageRange: [79, 81],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [14, 15],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [57, 59],
          maxAverageRange: [77, 78],
        }
      },
    }
  },
  vietnam: {
    seasons: {
      spring: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [17, 23],
          maxAverageRange: [23, 32],
        },
        fahrenheitTemps: {
          minAverageRange: [63, 74],
          maxAverageRange: [74, 89],
        }
      },
      summer: {
        months: ['June', 'July', 'August'],
        celsiusTemps: {
          minAverageRange: [25.5, 26],
          maxAverageRange: [32, 33],
        },
        fahrenheitTemps: {
          minAverageRange: [78, 79],
          maxAverageRange: [90, 91],
        }
      },
      autumn: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [18, 24],
          maxAverageRange: [26, 31],
        },
        fahrenheitTemps: {
          minAverageRange: [64, 76],
          maxAverageRange: [78, 88],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [13, 15],
          maxAverageRange: [20, 22],
        },
        fahrenheitTemps: {
          minAverageRange: [56, 59],
          maxAverageRange: [68, 72],
        }
      },
    }
  },
  zimbabwe: {
    seasons: {
      spring: {
        months: ['September', 'October', 'November'],
        celsiusTemps: {
          minAverageRange: [11, 15],
          maxAverageRange: [27, 29],
        },
        fahrenheitTemps: {
          minAverageRange: [52, 59],
          maxAverageRange: [80, 84],
        }
      },
      summer: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [15, 16],
          maxAverageRange: [25, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [59, 60],
          maxAverageRange: [77, 78],
        }
      },
      autumn: {
        months: ['March', 'April', 'May'],
        celsiusTemps: {
          minAverageRange: [9, 14],
          maxAverageRange: [23, 26],
        },
        fahrenheitTemps: {
          minAverageRange: [48, 57],
          maxAverageRange: [74, 78],
        }
      },
      winter: {
        months: ['December', 'January', 'February'],
        celsiusTemps: {
          minAverageRange: [6.5, 8.5],
          maxAverageRange: [21, 24],
        },
        fahrenheitTemps: {
          minAverageRange: [44, 47],
          maxAverageRange: [70, 75],
        }
      },
    }
  },
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
  res.json(countries);
});

app.get('/api/:country', (req, res) => {
  const country = req.params.country.toLowerCase();

  countries[country] ? res.json(countries[country]) : res.json({[country]: 'unknown'});
});

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port: ${PORT}`));