// Local storage
// persists across sessions, cleared only by user or JS
// scoped to origin (protocol + domain + port)
// 5MB limit, strings only
localStorage.setItem('key', 'value')
localStorage.getItem('key')             // returns null if not found
localStorage.removeItem('key')
localStorage.clear()                    // remove all items
localStorage.length
localStorage.key(0)                     // key at index

// Storing objects (must convert to string first)
localStorage.setItem('user', JSON.stringify({ name: 'John', age: 18 }))
const user = JSON.parse(localStorage.getItem('user'))

// Listen for changes (fires in OTHER tabs/windows of same origin, not current tab)
window.addEventListener('storage', (e) => {
    e.key          // changed key (null if clear() was called)
    e.oldValue     // previous value
    e.newValue     // new value
    e.url          // URL of the document that changed storage
    e.storageArea  // localStorage or sessionStorage
})

// Session storage
// cleared when the tab or browser is closed
// not shared across tabs (even same origin)
sessionStorage.setItem('key', 'value')
sessionStorage.getItem('key')
sessionStorage.removeItem('key')
sessionStorage.clear()

// Cookies
// sent with every HTTP request to the server (unlike localStorage)
// can be set by server (Set-Cookie header) or JS (document.cookie)
// can be scoped to path, domain, and expiry
document.cookie = 'name=John'
document.cookie = 'name=John; max-age=3600'           // expires in 1h (3600s)
document.cookie = 'name=John; expires=Fri, 31 Dec 2025 23:59:59 GMT'
document.cookie = 'name=John; path=/'                 // available on all paths
document.cookie = 'name=John; domain=example.com'     // available on subdomains
document.cookie = 'name=John; secure'                 // HTTPS only
document.cookie = 'name=John; samesite=strict'        // strict | lax | none
document.cookie = 'name=John; samesite=none; secure'  // cross-site (requires secure)
document.cookie = 'name=John; path=/; max-age=3600; secure; samesite=lax'

// Read cookies (returns all cookies as one string)
document.cookie  // "name=John; theme=dark; lang=en"

// Parse cookies
const cookies = Object.fromEntries(
    document.cookie.split('; ').map(c => c.split('='))
)

// Delete cookie (set expiry=0)
document.cookie = 'name=; max-age=0; path=/'
