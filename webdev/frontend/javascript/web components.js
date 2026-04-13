class MyCard extends HTMLElement {
    // Attributes to observe for changes
    static observedAttributes = ['title', 'open']

    constructor() {
        super()
        // always call super() first
        // don't access DOM or attributes here, element not yet connected
        // use to set up initial state, attach shadow DOM

        this.attachShadow({ mode: 'open' })  // attach shadow DOM
    }

    // Called when element is added to the document
    connectedCallback() {
        this.render()
    }

    // Called when element is removed from the document
    disconnectedCallback() {
        // ...clean up event listeners, timers, etc
    }

    // Called when element is moved to a new document
    adoptedCallback() { }

    // Called when an observed attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return
        this.render()
    }

    // Getters/setters for property-attribute reflection
    get open() {
        return this.hasAttribute('open')
    }
    set open(value) {
        this.toggleAttribute('open', value)
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; }               /* style the host element */
                :host([open]) .content { display: block; }
                :host-context(.dark-mode) { }           /* style based on ancestor */
            </style>
            <div class="card">
                <h2>${this.getAttribute('title') ?? ''}</h2>
                <div class="content">
                    <slot></slot>                       <!-- light DOM children go here -->
                </div>
            </div>
        `
    }
}

// Register the element (name must contain a hyphen)
customElements.define('my-card', MyCard)

// Use in HTML
// <my-card title="Hello" open>Card content</my-card>
