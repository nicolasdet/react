// Mon composent est il une fonction ? 
function isStateLessComponent(element) {
  return !isClass(element) && typeof element === 'function'
}

// Mon composent est il une class ? 
function isClass(func) {
  return typeof func === 'function'
    && /^class\s/.test(Function.prototype.toString.call(func));
}

// 
function shouldAddEventListener(property) {
  return /^on.*$/.test(property);
}
