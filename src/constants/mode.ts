/** Move */
export const MODE_MOVE = 0;

/** New Point */
export const MODE_POINT = 1;

/** Line through Two Points */
export const MODE_JOIN = 2;

/** Parallel Line */
export const MODE_PARALLEL = 3;

/** Perpendicular Line */
export const MODE_ORTHOGONAL = 4;

/** Intersect Two Objects */
export const MODE_INTERSECT = 5;

/** Delete Object */
export const MODE_DELETE = 6;

/** Vector between Two Points */
export const MODE_VECTOR = 7;

/** Perpendicular Bisector */
export const MODE_LINE_BISECTOR = 8;

/** Angle Bisector */
export const MODE_ANGULAR_BISECTOR = 9;

/** Circle with Center through Point */
export const MODE_CIRCLE_TWO_POINTS = 10;

/** Circle through Three Points */
export const MODE_CIRCLE_THREE_POINTS = 11;

/** Conic through Five Points */
export const MODE_CONIC_FIVE_POINTS = 12;

/** Tangents */
export const MODE_TANGENTS = 13;

/** Relation between Two Objects */
export const MODE_RELATION = 14;

/** Segment between Two Points */
export const MODE_SEGMENT = 15;

/** Polygon */
export const MODE_POLYGON = 16;

/** Insert Text */
export const MODE_TEXT = 17;

/** Ray through Two Points */
export const MODE_RAY = 18;

/** Midpoint or Center */
export const MODE_MIDPOINT = 19;

/** Circular Arc with Center between Two Points */
export const MODE_CIRCLE_ARC_THREE_POINTS = 20;

/** Circular Sector with Center between Two Points */
export const MODE_CIRCLE_SECTOR_THREE_POINTS = 21;

/** Circumcircular Arc through Three Points */
export const MODE_CIRCUMCIRCLE_ARC_THREE_POINTS = 22;

/** Circumcircular Sector through Three Points */
export const MODE_CIRCUMCIRCLE_SECTOR_THREE_POINTS = 23;

/** Semicircle through Two Points */
export const MODE_SEMICIRCLE = 24;

/** Slider */
export const MODE_SLIDER = 25;

/** Insert Image */
export const MODE_IMAGE = 26;

/** Show / Hide Object */
export const MODE_SHOW_HIDE_OBJECT = 27;

/** Show / Hide Label */
export const MODE_SHOW_HIDE_LABEL = 28;

/** Reflect Object about Point */
export const MODE_MIRROR_AT_POINT = 29;

/** Reflect Object about Line */
export const MODE_MIRROR_AT_LINE = 30;

/** Translate Object by Vector */
export const MODE_TRANSLATE_BY_VECTOR = 31;

/** Rotate Object around Point by Angle */
export const MODE_ROTATE_BY_ANGLE = 32;

/** Dilate Object from Point by Factor */
export const MODE_DILATE_FROM_POINT = 33;

/** Circle with Center and Radius */
export const MODE_CIRCLE_POINT_RADIUS = 34;

/** Copy Visual Style */
export const MODE_COPY_VISUAL_STYLE = 35;

/** Angle */
export const MODE_ANGLE = 36;

/** Vector from Point */
export const MODE_VECTOR_FROM_POINT = 37;

/** Distance or Length */
export const MODE_DISTANCE = 38;

/** Rotate around Point */
export const MODE_MOVE_ROTATE = 39;

/** Move Graphics View */
export const MODE_TRANSLATEVIEW = 40;

/** Zoom In */
export const MODE_ZOOM_IN = 41;

/** Zoom Out */
export const MODE_ZOOM_OUT = 42;

/** Select Object */
export const MODE_SELECTION_LISTENER = 43;

/** Polar or Diameter Line */
export const MODE_POLAR_DIAMETER = 44;

/** Segment with Given Length from Point */
export const MODE_SEGMENT_FIXED = 45;

/** Angle with Given Size */
export const MODE_ANGLE_FIXED = 46;

/** Locus */
export const MODE_LOCUS = 47;
/** Macro */
export const MODE_MACRO = 48;

/** Area */
export const MODE_AREA = 49;

/** Slope */
export const MODE_SLOPE = 50;

/** Regular Polygon */
export const MODE_REGULAR_POLYGON = 51;

/** Check Box to Show / Hide Objects */
export const MODE_SHOW_HIDE_CHECKBOX = 52;
// GeoGebra 3.2 start
/** Compass */
export const MODE_COMPASSES = 53;

