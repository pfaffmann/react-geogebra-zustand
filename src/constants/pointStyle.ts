export const POINT = {
  FULL_DOT: 0,
  CROSS: 1,
  EMPTY_DOT: 2,
  PLUS_SIGN: 3,
  FULL_DIAMOND: 4,
  EMPTY_DIAMOND: 5,
  TRIANGLE_NORTH: 6,
  TRIANGLE_SOUTH: 7,
  TRIANGLE_EAST: 8,
  TRIANGLE_WEST: 9,
  FULL_DOT_NO_OUTLINE: 10,
} as const;

export const pointMap = new Map<number, string>();
pointMap.set(0, 'FULL_DOT');
pointMap.set(1, 'CROSS');
pointMap.set(2, 'EMPTY_DOT');
pointMap.set(3, 'PLUS_SIGN');
pointMap.set(4, 'FULL_DIAMOND');
pointMap.set(5, 'EMPTY_DIAMOND');
pointMap.set(6, 'TRIANGLE_NORTH');
pointMap.set(7, 'TRIANGLE_SOUTH');
pointMap.set(8, 'TRIANGLE_EAST');
pointMap.set(9, 'TRIANGLE_WEST');
pointMap.set(10, 'FULL_DOT_NO_OUTLINE');
