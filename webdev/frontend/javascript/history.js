// Current URL
// eg. https://example.com:8080/path/page?search=hello#section
window.location.href                  // full URL string
window.location.origin                // "https://example.com:8080"
window.location.protocol              // "https:"
window.location.host                  // "example.com:8080"
window.location.hostname              // "example.com"
window.location.port                  // "8080"
window.location.pathname              // "/path/page"
window.location.search                // "?search=hello"
window.location.hash                  // "#section"

// Navigate pages
window.location.href = '/new-page'    // adds to history
window.location.replace('/new-page')  // does not add to history
window.location.reload()              // reload page

// Parse query string
const params = new URLSearchParams(window.location.search)
params.get('search')                  // "hello"
params.has('search')                  // true
for (const [key, value] of params) { }

// Navigate history (does not reload page)
history.back()                        // go back one page
history.forward()                     // go forward one page
history.go(-2)                        // go back 2 pages
history.go(1)                         // go forward 1 page
history.length                        // number of entries in history stack

// Push new URL to history (does not reload page)
history.pushState(state, '', '/new-path')
history.pushState(state, '', '/search?q=hello')
history.pushState(state, '', '#section')  // update hash only

// Replace current entry (does not reload page, does not add new history entry)
history.replaceState(state, '', '/corrected-path')

// Read current state
history.state

// Listen for back/forward navigation
window.addEventListener('popstate', (e) => {
    e.state             // state object stored with pushState/replaceState
    location.pathname   // current path after navigation

    // ...re-render based on new URL
})
