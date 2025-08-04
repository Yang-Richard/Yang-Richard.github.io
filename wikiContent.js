// Wiki Content - Application Documentation
window.WikiContent = {
    getContent: function() {
        return `
# 📋 Daily Todo Kanban Board

<br/>

Welcome to your comprehensive daily productivity app! This browser-based tool combines todo management, kanban workflow, note-taking, creative sketching, and powerful recurring tasks all in one interface.

This app is designed to be your daily productivity companion. Start simple, add complexity as needed, and most importantly—make it work for your unique workflow! Forget about things in the moment by moving them to the backburner tab, and the recurring tasks system handles the repetitive stuff. 🎉

⚠️ **Beta Notice:** Some edge cases may still have minor bugs. ⚠️

<br/>

## 🚀 Quick Start Guide

### Try the example board!

1 - **ADD TODOs** - Click the blue button at the top to add 200+ item examples and 2 recurring tasks.
2 - **EXPLORE!** - Go to the TODO tab on the far right and mess around. 
3 - **RESET** - Come back to the Wiki tab and clean the board.
4 - **Start fresh!** - Add your own items.

### How to use?

The app is built around a simple workflow: Add tasks to the TODO panel, organize them with custom sections, and move items through To Do → In Progress → Done columns. You can set up recurring tasks for repetitive work, use the Backburner for long-term items, and keep notes or sketches in their dedicated panels.

This wiki panel opens automatically on your first visit. Use the sidebar icons to switch between different panels . All your data saves automatically to your browser, and a local autosave can be downloaded at recurring intervals if you set that up (not on Firefox). 

<br/>

## 📱 Panel Overview

### 📋 TODO Panel - Daily Task Management

Your main productivity hub where you manage daily tasks. The panel includes a "New Items" inbox for unsorted tasks that stick around across all dates, plus the classic three-column kanban workflow: To Do → In Progress → Done.

You can create custom sections to organize by project or category, and the calendar integration lets you navigate between dates easily. Items have priority markers and due date color coding (red for overdue/today, yellow for tomorrow). The undo system helps fix mistakes, though it doesn't work for drag operations.

### 🔥 BACKBURNER Panel - Long-Term Storage

The Backburner panel is perfect for capturing ideas, someday tasks, and non-urgent items that you want to keep track of but don't need to work on immediately. It includes a "Misc Items" section for general backburner storage where you can quickly capture thoughts and ideas as they come to you.

You can also create organized sections within the Backburner for project-based organization, helping you group related long-term items together. Moving items between the Todo and Backburner panels is seamless - you can easily transfer tasks back and forth as priorities change. The Backburner uses the same kanban workflow with identical columns (To Do, In Progress, Done) to maintain consistency across your workflow, and it fully supports recurring task instances.

### 🔄 RECURRING Panel - Automated Task Management

The recurring task system provides powerful automation for repetitive work. You can create daily tasks that repeat every X days (from 1 to 365 day intervals), weekly tasks that occur on specific days of the week, or monthly tasks that happen on particular dates of each month. The system automatically adjusts for shorter months when needed.

Each recurring task can have a due date offset, allowing you to set when the task should be due relative to when it occurs. Use -1 for no due date, 0 for the same day, or any positive number for days after occurrence. You can also define date ranges to control when recurring tasks are active and mark them as high priority if needed.

The management interface shows all configured recurring tasks with their unique IDs displayed. Since direct editing isn't available, you can duplicate existing tasks to create similar ones with different settings, then delete the original if needed. When you delete a recurring task definition, it removes all instances across all dates, except for items that are already in Done columns or the Backburner panel.

All recurring task instances maintain their permanent association through persistent IDs like "Recurring 1" or "Recurring 2". You can see this information by hovering over any recurring item, which displays "Recurring: [frequency]" in the tooltip. Items never lose their recurring association once created, and you can safely move them between dates while preserving this connection.

### 🗑️ TRASH Panel - Safe Deletion & Recovery

The smart trash system preserves your work and provides peace of mind when deleting items. All deleted items are organized by date so you can see when they were removed, and the system preserves full metadata including original dates, priorities, sections, and recurring IDs.

Restoring items is simple - just drag them back to any panel to restore them completely. When you're confident items are no longer needed, you can permanently delete them by emptying the trash. The system provides special protection for recurring items, allowing them to be restored with full functionality intact.

### 📝 NOTES Panel - Markdown-Enabled Documentation

The Notes panel provides persistent note-taking with rich formatting capabilities through Markdown support. You can use headers, lists, links, and various formatting options to create well-structured documentation. Changes save automatically as you type, ensuring your notes are never lost.

The panel uses persistent storage so your notes survive browser restarts, and the large text area provides a comfortable writing space for longer documents and detailed notes.

### 🎨 SKETCH Panel - Digital Whiteboard

The Sketch panel provides a creative drawing and visual thinking space with professional drawing tools. The pen tool offers smooth drawing with pressure sensitivity, while the eraser tool allows for precise corrections. You can adjust brush size from 1 to 20 pixels and choose from 8 colors including black, red, green, blue, yellow, magenta, cyan, and white.

Canvas controls include undo and redo functions that track your drawing history step by step, plus a clear canvas option when you want to start fresh. All drawings are automatically saved, so your sketches persist across browser sessions without any manual intervention.

### ⚙️ SETTINGS Panel - Customization & Data Management

The Settings panel offers comprehensive app configuration to customize your workflow. The autosave section lets you enable automatic file backups to your Downloads folder with configurable intervals (1 minute to 24 hours), select your preferred backup location using the File System Access API, and manually trigger saves when needed. The system remembers your settings and file location across browser sessions.

Additional general settings include feedback message controls to manage success/error message display, and Weekend Warrior mode for smart weekend day skipping. Smart defaults help streamline your workflow with automatic due date setting (from 1 day to 12 weeks) and configurable options for Saturday/Sunday handling.

The statistics dashboard provides real-time counts for all items across all panels, tracking total sections, new items, misc items, and progress visualization for completed work. Data management features include complete JSON backup export with all panels and recurring tasks, full restore capability from backup files including recurring definitions, and bulk CSV import with recurring task ID support. Multiple deletion controls offer various options with undo protection, while the clear all data function provides a complete app reset when needed.

`;
    }
};