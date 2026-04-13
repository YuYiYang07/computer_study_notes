// Add listener
el.addEventListener('click', handler)
el.addEventListener('click', handler, { once: true })  // auto-removes after first fire

// Remove listener (must reference same function, cannot remove anonymous)
el.removeEventListener('click', handler)

// Remove multiple listeners at once
const controller = new AbortController()
el.addEventListener('click', handler, { signal: controller.signal })
el.addEventListener('keydown', handler, { signal: controller.signal })
controller.abort()  // removes all listeners using this signal

// Event object
el.addEventListener('click', (e) => {
    e.target            // element that triggered the event
    e.currentTarget     // element the listener is attached to
    e.type              // event type string eg. "click"
    e.timeStamp         // time of event in milliseconds
    e.cancelable        // whether preventDefault has any effect
    e.isTrusted         // true if triggered by user, false if triggered by JS
    e.preventDefault()  // prevent default browser behaviour (eg. form submit, link navigation)
})

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Make sure DOM fully loads before selecting elements
})

// Mouse events
// click | dblclick | contextmenu (right-click) | mousedown | mouseup
// mouseenter | mouseleave | mouseover | mouseout
el.addEventListener('click', (e) => {
    e.clientX, e.clientY  // position relative to viewport
    e.pageX, e.pageY      // position relative to document
    e.offsetX, e.offsetY  // position relative to element
    e.button              // 0 = left, 1 = middle, 2 = right
    e.shiftKey, e.ctrlKey, e.altKey, e.metaKey
})

// Keyboard events
// keyup | keydown (fires repeatedly while held)
el.addEventListener('keydown', (e) => {
    e.key     // 'a', 'Enter', 'ArrowLeft', 'Escape', ' '
    e.code    // 'KeyA', 'Enter', 'ArrowLeft' (layout-independent)
    e.repeat  // true if key is held down
    e.shiftKey; e.ctrlKey; e.altKey; e.metaKey
})

// Input/form events
// input | change | submit | reset | select
el.addEventListener('input', handler)   // fires on every value change
el.addEventListener('change', handler)  // fires when value is committed (blur or Enter)

// Clipboard events
// copy | cut | paste
el.addEventListener('paste', (e) => {
    const text = e.clipboardData.getData('text/plain')
})

// Focus events
// focus | blur | focusin | focusout
el.addEventListener('focus', handler)

// Window events
// load | beforeunload | unload | resize | scroll | online | offline
window.addEventListener('load', handler)          // all resources loaded
window.addEventListener('beforeunload', handler)  // user about to leave
window.addEventListener('unload', handler)        // page unloaded