/** Reflect Object about Circle */
export const MODE_MIRROR_AT_CIRCLE = 54;

/** Ellipse */
export const MODE_ELLIPSE_THREE_POINTS = 55;

/** Hyperbola */
export const MODE_HYPERBOLA_THREE_POINTS = 56;

/** Parabola */
export const MODE_PARABOLA = 57;

/** Best Fit Line */
export const MODE_FITLINE = 58;

/** Record to Spreadsheet removed from GeoGebra 5 */
// export const MODE_RECORD_TO_SPREADSHEET = 59;
// GeoGebra 4.0 start
/** Insert Button */
export const MODE_BUTTON_ACTION = 60;

/** Insert Input Box */
export const MODE_TEXTFIELD_ACTION = 61;

/** Pen Tool */
export const MODE_PEN = 62;

/** Visual Style, removed */
// export const MODE_VISUAL_STYLE = 63;

/** Rigid Polygon */
export const MODE_RIGID_POLYGON = 64;

/** PolyLine between Points */
export const MODE_POLYLINE = 65;

/** Probability Calculator */
export const MODE_PROBABILITY_CALCULATOR = 66;

/** Attach / Detach Point */
export const MODE_ATTACH_DETACH = 67;

/** Function Inspector */
export const MODE_FUNCTION_INSPECTOR = 68;

/** Intersect Two Surfaces */
export const MODE_INTERSECTION_CURVE = 69;

/** Vector Polygon */
export const MODE_VECTOR_POLYGON = 70;

/** Create List */
export const MODE_CREATE_LIST = 71;

/** Complex Number */
export const MODE_COMPLEX_NUMBER = 72;

/** Freehand */
export const MODE_FREEHAND_SHAPE = 73;

/** Freehand function */
export const MODE_FREEHAND_FUNCTION = 74;

/** Extremum */
export const MODE_EXTREMUM = 75;

/** Roots */
export const MODE_ROOTS = 76;

/** Select multiple objects */
export const MODE_SELECT = 77;

/** */
export const MODE_SELECT_MOW = 78;

/** Graspable Math tool */
export const MODE_GRASPABLE_MATH = 79;

/** Point on Object */
export const MODE_POINT_ON_OBJECT = 501;

// ggb3D start

/** mode that change the view to be in front of selected plane */
export const MODE_VIEW_IN_FRONT_OF = 502;

/** creates a plane through three points */
export const MODE_PLANE_THREE_POINTS = 510;

/** creates a plane through three points */
export const MODE_PLANE = 511;

/** creates a plane orthogonal to a line */
export const MODE_ORTHOGONAL_PLANE = 512;

/** creates a plane parallel to another */
export const MODE_PARALLEL_PLANE = 513;

/** Perpendicular Line (for 3D view) */
export const MODE_ORTHOGONAL_THREE_D = 514;

/** creates a sphere with midpoint and radius */
export const MODE_SPHERE_POINT_RADIUS = 520;

/** creates a sphere with midpoint through another point */
export const MODE_SPHERE_TWO_POINTS = 521;

/**
 * creates a cone with center of basis, apex point and radius of the basis
 */
export const MODE_CONE_TWO_POINTS_RADIUS = 522;

/**
 * creates a cylinder with center of basis, apex point and radius of the
 * basis
 */
export const MODE_CYLINDER_TWO_POINTS_RADIUS = 523;

/**
 * creates a prism with basis and first vertex of the second parallel face
 */
export const MODE_PRISM = 531;

/** creates a prism/cylinder with basis and height */
export const MODE_EXTRUSION = 532;

/** creates a prism with basis and top vertex */
export const MODE_PYRAMID = 533;

/** creates a pyramid/cone with basis and height */
export const MODE_CONIFY = 534;

/** polyhedronNet */
export const MODE_NET = 535;

/** creates a cube */
export const MODE_CUBE = 536;

/** creates a tetrahedron */
export const MODE_TETRAHEDRON = 537;

/** creates a surface by revolving a line around x-axis */
export const MODE_SURFACE_OF_REVOLUTION = 538;

/** rotate the view */
export const MODE_ROTATEVIEW = 540;

/** circle with center, radius, direction */
export const MODE_CIRCLE_POINT_RADIUS_DIRECTION = 550;

