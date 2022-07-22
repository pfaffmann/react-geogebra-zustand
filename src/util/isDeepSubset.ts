const isSubset = (function(_isSubset) {
  function isSubset(_x, _x2) {
    return _isSubset.apply(this, arguments);
  }

  isSubset.toString = function() {
    return _isSubset.toString();
  };

  return isSubset;
})(function(superset, subset) {
  if (
    typeof superset !== 'object' ||
    superset === null ||
    typeof subset !== 'object' ||
    subset === null
  )
    return false;

  return Object.keys(subset).every(function(key) {
    if (!superset.propertyIsEnumerable(key)) return false;

    var subsetItem = subset[key];
    var supersetItem = superset[key];
    if (
      typeof subsetItem === 'object' && subsetItem !== null
        ? !isSubset(supersetItem, subsetItem)
        : typeof supersetItem === 'string' && typeof subsetItem === 'string'
        ? encodeURI(supersetItem) !== encodeURI(subsetItem)
        : supersetItem !== subsetItem
    )
      return false;

    return true;
  });
});

export function isDeepSubset(superset: any, subset: any): boolean {
  if (typeof superset === 'string') {
    return superset.indexOf(subset) >= 0;
  }
  if (Array.isArray(superset) && Array.isArray(subset)) {
    var res = isArraySubsequence(superset, subset);
    return res;
  }
  return isDeepSubsetReal(superset, subset);
}

function isArraySubsequence(sequence: any, sub: any): boolean {
  return (
    isDeepSubsetReal(sequence, sub) ||
    (sequence.length > 0 && isArraySubsequence(sequence.slice(1), sub))
  );
}

function isDeepSubsetReal(superset: any, subset: any): boolean {
  if (typeof superset === 'undefined' || !superset) return false;
  if (isSubset(superset, subset)) return true;
  try {
    const x = Object.keys(superset).some(function(key) {
      return isDeepSubset(superset[key], subset);
    });
    return x;
  } catch (error) {
    return false;
  }
}
