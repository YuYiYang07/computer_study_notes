// Read text, email, password, number, url, search, tel, date, time, etc
// (always a string, even for number inputs)
input.value

// Read number (parse explicitly)
Number(input.value), parseFloat(input.value)

// Read checkbox, radio button state (boolean)
input.checked

// Multiple checkboxes (same name)
const checked = [...form.elements['options']]
    .filter(cb => cb.checked)
    .map(cb => cb.value)

// Radio buttons
const chosen = [...form.elements['radio-group']]
    .find(r => r.checked)?.value

// Select (single)
select.value
select.options[select.selectedIndex].text  // display text

// Select (multiple)
const selected = [...select.options]
    .filter(opt => opt.selected)
    .map(opt => opt.value)

// File input
const file = fileInput.files[0]
const files = [...fileInput.files]

// FormData: serialises entire form (handles all input types)
const data = new FormData(form)

data.get('email')                   // get value by name
data.getAll('checkbox-group')       // get all values for name (checkboxes etc.)
data.set('email', 'new@email.com')
data.append('tag', 'extra')
data.delete('field')
data.has('email')

// Iterate
for (const [key, value] of data) { }

// Submit
form.addEventListener('submit', (e) => {
    e.preventDefault()         // always prevent default to handle manually

    if (!form.checkValidity()) {
        form.reportValidity()  // show native error UI
        return
    }

    const data = new FormData(form)
    // ...send data
})

// Reset form
form.reset()