/** circle with center, radius, direction */
export const MODE_CIRCLE_AXIS_POINT = 551;

/** volume */
export const MODE_VOLUME = 560;

/** Rotate Object around Axis by Angle */
export const MODE_ROTATE_AROUND_LINE = 570;

/** Reflect Object about Plane */
export const MODE_MIRROR_AT_PLANE = 571;

// CAS view modes
/** Evaluate */
export const MODE_CAS_EVALUATE = 1001;
/** Numeric */
export const MODE_CAS_NUMERIC = 1002;
/** Keep Input */
export const MODE_CAS_KEEP_INPUT = 1003;
/** Expand */
export const MODE_CAS_EXPAND = 1004;
/** Factor */
export const MODE_CAS_FACTOR = 1005;
/** Substitute */
export const MODE_CAS_SUBSTITUTE = 1006;
/** Solve */
export const MODE_CAS_SOLVE = 1007;
/** Derivative */
export const MODE_CAS_DERIVATIVE = 1008;
/** Integral */
export const MODE_CAS_INTEGRAL = 1009;
/** Solve Numerically */
export const MODE_CAS_NUMERICAL_SOLVE = 1010;
// SpreadsheetView modes
/** Create List */
export const MODE_SPREADSHEET_CREATE_LIST = 2001;
/** Create Matrix */
export const MODE_SPREADSHEET_CREATE_MATRIX = 2002;
/** Create List of Points */
export const MODE_SPREADSHEET_CREATE_LISTOFPOINTS = 2003;
/** Create Table */
export const MODE_SPREADSHEET_CREATE_TABLETEXT = 2004;
/** Create PolyLine */
export const MODE_SPREADSHEET_CREATE_POLYLINE = 2005;

/** One Variable Analysis */
export const MODE_SPREADSHEET_ONEVARSTATS = 2020;
/** Two Variable Regression Analysis */
export const MODE_SPREADSHEET_TWOVARSTATS = 2021;
/** Multiple Variable Analysis */
export const MODE_SPREADSHEET_MULTIVARSTATS = 2022;
/** Sort cells */
export const MODE_SPREADSHEET_SORT = 2030;
/** Sort cells increasingly */
export const MODE_SPREADSHEET_SORT_AZ = 2031;
/** Sort cells decreasingly */
export const MODE_SPREADSHEET_SORT_ZA = 2032;

/** Sum */
export const MODE_SPREADSHEET_SUM = 2040;
/** Mean */
export const MODE_SPREADSHEET_AVERAGE = 2041;
/** Count */
export const MODE_SPREADSHEET_COUNT = 2042;
/** Minimum */
export const MODE_SPREADSHEET_MIN = 2043;
/** Maximum */
export const MODE_SPREADSHEET_MAX = 2044;

/** WHITEBOARD TOOLS */
export const MODE_SHAPE_LINE = 101;
/** Triangle */
export const MODE_SHAPE_TRIANGLE = 102;
/** Square */
export const MODE_SHAPE_SQUARE = 103;
/** Rectangle */
export const MODE_SHAPE_RECTANGLE = 104;
/** Rounded rectangle */
export const MODE_SHAPE_RECTANGLE_ROUND_EDGES = 105;
/** Regular polygon */
export const MODE_SHAPE_PENTAGON = 106;
/** Freeform TODO same as normal polygon? */
export const MODE_SHAPE_FREEFORM = 107;
/** Circle */
export const MODE_SHAPE_CIRCLE = 108;
/** Ellipse */
export const MODE_SHAPE_ELLIPSE = 109;
/** Eraser */
export const MODE_ERASER = 110;
/** Highlighter */
export const MODE_HIGHLIGHTER = 111;
/** Pen Panel */
export const MODE_PEN_PANEL = 112;
/** Tools Panel */
export const MODE_TOOLS_PANEL = 113;
/** Media Panel */
export const MODE_MEDIA_PANEL = 114;
/** Video */
export const MODE_VIDEO = 115;
/** Audio */
export const MODE_AUDIO = 116;
/** Geogebra */
export const MODE_CALCULATOR = 117;
/** Camera */
export const MODE_CAMERA = 118;
/** PDF tool */
export const MODE_PDF = 119;
/** Extension embed */
export const MODE_EXTENSION = 120;
/** Text tool */
export const MODE_MEDIA_TEXT = 121;
/** Mask */
export const MODE_MASK = 122;
/** Table */
export const MODE_TABLE = 123;
/** Equation */
export const MODE_EQUATION = 124;

