// Select single element (returns first match or null)
document.getElementById('nav')           // via HTML id (faster, limited)
document.querySelector('.card')          // via CSS selector (slower, flexible)

// Select multiple elements
document.getElementsByClassName('card')  // returns live HTMLCollection
document.getElementsByTagName('li')      // returns live HTMLCollection
document.querySelectorAll('.card')       // returns static NodeList

// Select special elements
document.documentElement                 // <html>
document.head                            // <head>
document.body                            // <body>

// Select elements from subtree
const nav = document.getElementById('nav')
nav.querySelector('li')                  // first <li> inside #nav
nav.querySelectorAll('li')               // all <li> inside #nav

// Traverse through subtree
el.children                              // returns live HTMLCollection
el.childElementCount                     // equivalent to el.children.length
el.firstElementChild
el.lastElementChild

el.parentElement

el.nextElementSibling
el.previousElementSibling

// Test elements
el.matches('.card')
el.contains(otherEl)
document.contains(el)

// Convert NodeList/HTMLCollection to array (to use array methods)
const items = [...elArray]
const items2 = Array.from(elArray)

items.filter(item => item.classList.contains('active'))
items.map(item => item.textContent)
items.find(item => item.dataset.id === '42')
