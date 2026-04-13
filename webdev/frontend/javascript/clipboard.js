// Write to clipboard
await navigator.clipboard.writeText('Hello world')
await navigator.clipboard.write([
    new ClipboardItem({ 'text/html': new Blob(['<b>Hello</b>'], { type: 'text/html' }) })
])

// Read from clipboard
const text = await navigator.clipboard.readText()