/** H5P tool */
export const MODE_H5P = 125;

export const MODE_MIND_MAP = 126;
/** Ruler */
export const MODE_RULER = 127;
/** Protractor */
export const MODE_PROTRACTOR = 128;

/** macro tools ID offset */
export const MACRO_MODE_ID_OFFSET = 100001;
/** max delay between taps of a doublecklick */
export const DOUBLE_CLICK_DELAY = 300;
/** ignore drag until this many miliseconds after drag start */
export const DRAGGING_DELAY = 100;
/** ignore drag until this many miliseconds after drag start, for moving created point along
 * z axis */
export const DRAGGING_DELAY_FOR_MOVING_POINT_ALONG_Z = 200;
/** default size of delete tool rectangle in pixels */
export const DEFAULT_ERASER_SIZE = 20;
/** line thickness for pen (mow) */
export const DEFAULT_PEN_SIZE = 5;
/** min length of input box that allows display of symbol button */
export const SHOW_SYMBOLBUTTON_MINLENGTH = 8;

/** 13 in older files */
export const DEFAULT_CHECKBOX_SIZE = 26;

/**
 * min line thickness of highlighter
 */
export const MIN_PEN_HIGHLIGHTER_SIZE = 1;
/**
 * default step size to increase line thickness of pen/highlighter
 */
export const DEFAULT_PEN_STEP = 1;
/**
 * default opacity of highlighter (0.3)
 */
export const DEFAULT_HIGHLIGHTER_OPACITY = 77;
/**
 * default line thickness of highlighter
 */
export const DEFAULT_HIGHLIGHTER_SIZE = 20;
/**
 * max line thickness of highlighter
 */
export const MAX_PEN_HIGHLIGHTER_SIZE = 30;

export const modeMap = new Map<number, string>();

