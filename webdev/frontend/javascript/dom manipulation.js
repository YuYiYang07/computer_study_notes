// Reading/writing content
el.textContent                        // get/set text content (no HTML parsed)
el.textContent = 'Hello'
el.textContent = userInput            // always safe

el.innerHTML                          // get/set HTML content (parses HTML, risky for user input)
el.innerHTML = '<em>Hello<em>'

el.outerHTML                          // element itself + contents as HTML string
el.outerHTML = '<p>Replaced</p>'      // replace element entirely

// Classes
el.classList.add('active')
el.classList.remove('hidden')
el.classList.toggle('hidden')
el.classList.toggle('hidden', true)   // force add
el.classList.toggle('hidden', false)  // force remove
el.classList.replace('old', 'new')
el.classList.contains('active')       // check if class exists

// Attributes
el.getAttribute('href')               // null if not exists
el.setAttribute('href', '/page')
el.removeAttribute('disabled')
el.hasAttribute('disabled')           // check if exists
el.toggleAttribute('disabled')        // toggle boolean attribute

// Common attributes as properties (faster)
// id | className | href | src | value | checked | disabled
el.id                                 // empty string if no id
el.className                          // full class string

// Data attributes (data-*)
// eg. HTML: <div data-user-id="42" data-is-admin="true">
el.dataset.userId                     // "42"   (HTML kebab-case -> JS camelCase)
el.dataset.isAdmin                    // "true" (always a string)
el.dataset.userId = '99'
delete el.dataset.userId

// Create element
const div = document.createElement('div')

div.className = 'card'
div.textContent = 'Card content'
div.setAttribute('data-id', '1')

// Insert to DOM
parent.append(div)                    // insert as last child
parent.prepend(div)                   // insert as first child
parent.append(div, div2, 'text')      // insert multiple (also accepts strings)
sibling.before(div)                   // insert before element
sibling.after(div)                    // insert after element

// Insert via HTML string
el.insertAdjacentHTML('beforebegin', '<p>text</p>')  // insert before opening tag
el.insertAdjacentHTML('afterbegin', '<p>text</p>')   // insert after opening tag
el.insertAdjacentHTML('beforeend', '<p>text</p>')    // insert before closing tag
el.insertAdjacentHTML('afterend', '<p>text</p>')     // insert after closing tag

el.insertAdjacentElement('beforeend', otherEl)       // insert elements
el.insertAdjacentText('beforeend', 'text')           // insert text (safe)

// Remove from DOM
el.remove()
parent.removeChild(child)             // remove specific child

el.replaceWith(newEl)                 // replace element with another
el.replaceWith('<p>text</p>')         // also accepts strings
parent.replaceChild(newChild, oldChild)

// Remove all children
el.innerHTML = ''                     // simple but re-parses HTML
el.replaceChildren()                  // modern, clean, no re-parsing

// Element dimensions
el.clientWidth                        // content + padding
el.clientHeight
el.offsetWidth                        // content + padding + border
el.offsetHeight

// Viewport dimensions
window.innerWidth
window.innerHeight
document.documentElement.clientWidth  // excludes scrollbar

// Page scroll position
window.scrollX
window.scrollY
window.scrollTo({ top: 500, behavior: 'smooth' })
window.scrollBy({ top: 100, behavior: 'smooth' })
el.scrollIntoView({ behavior: 'smooth', block: 'start' })
