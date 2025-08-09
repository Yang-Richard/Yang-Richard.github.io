// Wiki Content - Application Documentation
window.WikiContent = {
    getContent: function() {
        return `
# 📋 Daily Todo Kanban Board

Your all-in-one productivity app combining todo management, kanban workflow, notes, sketching, and recurring tasks.

⚠️ **Beta Notice:** Some edge cases may still have minor bugs. ⚠️

## 🚀 Quick Start Guide

### Try the example board!

1 - **ADD TODOs** - Click the blue button at the top to add 200+ item examples and 2 recurring tasks.
2 - **EXPLORE!** - Go to the TODO tab on the far right and mess around. 
3 - **RESET** - Come back to the Wiki tab and clean the board.
4 - **Start fresh!** - Add your own items.

### How to use?

Basic workflow: Add tasks → Organize in sections → Move through To Do → In Progress → Done

Use the sidebar icons to switch panels. Data saves automatically to your browser, and you can setup autosave to your device.

## ⌨️ Keyboard Shortcuts

Power-user navigation for lightning-fast productivity!

### Panel Navigation
- **Ctrl/Cmd + 1-9**: Switch between panels instantly
- **Ctrl/Cmd + 1**: TODO panel
- **Ctrl/Cmd + 2**: LATER panel  
- **Ctrl/Cmd + 3**: RECURRING panel
- **And more...**

### Date Navigation
- **h/←**: Previous day | **l/→**: Next day
- **j/↓**: Next week | **k/↑**: Previous week
- **t**: Jump to today

### Quick Actions
- **a**: Focus input field (ready to add items)
- **u**: Undo last action
- **s**: Create new section
- **n**: Move items to next business day
- **p**: Start/pause Pomodoro timer
- **?**: Show full shortcut help

*Note: Shortcuts work when not typing in input fields*

## 🍅 Pomodoro Timer

Built-in focus timer following the Pomodoro Technique for enhanced productivity!

- **25-minute work sessions** with 5-minute breaks
- **Long breaks** (15 minutes) after every 4th session
- **Customizable durations** for work, short breaks, and long breaks
- **Desktop notifications** when sessions complete
- **Session tracking** to see your progress
- **Keyboard control** with 'p' key for start/pause

Access the timer in the Settings panel. Perfect for maintaining focus during your daily tasks!

## 📱 Panel Overview

### 📋 TODO Panel - Daily Task Management

Your main productivity hub for daily tasks with a new items section and the kanban board: To Do → In Progress → Done.

- "New Items" inbox for unsorted tasks that stick around across all dates
- Custom sections to organize tasks by project or category  
- Calendar navigation to easily move between different dates, or within the week
- Priority markers and due date color coding (red for overdue/today, yellow for tomorrow)
- Daily Notes section for date-specific thoughts and reminders

### 🔥 BACKBURNER Panel - Long-Term Storage

For capturing ideas, someday tasks, and non-urgent items you want to track but not work on immediately.

- "Miscellaneous Items" section for quick idea capture as thoughts come to you
- Custom sections for project-based organization of related long-term items
- Same kanban workflow with To Do → In Progress → Done columns
- Seamless item transfer back and forth with TODO panel as priorities change

### 🔄 RECURRING Panel - Automated Task Management

Powerful automation for repetitive work with flexible scheduling options.

- Daily tasks that repeat every X days (1 to 365 day intervals)
- Weekly tasks on specific days of the week
- Monthly tasks on particular dates
- Due date offsets to control when tasks are due relative to occurrence
- Date ranges to control when recurring tasks are active
- Duplicate existing tasks to create similar ones with different settings

### 🔍 SEARCH Panel - Find & Navigate Items

Powerful full-text search across all your todo items regardless of panel, date, or section.

- Search across daily todos, new items, backburner items, and all sections
- Results show metadata including date, column status, section name, and priorities
- Navigate directly to the day where a daily todo item is located
- Add copies of found items to New Items or Backburner panels
- Easy rediscovery of forgotten tasks and project items across different days

### 🗑️ TRASH Panel - Safe Deletion & Recovery

Trash system organised by time since delete, and items can be recoevered

- Items organized by deletion date for easy tracking
- Full metadata preservation including original dates, priorities, and sections
- Restoration or permanent deletion option

### 📝 NOTES Panel - General notes section for you to take notes 

Persistent note-taking with rich formatting capabilities through Markdown support.

- Large text area for comfortable writing of longer documents and detailed notes
- Automatic saving
- Persistent storage that survives browser restarts

### 🎨 SKETCH Panel - Digital Whiteboard

An empty sketch board for you to draw in.

- Adjustable brush size from 1 to 20 pixels
- 8 color options: black, red, green, blue, yellow, magenta, cyan, white
- Undo and redo functions that track drawing history step by step
- Eraser tool
- Automatic saving so sketches persist across browser sessions

### ⚙️ SETTINGS Panel - Customization & Data Management

App controls, statistics, and changelog. 

- Automatic file backups to a folder with configurable intervals (1 minute to 24 hours)
- Options for skipping days on the weekend
- Set a default due day duration from current day
- Real-time statistics dashboard showing counts across all panels and progress visualization
- Complete JSON backup export and restore with all panels and recurring tasks
- Bulk CSV import with recurring task ID support
- Multiple deletion controls with undo protection and complete app reset option

`;
    }
};