modeMap.set(0, 'MODE_MOVE');
modeMap.set(1, 'MODE_POINT');
modeMap.set(2, 'MODE_JOIN');
modeMap.set(3, 'MODE_PARALLEL');
modeMap.set(4, 'MODE_ORTHOGONAL');
modeMap.set(5, 'MODE_INTERSECT');
modeMap.set(6, 'MODE_DELETE');
modeMap.set(7, 'MODE_VECTOR');
modeMap.set(8, 'MODE_LINE_BISECTOR');
modeMap.set(9, 'MODE_ANGULAR_BISECTOR');
modeMap.set(10, 'MODE_CIRCLE_TWO_POINTS');
modeMap.set(11, 'MODE_CIRCLE_THREE_POINTS');
modeMap.set(12, 'MODE_CONIC_FIVE_POINTS');
modeMap.set(13, 'MODE_TANGENTS');
modeMap.set(14, 'MODE_RELATION');
modeMap.set(15, 'MODE_SEGMENT');
modeMap.set(16, 'MODE_POLYGON');
modeMap.set(17, 'MODE_TEXT');
modeMap.set(18, 'MODE_RAY');
modeMap.set(19, 'MODE_MIDPOINT');
modeMap.set(20, 'MODE_CIRCLE_ARC_THREE_POINTS');
modeMap.set(21, 'MODE_CIRCLE_SECTOR_THREE_POINTS');
modeMap.set(22, 'MODE_CIRCUMCIRCLE_ARC_THREE_POINTS');
modeMap.set(23, 'MODE_CIRCUMCIRCLE_SECTOR_THREE_POINTS');
modeMap.set(24, 'MODE_SEMICIRCLE');
modeMap.set(25, 'MODE_SLIDER');
modeMap.set(26, 'MODE_IMAGE');
modeMap.set(27, 'MODE_SHOW_HIDE_OBJECT');
modeMap.set(28, 'MODE_SHOW_HIDE_LABEL');
modeMap.set(29, 'MODE_MIRROR_AT_POINT');
modeMap.set(30, 'MODE_MIRROR_AT_LINE');
modeMap.set(31, 'MODE_TRANSLATE_BY_VECTOR');
modeMap.set(32, 'MODE_ROTATE_BY_ANGLE');
modeMap.set(33, 'MODE_DILATE_FROM_POINT');
modeMap.set(34, 'MODE_CIRCLE_POINT_RADIUS');
modeMap.set(35, 'MODE_COPY_VISUAL_STYLE');
modeMap.set(36, 'MODE_ANGLE');
modeMap.set(37, 'MODE_VECTOR_FROM_POINT');
modeMap.set(38, 'MODE_DISTANCE');
modeMap.set(39, 'MODE_MOVE_ROTATE');
modeMap.set(40, 'MODE_TRANSLATEVIEW');
modeMap.set(41, 'MODE_ZOOM_IN');
modeMap.set(42, 'MODE_ZOOM_OUT');
modeMap.set(43, 'MODE_SELECTION_LISTENER');
modeMap.set(44, 'MODE_POLAR_DIAMETER');
modeMap.set(45, 'MODE_SEGMENT_FIXED');
modeMap.set(46, 'MODE_ANGLE_FIXED');
modeMap.set(47, 'MODE_LOCUS');
modeMap.set(48, 'MODE_MACRO');
modeMap.set(49, 'MODE_AREA');
modeMap.set(50, 'MODE_SLOPE');
modeMap.set(51, 'MODE_REGULAR_POLYGON');
modeMap.set(52, 'MODE_SHOW_HIDE_CHECKBOX');
modeMap.set(53, 'MODE_COMPASSES');
modeMap.set(54, 'MODE_MIRROR_AT_CIRCLE');
modeMap.set(55, 'MODE_ELLIPSE_THREE_POINTS');
modeMap.set(56, 'MODE_HYPERBOLA_THREE_POINTS');
modeMap.set(57, 'MODE_PARABOLA');
modeMap.set(58, 'MODE_FITLINE');
modeMap.set(59, 'MODE_RECORD_TO_SPREADSHEET');
modeMap.set(60, 'MODE_BUTTON_ACTION');
modeMap.set(61, 'MODE_TEXTFIELD_ACTION');
modeMap.set(62, 'MODE_PEN');
modeMap.set(63, 'MODE_VISUAL_STYLE');
modeMap.set(64, 'MODE_RIGID_POLYGON');
modeMap.set(65, 'MODE_POLYLINE');
modeMap.set(66, 'MODE_PROBABILITY_CALCULATOR');
modeMap.set(67, 'MODE_ATTACH_DETACH');
modeMap.set(68, 'MODE_FUNCTION_INSPECTOR');
modeMap.set(69, 'MODE_INTERSECTION_CURVE');
modeMap.set(70, 'MODE_VECTOR_POLYGON');
modeMap.set(71, 'MODE_CREATE_LIST');
modeMap.set(72, 'MODE_COMPLEX_NUMBER');
modeMap.set(73, 'MODE_FREEHAND_SHAPE');
modeMap.set(74, 'MODE_FREEHAND_FUNCTION');
modeMap.set(75, 'MODE_EXTREMUM');
modeMap.set(76, 'MODE_ROOTS');
modeMap.set(77, 'MODE_SELECT');
modeMap.set(78, 'MODE_SELECT_MOW');
modeMap.set(79, 'MODE_GRASPABLE_MATH');
modeMap.set(501, 'MODE_POINT_ON_OBJECT');
modeMap.set(502, 'MODE_VIEW_IN_FRONT_OF');
modeMap.set(510, 'MODE_PLANE_THREE_POINTS');
modeMap.set(511, 'MODE_PLANE');
modeMap.set(512, 'MODE_ORTHOGONAL_PLANE');
modeMap.set(513, 'MODE_PARALLEL_PLANE');
modeMap.set(514, 'MODE_ORTHOGONAL_THREE_D');
modeMap.set(520, 'MODE_SPHERE_POINT_RADIUS');
modeMap.set(521, 'MODE_SPHERE_TWO_POINTS');
modeMap.set(522, 'MODE_CONE_TWO_POINTS_RADIUS');
modeMap.set(523, 'MODE_CYLINDER_TWO_POINTS_RADIUS');
modeMap.set(531, 'MODE_PRISM');
modeMap.set(532, 'MODE_EXTRUSION');
modeMap.set(533, 'MODE_PYRAMID');
modeMap.set(534, 'MODE_CONIFY');
modeMap.set(535, 'MODE_NET');
modeMap.set(536, 'MODE_CUBE');
modeMap.set(537, 'MODE_TETRAHEDRON');
modeMap.set(538, 'MODE_SURFACE_OF_REVOLUTION');
modeMap.set(540, 'MODE_ROTATEVIEW');
modeMap.set(550, 'MODE_CIRCLE_POINT_RADIUS_DIRECTION');
modeMap.set(551, 'MODE_CIRCLE_AXIS_POINT');
modeMap.set(560, 'MODE_VOLUME');
modeMap.set(570, 'MODE_ROTATE_AROUND_LINE');
modeMap.set(571, 'MODE_MIRROR_AT_PLANE');
modeMap.set(1001, 'MODE_CAS_EVALUATE');
modeMap.set(1002, 'MODE_CAS_NUMERIC');
modeMap.set(1003, 'MODE_CAS_KEEP_INPUT');
modeMap.set(1004, 'MODE_CAS_EXPAND');
modeMap.set(1005, 'MODE_CAS_FACTOR');
modeMap.set(1006, 'MODE_CAS_SUBSTITUTE');
modeMap.set(1007, 'MODE_CAS_SOLVE');
modeMap.set(1008, 'MODE_CAS_DERIVATIVE');
modeMap.set(1009, 'MODE_CAS_INTEGRAL');
modeMap.set(1010, 'MODE_CAS_NUMERICAL_SOLVE');
modeMap.set(2001, 'MODE_SPREADSHEET_CREATE_LIST');
modeMap.set(2002, 'MODE_SPREADSHEET_CREATE_MATRIX');
modeMap.set(2003, 'MODE_SPREADSHEET_CREATE_LISTOFPOINTS');
modeMap.set(2004, 'MODE_SPREADSHEET_CREATE_TABLETEXT');
modeMap.set(2005, 'MODE_SPREADSHEET_CREATE_POLYLINE');
modeMap.set(2020, 'MODE_SPREADSHEET_ONEVARSTATS');
modeMap.set(2021, 'MODE_SPREADSHEET_TWOVARSTATS');
modeMap.set(2022, 'MODE_SPREADSHEET_MULTIVARSTATS');
modeMap.set(2030, 'MODE_SPREADSHEET_SORT');
modeMap.set(2031, 'MODE_SPREADSHEET_SORT_AZ');
modeMap.set(2032, 'MODE_SPREADSHEET_SORT_ZA');
modeMap.set(2040, 'MODE_SPREADSHEET_SUM');
modeMap.set(2041, 'MODE_SPREADSHEET_AVERAGE');
modeMap.set(2042, 'MODE_SPREADSHEET_COUNT');
modeMap.set(2043, 'MODE_SPREADSHEET_MIN');
modeMap.set(2044, 'MODE_SPREADSHEET_MAX');
modeMap.set(101, 'MODE_SHAPE_LINE');
modeMap.set(102, 'MODE_SHAPE_TRIANGLE');
modeMap.set(103, 'MODE_SHAPE_SQUARE');
modeMap.set(104, 'MODE_SHAPE_RECTANGLE');
modeMap.set(105, 'MODE_SHAPE_RECTANGLE_ROUND_EDGES');
modeMap.set(106, 'MODE_SHAPE_PENTAGON');
modeMap.set(107, 'MODE_SHAPE_FREEFORM');
modeMap.set(108, 'MODE_SHAPE_CIRCLE');
modeMap.set(109, 'MODE_SHAPE_ELLIPSE');
modeMap.set(110, 'MODE_ERASER');
modeMap.set(111, 'MODE_HIGHLIGHTER');
modeMap.set(112, 'MODE_PEN_PANEL');
modeMap.set(113, 'MODE_TOOLS_PANEL');
modeMap.set(114, 'MODE_MEDIA_PANEL');
modeMap.set(115, 'MODE_VIDEO');
modeMap.set(116, 'MODE_AUDIO');
modeMap.set(117, 'MODE_CALCULATOR');
modeMap.set(118, 'MODE_CAMERA');
modeMap.set(119, 'MODE_PDF');
modeMap.set(120, 'MODE_EXTENSION');
modeMap.set(121, 'MODE_MEDIA_TEXT');
modeMap.set(122, 'MODE_MASK');
modeMap.set(123, 'MODE_TABLE');
modeMap.set(124, 'MODE_EQUATION');
modeMap.set(125, 'MODE_H5P');
modeMap.set(126, 'MODE_MIND_MAP');
modeMap.set(127, 'MODE_RULER');
modeMap.set(128, 'MODE_PROTRACTOR');
modeMap.set(100001, 'MACRO_MODE_ID_OFFSET');
