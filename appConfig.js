// Centralized configuration for app metadata
// Update this file when releasing new versions

const appConfig = {
    // App information
    name: 'Todo Board',
    version: '6.6.1',
    description: 'A powerful task management application with Kanban boards, calendar integration, and Pomodoro timer.',
    author: 'Richard',
    license: 'MIT',
    
    // Build information
    electronVersion: '25.0.0', // Update when upgrading Electron
    buildDate: new Date().toISOString().split('T')[0],
    
    // App details for About dialog
    aboutDetails: function() {
        return `Version ${this.version}\n\n${this.description}\n\nBuilt with Claude code, powered by Electron ${this.electronVersion}, HTML5, CSS3, and JavaScript.`;
    },
    
    // Full changelog
    changelog: [
        {
            version: '6.6.1',
            date: '2025-08-24',
            changes: [
                'Major bug fixes and development improvements',
            ]
        },
        {
            version: '6.5',
            date: '2025-08-15',
            changes: [
                'Bug fixes'
            ]
        },
        {
            version: '6.4',
            date: '2025-08-14',
            changes: [
                'Added frameless window with custom draggable region, fixed windows state persistance',
                'Windows application specific keyboard shortcuts',
                'Improved menu functionality and window movement/sizing',
                'Link support',
                'More unique example item generation',
                'Bug fixes'
            ]
        },
        {
            version: '6.2',
            date: '2025-08-11',
            changes: [
                'Windows electron app support',
                'Custom warning prompts',
                'Resizing for different screen layouts',
                'Edit recurring items',
                'Bug fixes'
            ]
        },
        {
            version: '5.1',
            date: '2025-08-10',
            changes: [
                'Keyboard shortcuts',
                'Pomodoro',
                'More stats',
                'Add items directly to today or in sections',
                'Bug fixes'
            ]
        },
        {
            version: '4.1',
            date: '2025-08-09',
            changes: [
                'Search panel and functionality',
                'Bug fixes'
            ]
        },
        {
            version: '3.3',
            date: '2025-08-09',
            changes: [
                'Added auto saving feature on Chrome, Brave, Edge',
                'Added text box to each day',
                'Bug fixes'
            ]
        },
        {
            version: '2.0',
            date: '2025-08-07',
            changes: [
                'Added recurring panel, priority items',
                'Updated wiki & example items',
                'Bug fixes'
            ]
        },
        {
            version: '1.0',
            date: '2025-07-30',
            changes: [
                'Initial release',
                'Primary TODO, Backburner, and Trash panels functional, due dates',
                'Notes and Sketch panels functional',
                'Wiki and settings documentation'
            ]
        }
    ]
};

// Export for Node.js (Electron main process)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = appConfig;
}

// Export for browser (renderer process)
if (typeof window !== 'undefined') {
    window.appConfig = appConfig;
}