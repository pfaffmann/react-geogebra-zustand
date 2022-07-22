import isSubset from 'is-subset';

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
