// Request permission
const permission = await Notification.requestPermission()   // 'granted' | 'denied' | 'default'

// Send notification
if (permission === 'granted') {
    const notification = new Notification('Title', {
        body: 'Notification body text',
        icon: '/icon.png',
        badge: '/badge.png',
        tag: 'unique-id',       // replaces previous notification with same tag
        silent: false,
        data: { url: '/page' }
    })

    notification.addEventListener('click', () => {
        window.focus()
        notification.close()
    })
}
