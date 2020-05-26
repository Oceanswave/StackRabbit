import { VACANT, RED_COLOR, BLUE_COLOR, WHITE_COLOR } from "./constants.js";

const PIECE_I = [
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ],

  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ],
];

const PIECE_J = [
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
  ],

  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],

  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],

  [
    [0, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ],
];

const PIECE_L = [
  [
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
  ],

  [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],

  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],

  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
];

const PIECE_O = [
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
];

const PIECE_S = [
  [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
  ],

  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1],
  ],
];

const PIECE_T = [
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],

  [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
  ],

  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],

  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
  ],
];

const PIECE_Z = [
  [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
  ],

  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ],
];

// The piece list, with colors and letter identifiers
export const PIECE_LIST = [
  [PIECE_Z, "red", "Z"],
  [PIECE_S, "blue", "S"],
  [PIECE_T, "white", "T"],
  [PIECE_O, "white", "O"],
  [PIECE_L, "red", "L"],
  [PIECE_I, "white", "I"],
  [PIECE_J, "blue", "J"],
];

export const PIECE_LOOKUP = {
  Z: [PIECE_Z, "red", "Z"],
  S: [PIECE_S, "blue", "S"],
  T: [PIECE_T, "white", "T"],
  O: [PIECE_O, "white", "O"],
  L: [PIECE_L, "red", "L"],
  I: [PIECE_I, "white", "I"],
  J: [PIECE_J, "blue", "J"],
};
