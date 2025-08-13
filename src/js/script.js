class DailyTodoApp {
    constructor() {
        this.todoInput = document.getElementById('todoInput');
        this.dueDateInput = document.getElementById('dueDateInput');
        this.highPriorityInput = document.getElementById('highPriorityInput');
        
        this.todoItems = document.getElementById('todoItems');
        this.inProgressItems = document.getElementById('inProgressItems');
        this.doneItems = document.getElementById('doneItems');
        this.unsortedItems = document.getElementById('unsortedItems');
        
        this.dailyNotesTextarea = document.getElementById('dailyNotesTextarea');
        
        this.currentDateElement = document.getElementById('currentDate');
        this.inlineCalendar = document.getElementById('inlineCalendar');
        this.monthYearElement = document.getElementById('monthYear');
        this.calendarGrid = document.getElementById('calendarGrid');
        this.prevMonthBtn = document.getElementById('prevMonth');
        this.nextMonthBtn = document.getElementById('nextMonth');
        this.hiddenDatePicker = document.getElementById('hiddenDatePicker');
        this.undoBtn = document.getElementById('undoBtn');
        this.newSectionBtn = document.getElementById('newSectionBtn');
        this.moveKanbanBtn = document.getElementById('moveKanbanBtn');
        this.deleteNewItemsBtn = document.getElementById('deleteNewItemsBtn');
        this.deleteDayBtn = document.getElementById('deleteDayBtn');
        this.deleteWeekBtn = document.getElementById('deleteWeekBtn');
        this.weekButtons = document.getElementById('weekButtons');
        this.relativeDateInfoElement = document.getElementById('relativeDateInfo');
        this.todayBtn = document.getElementById('todayBtn');
        this.nextWeekBtn = document.getElementById('nextWeekBtn');
        this.lastWeekBtn = document.getElementById('lastWeekBtn');
        this.nextDayBtn = document.getElementById('nextDayBtn');
        this.lastDayBtn = document.getElementById('lastDayBtn');
        this.trashItems = document.getElementById('trashItems'); // Keep for backward compatibility
        this.trashColumns = document.getElementById('trashColumns');
        this.emptyTrashBtn = document.getElementById('emptyTrashBtn');
        this.deleteMiscItemsBtn = document.getElementById('deleteMiscItemsBtn');
        
        // Navigation elements
        this.todoNavBtn = document.getElementById('todoNavBtn');
        this.backburnerNavBtn = document.getElementById('backburnerNavBtn');
        this.recurringNavBtn = document.getElementById('recurringNavBtn');
        this.trashNavBtn = document.getElementById('trashNavBtn');
        this.notesNavBtn = document.getElementById('notesNavBtn');
        this.sketchNavBtn = document.getElementById('sketchNavBtn');
        this.wikiNavBtn = document.getElementById('wikiNavBtn');
        this.settingsNavBtn = document.getElementById('settingsNavBtn');
        this.searchNavBtn = document.getElementById('searchNavBtn');
        this.showExampleBtn = document.getElementById('showExampleBtn');
        this.cleanBoardBtn = document.getElementById('cleanBoardBtn');
        
        // Pomodoro elements
        this.pomodoroTimer = document.getElementById('pomodoroTimer');
        // this.pomodoroStatus = document.getElementById('pomodoroStatus'); // Removed - compact UI no longer has status display
        this.pomodoroSession = document.getElementById('pomodoroSession');
        this.pomodoroStart = document.getElementById('pomodoroStart');
        this.pomodoroPause = document.getElementById('pomodoroPause');
        this.pomodoroStop = document.getElementById('pomodoroStop');
        this.pomodoroSkip = document.getElementById('pomodoroSkip');
        this.pomodoroWorkDuration = document.getElementById('pomodoroWorkDuration');
        this.pomodoroBreakDuration = document.getElementById('pomodoroBreakDuration');
        this.pomodoroLongBreakDuration = document.getElementById('pomodoroLongBreakDuration');
        this.pomodoroNotifications = document.getElementById('pomodoroNotifications');
        this.showWikiPanel = document.getElementById('showWikiPanel');
        this.showNotesPanel = document.getElementById('showNotesPanel');
        this.showSketchPanel = document.getElementById('showSketchPanel');
        
        // Pomodoro completion overlay elements
        this.pomodoroCompletionOverlay = document.getElementById('pomodoroCompletionOverlay');
        this.pomodoroCompletionTitle = document.getElementById('pomodoroCompletionTitle');
        this.pomodoroCompletionMessage = document.getElementById('pomodoroCompletionMessage');
        this.pomodoroCompletionButton = document.getElementById('pomodoroCompletionButton');
        this.pomodoroModeText = document.getElementById('pomodoroModeText');
        
        // Panel elements
        this.todoPanel = document.getElementById('todoPanel');
        this.backburnerPanel = document.getElementById('backburnerPanel');
        this.recurringPanel = document.getElementById('recurringPanel');
        this.trashPanel = document.getElementById('trashPanel');
        this.notesPanel = document.getElementById('notesPanel');
        this.notesTextarea = document.getElementById('notesTextarea');
        this.sketchPanel = document.getElementById('sketchPanel');
        this.wikiPanel = document.getElementById('wikiPanel');
        this.wikiContent = document.getElementById('wikiContent');
        this.settingsPanel = document.getElementById('settingsPanel');
        this.searchPanel = document.getElementById('searchPanel');
        
        // Destination dropdowns
        this.todoDestinationSelect = document.getElementById('todoDestinationSelect');
        this.backburnerDestinationSelect = document.getElementById('backburnerDestinationSelect');
        
        // Backburner elements
        this.backburnerInput = document.getElementById('backburnerInput');
        this.backburnerDueDateInput = document.getElementById('backburnerDueDateInput');
        this.backburnerHighPriorityInput = document.getElementById('backburnerHighPriorityInput');
        this.backburnerUnsortedItems = document.getElementById('backburnerUnsortedItems');
        this.centerSectionBackburner = document.getElementById('centerSectionBackburner');
        
        // Recurring tasks elements
        this.recurringTaskInput = document.getElementById('recurringTaskInput');
        this.recurringFrequencyType = document.getElementById('recurringFrequencyType');
        this.dailyInterval = document.getElementById('dailyInterval');
        this.weeklyDay = document.getElementById('weeklyDay');
        this.monthlyDate = document.getElementById('monthlyDate');
        this.dueDateOffset = document.getElementById('dueDateOffset');
        this.recurringStartDate = document.getElementById('recurringStartDate');
        this.recurringEndDate = document.getElementById('recurringEndDate');
        this.recurringHighPriority = document.getElementById('recurringHighPriority');
        this.createRecurringTaskBtn = document.getElementById('createRecurringTaskBtn');
        this.centerSectionRecurring = document.getElementById('centerSectionRecurring');
        this.recurringTasksList = document.getElementById('recurringTasksList');
        this.recurringTasksCount = document.getElementById('recurringTasksCount');
        this.deleteAllRecurringBtn = document.getElementById('deleteAllRecurringBtn');
        
        // Whiteboard elements
        this.canvas = document.getElementById('whiteboardCanvas');
        this.ctx = null; // Will be initialized in initWhiteboard
        this.penTool = document.getElementById('penTool');
        this.eraserTool = document.getElementById('eraserTool');
        this.brushSize = document.getElementById('brushSize');
        this.sizeDisplay = document.getElementById('sizeDisplay');
        this.colorBtns = document.querySelectorAll('.color-btn');
        this.undoSketch = document.getElementById('undoSketch');
        this.redoSketch = document.getElementById('redoSketch');
        this.clearCanvas = document.getElementById('clearCanvas');
        
        // Main todo sections (center and right panels)
        this.centerSection = document.querySelector('.center-section');
        this.rightPanel = document.querySelector('.right-panel');
        
        this.currentDate = new Date();
        this.currentDate.setHours(0, 0, 0, 0);
        this.calendarDate = new Date(this.currentDate);
        this.itemCounter = this.loadItemCounter();
        this.sectionCounter = 0;
        
        // Undo system
        this.undoStack = [];
        this.maxUndoOperations = 50;
        
        // Whiteboard state
        this.isDrawing = false;
        this.currentTool = 'pen';
        this.currentColor = '#000000';
        this.currentSize = 3;
        this.canvasHistory = [];
        this.historyStep = -1;
        
        // Flag to prevent duplicate event listener setup
        this.settingsEventListenersAdded = false;
        
        // Pomodoro timer state
        this.pomodoroInterval = null;
        this.pomodoroTimeRemaining = 25 * 60; // 25 minutes in seconds
        this.pomodoroCurrentSession = 1;
        this.pomodoroTotalSessions = 4;
        this.pomodoroMode = 'work'; // 'work', 'break', 'long-break'
        this.pomodoroIsRunning = false;
        this.pomodoroCompletedSessions = 0; // Track completed work sessions
        this.pomodoroIsPaused = false;
        
        // Auto-scroll while dragging
        this.autoScrollInterval = null;
        this.isNearEdge = false;
        
        // Flag to prevent multiple move-to-next-day dialogs
        this.moveToNextDayInProgress = false;
        
        this.init();
    }
    
    init() {
        this.todoInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (e.ctrlKey) {
                    // Ctrl+Enter: Insert new line manually
                    e.preventDefault();
                    const textarea = e.target;
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const value = textarea.value;
                    
                    // Insert newline at cursor position
                    textarea.value = value.substring(0, start) + '\n' + value.substring(end);
                    
                    // Move cursor to after the newline
                    textarea.selectionStart = textarea.selectionEnd = start + 1;
                    
                    // Trigger auto-resize
                    this.autoResizeTextarea(textarea);
                } else {
                    // Regular Enter: Submit the todo
                    e.preventDefault();
                    this.addTodo();
                }
            }
        });
        
        // Add auto-resize functionality
        this.todoInput.addEventListener('input', () => this.autoResizeTextarea(this.todoInput));
        
        // Backburner event listeners
        this.backburnerInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (e.ctrlKey) {
                    // Ctrl+Enter: Insert new line manually
                    e.preventDefault();
                    const textarea = e.target;
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const value = textarea.value;
                    
                    // Insert newline at cursor position
                    textarea.value = value.substring(0, start) + '\n' + value.substring(end);
                    
                    // Move cursor to after the newline
                    textarea.selectionStart = textarea.selectionEnd = start + 1;
                    
                    // Trigger auto-resize
                    this.autoResizeTextarea(textarea);
                } else {
                    // Regular Enter: Submit the backburner item
                    e.preventDefault();
                    this.addBackburnerItem();
                }
            }
        });
        
        // Add auto-resize functionality for backburner
        this.backburnerInput.addEventListener('input', () => this.autoResizeTextarea(this.backburnerInput));
        
        // Recurring tasks event listeners
        this.createRecurringTaskBtn.addEventListener('click', () => this.createRecurringTask());
        this.recurringFrequencyType.addEventListener('change', () => this.updateFrequencyOptions());
        this.recurringTaskInput.addEventListener('input', () => this.autoResizeTextarea(this.recurringTaskInput));
        this.deleteAllRecurringBtn.addEventListener('click', () => this.deleteAllRecurringTasks());
        
        // Add validation for monthly date input
        this.monthlyDate.addEventListener('input', () => this.validateMonthlyDate());
        this.monthlyDate.addEventListener('blur', () => this.validateMonthlyDate());
        
        // Set initial textarea heights
        this.autoResizeTextarea(this.todoInput);
        this.autoResizeTextarea(this.backburnerInput);
        this.autoResizeTextarea(this.recurringTaskInput);
        
        // Daily notes event listener
        this.dailyNotesTextarea.addEventListener('input', () => {
            this.saveDailyNotes();
        });
        
        // Initialize recurring tasks interface
        this.updateFrequencyOptions();
        this.setDefaultRecurringDates();
        
        this.todayBtn.addEventListener('click', () => this.goToToday());
        this.nextWeekBtn.addEventListener('click', () => this.goToNextWeek());
        this.lastWeekBtn.addEventListener('click', () => this.goToLastWeek());
        this.nextDayBtn.addEventListener('click', () => this.changeDay(1));
        this.lastDayBtn.addEventListener('click', () => this.changeDay(-1));
        
        // Add drag handlers for navigation buttons
        this.addNavigationDragHandlers(this.todayBtn, (e) => this.handleTodayButtonDrop.bind(this)(e));
        this.addNavigationDragHandlers(this.nextWeekBtn, (e) => this.handleNextWeekButtonDrop.bind(this)(e));
        this.addNavigationDragHandlers(this.lastWeekBtn, (e) => this.handleLastWeekButtonDrop.bind(this)(e));
        this.addNavigationDragHandlers(this.nextDayBtn, (e) => this.handleNextDayButtonDrop.bind(this)(e));
        this.addNavigationDragHandlers(this.lastDayBtn, (e) => this.handleLastDayButtonDrop.bind(this)(e));
        // Control buttons
        const clickHandlers = {
            prevMonthBtn: () => this.changeMonth(-1),
            nextMonthBtn: () => this.changeMonth(1),
            undoBtn: () => this.performUndo(),
            newSectionBtn: () => this.createNewSection(),
            moveKanbanBtn: () => this.moveKanbanToNextDay(),
            deleteNewItemsBtn: () => { this.deleteNewItems(); },
            emptyTrashBtn: () => this.emptyTrash(),
            deleteMiscItemsBtn: () => { this.deleteMiscItems(); },
            deleteDayBtn: () => this.deleteCurrentDay(),
            deleteWeekBtn: () => this.deleteCurrentWeek(),
        };
        
        Object.entries(clickHandlers).forEach(([elementName, handler]) => {
            if (this[elementName]) { // Only add listener if element exists
                this[elementName].addEventListener('click', handler);
            }
        });
        
        // Month/year click handler for date picker
        this.monthYearElement.addEventListener('click', (event) => {
            // Set the date picker to current calendar date
            const year = this.calendarDate.getFullYear();
            const month = String(this.calendarDate.getMonth() + 1).padStart(2, '0');
            const day = String(this.currentDate.getDate()).padStart(2, '0');
            this.hiddenDatePicker.value = `${year}-${month}-${day}`;
            
            // Position the date picker near the clicked element
            const rect = this.monthYearElement.getBoundingClientRect();
            this.hiddenDatePicker.style.left = rect.left + 'px';
            this.hiddenDatePicker.style.top = (rect.bottom + 5) + 'px';
            this.hiddenDatePicker.style.position = 'fixed';
            this.hiddenDatePicker.style.opacity = '0';
            this.hiddenDatePicker.style.pointerEvents = 'auto';
            this.hiddenDatePicker.style.width = '200px';
            this.hiddenDatePicker.style.height = '40px';
            
            // Use showPicker() if available, otherwise focus and click
            if (this.hiddenDatePicker.showPicker) {
                this.hiddenDatePicker.showPicker();
            } else {
                this.hiddenDatePicker.focus();
                this.hiddenDatePicker.click();
            }
        });
        
        // Date picker change handler
        this.hiddenDatePicker.addEventListener('change', (e) => {
            const selectedDate = new Date(e.target.value + 'T00:00:00');
            if (!isNaN(selectedDate.getTime())) {
                this.navigateToDate(selectedDate);
                this.showFeedback(`Navigated to ${selectedDate.toLocaleDateString()}`, 'success');
            }
        });
        
        // Navigation buttons
        this.todoNavBtn.addEventListener('click', () => this.switchPanel('todo'));
        this.backburnerNavBtn.addEventListener('click', () => this.switchPanel('backburner'));
        this.recurringNavBtn.addEventListener('click', () => this.switchPanel('recurring'));
        this.trashNavBtn.addEventListener('click', () => this.switchPanel('trash'));
        this.notesNavBtn.addEventListener('click', () => this.switchPanel('notes'));
        this.sketchNavBtn.addEventListener('click', () => this.switchPanel('sketch'));
        this.wikiNavBtn.addEventListener('click', () => this.switchPanel('wiki'));
        this.settingsNavBtn.addEventListener('click', () => this.switchPanel('settings'));
        this.searchNavBtn.addEventListener('click', () => this.switchPanel('search'));
        this.showExampleBtn.addEventListener('click', () => this.showExample());
        this.cleanBoardBtn.addEventListener('click', () => { this.clearVisibleBoards(); });
        
        // Pomodoro functionality
        this.pomodoroStart.addEventListener('click', () => this.startPomodoro());
        this.pomodoroPause.addEventListener('click', () => this.pausePomodoro());
        this.pomodoroStop.addEventListener('click', () => this.stopPomodoro());
        this.pomodoroSkip.addEventListener('click', () => this.skipPomodoro());
        this.pomodoroCompletionButton.addEventListener('click', () => this.hidePomodoroCompletionOverlay());
        this.pomodoroWorkDuration.addEventListener('change', () => this.updatePomodoroSettings());
        this.pomodoroWorkDuration.addEventListener('input', () => this.updatePomodoroSettings());
        this.pomodoroBreakDuration.addEventListener('change', () => this.updatePomodoroSettings());
        this.pomodoroBreakDuration.addEventListener('input', () => this.updatePomodoroSettings());
        this.pomodoroLongBreakDuration.addEventListener('change', () => this.updatePomodoroSettings());
        this.pomodoroLongBreakDuration.addEventListener('input', () => this.updatePomodoroSettings());
        this.pomodoroNotifications.addEventListener('change', () => {
            if (this.pomodoroNotifications.checked) {
                if (this.isElectronMode()) {
                    // Electron notifications don't need permission
                    console.log('Electron notifications enabled');
                } else if ('Notification' in window && Notification.permission === 'default') {
                    // Request permission for web notifications
                    Notification.requestPermission();
                }
            }
            this.savePomodoroSettings();
            this.savePomodoroState();
        });
        
        this.showWikiPanel.addEventListener('change', () => {
            this.togglePanelVisibility('wiki');
            this.savePanelVisibilitySettings();
        });
        
        this.showNotesPanel.addEventListener('change', () => {
            this.togglePanelVisibility('notes');
            this.savePanelVisibilitySettings();
        });
        
        this.showSketchPanel.addEventListener('change', () => {
            this.togglePanelVisibility('sketch');
            this.savePanelVisibilitySettings();
        });
        
        // Notes functionality
        this.notesTextarea.addEventListener('input', () => this.saveNotes());
        this.notesTextarea.addEventListener('blur', () => this.saveNotes());
        
        this.setupDragAndDrop();
        this.updateDateDisplay();
        this.updateInfoSection();
        this.initializeCalendar();
        this.loadTrashItems();
        this.loadNotes();
        this.initWhiteboard();
        this.renderWeekView();
        this.updateUndoButtonState();
        this.logStorageDebugInfo();
        this.updateDefaultDueDateInputs();
        this.loadPanelVisibilitySettings();
        
        // Set up periodic trash reorganization (every 5 minutes)
        setInterval(() => {
            if (!this.trashPanel.classList.contains('hidden')) {
                this.organizeTrashByTime();
            }
        }, 5 * 60 * 1000);
        
        // Set up autosave functionality
        this.setupAutosave();
        
        // Add window resize listener for unsorted section heights
        window.addEventListener('resize', () => {
            this.updateUnsortedSectionHeights();
        });
        
        // Initialize counts
        this.updateAllItemCounts();
        
        // Show initial panel (wiki on first visit, last selected panel on subsequent visits)
        this.showInitialPanel();
        
        // Initialize keyboard shortcuts
        this.initKeyboardShortcuts();
        
        // Initialize Pomodoro timer
        this.initPomodoro();
        
        // Fix for Electron: Ensure text inputs remain focusable after drag operations
        this.setupElectronDragFix();
        
        // Show Electron-only content if running in Electron
        this.showElectronOnlyContent();
        
        // Initialize easter eggs
        this.initEasterEggs();
        
        // Initialize placeholder tracking
        this.lastSecretPlaceholder = null;
        this.placeholderInProgress = false;
        this.originalPlaceholder = null;
        
        // Initialize link handling
        this.initLinkHandling();
    }
    
    setupElectronDragFix() {
        // Periodically check and fix input elements in case they become unresponsive
        const inputs = [this.todoInput, this.backburnerInput, this.recurringTaskInput, this.notesTextarea, this.dailyNotesTextarea];
        
        // Add focus event listeners to ensure inputs are always interactive
        inputs.forEach(input => {
            if (!input) return;
            
            // Force enable interaction on focus attempt
            input.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                input.style.pointerEvents = 'auto';
                input.style.userSelect = 'text';
                input.disabled = false;
            });
            
            input.addEventListener('touchstart', (e) => {
                e.stopPropagation();
                input.style.pointerEvents = 'auto';
                input.style.userSelect = 'text';
                input.disabled = false;
            });
        });
        
        // Global drag end listener to ensure inputs remain interactive
        document.addEventListener('dragend', () => {
            setTimeout(() => {
                inputs.forEach(input => {
                    if (!input) return;
                    input.style.pointerEvents = '';
                    input.style.userSelect = '';
                    input.disabled = false;
                });
            }, 100);
        });
    }
    
    showElectronOnlyContent() {
        if (this.isElectronMode()) {
            const electronOnlyText = document.getElementById('electronOnlyText');
            if (electronOnlyText) {
                electronOnlyText.style.display = 'block';
            }
        }
    }
    
    initLinkHandling() {
        // Handle clicks on todo links - prevent them from interfering with dragging
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('todo-link')) {
                e.preventDefault(); // Prevent default link behavior
                e.stopPropagation(); // Prevent event propagation
                
                const url = e.target.href;
                if (url) {
                    if (this.isElectronMode()) {
                        // In Electron, open in external browser
                        window.electronAPI.openExternal(url);
                    } else {
                        // In web browser, open in new tab
                        window.open(url, '_blank');
                    }
                }
            }
        });
        
        // Prevent dragging on links
        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('todo-link')) {
                e.preventDefault();
            }
        });
    }
    
    initEasterEggs() {
        // Konami Code (↑↑↓↓←→←→BA)
        this.konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        this.konamiProgress = 0;
        
        document.addEventListener('keydown', (e) => {
            // Only trigger if not typing in inputs
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
                return;
            }
            
            if (e.code === this.konamiSequence[this.konamiProgress]) {
                this.konamiProgress++;
                if (this.konamiProgress === this.konamiSequence.length) {
                    this.triggerKonamiEasterEgg();
                    this.konamiProgress = 0;
                }
            } else {
                this.konamiProgress = 0;
            }
        });
        
        
        // Secret phrase in todo input
        document.addEventListener('input', (e) => {
            if (e.target.id === 'todoInput' && e.target.value.toLowerCase().includes('do a barrel roll')) {
                this.triggerBarrelRoll();
                e.target.value = e.target.value.replace(/do a barrel roll/gi, '');
            }
            
            // Secret productivity joke
            if (e.target.id === 'todoInput' && e.target.value.toLowerCase().includes('be productive')) {
                e.target.value = e.target.value.replace(/be productive/gi, 'actually do the thing...');
                this.showFeedback('🤔 Meta-productivity detected! You added "be productive" to your todo list... to be more productive! 🔄', 'success');

            }
        });
        
        // Random placeholder rotator for some inputs
        this.rotateSecretPlaceholders();
    }
    
    triggerKonamiEasterEgg() {
        this.incrementEasterEggCounter();
        
        // Add sparkle effect and show secret message
        document.body.style.animation = 'rainbow 2s infinite';
        
        // Add rainbow animation CSS if not exists
        if (!document.getElementById('rainbow-animation')) {
            const style = document.createElement('style');
            style.id = 'rainbow-animation';
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    25% { filter: hue-rotate(90deg); }
                    50% { filter: hue-rotate(180deg); }
                    75% { filter: hue-rotate(270deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.showFeedback('🎉 KONAMI CODE ACTIVATED! You found the secret! 🎮✨', 'success');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
    }
    
    
    triggerBarrelRoll() {
        this.incrementEasterEggCounter();
        
        document.body.style.animation = 'roll 1s ease-in-out';
        
        // Add barrel roll animation CSS if not exists
        if (!document.getElementById('barrel-roll-animation')) {
            const style = document.createElement('style');
            style.id = 'barrel-roll-animation';
            style.textContent = `
                @keyframes roll {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.showFeedback('🛩️ BARREL ROLL COMPLETE! 🌀', 'success');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 1000);
    }
    
    incrementEasterEggCounter() {
        const current = parseInt(localStorage.getItem('easterEggsFound') || '0');
        localStorage.setItem('easterEggsFound', (current + 1).toString());
    }
    
    rotateSecretPlaceholders() {
        const secretPlaceholders = [
            "Add a task (or don't, I'm not your boss)",
            "What needs doing today? Besides procrastinating...",
            "Enter task here (it won't judge you)",
            "Your task goes here",
            "Type something productive... eventually",
            "Task idea: Actually use this todo app",
            "What's on your mind? (besides lunch)",
            "New task (this one will definitely get done)",
            "Add task here (narrator: they did not add a task)"
        ];
        
        // Store the original placeholder
        if (this.todoInput) {
            this.originalPlaceholder = this.todoInput.placeholder;
        }
        
        // Occasionally change the todo input placeholder
        setInterval(() => { // 10% chance
            if (Math.random() < 0.1 && this.todoInput && !this.todoInput.value && !this.placeholderInProgress) {
                this.placeholderInProgress = true;
                let secretPlaceholder;
                
                // Make sure we don't get the same placeholder twice in a row
                do {
                    secretPlaceholder = secretPlaceholders[Math.floor(Math.random() * secretPlaceholders.length)];
                } while (secretPlaceholder === this.lastSecretPlaceholder && secretPlaceholders.length > 1);
                
                this.lastSecretPlaceholder = secretPlaceholder;
                this.todoInput.placeholder = secretPlaceholder;
                
                setTimeout(() => {
                    if (this.todoInput && this.originalPlaceholder) {
                        this.todoInput.placeholder = this.originalPlaceholder;
                    } else {
                        // Fallback to default
                        this.todoInput.placeholder = "Enter item and press ENTER";
                    }
                    this.placeholderInProgress = false;
                }, 10000);
            }
        }, 60000);
    }
    
    initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Show menu popup when Alt is pressed in Electron
            if (e.key === 'Alt' && this.isElectronMode()) {
                e.preventDefault();
                window.electronAPI.showMenuPopup();
                return;
            }
            
            // Don't trigger shortcuts when typing in inputs or textareas
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
                return;
            }
            
            // Panel navigation shortcuts (Ctrl/Cmd + Number) - work on every panel
            if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
                switch(e.key) {
                    case '1':
                        e.preventDefault();
                        this.switchPanel('todo');
                        this.showFeedback('Switched to TODO panel', 'success');
                        break;
                    case '2':
                        e.preventDefault();
                        this.switchPanel('backburner');
                        this.showFeedback('Switched to LATER panel', 'success');
                        break;
                    case '3':
                        e.preventDefault();
                        this.switchPanel('recurring');
                        this.showFeedback('Switched to RECURRING panel', 'success');
                        break;
                    case '4':
                        e.preventDefault();
                        this.switchPanel('search');
                        this.showFeedback('Switched to SEARCH panel', 'success');
                        break;
                    case '5':
                        e.preventDefault();
                        this.switchPanel('trash');
                        this.showFeedback('Switched to TRASH panel', 'success');
                        break;
                    case '6':
                        e.preventDefault();
                        this.switchPanel('notes');
                        this.showFeedback('Switched to NOTES panel', 'success');
                        break;
                    case '7':
                        e.preventDefault();
                        this.switchPanel('sketch');
                        this.showFeedback('Switched to SKETCH panel', 'success');
                        break;
                    case '8':
                        e.preventDefault();
                        this.switchPanel('settings');
                        this.showFeedback('Switched to SETTINGS panel', 'success');
                        break;
                    case '9':
                        e.preventDefault();
                        this.switchPanel('wiki');
                        this.showFeedback('Switched to WIKI panel', 'success');
                        break;
                }
            }
            
            // Navigation shortcuts (no modifier keys)
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                // Check if we're in todo panel for arrow navigation shortcuts
                const isTodoPanel = !this.todoPanel.classList.contains('hidden');
                
                switch(e.key) {
                    //case 'h':
                    //    if (isTodoPanel) {
                    //        e.preventDefault();
                    //        this.changeDay(-1);
                    //        this.showFeedback('Previous day', 'success');
                    //    }
                    //    break;
                    case 'ArrowLeft':
                        if (isTodoPanel) {
                            e.preventDefault();
                            this.changeDay(-1);
                            this.showFeedback('Previous day', 'success');
                        }
                        break;
                    //case 'l':
                    //    if (isTodoPanel) {
                    //        e.preventDefault();
                    //        this.changeDay(1);
                    //        this.showFeedback('Next day', 'success');
                    //    }
                    //    break;
                    case 'ArrowRight':
                        if (isTodoPanel) {
                            e.preventDefault();
                            this.changeDay(1);
                            this.showFeedback('Next day', 'success');
                        }
                        break;
                    //case 'j':
                    //    if (isTodoPanel) {
                    //        e.preventDefault();
                    //        this.goToNextWeek();
                    //        this.showFeedback('Next week', 'success');
                    //    }
                    //    break;
                    case 'ArrowDown':
                        if (isTodoPanel) {
                            e.preventDefault();
                            this.goToNextWeek();
                            this.showFeedback('Next week', 'success');
                        }
                        break;
                    //case 'k':
                    //    if (isTodoPanel) {
                    //        e.preventDefault();
                    //        this.goToLastWeek();
                    //        this.showFeedback('Previous week', 'success');
                    //    }
                    //    break;
                    case 'ArrowUp':
                        if (isTodoPanel) {
                            e.preventDefault();
                            this.goToLastWeek();
                            this.showFeedback('Previous week', 'success');
                        }
                        break;
                    case 't':
                        if (isTodoPanel) {
                            e.preventDefault();
                            this.goToToday();
                            this.showFeedback('Today', 'success');
                        }
                        break;
                    case 's':
                        // Only allow section creation on todo and later panels
                        const isTodoOrLaterPanel = !this.todoPanel.classList.contains('hidden') || !this.backburnerPanel.classList.contains('hidden');
                        if (isTodoOrLaterPanel) {
                            e.preventDefault();
                            this.createNewSection();
                        }
                        break;
                    case 'n':
                        // Only allow move to next day on todo panel and prevent multiple dialogs
                        if (isTodoPanel && !this.moveToNextDayInProgress) {
                            e.preventDefault();
                            this.moveKanbanToNextDay();
                        }
                        break;
                    case 'a':
                        e.preventDefault();
                        // Focus on the input field for adding todos
                        if (!this.todoPanel.classList.contains('hidden')) {
                            this.todoInput.focus();
                            this.showFeedback('Ready to add TODO item', 'success');
                        } else if (!this.backburnerPanel.classList.contains('hidden')) {
                            this.backburnerInput.focus();
                            this.showFeedback('Ready to add LATER item', 'success');
                        } else if (!this.recurringPanel.classList.contains('hidden')) {
                            this.recurringTaskInput.focus();
                            this.showFeedback('Ready to add RECURRING item', 'success');
                        } else if (!this.searchPanel.classList.contains('hidden')) {
                            this.searchInput.focus();
                            this.showFeedback('Ready to search', 'success');
                        }
                        break;
                    case 'p':
                        e.preventDefault();
                        if (this.pomodoroIsRunning) {
                            this.pausePomodoro();
                        } else {
                            this.startPomodoro();
                        }
                        break;
                }
            }
        });
    }
    
    // orphaned
    showKeyboardShortcutsHelp() {
        const shortcuts = [
            'Keyboard Shortcuts:',
            '',
            'Panel Navigation (works on all panels):',
            '  Ctrl/Cmd + 1: TODO panel',
            '  Ctrl/Cmd + 2: LATER panel', 
            '  Ctrl/Cmd + 3: RECURRING panel',
            '  Ctrl/Cmd + 4: SEARCH panel',
            '  Ctrl/Cmd + 5: TRASH panel',
            '  Ctrl/Cmd + 6: NOTES panel',
            '  Ctrl/Cmd + 7: SKETCH panel',
            '  Ctrl/Cmd + 8: SETTINGS panel',
            '  Ctrl/Cmd + 9: WIKI panel',
            '',
            'Date Navigation (TODO panel only):',
            '  h/←: Previous day',
            '  l/→: Next day', 
            '  j/↓: Next week',
            '  k/↑: Previous week',
            '  t: Go to today',
            '',
            'Actions:',
            '  a: Focus input field (add item)',
            '  s: Create new section',
            '  n: Move items to next day',
            '  p: Start/pause Pomodoro timer',
            '',
            'Note: Shortcuts work when not typing in input fields'
        ].join('\n');
        
        alert(shortcuts);
    }
    
    showInitialPanel() {
        // Check if this is the first visit
        const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
        const lastSelectedPanel = localStorage.getItem('lastSelectedPanel');
        
        if (!hasVisitedBefore) {
            // First visit - show wiki panel and mark as visited
            localStorage.setItem('hasVisitedBefore', 'true');
            this.switchPanel('wiki');
        } else if (lastSelectedPanel) {
            // Subsequent visits - show last selected panel
            this.switchPanel(lastSelectedPanel);
        } else {
            // Fallback to todo panel if no saved preference
            this.switchPanel('todo');
        }
    }
    
    updateAllItemCounts() {
        this.updateTodoItemCounts();
        this.updateBackburnerItemCounts();
        this.updateUnsortedSectionHeights();
    }
    
    updateItemCountsOnly() {
        this.updateTodoItemCounts();
        this.updateBackburnerItemCounts();
    }
    
    updateUnsortedSectionHeights() {
        // Update heights for both todo and backburner unsorted sections
        this.setUnsortedSectionHeight('unsortedItems', 'kanban-board');
        this.setUnsortedSectionHeight('backburnerUnsortedItems', 'backburnerSectionsContainer');
    }
    
    setUnsortedSectionHeight(unsortedId, kanbanContainerId) {
        const unsortedPane = document.getElementById(unsortedId)?.closest('.unsorted-pane');
        if (!unsortedPane) return;
        
        // Calculate kanban board height
        let kanbanHeight = 0;
        
        // For todo panel - calculate from main columns + sections
        if (kanbanContainerId === 'kanban-board') {
            const mainColumns = document.querySelector('.main-columns');
            const sectionsContainer = document.getElementById('sectionsContainer');
            
            if (mainColumns) {
                kanbanHeight += mainColumns.offsetHeight;
            }
            
            if (sectionsContainer && sectionsContainer.children.length > 0) {
                kanbanHeight += sectionsContainer.offsetHeight;
            }
            
            // Add spacing between main columns and sections (20px from CSS)
            if (mainColumns && sectionsContainer && sectionsContainer.children.length > 0) {
                kanbanHeight += 20;
            }
        }
        
        // For backburner panel - calculate from sections container
        if (kanbanContainerId === 'backburnerSectionsContainer') {
            const backburnerSections = document.getElementById('backburnerSectionsContainer');
            if (backburnerSections && backburnerSections.children.length > 0) {
                kanbanHeight = backburnerSections.offsetHeight;
            }
        }
        
        // Set minimum height to screen height, then match sections if they're taller
        const screenHeight = window.innerHeight;
        const minHeight = Math.max(screenHeight * 0.7, 400); // Use 70% of screen height as minimum, with 400px fallback
        const targetHeight = Math.max(kanbanHeight, minHeight);
        
        // Always set the height to at least screen height, or match sections if taller
        unsortedPane.style.height = `${targetHeight}px`;
        unsortedPane.style.maxHeight = `${targetHeight}px`;
        
        // Ensure scrolling is enabled for the items container
        const itemsContainer = unsortedPane.querySelector('.items');
        if (itemsContainer) {
            itemsContainer.style.overflowY = 'auto';
            itemsContainer.style.flexGrow = '1';
        }
    }
    
    updateTodoItemCounts() {
        // Count items in New Items
        const newItemsCount = this.unsortedItems.children.length;
        document.getElementById('newItemsCount').textContent = `(${newItemsCount})`;
        
        // Count items in main columns (excluding section items)
        let todoCount = Array.from(this.todoItems.children).filter(item => !item.dataset.sectionId).length;
        let inProgressCount = Array.from(this.inProgressItems.children).filter(item => !item.dataset.sectionId).length;
        let doneCount = Array.from(this.doneItems.children).filter(item => !item.dataset.sectionId).length;
        
        // Count items in sections
        const sectionElements = document.querySelectorAll('.section-row[data-panel="todo"], .section-row:not([data-panel])');
        sectionElements.forEach(section => {
            const sectionTodoItems = section.querySelectorAll('.section-todo .todo-item').length;
            const sectionInProgressItems = section.querySelectorAll('.section-in-progress .todo-item').length;
            const sectionDoneItems = section.querySelectorAll('.section-done .todo-item').length;
            
            // Add to totals
            todoCount += sectionTodoItems;
            inProgressCount += sectionInProgressItems;
            doneCount += sectionDoneItems;
        });
        
        // Update displays
        document.getElementById('todoCount').textContent = `(${todoCount})`;
        document.getElementById('inProgressCount').textContent = `(${inProgressCount})`;
        document.getElementById('doneCount').textContent = `(${doneCount})`;
    }
    
    updateBackburnerItemCounts() {
        // Count items in Misc Items
        const miscItemsCount = this.backburnerUnsortedItems.children.length;
        document.getElementById('miscItemsCount').textContent = `(${miscItemsCount})`;
        
        // Count items across all backburner sections
        let backburnerTodoCount = 0;
        let backburnerInProgressCount = 0;
        let backburnerDoneCount = 0;
        
        const backburnerSections = document.querySelectorAll('.section-row[data-panel="backburner"]');
        backburnerSections.forEach(section => {
            backburnerTodoCount += section.querySelectorAll('.section-todo .todo-item').length;
            backburnerInProgressCount += section.querySelectorAll('.section-in-progress .todo-item').length;
            backburnerDoneCount += section.querySelectorAll('.section-done .todo-item').length;
        });
        
        // Update displays
        document.getElementById('backburnerTodoCount').textContent = `(${backburnerTodoCount})`;
        document.getElementById('backburnerInProgressCount').textContent = `(${backburnerInProgressCount})`;
        document.getElementById('backburnerDoneCount').textContent = `(${backburnerDoneCount})`;
    }
    
    addNavigationDragHandlers(element, dropHandler) {
        element.addEventListener('dragover', this.handleWeekButtonDragOver.bind(this));
        element.addEventListener('drop', dropHandler);
        element.addEventListener('dragenter', this.handleWeekButtonDragEnter.bind(this));
        element.addEventListener('dragleave', this.handleWeekButtonDragLeave.bind(this));
    }
    
    serializeItems(container, sectionId = null) {
        return Array.from(container.children).map(item => ({
            id: item.id,
            itemId: item.dataset.itemId,
            text: this.getItemText(item),
            createdAt: item.dataset.createdAt || new Date().toISOString(),
            sectionId: sectionId || item.dataset.sectionId || null,
            deletedAt: item.dataset.deletedAt || null,
            dueDate: item.dataset.dueDate || null,
            panel: item.dataset.panel || 'todo',
            highPriority: item.dataset.highPriority === 'true',
            recurringTaskId: item.dataset.recurringTaskId || null
        }));
    }
    
    loadItemCounter() {
        const saved = this.safeGetItem('itemCounter');
        return saved ? parseInt(saved) : 1;
    }
    
    // Safe localStorage operations with error handling
    safeGetItem(key, defaultValue = null) {
        try {
            return localStorage.getItem(key) || defaultValue;
        } catch (error) {
            console.error(`Error getting localStorage item '${key}':`, error);
            this.showFeedback('Storage error: Unable to read data', 'error');
            return defaultValue;
        }
    }
    
    safeSetItem(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (error) {
            console.error(`Error setting localStorage item '${key}':`, error);
            this.showFeedback('Storage error: Unable to save data. Storage may be full.', 'error');
            return false;
        }
    }
    
    safeParseJSON(str, defaultValue = null) {
        try {
            return JSON.parse(str);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return defaultValue;
        }
    }

    saveItemCounter() {
        this.safeSetItem('itemCounter', this.itemCounter.toString());
    }
    
    getNextItemId() {
        const id = this.itemCounter++;
        this.saveItemCounter();
        return id;
    }
    
    switchPanel(panelName) {
        // Save the selected panel for future visits
        localStorage.setItem('lastSelectedPanel', panelName);
        
        // Hide all panels
        this.todoPanel.classList.add('hidden');
        this.backburnerPanel.classList.add('hidden');
        this.recurringPanel.classList.add('hidden');
        this.trashPanel.classList.add('hidden');
        this.notesPanel.classList.add('hidden');
        this.sketchPanel.classList.add('hidden');
        this.wikiPanel.classList.add('hidden');
        this.settingsPanel.classList.add('hidden');
        this.searchPanel.classList.add('hidden');
        this.centerSectionBackburner.classList.add('hidden');
        this.centerSectionRecurring.classList.add('hidden');
        
        // Hide center and right sections by default
        this.centerSection.classList.add('hidden');
        this.rightPanel.classList.add('hidden');
        
        // Remove active class from all nav buttons
        this.todoNavBtn.classList.remove('active');
        this.backburnerNavBtn.classList.remove('active');
        this.recurringNavBtn.classList.remove('active');
        this.trashNavBtn.classList.remove('active');
        this.notesNavBtn.classList.remove('active');
        this.sketchNavBtn.classList.remove('active');
        this.wikiNavBtn.classList.remove('active');
        this.settingsNavBtn.classList.remove('active');
        this.searchNavBtn.classList.remove('active');
        
        // Reset destination dropdowns when switching panels
        if (this.todoDestinationSelect) this.todoDestinationSelect.value = 'unsorted';
        if (this.backburnerDestinationSelect) this.backburnerDestinationSelect.value = 'unsorted';
        
        // Show selected panel and activate button
        switch(panelName) {
            case 'todo':
                this.todoPanel.classList.remove('hidden');
                this.centerSection.classList.remove('hidden');
                this.rightPanel.classList.remove('hidden');
                this.todoNavBtn.classList.add('active');
                // Refresh todos to ensure restored items appear
                this.loadTodosForDate();
                // Update due date styling when switching to todo panel
                this.updateAllItemsDueDateStyling();
                // Update calendar colors to reflect todo data
                this.updateCalendarColors();
                break;
            case 'backburner':
                this.backburnerPanel.classList.remove('hidden');
                this.centerSectionBackburner.classList.remove('hidden');
                this.centerSection.classList.add('hidden');
                this.rightPanel.classList.add('hidden');
                this.backburnerNavBtn.classList.add('active');
                this.loadBackburnerItems();
                break;
            case 'recurring':
                this.recurringPanel.classList.remove('hidden');
                this.centerSectionRecurring.classList.remove('hidden');
                this.centerSection.classList.add('hidden');
                this.rightPanel.classList.add('hidden');
                this.recurringNavBtn.classList.add('active');
                this.loadRecurringTasks();
                break;
            case 'trash':
                this.trashPanel.classList.remove('hidden');
                this.centerSection.classList.add('hidden');
                this.rightPanel.classList.add('hidden');
                this.trashNavBtn.classList.add('active');
                // Reorganize trash items by time when switching to trash view
                this.organizeTrashByTime();
                break;
            case 'notes':
                this.notesPanel.classList.remove('hidden');
                this.centerSection.classList.add('hidden');
                this.rightPanel.classList.add('hidden');
                this.notesNavBtn.classList.add('active');
                this.loadNotes();
                break;
            case 'sketch':
                this.sketchPanel.classList.remove('hidden');
                this.centerSection.classList.add('hidden');
                this.rightPanel.classList.add('hidden');
                this.sketchNavBtn.classList.add('active');
                // Delay canvas resize to ensure panel is visible
                setTimeout(() => this.resizeCanvas(), 50);
                break;
            case 'wiki':
                this.wikiPanel.classList.remove('hidden');
                this.wikiNavBtn.classList.add('active');
                this.loadWiki();
                break;
            case 'settings':
                this.settingsPanel.classList.remove('hidden');
                this.centerSection.classList.add('hidden');
                this.rightPanel.classList.add('hidden');
                this.settingsNavBtn.classList.add('active');
                this.loadSettings();
                break;
            case 'search':
                this.searchPanel.classList.remove('hidden');
                this.centerSection.classList.add('hidden');
                this.rightPanel.classList.add('hidden');
                this.searchNavBtn.classList.add('active');
                this.initializeSearch();
                // Always refresh search results when switching to search panel
                setTimeout(() => {
                    if (this.searchInput && this.searchInput.value.trim()) {
                        this.performSearch(this.searchInput.value);
                    }
                }, 50);
                break;
        }
    }
    
    loadSettings() {
        // Load settings from localStorage and set form values
        const autosaveEnabled = localStorage.getItem('autosaveEnabled');
        const autosaveIntervalValue = localStorage.getItem('autosaveInterval');
        const skipDaysSelection = localStorage.getItem('skipDaysSelection');
        const feedbackLevel = localStorage.getItem('feedbackLevel');
        const defaultDueDateSetting = localStorage.getItem('defaultDueDateSetting');
        const darkMode = localStorage.getItem('darkMode');
        const showWikiPanel = localStorage.getItem('showWikiPanel');
        const showNotesPanel = localStorage.getItem('showNotesPanel');
        const showSketchPanel = localStorage.getItem('showSketchPanel');
        
        // Set form values
        document.getElementById('autosaveEnabled').checked = autosaveEnabled === 'true';
        document.getElementById('autosaveInterval').value = autosaveIntervalValue || '60000';
        document.getElementById('skipDaysSelection').value = skipDaysSelection || 'both';
        document.getElementById('feedbackLevel').value = feedbackLevel || 'all';
        document.getElementById('defaultDueDateSetting').value = defaultDueDateSetting || 'none';
        this.showWikiPanel.checked = showWikiPanel !== 'false'; // Default to true
        this.showNotesPanel.checked = showNotesPanel !== 'false'; // Default to true
        this.showSketchPanel.checked = showSketchPanel !== 'false'; // Default to true
        // Dark mode toggle removed but dark mode functionality preserved
        // document.getElementById('darkModeToggle').checked = darkMode === 'true';
        
        // Apply dark mode if enabled
        this.applyDarkMode(darkMode === 'true');
        
        // Apply panel visibility
        this.applyPanelVisibility();
        
        // Add event listeners only once
        if (!this.settingsEventListenersAdded) {
            // Add event listeners for settings changes
            document.getElementById('autosaveEnabled').addEventListener('change', async (e) => {
                const isEnabled = e.target.checked;
                
                if (isEnabled) {
                    // Check if we have a file selected (check both Electron and browser modes)
                    let hasValidFile = false;
                    
                    if (this.isElectronMode()) {
                        // Check for Electron mode file path
                        const savedPath = this.autosaveFilePath || await window.electronAPI.getStoredFilePath();
                        if (savedPath) {
                            hasValidFile = true;
                            this.autosaveFilePath = savedPath;
                        }
                    } else {
                        // Check for browser mode file handle
                        const savedHandle = this.autosaveFileHandle || await this.getStoredFileHandle();
                        if (savedHandle) {
                            hasValidFile = true;
                            this.autosaveFileHandle = savedHandle;
                        }
                    }
                    
                    if (!hasValidFile) {
                        // Prompt user to select a file first
                        const shouldSelect = await this.showCustomConfirm(
                            'Autosave requires selecting a file location. Would you like to choose one now?',
                            'Select File',
                            'Cancel'
                        );
                        if (shouldSelect) {
                            try {
                                await this.selectAutosaveFile();
                                // File was selected successfully, proceed with enabling
                                localStorage.setItem('autosaveEnabled', isEnabled);
                                this.autosaveEnabled = isEnabled;
                                this.restartAutosaveInterval();
                                this.updateAutosaveStatus();
                            } catch (error) {
                                // User cancelled file selection, uncheck the checkbox
                                e.target.checked = false;
                                this.showFeedback('Autosave not enabled - no file selected', 'error');
                                return;
                            }
                        } else {
                            // User declined to select a file, uncheck the checkbox
                            e.target.checked = false;
                            this.showFeedback('Autosave not enabled - no file selected', 'error');
                            return;
                        }
                    } else {
                        // File is available, proceed normally
                        localStorage.setItem('autosaveEnabled', isEnabled);
                        this.autosaveEnabled = isEnabled;
                        this.restartAutosaveInterval();
                        this.updateAutosaveStatus();
                    }
                } else {
                    // Disabling autosave, proceed normally
                    localStorage.setItem('autosaveEnabled', isEnabled);
                    this.autosaveEnabled = isEnabled;
                    this.restartAutosaveInterval();
                    this.updateAutosaveStatus();
                }
            });
            
            document.getElementById('autosaveInterval').addEventListener('change', (e) => {
                localStorage.setItem('autosaveInterval', e.target.value);
                this.restartAutosaveInterval();
                this.updateAutosaveStatus();
            });
            
            document.getElementById('skipDaysSelection').addEventListener('change', (e) => {
                localStorage.setItem('skipDaysSelection', e.target.value);
            });
            
            document.getElementById('feedbackLevel').addEventListener('change', (e) => {
                localStorage.setItem('feedbackLevel', e.target.value);
            });
            
            document.getElementById('defaultDueDateSetting').addEventListener('change', (e) => {
                localStorage.setItem('defaultDueDateSetting', e.target.value);
                this.updateDefaultDueDateInputs(true); // Force update when setting changes
            });
            
            // Dark mode toggle removed but dark mode functionality preserved
            // document.getElementById('darkModeToggle').addEventListener('change', (e) => {
            //     const isDarkMode = e.target.checked;
            //     localStorage.setItem('darkMode', isDarkMode.toString());
            //     this.applyDarkMode(isDarkMode);
            // });
            
            // Add event listeners for buttons
            document.getElementById('exportAllDataBtn').addEventListener('click', () => {
                this.exportData();
            });
            
            document.getElementById('clearAllDataBtn').addEventListener('click', () => {
                this.clearAllDataWithConfirmation();
            });
            
            // Add event listeners for the moved buttons
            document.getElementById('importFileSettings').addEventListener('change', (e) => this.importData(e));
            document.getElementById('importCsvFileSettings').addEventListener('change', (e) => this.importCsvData(e));
            
            // Add click handlers to labels for Electron mode
            document.querySelector('label[for="importFileSettings"]').addEventListener('click', (e) => {
                if (this.isElectronMode()) {
                    e.preventDefault();
                    this.importDataElectron('json');
                }
            });
            
            document.querySelector('label[for="importCsvFileSettings"]').addEventListener('click', (e) => {
                if (this.isElectronMode()) {
                    e.preventDefault();
                    this.importDataElectron('csv');
                }
            });
            document.getElementById('showExampleBtnSettings').addEventListener('click', () => this.showExample());
            document.getElementById('deleteAllBtnSettings').addEventListener('click', () => this.deleteAllData());
            document.getElementById('clearVisibleBoardsBtnSettings').addEventListener('click', () => { this.clearVisibleBoards(); });
            
            // Add autosave button listeners
            document.getElementById('selectAutosaveFileBtn').addEventListener('click', () => this.selectAutosaveFile());
            document.getElementById('saveNowBtn').addEventListener('click', () => this.performAutosave(true));
            
            this.settingsEventListenersAdded = true;
        }
        
        // Load changelog content (can be done every time)
        this.loadChangelogContent();
        
        // Update statistics (can be done every time)
        this.updateStatistics();
        
        // Update autosave status (can be done every time)
        this.updateAutosaveStatus();
    }
    
    loadChangelogContent() {
        // Generate changelog content from appConfig
        if (window.appConfig && window.appConfig.changelog) {
            let content = '<br><div class="changelog-entries">';
            
            window.appConfig.changelog.forEach(entry => {
                content += `<p><strong>v${entry.version} - ${entry.date}</strong></p>`;
                content += '<ul>';
                entry.changes.forEach(change => {
                    content += `<li>${change}</li>`;
                });
                content += '</ul><br>';
            });
            
            content += '</div>';
            
            const changelogDisplay = document.getElementById('changelogDisplay');
            if (changelogDisplay) {
                changelogDisplay.innerHTML = content;
            }
        } else {
            // Fallback if config not available
            const changelogDisplay = document.getElementById('changelogDisplay');
            if (changelogDisplay) {
                changelogDisplay.innerHTML = '<br><div class="changelog-entries"><p>Changelog not available</p></div>';
            }
        }
    }
    
    updateStatistics() {
        // Always update advanced stats when visiting settings (removed daily caching)
        const shouldUpdateAdvancedStats = true;
        
        let newItemsCount = 0;
        let miscItemsCount = 0;
        let trashItemsCount = 0;
        let totalSections = 0;
        let todoItems = 0;
        let inProgressItems = 0;
        let doneItems = 0;
        
        // Advanced stats (calculated daily or loaded from cache)
        let advancedStats = {
            mostCompleted: 0,
            averageCompleted: 0,
            completionRate: 0,
            mostProductiveDay: '-',
            currentStreak: 0,
            activeDays: 0
        };
        
        try {
            // Get new items (global unsorted)
            const newItemsData = localStorage.getItem('globalUnsortedItems');
            if (newItemsData && newItemsData !== 'null') {
                const parsed = JSON.parse(newItemsData);
                newItemsCount = Array.isArray(parsed) ? parsed.length : 0;
            }
            
            // Get misc items (backburner unsorted items)
            const miscItemsData = localStorage.getItem('backburnerItems');
            if (miscItemsData && miscItemsData !== 'null') {
                const parsed = JSON.parse(miscItemsData);
                if (parsed && parsed.unsortedItems && Array.isArray(parsed.unsortedItems)) {
                    miscItemsCount = parsed.unsortedItems.length;
                } else if (Array.isArray(parsed)) {
                    miscItemsCount = parsed.length;
                }
                
                // Count items in backburner sections
                if (parsed && parsed.sections && typeof parsed.sections === 'object') {
                    totalSections += Object.keys(parsed.sections).length;
                    Object.values(parsed.sections).forEach(section => {
                        if (section && typeof section === 'object') {
                            if (Array.isArray(section.todo)) todoItems += section.todo.length;
                            if (Array.isArray(section.inProgress)) inProgressItems += section.inProgress.length;
                            if (Array.isArray(section.done)) doneItems += section.done.length;
                        }
                    });
                }
            }
            
            // Get trash items
            const trashItemsData = localStorage.getItem('dailyTodos_trash');
            if (trashItemsData && trashItemsData !== 'null') {
                const parsed = JSON.parse(trashItemsData);
                if (parsed && Array.isArray(parsed.items)) {
                    trashItemsCount = parsed.items.length;
                } else if (Array.isArray(parsed)) {
                    trashItemsCount = parsed.length;
                }
            }
        } catch (e) {
            console.warn('Error parsing global items:', e);
        }
        
        // Data for advanced statistics calculation
        const dailyStats = {};
        const dayOfWeekStats = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Count all daily todos and sections
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('dailyTodos_') && !key.endsWith('_notes') && !key.endsWith('_trash') && !key.endsWith('_whiteboard')) {
                try {
                    const dayData = JSON.parse(localStorage.getItem(key));
                    if (dayData && typeof dayData === 'object') {
                        let dayTodoItems = 0;
                        let dayInProgressItems = 0;
                        let dayDoneItems = 0;
                        
                        // Count main column items
                        if (Array.isArray(dayData.todo)) {
                            todoItems += dayData.todo.length;
                            dayTodoItems += dayData.todo.length;
                        }
                        if (Array.isArray(dayData.inProgress)) {
                            inProgressItems += dayData.inProgress.length;
                            dayInProgressItems += dayData.inProgress.length;
                        }
                        if (Array.isArray(dayData.done)) {
                            doneItems += dayData.done.length;
                            dayDoneItems += dayData.done.length;
                        }
                        
                        // Count sections and their items
                        if (dayData.sections && typeof dayData.sections === 'object') {
                            totalSections += Object.keys(dayData.sections).length;
                            Object.values(dayData.sections).forEach(section => {
                                if (section && typeof section === 'object') {
                                    if (Array.isArray(section.todo)) {
                                        todoItems += section.todo.length;
                                        dayTodoItems += section.todo.length;
                                    }
                                    if (Array.isArray(section.inProgress)) {
                                        inProgressItems += section.inProgress.length;
                                        dayInProgressItems += section.inProgress.length;
                                    }
                                    if (Array.isArray(section.done)) {
                                        doneItems += section.done.length;
                                        dayDoneItems += section.done.length;
                                    }
                                }
                            });
                        }
                        
                        // Store daily stats for advanced calculations
                        if (shouldUpdateAdvancedStats) {
                            const dateKey = key.replace('dailyTodos_', '');
                            const totalDayItems = dayTodoItems + dayInProgressItems + dayDoneItems;
                            if (totalDayItems > 0) {
                                // Parse date more safely - expect format YYYY-MM-DD
                                const dateObj = new Date(dateKey + 'T00:00:00');
                                if (!isNaN(dateObj.getTime())) {
                                    dailyStats[dateKey] = {
                                        completed: dayDoneItems,
                                        total: totalDayItems,
                                        date: dateObj
                                    };
                                    
                                    // Count by day of week
                                    const dayOfWeek = dateObj.getDay();
                                    dayOfWeekStats[dayOfWeek] += dayDoneItems;
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.warn(`Error parsing ${key}:`, e);
                }
            }
        }
        
        // Calculate advanced statistics (only once daily)
        if (shouldUpdateAdvancedStats) {
            const completedDays = Object.values(dailyStats);
            const totalCompletedItems = completedDays.reduce((sum, day) => sum + day.completed, 0);
            const totalTotalItems = completedDays.reduce((sum, day) => sum + day.total, 0);
            
            // Most items completed in a day
            advancedStats.mostCompleted = Math.max(0, ...completedDays.map(day => day.completed));
            
            // Average items completed per day
            advancedStats.averageCompleted = completedDays.length > 0 ? 
                Math.round((totalCompletedItems / completedDays.length) * 10) / 10 : 0;
            
            // Completion rate percentage
            advancedStats.completionRate = totalTotalItems > 0 ? 
                Math.round((totalCompletedItems / totalTotalItems) * 100) : 0;
            
            // Most productive day of week
            let maxProductiveDay = 0;
            let maxProductiveCount = 0;
            Object.entries(dayOfWeekStats).forEach(([day, count]) => {
                if (count > maxProductiveCount) {
                    maxProductiveCount = count;
                    maxProductiveDay = parseInt(day);
                }
            });
            advancedStats.mostProductiveDay = maxProductiveCount > 0 ? dayNames[maxProductiveDay] : '-';
            
            // Current streak (consecutive days with completed items)
            const completedDaysWithItems = completedDays.filter(day => day.completed > 0);
            const sortedCompletedDays = completedDaysWithItems
                .sort((a, b) => b.date - a.date);
                
            let currentStreak = 0;
            const todayDate = new Date();
            todayDate.setHours(0, 0, 0, 0);
            
            // Check if we have any completed days
            if (sortedCompletedDays.length > 0) {
                // Start from today and go backwards, checking for consecutive days with completions
                let checkDate = new Date(todayDate);
                
                for (let i = 0; i < 365; i++) { // Max check 365 days back
                    checkDate.setHours(0, 0, 0, 0);
                    
                    const dayFound = sortedCompletedDays.find(day => {
                        const dayDate = new Date(day.date);
                        dayDate.setHours(0, 0, 0, 0);
                        return dayDate.getTime() === checkDate.getTime();
                    });
                    
                    if (dayFound) {
                        currentStreak++;
                    } else {
                        // If we haven't found any streak yet and today has no completions, keep checking
                        if (currentStreak > 0) {
                            break;
                        }
                    }
                    
                    // Move to previous day
                    checkDate.setDate(checkDate.getDate() - 1);
                }
            }
            advancedStats.currentStreak = currentStreak;
            
            // Total active days (days with any completed items)
            advancedStats.activeDays = completedDays.filter(day => day.completed > 0).length;
        }
        
        // Ensure all values are numbers
        newItemsCount = parseInt(newItemsCount) || 0;
        miscItemsCount = parseInt(miscItemsCount) || 0;
        trashItemsCount = parseInt(trashItemsCount) || 0;
        totalSections = parseInt(totalSections) || 0;
        todoItems = parseInt(todoItems) || 0;
        inProgressItems = parseInt(inProgressItems) || 0;
        doneItems = parseInt(doneItems) || 0;
        
        const totalItems = newItemsCount + miscItemsCount + todoItems + inProgressItems + doneItems + trashItemsCount;
        
        // Update the basic stats display
        document.getElementById('statsNewItems').textContent = newItemsCount;
        document.getElementById('statsMiscItems').textContent = miscItemsCount;
        document.getElementById('statsTotalSections').textContent = totalSections;
        document.getElementById('statsTotalItems').textContent = totalItems;
        document.getElementById('statsTodoItems').textContent = todoItems;
        document.getElementById('statsInProgressItems').textContent = inProgressItems;
        document.getElementById('statsDoneItems').textContent = doneItems;
        document.getElementById('statsTrashItems').textContent = trashItemsCount;
        
        // Update the advanced stats display
        document.getElementById('statsCompletionRate').textContent = `${advancedStats.completionRate}%`;
        document.getElementById('statsMostCompleted').textContent = advancedStats.mostCompleted;
        document.getElementById('statsAverageCompleted').textContent = advancedStats.averageCompleted;
        document.getElementById('statsProductiveDay').textContent = advancedStats.mostProductiveDay;
        document.getElementById('statsCurrentStreak').textContent = advancedStats.currentStreak;
        document.getElementById('statsActiveDays').textContent = advancedStats.activeDays;
        
        // Secret easter egg stat (appears randomly)
        if (Math.random() < 0.05) { // 5% chance
            const easterEggStats = [
                `Times you've stared at this screen: ${Math.floor(Math.random() * 1000) + 100}`,
                `Productivity level: ${Math.floor(Math.random() * 100)}% (probably higher than you think)`,
                `Coffee required: ${Math.floor(Math.random() * 10) + 1} cups`,
                `Procrastination score: ${Math.floor(Math.random() * 100)}/100`,
                `Tasks you forgot to add: Approximately ${Math.floor(Math.random() * 20) + 5}`,
                `Secret hidden features found: ${localStorage.getItem('easterEggsFound') || 0}`,
                `Time until you reorganize this list: ${Math.floor(Math.random() * 30) + 1} minutes`
            ];
            
            const secretStat = easterEggStats[Math.floor(Math.random() * easterEggStats.length)];
            setTimeout(() => {
                this.showFeedback(`📊 Secret Stat: ${secretStat}`, 'success');
            }, 1000);
        }
    }
    
    async clearAllDataWithConfirmation() {
        const confirmed = await this.showCustomConfirm(
            'Are you sure you want to delete ALL data?\n\n' +
            'This will permanently remove:\n' +
            '• All todos and tasks\n' +
            '• All recurring tasks\n' +
            '• All notes\n' +
            '• All sketches\n' +
            '• All settings\n' +
            '• Autosave file location\n\n' +
            'This action cannot be undone!',
            'Delete All Data',
            'Keep Data'
        );
        
        if (confirmed) {
            const doubleConfirmed = await this.showCustomConfirm(
                'This is your final warning! Are you absolutely sure?',
                'Yes, Delete Everything',
                'No, Keep Data'
            );
            if (doubleConfirmed) {
                localStorage.clear();
                // Also clear autosave file handle from IndexedDB
                this.clearAutosaveFileHandle().then(() => {
                    location.reload(); // Reload the page to reset everything
                }).catch(() => {
                    location.reload(); // Reload even if IndexedDB clear fails
                });
            }
        }
    }
    
    saveNotes() {
        const notesContent = this.notesTextarea.value;
        if (notesContent.trim() === '') {
            // If user cleared all content, remove from storage so default shows on next load
            localStorage.removeItem('dailyTodos_notes');
        } else {
            localStorage.setItem('dailyTodos_notes', notesContent);
        }
    }
    
    loadNotes() {
        const savedNotes = localStorage.getItem('dailyTodos_notes');
        if (savedNotes && savedNotes.trim() !== '') {
            // Only use saved notes if they're not empty
            this.notesTextarea.value = savedNotes;
        } else {
            // Set default content for first-time users or when notes are empty
            this.notesTextarea.value = window.NotesContent.getDefaultContent();
        }

        this.notesTextarea.placeholder = window.NotesContent.getPlaceholderText();
    }
    
    // Wiki Methods
    loadWiki() {
        this.showBuiltInWiki();
    }
    
    showBuiltInWiki() {
        const builtInWikiContent = window.WikiContent.getContent();
        const htmlContent = window.MarkdownParser.parse(builtInWikiContent);
        this.wikiContent.innerHTML = `<div class="wiki-content-inner">${htmlContent}</div>`;
    }
    
    showExample() {
        // Create CSV content from the example file data
        const csvContent = window.ExampleData.getCsvContent();
        
        try {
            const lines = csvContent.split('\n').filter(line => line.trim());
            
            if (lines.length < 2) {
                throw new Error('CSV data is empty or invalid');
            }
            
            // Parse header
            const headers = this.parseCsvLine(lines[0]);
            
            // Parse data rows
            const items = [];
            for (let i = 1; i < lines.length; i++) {
                const values = this.parseCsvLine(lines[i]);
                if (values.length === 0) continue; // Skip empty rows
                
                const item = {};
                headers.forEach((header, index) => {
                    item[header] = values[index] || '';
                });
                
                // Apply backwards compatibility defaults
                const normalizedItem = this.normalizeCsvItem(item);
                
                // Validate required fields
                if (normalizedItem.text) {
                    items.push(normalizedItem);
                }
            }
            
            if (items.length > 0) {
                this.processCsvItems(items);
                
                // Also create 2 actual recurring task definitions
                // Create example recurring tasks
                const { standupExists, retroExists } = window.ExampleData.createExampleRecurringTasks();
                
                // Generate recurring items for the examples to show immediate examples
                if (!standupExists) {
                    const existingTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
                    const standupTask = existingTasks.find(task => task.text.includes("standup sync"));
                    if (standupTask) this.generateRecurringTaskInstances(standupTask);
                }
                if (!retroExists) {
                    const existingTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
                    const retroTask = existingTasks.find(task => task.text.includes("team retrospective"));
                    if (retroTask) this.generateRecurringTaskInstances(retroTask);
                }
                
                // Reload recurring tasks UI if we're on the recurring panel
                if (!this.recurringPanel.classList.contains('hidden')) {
                    this.loadRecurringTasks();
                }
                
                this.updateStatistics();
                this.showFeedback(`Successfully imported ${items.length} example items and 2 recurring tasks!`);
            } else {
                throw new Error('No valid items found in example data');
            }
            
        } catch (error) {
            alert('Error importing example data: ' + error.message);
        }
    }
    
    
    async clearVisibleBoards() {
        const shouldClear = await this.showCustomConfirm(
            'Clear all visible boards? This will remove all items from todos, backburner, recurring tasks, trash, notes, and sketches, but preserve your settings and preferences.',
            'Clear All Boards',
            'Keep Boards'
        );
        if (shouldClear) {
            // Clear ALL daily todos (including all date-based entries)
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith('dailyTodos_')) {
                    localStorage.removeItem(key);
                }
            });
            
            // Clear global unsorted items
            localStorage.removeItem('globalUnsortedItems');
            
            // Clear backburner items
            localStorage.removeItem('backburnerItems');
            
            // Note: trash, notes, and whiteboard are already cleared above since they start with 'dailyTodos_'
            
            // Clear all recurring tasks
            localStorage.removeItem('recurringTasks');
            
            // Don't clear:
            // - hasVisitedBefore (first visit flag)
            // - lastSelectedPanel (panel memory)
            // - itemCounter (item ID counter)
            
            // Reload current view
            this.loadTodosForDate();
            this.loadBackburnerItems();
            this.loadTrashItems();
            this.loadNotes();
            this.loadWhiteboard();
            this.loadRecurringTasks();
            this.updateCalendarColors();
            this.updateAllItemCounts();
            this.updateStatistics();
            
            this.showFeedback('All visible boards have been cleared!');
        }
    }
    
    
    // Whiteboard Methods
    initWhiteboard() {
        this.ctx = this.canvas.getContext('2d');
        this.setupCanvasEventListeners();
        this.setupToolbarEventListeners();
        this.resizeCanvas();
        this.loadWhiteboard();
        
        // Add resize listener
        window.addEventListener('resize', () => {
            if (!this.sketchPanel.classList.contains('hidden')) {
                this.resizeCanvas();
            }
        });
    }
    
    resizeCanvas() {
        const container = this.canvas.parentElement;
        const rect = container.getBoundingClientRect();
        
        // Save current canvas content
        const imageData = this.canvas.toDataURL();
        
        // Ensure minimum canvas size if container has no dimensions yet
        const width = rect.width > 0 ? rect.width : 800;
        const height = rect.height > 0 ? rect.height : 600;
        
        // Resize canvas
        this.canvas.width = width;
        this.canvas.height = height;
        
        // Restore canvas content
        if (imageData !== 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==') {
            const img = new Image();
            img.onload = () => {
                this.ctx.drawImage(img, 0, 0);
            };
            img.src = imageData;
        }
        
        // Set canvas styles
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
    }
    
    setupCanvasEventListeners() {
        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mouseout', this.stopDrawing.bind(this));
    }
    
    setupToolbarEventListeners() {
        // Tool selection
        this.penTool.addEventListener('click', () => this.selectTool('pen'));
        this.eraserTool.addEventListener('click', () => this.selectTool('eraser'));
        
        // Brush size
        this.brushSize.addEventListener('input', (e) => {
            this.currentSize = parseInt(e.target.value);
            this.sizeDisplay.textContent = `${this.currentSize}px`;
        });
        
        // Color selection
        this.colorBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.colorBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentColor = btn.dataset.color;
            });
        });
        
        // Canvas actions
        this.undoSketch.addEventListener('click', () => this.undoCanvas());
        this.redoSketch.addEventListener('click', () => this.redoCanvas());
        this.clearCanvas.addEventListener('click', () => { this.clearCanvasConfirm(); });
    }
    
    selectTool(tool) {
        this.currentTool = tool;
        
        // Update tool buttons
        this.penTool.classList.remove('active');
        this.eraserTool.classList.remove('active');
        
        if (tool === 'pen') {
            this.penTool.classList.add('active');
            this.canvas.classList.remove('eraser-cursor');
        } else if (tool === 'eraser') {
            this.eraserTool.classList.add('active');
            this.canvas.classList.add('eraser-cursor');
        }
    }
    
    startDrawing(e) {
        this.isDrawing = true;
        
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        
        // Save state for undo
        this.saveCanvasState();
    }
    
    draw(e) {
        if (!this.isDrawing) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.ctx.lineWidth = this.currentSize;
        
        if (this.currentTool === 'pen') {
            this.ctx.globalCompositeOperation = 'source-over';
            this.ctx.strokeStyle = this.currentColor;
        } else if (this.currentTool === 'eraser') {
            this.ctx.globalCompositeOperation = 'destination-out';
        }
        
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
    
    stopDrawing() {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.saveWhiteboard();
        }
    }
    
    saveCanvasState() {
        this.historyStep++;
        
        if (this.historyStep < this.canvasHistory.length) {
            this.canvasHistory.length = this.historyStep;
        }
        
        this.canvasHistory.push(this.canvas.toDataURL());
        
        // Limit history to 20 steps
        if (this.canvasHistory.length > 20) {
            this.canvasHistory.shift();
            this.historyStep--;
        }
    }
    
    undoCanvas() {
        if (this.historyStep > 0) {
            this.historyStep--;
            this.restoreCanvasState(this.canvasHistory[this.historyStep]);
        }
    }
    
    redoCanvas() {
        if (this.historyStep < this.canvasHistory.length - 1) {
            this.historyStep++;
            this.restoreCanvasState(this.canvasHistory[this.historyStep]);
        }
    }
    
    restoreCanvasState(dataURL) {
        const img = new Image();
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0);
            this.saveWhiteboard();
        };
        img.src = dataURL;
    }
    
    async clearCanvasConfirm() {
        const shouldClear = await this.showCustomConfirm(
            'Clear the entire canvas? This cannot be undone.',
            'Clear Canvas',
            'Keep Canvas'
        );
        if (shouldClear) {
            this.saveCanvasState();
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.saveWhiteboard();
        }
    }
    
    saveWhiteboard() {
        const imageData = this.canvas.toDataURL();
        localStorage.setItem('dailyTodos_whiteboard', imageData);
    }
    
    loadWhiteboard() {
        const savedWhiteboard = localStorage.getItem('dailyTodos_whiteboard');
        if (savedWhiteboard) {
            const img = new Image();
            img.onload = () => {
                this.ctx.drawImage(img, 0, 0);
                this.saveCanvasState(); // Initialize history
            };
            img.src = savedWhiteboard;
        } else {
            this.saveCanvasState(); // Initialize empty history
        }
    }
    
    getDateKey() {
        return this.currentDate.toISOString().split('T')[0];
    }
    
    saveDailyNotes() {
        const dateKey = this.getDateKey();
        const notesContent = this.dailyNotesTextarea.value;
        const storageKey = `dailyNotes_${dateKey}`;
        
        if (notesContent.trim() === '') {
            localStorage.removeItem(storageKey);
        } else {
            localStorage.setItem(storageKey, notesContent);
        }
    }
    
    loadDailyNotes() {
        const dateKey = this.getDateKey();
        const storageKey = `dailyNotes_${dateKey}`;
        const savedNotes = localStorage.getItem(storageKey);
        
        this.dailyNotesTextarea.value = savedNotes || '';
    }
    
    saveTodosForDate() {
        const dateKey = this.getDateKey();
        this.saveTodosForDateKey(dateKey);
    }
    
    addItemToDateStorage(dateKey, item, columnType, sectionId = null) {
        // Get existing todos for the date
        const existingData = localStorage.getItem(`dailyTodos_${dateKey}`);
        let todos = {
            todo: [],
            inProgress: [],
            done: [],
            sections: {}
        };
        
        if (existingData) {
            todos = JSON.parse(existingData);
            if (!todos.sections) todos.sections = {};
        }
        
        // Create item data
        const itemData = {
            id: item.id,
            itemId: item.dataset.itemId,
            text: this.getItemText(item),
            createdAt: item.dataset.createdAt,
            sectionId: sectionId,
            dueDate: item.dataset.dueDate || null,
            highPriority: item.dataset.highPriority === 'true',
            panel: 'todo'
        };
        
        if (sectionId) {
            // Add to section
            if (!todos.sections[sectionId]) {
                // Create section if it doesn't exist
                todos.sections[sectionId] = {
                    id: sectionId,
                    name: 'Moved Section',
                    panel: 'todo',
                    todo: [],
                    inProgress: [],
                    done: []
                };
            }
            
            if (columnType === 'inProgress') {
                todos.sections[sectionId].inProgress.push(itemData);
            } else if (columnType === 'done') {
                todos.sections[sectionId].done.push(itemData);
            } else {
                todos.sections[sectionId].todo.push(itemData);
            }
        } else {
            // Add to main columns or unsorted
            if (columnType === 'unsorted') {
                // For unsorted items, add to global unsorted items instead
                const savedUnsorted = localStorage.getItem('globalUnsortedItems');
                let unsortedItems = [];
                if (savedUnsorted) {
                    unsortedItems = JSON.parse(savedUnsorted);
                }
                unsortedItems.push(itemData);
                localStorage.setItem('globalUnsortedItems', JSON.stringify(unsortedItems));
                return;
            } else if (columnType === 'inProgress') {
                todos.inProgress.push(itemData);
            } else if (columnType === 'done') {
                todos.done.push(itemData);
            } else {
                todos.todo.push(itemData);
            }
        }
        
        localStorage.setItem(`dailyTodos_${dateKey}`, JSON.stringify(todos));
    }
    
    addItemToBackburnerStorage(item, columnType, sectionId = null) {
        // Get existing backburner data
        const existingData = localStorage.getItem('backburnerItems');
        let backburnerData = {
            unsortedItems: [],
            sections: {}
        };
        
        if (existingData) {
            backburnerData = JSON.parse(existingData);
            if (!backburnerData.sections) backburnerData.sections = {};
        }
        
        // Create item data
        const itemData = {
            id: item.id,
            itemId: item.dataset.itemId,
            text: this.getItemText(item),
            createdAt: item.dataset.createdAt,
            sectionId: sectionId,
            dueDate: item.dataset.dueDate || null,
            highPriority: item.dataset.highPriority === 'true',
            panel: 'backburner'
        };
        
        if (sectionId) {
            // Add to section
            if (!backburnerData.sections[sectionId]) {
                // Create section if it doesn't exist
                backburnerData.sections[sectionId] = {
                    id: sectionId,
                    name: 'Moved Section',
                    panel: 'backburner',
                    todo: [],
                    inProgress: [],
                    done: []
                };
            }
            
            if (columnType === 'inProgress') {
                backburnerData.sections[sectionId].inProgress.push(itemData);
            } else if (columnType === 'done') {
                backburnerData.sections[sectionId].done.push(itemData);
            } else {
                backburnerData.sections[sectionId].todo.push(itemData);
            }
        } else {
            // Add to misc items (unsorted backburner items)
            backburnerData.unsortedItems.push(itemData);
        }
        
        localStorage.setItem('backburnerItems', JSON.stringify(backburnerData));
    }
    
    saveTodosForDateKey(dateKey) {
        
        // Save global New Items (unsorted) separately
        this.saveGlobalUnsortedItems();
        
        // Collect sections and their items (only TODO sections)
        const sections = {};
        const sectionElements = document.querySelectorAll('.section-row[data-panel="todo"], .section-row:not([data-panel])');
        
        sectionElements.forEach(sectionElement => {
            const sectionId = sectionElement.dataset.sectionId;
            const sectionName = sectionElement.querySelector('.section-title').value;
            
            sections[sectionId] = {
                id: sectionId,
                name: sectionName,
                panel: sectionElement.dataset.panel || 'todo',
                todo: this.serializeItems(sectionElement.querySelector('.section-todo .items'), sectionId),
                inProgress: this.serializeItems(sectionElement.querySelector('.section-in-progress .items'), sectionId),
                done: this.serializeItems(sectionElement.querySelector('.section-done .items'), sectionId)
            };
        });
        
        const todos = {
            todo: this.serializeItems(this.todoItems),
            inProgress: this.serializeItems(this.inProgressItems),
            done: this.serializeItems(this.doneItems),
            sections: sections
        };
        localStorage.setItem(`dailyTodos_${dateKey}`, JSON.stringify(todos));
        
    }
    
    saveGlobalUnsortedItems() {
        const unsortedItems = this.serializeItems(this.unsortedItems);
        localStorage.setItem('globalUnsortedItems', JSON.stringify(unsortedItems));
    }
    
    saveBackburnerItems() {
        // Load existing backburner data to preserve what's not visible in the current panel
        const existingData = localStorage.getItem('backburnerItems');
        let backburnerData = {
            unsortedItems: [],
            sections: {}
        };
        
        if (existingData) {
            try {
                backburnerData = JSON.parse(existingData);
                if (!backburnerData.sections) backburnerData.sections = {};
                if (!backburnerData.unsortedItems) backburnerData.unsortedItems = [];
            } catch (e) {
                console.warn('Error parsing existing backburner data:', e);
                backburnerData = { unsortedItems: [], sections: {} };
            }
        }
        
        // Update unsorted items if the backburner panel is visible
        if (this.backburnerUnsortedItems) {
            backburnerData.unsortedItems = this.serializeItems(this.backburnerUnsortedItems);
        }
        
        // Update only currently visible backburner sections in the DOM
        // Preserve existing sections that aren't currently rendered in the DOM
        const sectionElements = document.querySelectorAll('[data-panel="backburner"]');
        
        sectionElements.forEach(section => {
            if (section.classList.contains('section-row')) {
                const sectionId = section.dataset.sectionId;
                const sectionName = section.querySelector('.section-title').value;
                
                // Update this specific section in the data
                backburnerData.sections[sectionId] = {
                    id: sectionId,
                    name: sectionName,
                    panel: section.dataset.panel || 'backburner',
                    todo: this.serializeItems(section.querySelector('.section-todo .items')),
                    inProgress: this.serializeItems(section.querySelector('.section-in-progress .items')),
                    done: this.serializeItems(section.querySelector('.section-done .items'))
                };
            }
        });
        
        localStorage.setItem('backburnerItems', JSON.stringify(backburnerData));
    }
    
    loadBackburnerItems() {
        // Clear existing backburner items
        this.backburnerUnsortedItems.innerHTML = '';
        const backburnerSectionsContainer = document.getElementById('backburnerSectionsContainer');
        backburnerSectionsContainer.innerHTML = '';
        
        // Load backburner data
        const savedBackburner = localStorage.getItem('backburnerItems');
        if (savedBackburner) {
            const backburnerData = JSON.parse(savedBackburner);
            
            // Load unsorted items (sorted by priority)
            if (backburnerData.unsortedItems) {
                const sortedBackburnerUnsorted = this.sortItemsByPriority([...backburnerData.unsortedItems]);
                sortedBackburnerUnsorted.forEach(todo => {
                    const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'backburner', todo.highPriority, todo.recurringTaskId);
                    this.backburnerUnsortedItems.appendChild(item);
                });
            }
            
            // Load sections
            if (backburnerData.sections) {
                const sectionCount = Object.values(backburnerData.sections).length;
                let sectionsProcessed = 0;
                
                Object.values(backburnerData.sections).forEach(section => {
                    this.createSection(section.name, section.id, section.panel || 'backburner');
                    
                    // Use setTimeout to ensure DOM element is available after creation
                    setTimeout(() => {
                        const sectionElement = document.querySelector(`[data-section-id="${section.id}"]`);
                        if (sectionElement) {
                            // Load items into sections (sorted by priority)
                            const sortedBackburnerSectionTodos = this.sortItemsByPriority([...section.todo]);
                            sortedBackburnerSectionTodos.forEach(todo => {
                                const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'backburner', todo.highPriority, todo.recurringTaskId);
                                const todoColumn = sectionElement.querySelector('.section-todo .items');
                                if (todoColumn) todoColumn.appendChild(item);
                            });
                            
                            const sortedBackburnerSectionInProgress = this.sortItemsByPriority([...section.inProgress]);
                            sortedBackburnerSectionInProgress.forEach(todo => {
                                const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'backburner', todo.highPriority, todo.recurringTaskId);
                                const inProgressColumn = sectionElement.querySelector('.section-in-progress .items');
                                if (inProgressColumn) inProgressColumn.appendChild(item);
                            });
                            
                            // Done items don't need priority sorting (they're all green/completed)
                            section.done.forEach(todo => {
                                const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'backburner', todo.highPriority, todo.recurringTaskId);
                                const doneColumn = sectionElement.querySelector('.section-done .items');
                                if (doneColumn) doneColumn.appendChild(item);
                            });
                        } else {
                            console.warn(`Section element not found for section ID: ${section.id}`);
                        }
                        
                        // Update counters after all sections are processed
                        sectionsProcessed++;
                        if (sectionsProcessed === sectionCount) {
                            this.updateBackburnerItemCounts();
                            // Update heights after all sections are loaded and rendered
                            setTimeout(() => {
                                this.updateUnsortedSectionHeights();
                            }, 50);
                        }
                    }, 0);
                });
            } else {
                // If no sections, update counters immediately for misc items
                this.updateBackburnerItemCounts();
                // Update heights for unsorted items only
                setTimeout(() => {
                    this.updateUnsortedSectionHeights();
                }, 50);
            }
        } else {
            // If no backburner data, just update heights
            setTimeout(() => {
                this.updateUnsortedSectionHeights();
            }, 50);
        }
        
        // Update item counts (without heights) immediately for responsive UI
        this.updateItemCountsOnly();
    }
    
    // Priority-based sorting function for todo items
    sortItemsByPriority(items) {
        return items.sort((a, b) => {
            // Get priority from the todo data
            const aPriority = this.getTodoPriorityValue(a);
            const bPriority = this.getTodoPriorityValue(b);
            
            // Sort by priority: lower number = higher priority (urgent=1, high=2, medium=3, normal=4)
            if (aPriority !== bPriority) {
                return aPriority - bPriority;
            }
            
            // If same priority, sort by creation date (newest first)
            return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        });
    }
    
    // Get numeric priority value for sorting
    getTodoPriorityValue(todo) {
        // High Priority (labeled as "Urgent" in UI) always comes first, regardless of due date
        if (todo.highPriority) return 1;     // High Priority/Urgent (highest priority)
        
        // Check due dates for red items (overdue and due today)
        if (todo.dueDate) {
            const dueDate = new Date(todo.dueDate);
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            
            // Normalize dates to compare just the date part (ignore time)
            const dueDateOnly = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
            const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const tomorrowOnly = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate());
            
            if (dueDateOnly.getTime() < todayOnly.getTime()) {
                return 2;  // Overdue (red) - after urgent
            } else if (dueDateOnly.getTime() === todayOnly.getTime()) {
                return 3;  // Due today (red) - after overdue
            } else if (dueDateOnly.getTime() === tomorrowOnly.getTime()) {
                return 4;  // Due tomorrow (yellow items) - after due today
            }
        }
        
        // Note: We can add medium priority support in the future
        // if (todo.mediumPriority) return 4;  // Yellow (medium priority)  
        return 5;  // White (normal priority, lowest)
    }
    
    // Insert item in priority order
    insertItemByPriority(container, newItem, todoData) {
        const existingItems = Array.from(container.children);
        const newPriority = this.getTodoPriorityValue(todoData);
        
        // Find the insertion point
        let insertIndex = existingItems.length;
        for (let i = 0; i < existingItems.length; i++) {
            const existingTodo = this.getTodoDataFromItem(existingItems[i]);
            const existingPriority = this.getTodoPriorityValue(existingTodo);
            
            if (newPriority < existingPriority) {
                insertIndex = i;
                break;
            } else if (newPriority === existingPriority) {
                // Same priority, sort by creation date (newer first)
                const newDate = new Date(todoData.createdAt || 0);
                const existingDate = new Date(existingTodo.createdAt || 0);
                if (newDate > existingDate) {
                    insertIndex = i;
                    break;
                }
            }
        }
        
        if (insertIndex >= existingItems.length) {
            container.appendChild(newItem);
        } else {
            container.insertBefore(newItem, existingItems[insertIndex]);
        }
    }
    
    // Extract todo data from DOM item (for priority comparison)
    getTodoDataFromItem(itemElement) {
        return {
            highPriority: itemElement.classList.contains('high-priority') || itemElement.dataset.highPriority === 'true',
            dueDate: itemElement.dataset.dueDate,
            createdAt: itemElement.dataset.createdAt
        };
    }
    
    loadTodosForDate() {
        this.clearAllItems();
        
        // Always load global unsorted items first
        this.loadGlobalUnsortedItems();
        
        const dateKey = this.getDateKey();
        const savedTodos = localStorage.getItem(`dailyTodos_${dateKey}`);
        
        if (savedTodos) {
            const todos = JSON.parse(savedTodos);
            
            // Load sections first
            if (todos.sections) {
                Object.values(todos.sections).forEach(section => {
                    this.createSection(section.name, section.id, section.panel || 'todo');
                    
                    // Load items into sections (sorted by priority)
                    const sortedSectionTodos = this.sortItemsByPriority([...section.todo]);
                    sortedSectionTodos.forEach(todo => {
                        const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'todo', todo.highPriority, todo.recurringTaskId);
                        const sectionElement = document.querySelector(`[data-section-id="${section.id}"]`);
                        sectionElement.querySelector('.section-todo .items').appendChild(item);
                    });
                    
                    const sortedSectionInProgress = this.sortItemsByPriority([...section.inProgress]);
                    sortedSectionInProgress.forEach(todo => {
                        const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'todo', todo.highPriority, todo.recurringTaskId);
                        const sectionElement = document.querySelector(`[data-section-id="${section.id}"]`);
                        sectionElement.querySelector('.section-in-progress .items').appendChild(item);
                    });
                    
                    // Done items don't need priority sorting (they're all green/completed)
                    section.done.forEach(todo => {
                        const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'todo', todo.highPriority, todo.recurringTaskId);
                        const sectionElement = document.querySelector(`[data-section-id="${section.id}"]`);
                        sectionElement.querySelector('.section-done .items').appendChild(item);
                    });
                });
            }
            
            // Handle backward compatibility: if old data has unsorted items, migrate them to global
            if (todos.unsorted) {
                // Get existing global unsorted items
                const savedUnsorted = localStorage.getItem('globalUnsortedItems');
                const existingGlobalItems = savedUnsorted ? JSON.parse(savedUnsorted) : [];
                
                // Add old unsorted items to global storage (avoid duplicates)
                todos.unsorted.forEach(todo => {
                    const exists = existingGlobalItems.some(existing => existing.id === todo.id);
                    if (!exists) {
                        existingGlobalItems.push(todo);
                    }
                });
                
                // Save updated global items and remove from daily storage
                localStorage.setItem('globalUnsortedItems', JSON.stringify(existingGlobalItems));
                delete todos.unsorted;
                localStorage.setItem(`dailyTodos_${dateKey}`, JSON.stringify(todos));
            }
            
            // Load main column items (only those not in sections) - sorted by priority
            const mainTodos = (todos.todo || []).filter(todo => !todo.sectionId);
            const sortedMainTodos = this.sortItemsByPriority(mainTodos);
            sortedMainTodos.forEach(todo => {
                const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'todo', todo.highPriority, todo.recurringTaskId);
                this.todoItems.appendChild(item);
            });
            
            const mainInProgress = (todos.inProgress || []).filter(todo => !todo.sectionId);
            const sortedMainInProgress = this.sortItemsByPriority(mainInProgress);
            sortedMainInProgress.forEach(todo => {
                const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'todo', todo.highPriority, todo.recurringTaskId);
                this.inProgressItems.appendChild(item);
            });
            
            // Done items don't need priority sorting (they're all green/completed)
            const mainDone = (todos.done || []).filter(todo => !todo.sectionId);
            mainDone.forEach(todo => {
                const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'todo', todo.highPriority, todo.recurringTaskId);
                this.doneItems.appendChild(item);
            });
        }
        
        // Update due date styling for all loaded items
        this.updateAllItemsDueDateStyling();
        this.updateAllItemCounts();
        
        // Load daily notes for this date
        this.loadDailyNotes();
        
        // Update destination dropdowns
        this.populateDestinationDropdowns();
    }
    
    loadGlobalUnsortedItems() {
        const savedUnsorted = localStorage.getItem('globalUnsortedItems');
        if (savedUnsorted) {
            const unsortedItems = JSON.parse(savedUnsorted);
            // Sort unsorted items by priority
            const sortedUnsortedItems = this.sortItemsByPriority(unsortedItems);
            sortedUnsortedItems.forEach(todo => {
                const item = this.createTodoItem(todo.text, todo.id, todo.createdAt, todo.sectionId, todo.itemId, todo.dueDate, todo.panel || 'todo', todo.highPriority, todo.recurringTaskId);
                this.unsortedItems.appendChild(item);
            });
        }
    }
    
    populateDestinationDropdowns() {
        this.populateTodoDestinations();
        this.populateBackburnerDestinations();
    }
    
    populateTodoDestinations() {
        const dropdown = this.todoDestinationSelect;
        if (!dropdown) return;
        
        // Store current selection
        const currentValue = dropdown.value;
        
        // Clear existing options except the first two (New Items and Today's Todo)
        while (dropdown.children.length > 2) {
            dropdown.removeChild(dropdown.lastChild);
        }
        
        // Add section options (only To Do columns)
        const todaySections = document.querySelectorAll('.section-row[data-panel="todo"], .section-row:not([data-panel])');
        todaySections.forEach(section => {
            const sectionId = section.dataset.sectionId;
            const titleElement = section.querySelector('.section-title');
            if (titleElement && sectionId) {
                const sectionName = titleElement.value || 'Unnamed Section';
                
                // Add only the To Do column option
                const todoOption = document.createElement('option');
                todoOption.value = `section-${sectionId}-todo`;
                todoOption.textContent = `${sectionName}`;
                dropdown.appendChild(todoOption);
            }
        });
        
        // Restore previous selection if it still exists, otherwise reset to default
        if (currentValue && [...dropdown.options].some(option => option.value === currentValue)) {
            dropdown.value = currentValue;
        } else if (currentValue && currentValue !== 'unsorted') {
            // If the previously selected section no longer exists, reset to 'New Items'
            dropdown.value = 'unsorted';
        }
    }
    
    populateBackburnerDestinations() {
        const dropdown = this.backburnerDestinationSelect;
        if (!dropdown) return;
        
        // Store current selection
        const currentValue = dropdown.value;
        
        // Clear existing options except the first one
        while (dropdown.children.length > 1) {
            dropdown.removeChild(dropdown.lastChild);
        }
        
        // Add section options (only To Do columns)
        const backburnerSections = document.querySelectorAll('.section-row[data-panel="backburner"]');
        backburnerSections.forEach(section => {
            const sectionId = section.dataset.sectionId;
            const titleElement = section.querySelector('.section-title');
            if (titleElement && sectionId) {
                const sectionName = titleElement.value || 'Unnamed Section';
                
                // Add only the To Do column option
                const todoOption = document.createElement('option');
                todoOption.value = `section-${sectionId}-todo`;
                todoOption.textContent = `${sectionName}`;
                dropdown.appendChild(todoOption);
            }
        });
        
        // Restore previous selection if it still exists, otherwise reset to default
        if (currentValue && [...dropdown.options].some(option => option.value === currentValue)) {
            dropdown.value = currentValue;
        } else if (currentValue && currentValue !== 'unsorted') {
            // If the previously selected section no longer exists, reset to 'Do these later'
            dropdown.value = 'unsorted';
        }
    }
    
    clearAllItems() {
        // Clear all items including unsorted items (they will be reloaded)
        this.unsortedItems.innerHTML = '';
        this.todoItems.innerHTML = '';
        this.inProgressItems.innerHTML = '';
        this.doneItems.innerHTML = '';
        
        // Clear sections
        const sectionRows = document.querySelectorAll('.section-row');
        sectionRows.forEach(row => row.remove());
    }
    
    navigateToDate(targetDate) {
        this.saveTodosForDate();
        this.currentDate = new Date(targetDate);
        this.updateDateDisplay();
        this.updateInfoSection();
        this.renderWeekView();
        this.loadTodosForDate();
        this.syncCalendarToCurrentDate();
        this.updateCalendarColors();
        this.updateDefaultDueDateInputs();
    }
    
    changeDay(direction) {
        const newDate = new Date(this.currentDate);
        newDate.setDate(newDate.getDate() + direction);
        this.navigateToDate(newDate);
    }
    
    goToToday() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        this.navigateToDate(today);
    }
    
    goToNextWeek() {
        const newDate = new Date(this.currentDate);
        newDate.setDate(newDate.getDate() + 7);
        this.navigateToDate(newDate);
    }
    
    goToLastWeek() {
        const newDate = new Date(this.currentDate);
        newDate.setDate(newDate.getDate() - 7);
        this.navigateToDate(newDate);
    }
    
    updateDateDisplay() {
        const dateOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        const weekdayOptions = { 
            weekday: 'long' 
        };
        
        // Format main date (e.g., "August 7, 2025")
        this.currentDateElement.textContent = this.currentDate.toLocaleDateString('en-US', dateOptions);
        
        // Format weekday and week info (e.g., "Monday of Week 32")
        const weekday = this.currentDate.toLocaleDateString('en-US', weekdayOptions);
        const weekNumber = this.getWeekNumber(this.currentDate);
        const weekDayInfoElement = document.getElementById('weekDayInfo');
        if (weekDayInfoElement) {
            weekDayInfoElement.textContent = `${weekday} of Week ${weekNumber}`;
        }
    }
    
    updateInfoSection() {
        this.updateRelativeDateInfo();
    }
    
    getWeekNumber(date) {
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - startOfYear) / 86400000;
        
        // Get the day of the week for January 1st (0 = Sunday, 1 = Monday, etc.)
        const startDay = startOfYear.getDay();
        
        // Calculate the week number
        const weekNumber = Math.ceil((pastDaysOfYear + startDay + 1) / 7);
        
        return Math.min(weekNumber, 52);
    }
    
    updateRelativeDateInfo() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (this.currentDate.getTime() === today.getTime()) {
            this.relativeDateInfoElement.textContent = 'Today';
            return;
        }
        
        const diffTime = this.currentDate.getTime() - today.getTime();
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
        const diffWeeks = Math.floor(Math.abs(diffDays) / 7);
        const remainingDays = Math.abs(diffDays) % 7;
        
        let relativeText = '';
        
        if (Math.abs(diffDays) === 1) {
            relativeText = diffDays > 0 ? '1 day after today' : '1 day before today';
        } else if (Math.abs(diffDays) < 7) {
            relativeText = diffDays > 0 ? `${diffDays} days after today` : `${Math.abs(diffDays)} days before today`;
        } else {
            // Format weeks with days
            let weekText = diffWeeks === 1 ? '1 week' : `${diffWeeks} weeks`;
            if (remainingDays > 0) {
                let dayText = remainingDays === 1 ? '1 day' : `${remainingDays} days`;
                weekText += `, ${dayText}`;
            }
            relativeText = diffDays > 0 ? `${weekText} after today` : `${weekText} before today`;
        }
        
        this.relativeDateInfoElement.textContent = relativeText;
    }
    
    renderWeekView() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Get start of week (Sunday)
        const weekStart = new Date(this.currentDate);
        const dayOfWeek = weekStart.getDay();
        weekStart.setDate(weekStart.getDate() - dayOfWeek);
        
        this.weekButtons.innerHTML = '';
        
        const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            
            const button = document.createElement('button');
            button.className = 'week-day-btn';
            
            // Add classes for styling
            if (date.getTime() === this.currentDate.getTime()) {
                button.classList.add('current');
            }
            if (date.getTime() === today.getTime()) {
                button.classList.add('today');
            }
            // Add weekend class for Sunday (0) and Saturday (6)
            if (i === 0 || i === 6) {
                button.classList.add('weekend');
            }
            
            button.innerHTML = `
                <div class="week-day-name">${dayNames[i]}</div>
                <div class="week-day-date">${date.getDate()}</div>
                <div class="week-day-month">${monthNames[date.getMonth()]}</div>
            `;
            
            // Add click handler
            button.addEventListener('click', () => {
                this.saveTodosForDate();
                this.currentDate = new Date(date);
                this.updateDateDisplay();
                this.updateInfoSection();
                this.renderWeekView();
                this.loadTodosForDate();
                this.syncCalendarToCurrentDate();
                this.updateCalendarColors();
                this.updateDefaultDueDateInputs();
            });
            
            // Add drag and drop handlers
            button.addEventListener('dragover', this.handleWeekButtonDragOver.bind(this));
            button.addEventListener('drop', (e) => this.handleWeekButtonDrop.bind(this)(e, date));
            button.addEventListener('dragenter', this.handleWeekButtonDragEnter.bind(this));
            button.addEventListener('dragleave', this.handleWeekButtonDragLeave.bind(this));
            
            this.weekButtons.appendChild(button);
        }
    }
    
    // Auto-scroll while dragging functionality
    startAutoScroll(e) {
        if (this.autoScrollInterval) return;
        
        const scrollThreshold = 80; // Distance from edge to start scrolling
        const scrollSpeed = 10; // Pixels to scroll per interval
        
        // Store current mouse position for the interval
        this.currentMouseY = e.clientY;
        this.currentMouseX = e.clientX;
        
        this.autoScrollInterval = setInterval(() => {
            const scrollableContainers = document.querySelectorAll('.items, body');
            let scrolled = false;
            
            // Handle scrollable containers
            scrollableContainers.forEach(container => {
                if (container === document.body) return; // Handle body separately
                
                const rect = container.getBoundingClientRect();
                const mouseY = this.currentMouseY;
                
                // Only scroll if mouse is within container bounds horizontally
                if (rect.left <= this.currentMouseX && this.currentMouseX <= rect.right) {
                    // Check if mouse is near top or bottom of container
                    if (mouseY < rect.top + scrollThreshold && container.scrollTop > 0) {
                        // Scroll up
                        container.scrollTop -= scrollSpeed;
                        scrolled = true;
                    } else if (mouseY > rect.bottom - scrollThreshold && 
                              container.scrollTop < container.scrollHeight - container.clientHeight) {
                        // Scroll down
                        container.scrollTop += scrollSpeed;
                        scrolled = true;
                    }
                }
            });
            
            // Handle window scrolling if no container scrolled
            if (!scrolled) {
                const windowHeight = window.innerHeight;
                if (this.currentMouseY < scrollThreshold && window.pageYOffset > 0) {
                    window.scrollBy(0, -scrollSpeed);
                } else if (this.currentMouseY > windowHeight - scrollThreshold) {
                    window.scrollBy(0, scrollSpeed);
                }
            }
        }, 16); // ~60fps
    }
    
    stopAutoScroll() {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
            this.autoScrollInterval = null;
        }
    }
    
    addTodo() {
        const text = this.todoInput.value.trim();
        if (text === '') return;
        
        const dueDate = this.dueDateInput.value || this.getDefaultDueDate();
        const isHighPriority = this.highPriorityInput.checked;
        const destination = this.todoDestinationSelect.value;
        
        this.captureStateForUndo('add', `Add "${text}"`);
        
        // Handle destination selection
        if (destination.startsWith('section-')) {
            // Parse section destination: "section-{sectionId}-{column}"
            // Since sectionId can contain hyphens (e.g., "section-0"), we need to be more careful
            const match = destination.match(/^section-(.+)-todo$/);
            if (!match) {
                console.log(`ERROR: Could not parse destination: ${destination}`);
                return;
            }
            const sectionId = match[1];
            const column = 'todo';
            
            const todoItem = this.createTodoItem(text, null, null, sectionId, null, dueDate, 'todo', isHighPriority, null);
            const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
            
            if (sectionElement) {
                const targetColumn = sectionElement.querySelector('.section-todo .items');
                if (targetColumn) {
                    const todoData = {
                        urgent: false,
                        highPriority: isHighPriority,
                        dueDate: dueDate,
                        createdAt: new Date().toISOString()
                    };
                    this.insertItemByPriority(targetColumn, todoItem, todoData);
                }
            }
        } else if (destination === 'today-todo') {
            // Add to main todo column
            const todoItem = this.createTodoItem(text, null, null, null, null, dueDate, 'todo', isHighPriority, null);
            const todoData = {
                urgent: false,
                highPriority: isHighPriority,
                dueDate: dueDate,
                createdAt: new Date().toISOString()
            };
            this.insertItemByPriority(this.todoItems, todoItem, todoData);
        } else {
            // Default to unsorted items
            const todoItem = this.createTodoItem(text, null, null, null, null, dueDate, 'todo', isHighPriority, null);
            const todoData = {
                urgent: false,
                highPriority: isHighPriority,
                dueDate: dueDate,
                createdAt: new Date().toISOString()
            };
            this.insertItemByPriority(this.unsortedItems, todoItem, todoData);
        }
        
        this.todoInput.value = '';
        this.dueDateInput.value = '';
        this.highPriorityInput.checked = false;
        // Don't reset dropdown - let it persist
        
        // Set default due date for next item
        this.updateDefaultDueDateInputs();
        
        // Reset cursor to first line
        this.todoInput.focus();
        this.todoInput.setSelectionRange(0, 0);
        
        this.saveTodosForDate();
        this.updateCalendarColors();
        this.updateAllItemCounts();
        // Ensure sections are properly updated after adding items
        this.populateDestinationDropdowns();
    }
    
    addBackburnerItem() {
        const text = this.backburnerInput.value.trim();
        if (text === '') return;
        
        const dueDate = this.backburnerDueDateInput.value || this.getDefaultDueDate();
        const isHighPriority = this.backburnerHighPriorityInput.checked;
        const destination = this.backburnerDestinationSelect.value;
        
        this.captureStateForUndo('add', `Add backburner "${text}"`);
        
        // Handle destination selection
        if (destination.startsWith('section-')) {
            // Parse section destination: "section-{sectionId}-{column}"
            // Since sectionId can contain hyphens (e.g., "section-0"), we need to be more careful
            const match = destination.match(/^section-(.+)-todo$/);
            if (!match) {
                console.log(`ERROR: Could not parse backburner destination: ${destination}`);
                return;
            }
            const sectionId = match[1];
            const column = 'todo';
            
            const backburnerItem = this.createTodoItem(text, null, null, sectionId, null, dueDate, 'backburner', isHighPriority, null);
            const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
            
            if (sectionElement) {
                const targetColumn = sectionElement.querySelector('.section-todo .items');
                if (targetColumn) {
                    const todoData = {
                        urgent: false,
                        highPriority: isHighPriority,
                        dueDate: dueDate,
                        createdAt: new Date().toISOString()
                    };
                    this.insertItemByPriority(targetColumn, backburnerItem, todoData);
                }
            }
        } else {
            // Default to unsorted backburner items
            const backburnerItem = this.createTodoItem(text, null, null, null, null, dueDate, 'backburner', isHighPriority, null);
            const todoData = {
                urgent: false,
                highPriority: isHighPriority,
                dueDate: dueDate,
                createdAt: new Date().toISOString()
            };
            this.insertItemByPriority(this.backburnerUnsortedItems, backburnerItem, todoData);
        }
        
        this.backburnerInput.value = '';
        this.backburnerDueDateInput.value = '';
        this.backburnerHighPriorityInput.checked = false;
        // Don't reset dropdown - let it persist
        
        // Set default due date for next item
        this.updateDefaultDueDateInputs();
        
        // Reset cursor to first line
        this.backburnerInput.focus();
        this.backburnerInput.setSelectionRange(0, 0);
        
        this.saveBackburnerItems();
        this.updateAllItemCounts();
        // Ensure sections are properly updated after adding items
        this.populateDestinationDropdowns();
    }
    
    createTodoItem(text, id = null, createdAt = null, sectionId = null, itemId = null, dueDate = null, panel = 'todo', isHighPriority = false, recurringTaskId = null) {
        const item = document.createElement('div');
        item.className = 'todo-item';
        item.draggable = true;
        item.id = id || `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Set incremental item ID
        item.dataset.itemId = itemId || this.getNextItemId();
        
        // Set creation timestamp
        const timestamp = createdAt || new Date().toISOString();
        item.dataset.createdAt = timestamp;
        
        // Set panel (todo or backburner)
        item.dataset.panel = panel;
        
        // Set section ID if provided
        if (sectionId) {
            item.dataset.sectionId = sectionId;
        }
        
        // Set due date if provided
        if (dueDate) {
            item.dataset.dueDate = dueDate;
        }
        
        // Set high priority if provided
        if (isHighPriority) {
            item.dataset.highPriority = 'true';
            item.classList.add('high-priority');
        }
        
        // Set recurring task ID if provided
        if (recurringTaskId) {
            item.dataset.recurringTaskId = recurringTaskId;
            item.classList.add('recurring-task');
        }
        
        const uniqueTooltipId = `tooltip-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const panelActions = panel === 'todo' 
            ? '<button class="backburner-btn" title="Move to backburner">🔥</button>'
            : '<button class="todo-btn" title="Move to TODO today">📋</button>';
        
        const itemActionsHTML = panel === 'backburner' ? `
                <button class="edit-btn" title="Edit task">✏️</button>
                <button class="create-section-btn" title="Create section">📁</button>
                <button class="copy-new-btn" title="Copy to new items">📥</button>
                <span></span>
                ${panelActions}
                <button class="delete-btn" title="Delete">×</button>
        ` : `
                <button class="edit-btn" title="Edit task">✏️</button>
                ${(panel === 'todo' || (panel !== 'backburner' && panel !== 'trash')) ? '<button class="move-btn" title="Move to next business day">➡️</button>' : ''}
                <button class="create-section-btn" title="Create section">📁</button>
                <button class="copy-new-btn" title="Copy to new items">📥</button>
                ${panelActions}
                <button class="delete-btn" title="Delete">×</button>
        `;

        const recurringIndicator = recurringTaskId ? 
            `<div class="recurring-indicator-wrapper"><span class="recurring-indicator" title="${recurringTaskId}"></span></div>` : '';
        
        // Store original text for serialization
        item.dataset.originalText = text;
        
        item.innerHTML = `
            <div class="todo-text">${this.linkifyText(text)}</div>
            ${recurringIndicator}
            <div class="item-actions">
                ${itemActionsHTML}
            </div>
            <div class="tooltip" id="${uniqueTooltipId}"></div>
        `;
        
        item.querySelector('.delete-btn').addEventListener('click', () => {
            this.moveItemToTrash(item);
        });
        
        item.querySelector('.edit-btn').addEventListener('click', () => {
            this.editItem(item);
        });
        
        
        item.querySelector('.copy-new-btn').addEventListener('click', () => {
            this.copyItemToNewItems(item);
        });
        
        // Only add move button listener if the button exists (todo panel only)
        const moveBtn = item.querySelector('.move-btn');
        if (moveBtn) {
            moveBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.moveItemToNextDay(item);
            });
        }
        
        item.querySelector('.create-section-btn').addEventListener('click', () => {
            this.createSectionFromItem(item);
        });
        
        // Add panel-specific button listeners
        const backburnerBtn = item.querySelector('.backburner-btn');
        const todoBtn = item.querySelector('.todo-btn');
        
        if (backburnerBtn) {
            backburnerBtn.addEventListener('click', () => {
                this.moveItemToBackburner(item);
            });
        }
        
        if (todoBtn) {
            todoBtn.addEventListener('click', () => {
                this.moveItemToTodo(item);
            });
        }
        
        item.addEventListener('dragstart', this.handleDragStart.bind(this));
        item.addEventListener('dragend', this.handleDragEnd.bind(this));
        item.addEventListener('dragover', this.handleDragOver.bind(this));
        item.addEventListener('drop', this.handleDrop.bind(this));
        
        // Prevent drag when starting from text area to allow text selection
        const textElement = item.querySelector('.todo-text');
        textElement.addEventListener('mousedown', (e) => {
            // Temporarily disable draggable during text selection
            item.draggable = false;
            setTimeout(() => {
                item.draggable = true;
            }, 100);
        });
        
        // Add hover functionality for tooltip
        item.addEventListener('mouseenter', (e) => this.showTooltip(e, item));
        item.addEventListener('mouseleave', () => this.hideTooltip(item));
        
        
        // Apply due date styling
        this.applyDueDateStyling(item);
        
        return item;
    }
    
    applyDueDateStyling(item) {
        const dueDate = item.dataset.dueDate;
        
        // Remove existing due date classes (but preserve high-priority)
        item.classList.remove('due-today', 'due-tomorrow', 'overdue', 'item-done');
        
        // Check if item is in done column
        const parent = item.parentElement;
        const isDoneColumn = parent && (
            parent.id === 'doneItems' || 
            parent.closest('.section-done')
        );
        
        if (isDoneColumn) {
            // Apply green styling to done items
            item.classList.add('item-done');
        } else if (dueDate) {
            // Apply due date styling only to non-done items
            // Use local timezone for accurate date comparison
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            
            // Parse the due date string (YYYY-MM-DD) in local timezone
            const [year, month, day] = dueDate.split('-').map(Number);
            const dueDateObj = new Date(year, month - 1, day);
            
            if (dueDateObj.getTime() === today.getTime()) {
                item.classList.add('due-today'); // Red
            } else if (dueDateObj.getTime() === tomorrow.getTime()) {
                item.classList.add('due-tomorrow'); // Yellow
            } else if (dueDateObj < today) {
                item.classList.add('overdue'); // Red
            }
        }
    }
    
    updateAllItemsDueDateStyling() {
        // Update all todo items in all columns and sections
        const allTodoItems = document.querySelectorAll('.todo-item:not(.trash-item)');
        allTodoItems.forEach(item => {
            this.applyDueDateStyling(item);
        });
    }
    
    initializeCalendar() {
        this.calendarDate = new Date(this.currentDate);
        this.renderCalendar();
    }
    
    changeMonth(direction) {
        this.calendarDate.setMonth(this.calendarDate.getMonth() + direction);
        this.renderCalendar();
    }
    
    syncCalendarToCurrentDate() {
        // Update calendar to show the month containing the current date
        this.calendarDate = new Date(this.currentDate);
        this.renderCalendar();
    }
    
    renderCalendar() {
        const year = this.calendarDate.getFullYear();
        const month = this.calendarDate.getMonth();
        
        this.monthYearElement.textContent = new Date(year, month).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
        
        this.calendarGrid.innerHTML = '';
        
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-header';
            header.textContent = day;
            this.calendarGrid.appendChild(header);
        });
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        for (let i = 0; i < 42; i++) {
            const cellDate = new Date(startDate);
            cellDate.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = cellDate.getDate();
            
            if (cellDate.getMonth() !== month) {
                dayElement.classList.add('other-month');
            }
            
            if (cellDate.getTime() === today.getTime()) {
                dayElement.classList.add('today');
            }
            
            if (cellDate.getTime() === this.currentDate.getTime()) {
                dayElement.classList.add('selected');
            }
            
            // Add status-based styling
            const statusClass = this.getDateStatus(cellDate);
            if (statusClass) {
                dayElement.classList.add(statusClass);
            }
            
            dayElement.addEventListener('click', () => {
                this.saveTodosForDate();
                this.currentDate = new Date(cellDate);
                this.updateDateDisplay();
                this.updateInfoSection();
                this.renderWeekView();
                this.loadTodosForDate();
                this.renderCalendar();
                this.updateDefaultDueDateInputs();
            });
            
            // Add drag and drop handlers for calendar dates
            dayElement.addEventListener('dragover', this.handleCalendarDragOver.bind(this));
            dayElement.addEventListener('drop', (e) => this.handleCalendarDrop.bind(this)(e, cellDate));
            dayElement.addEventListener('dragenter', this.handleCalendarDragEnter.bind(this));
            dayElement.addEventListener('dragleave', this.handleCalendarDragLeave.bind(this));
            
            this.calendarGrid.appendChild(dayElement);
        }
    }
    
    getDateStatus(date) {
        const dateKey = date.toISOString().split('T')[0];
        const todos = JSON.parse(localStorage.getItem(`dailyTodos_${dateKey}`)) || {};
        
        let hasTodoItems = todos.todo && todos.todo.length > 0;
        let hasProgressItems = todos.inProgress && todos.inProgress.length > 0;
        let hasDoneItems = todos.done && todos.done.length > 0;
        
        // Also check section items
        if (todos.sections && typeof todos.sections === 'object') {
            Object.values(todos.sections).forEach(section => {
                if (section.todo && section.todo.length > 0) hasTodoItems = true;
                if (section.inProgress && section.inProgress.length > 0) hasProgressItems = true;
                if (section.done && section.done.length > 0) hasDoneItems = true;
            });
        }
        
        // Priority: red (todo) > yellow (progress) > green (done) > grey (none)
        if (hasTodoItems) {
            return 'has-todo-items';
        } else if (hasProgressItems) {
            return 'has-progress-items';
        } else if (hasDoneItems) {
            return 'has-done-items';
        }
        return null; // No items, keep default grey
    }
    
    updateCalendarColors() {
        // Re-render the calendar to update colors
        this.renderCalendar();
    }
    
    copyItemToNewItems(item) {
        const text = this.getItemText(item);
        const sourcePanel = item.dataset.panel || 'todo';
        const recurringTaskId = item.dataset.recurringTaskId || null;
        
        if (sourcePanel === 'backburner') {
            // Copy to backburner misc items
            const newItem = this.createTodoItem(text, null, null, null, null, null, 'backburner', false, recurringTaskId);
            this.backburnerUnsortedItems.appendChild(newItem);
            this.saveBackburnerItems();
            this.showFeedback('Copied to Misc Items');
        } else {
            // Copy to TODO new items
            const newItem = this.createTodoItem(text, null, null, null, null, null, 'todo', false, recurringTaskId);
            this.unsortedItems.appendChild(newItem);
            this.saveGlobalUnsortedItems();
            this.showFeedback('Copied to New Items');
        }
    }
    
    moveItemToNextDay(item) {
        const itemData = this.getItemData(item);
        const nextBusinessDay = this.getNextBusinessDay();
        
        // Convert 'unsorted' to 'todo' when moving from New Items to dates
        const targetColumnType = itemData.columnType === 'unsorted' ? 'todo' : itemData.columnType;
        
        this.addItemToDate(itemData.text, targetColumnType, nextBusinessDay, itemData.sectionId, itemData.dueDate, itemData.createdAt, itemData.itemId, itemData.sectionName, itemData.isHighPriority, 'todo', itemData.recurringTaskId);
        item.remove();
        
        // Check if the original section needs cleanup (only for items in sections, not unsorted)
        if (itemData.sectionId && itemData.columnType !== 'unsorted') {
            this.checkAndCleanupEmptySection(itemData.sectionId);
        }
        
        // Save appropriate storage based on item location
        if (itemData.columnType === 'unsorted') {
            this.saveGlobalUnsortedItems();
        } else {
            this.saveTodosForDate();
        }
        
        // Update calendar colors for both current date and target date
        this.updateCalendarColors();
        
        this.showFeedback(`Moved to ${this.formatDateShort(nextBusinessDay)}`);
    }
    
    getColumnType(item) {
        if (this.unsortedItems && this.unsortedItems.contains(item)) return 'unsorted';
        if (this.todoItems && this.todoItems.contains(item)) return 'todo';
        if (this.inProgressItems && this.inProgressItems.contains(item)) return 'inProgress';
        if (this.doneItems && this.doneItems.contains(item)) return 'done';
        
        // Check for backburner unsorted items
        if (this.backburnerUnsortedItems && this.backburnerUnsortedItems.contains(item)) return 'backburner_unsorted';
        
        // Check if item is in a section column
        const sectionColumn = item.closest('.section-column');
        if (sectionColumn) {
            if (sectionColumn.classList.contains('section-todo')) return 'todo';
            if (sectionColumn.classList.contains('section-in-progress')) return 'inProgress';
            if (sectionColumn.classList.contains('section-done')) return 'done';
        }
        
        // Check by looking at the parent container
        const parent = item.parentElement;
        if (parent) {
            if (parent.id === 'unsortedItems') return 'unsorted';
            if (parent.id === 'todoItems') return 'todo';
            if (parent.id === 'inProgressItems') return 'inProgress';
            if (parent.id === 'doneItems') return 'done';
            if (parent.id === 'backburnerUnsortedItems') return 'backburner_unsorted';
        }
        
        return 'unsorted';
    }
    
    getItemData(item) {
        return {
            text: this.getItemText(item),
            columnType: this.getColumnType(item),
            dueDate: item.dataset.dueDate || null,
            createdAt: item.dataset.createdAt || new Date().toISOString(),
            itemId: item.dataset.itemId,
            sectionId: item.dataset.sectionId || null,
            sectionName: item.dataset.sectionId ? this.getSectionName(item.dataset.sectionId) : null,
            isHighPriority: item.dataset.highPriority === 'true',
            recurringTaskId: item.dataset.recurringTaskId || null
        };
    }
    
    addItemToDate(text, columnType, targetDate, sectionId = null, dueDate = null, createdAt = null, itemId = null, sectionName = null, isHighPriority = false, panel = 'todo', recurringTaskId = null) {
        const dateKey = targetDate.toISOString().split('T')[0];
        const existingData = localStorage.getItem(`dailyTodos_${dateKey}`);
        
        let todos = {
            unsorted: [],
            todo: [],
            inProgress: [],
            done: [],
            sections: {}
        };
        
        if (existingData) {
            todos = JSON.parse(existingData);
            // Ensure all required properties exist
            if (!todos.unsorted) todos.unsorted = [];
            if (!todos.todo) todos.todo = [];
            if (!todos.inProgress) todos.inProgress = [];
            if (!todos.done) todos.done = [];
            if (!todos.sections) todos.sections = {};
        }
        
        const newItem = {
            id: `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            itemId: itemId || this.getNextItemId(),
            text: text,
            createdAt: createdAt || new Date().toISOString(),
            sectionId: sectionId
        };
        
        // Add due date if provided
        if (dueDate) {
            newItem.dueDate = dueDate;
        }
        
        // Add high priority if provided
        if (isHighPriority) {
            newItem.highPriority = true;
        }
        
        // Add recurring task ID if provided
        if (recurringTaskId) {
            newItem.recurringTaskId = recurringTaskId;
        }
        
        // If item has section ID, ensure section exists and add to section
        if (sectionId) {
            const finalSectionName = sectionName || this.getSectionName(sectionId) || 'Moved Section';
            
            // Check if there's already a section with the same name to combine with
            let targetSectionId = sectionId;
            let existingSectionId = null;
            
            for (const [existingId, section] of Object.entries(todos.sections)) {
                if (section.name === finalSectionName && existingId !== sectionId) {
                    existingSectionId = existingId;
                    targetSectionId = existingId;
                    break;
                }
            }
            
            if (!todos.sections[targetSectionId]) {
                // Create section if it doesn't exist
                todos.sections[targetSectionId] = {
                    id: targetSectionId,
                    name: finalSectionName,
                    panel: 'todo',
                    todo: [],
                    inProgress: [],
                    done: []
                };
            }
            
            // Update the item to point to the target section (for combining)
            newItem.sectionId = targetSectionId;
            todos.sections[targetSectionId][columnType].push(newItem);
            
            // Clean up any empty duplicate sections with the same name
            this.cleanupDuplicateSectionsInStorage(todos, finalSectionName, targetSectionId);
        } else {
            // Add to main columns
            todos[columnType].push(newItem);
        }
        
        localStorage.setItem(`dailyTodos_${dateKey}`, JSON.stringify(todos));
    }
    
    cleanupDuplicateSectionsInStorage(todos, sectionName, keepSectionId) {
        // Find all sections with the same name
        const duplicateSections = [];
        for (const [id, section] of Object.entries(todos.sections)) {
            if (section.name === sectionName && id !== keepSectionId) {
                duplicateSections.push(id);
            }
        }
        
        // Combine items from duplicate sections into the keep section
        duplicateSections.forEach(duplicateId => {
            const duplicateSection = todos.sections[duplicateId];
            const keepSection = todos.sections[keepSectionId];
            
            // Move all items from duplicate to keep section
            ['todo', 'inProgress', 'done'].forEach(columnType => {
                if (duplicateSection[columnType] && duplicateSection[columnType].length > 0) {
                    duplicateSection[columnType].forEach(item => {
                        item.sectionId = keepSectionId; // Update section reference
                        keepSection[columnType].push(item);
                    });
                }
            });
            
            // Remove the duplicate section
            delete todos.sections[duplicateId];
        });
    }
    
    formatDateShort(date) {
        const tomorrow = new Date(this.currentDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        if (date.getTime() === tomorrow.getTime()) {
            return 'tomorrow';
        }
        
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
    }
    
    getMondayOfWeek(date) {
        const result = new Date(date);
        const day = result.getDay();
        const diff = result.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
        result.setDate(diff);
        result.setHours(0, 0, 0, 0);
        return result;
    }
    
    showFeedback(message, type = 'success') {
        const feedbackLevel = localStorage.getItem('feedbackLevel') || 'all';
        
        // Check if we should show this message based on feedback level
        if (feedbackLevel === 'none') {
            return; // Don't show any messages
        }
        
        if (feedbackLevel === 'important' && type !== 'error' && type !== 'warning') {
            return; // Only show error/warning messages for 'important' setting
        }
        
        const feedback = document.createElement('div');
        feedback.className = 'feedback-message';
        feedback.textContent = message;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }
    
    showCustomConfirm(message, confirmText = 'Delete Section', cancelText = 'Keep Section') {
        return new Promise((resolve) => {
            // Create modal overlay
            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            `;
            
            // Create modal dialog
            const modal = document.createElement('div');
            modal.className = 'custom-confirm-modal';
            modal.style.cssText = `
                background: white;
                border-radius: 8px;
                padding: 20px;
                max-width: 400px;
                min-width: 300px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                text-align: center;
            `;
            
            // Create message
            const messageEl = document.createElement('p');
            messageEl.innerHTML = message.replace(/\n/g, '<br>');
            messageEl.style.cssText = `
                margin: 0 0 20px 0;
                font-size: 16px;
                line-height: 1.4;
                white-space: pre-line;
            `;
            
            // Create button container
            const buttonContainer = document.createElement('div');
            buttonContainer.style.cssText = `
                display: flex;
                gap: 10px;
                justify-content: center;
            `;
            
            // Create buttons
            const confirmBtn = document.createElement('button');
            confirmBtn.textContent = confirmText;
            confirmBtn.style.cssText = `
                background: #e74c3c;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
            `;
            
            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = cancelText;
            cancelBtn.style.cssText = `
                background: #95a5a6;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
            `;
            
            // Add event listeners with proper cleanup
            let isResolved = false;
            
            const cleanupAndResolve = (result) => {
                if (isResolved) return;
                isResolved = true;
                
                document.removeEventListener('keydown', handleEscape);
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
                resolve(result);
            };
            
            confirmBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();
                cleanupAndResolve(true);
            });
            
            cancelBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();
                cleanupAndResolve(false);
            });
            
            // Handle escape key
            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    cleanupAndResolve(false);
                }
            };
            document.addEventListener('keydown', handleEscape);
            
            // Prevent clicking through overlay
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    // Clicking outside modal closes it
                    cleanupAndResolve(false);
                }
            });
            
            // Assemble modal
            buttonContainer.appendChild(cancelBtn);
            buttonContainer.appendChild(confirmBtn);
            modal.appendChild(messageEl);
            modal.appendChild(buttonContainer);
            overlay.appendChild(modal);
            document.body.appendChild(overlay);
        });
    }
    
    exportData() {
        try {
            console.log('Export started...');
            const allData = {};
            const dailyNotes = {};
            
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('dailyTodos_') && 
                    key !== 'dailyTodos_notes' && 
                    key !== 'dailyTodos_whiteboard' && 
                    key !== 'dailyTodos_trash') {
                    const date = key.replace('dailyTodos_', '');
                    const data = localStorage.getItem(key);
                    if (data && data.trim()) {
                        try {
                            allData[date] = JSON.parse(data);
                        } catch (e) {
                            console.warn(`Failed to parse data for ${key}:`, e);
                            allData[date] = null;
                        }
                    }
                } else if (key.startsWith('dailyNotes_')) {
                    const date = key.replace('dailyNotes_', '');
                    const noteContent = localStorage.getItem(key);
                    if (noteContent && noteContent.trim()) {
                        dailyNotes[date] = noteContent;
                    }
                }
            }
        
            // Include global unsorted items, backburner, trash, notes, whiteboard, and recurring tasks
            const globalUnsorted = localStorage.getItem('globalUnsortedItems');
            const backburnerItems = localStorage.getItem('backburnerItems');
            const trashItems = localStorage.getItem('dailyTodos_trash');
            const notes = localStorage.getItem('dailyTodos_notes');
            const whiteboard = localStorage.getItem('dailyTodos_whiteboard');
            const recurringTasks = localStorage.getItem('recurringTasks');
            
            const exportData = {
                exportDate: new Date().toISOString(),
                version: '6.0',
                data: allData,
                dailyNotes: dailyNotes,
                globalUnsortedItems: globalUnsorted ? JSON.parse(globalUnsorted) : [],
                backburnerItems: backburnerItems ? JSON.parse(backburnerItems) : { unsortedItems: [], sections: {} },
                trashItems: trashItems ? JSON.parse(trashItems) : [],
                notes: notes || '',
                whiteboard: whiteboard || '',
                recurringTasks: recurringTasks ? JSON.parse(recurringTasks) : []
            };
            
            console.log('Export data prepared:', exportData);
            
            const jsonString = JSON.stringify(exportData, null, 2);
            
            if (this.isElectronMode()) {
                // Use Electron's native file dialog
                this.exportDataElectron(jsonString);
            } else {
                // Use web blob download
                this.exportDataWeb(jsonString);
            }
        } catch (error) {
            console.error('Export failed:', error);
            this.showFeedback('Export failed: ' + error.message, 'error');
        }
    }
    
    async exportDataElectron(jsonString) {
        try {
            const filePath = await window.electronAPI.selectExportFile();
            if (filePath) {
                const result = await window.electronAPI.saveToFile(filePath, jsonString);
                if (result.success) {
                    this.showFeedback('Data exported successfully!');
                    console.log('Export completed to:', filePath);
                } else {
                    throw new Error(result.error || 'Failed to save file');
                }
            } else {
                this.showFeedback('Export cancelled', 'info');
            }
        } catch (error) {
            console.error('Electron export failed:', error);
            this.showFeedback('Export failed: ' + error.message, 'error');
        }
    }
    
    exportDataWeb(jsonString) {
        try {
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `daily-todos-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            console.log('Export download triggered');
            this.showFeedback('Data exported successfully!');
        } catch (error) {
            console.error('Web export failed:', error);
            this.showFeedback('Export failed: ' + error.message, 'error');
        }
    }
    
    debugExportToFolder(jsonString) {
        try {
            const debugData = {
                timestamp: new Date().toISOString(),
                currentDate: this.getDateKey(),
                data: jsonString
            };
            
            console.log('Debug Export Data:', debugData);
            
            const debugBlob = new Blob([JSON.stringify(debugData, null, 2)], { type: 'application/json' });
            const debugUrl = URL.createObjectURL(debugBlob);
            
            const debugA = document.createElement('a');
            debugA.href = debugUrl;
            debugA.download = 'debug-todos-export.json';
            debugA.style.display = 'none';
            document.body.appendChild(debugA);
            debugA.click();
            document.body.removeChild(debugA);
            URL.revokeObjectURL(debugUrl);
        } catch (error) {
            console.log('Debug export failed (browser limitation):', error);
        }
    }
    
    normalizeImportData(rawData) {
        // Ensure all required top-level properties exist
        const importedData = {
            data: rawData.data || {},
            exportDate: rawData.exportDate || new Date().toISOString(),
            dailyNotes: rawData.dailyNotes || {},
            globalUnsortedItems: rawData.globalUnsortedItems || [],
            backburnerItems: rawData.backburnerItems || { unsortedItems: [], sections: {} },
            trashItems: rawData.trashItems || [],
            notes: rawData.notes !== undefined ? rawData.notes : '',
            whiteboard: rawData.whiteboard !== undefined ? rawData.whiteboard : '',
            recurringTasks: rawData.recurringTasks || []
        };
        
        
        // Normalize each date's todos data
        Object.entries(importedData.data).forEach(([date, todos]) => {
            importedData.data[date] = this.normalizeTodosData(todos);
        });
        
        // Normalize global unsorted items
        importedData.globalUnsortedItems = importedData.globalUnsortedItems.map(item => this.normalizeItem(item));
        
        // Normalize backburner items
        if (importedData.backburnerItems) {
            importedData.backburnerItems.unsortedItems = (importedData.backburnerItems.unsortedItems || []).map(item => this.normalizeItem(item));
            
            if (importedData.backburnerItems.sections) {
                Object.keys(importedData.backburnerItems.sections).forEach(sectionId => {
                    const section = importedData.backburnerItems.sections[sectionId];
                    section.name = section.name || 'Unnamed Section';
                    section.id = section.id || sectionId;
                    section.panel = section.panel || 'backburner';
                    section.todo = (section.todo || []).map(item => this.normalizeItem(item));
                    section.inProgress = (section.inProgress || []).map(item => this.normalizeItem(item));
                    section.done = (section.done || []).map(item => this.normalizeItem(item));
                });
            }
        }
        
        // Normalize trash items
        importedData.trashItems = importedData.trashItems.map(item => this.normalizeTrashItem(item));
        
        return importedData;
    }
    
    normalizeTodosData(todos) {
        return {
            unsorted: (todos.unsorted || []).map(item => this.normalizeItem(item)),
            todo: (todos.todo || []).map(item => this.normalizeItem(item)),
            inProgress: (todos.inProgress || []).map(item => this.normalizeItem(item)),
            done: (todos.done || []).map(item => this.normalizeItem(item)),
            sections: this.normalizeSections(todos.sections || {})
        };
    }
    
    normalizeSections(sections) {
        const normalized = {};
        Object.keys(sections).forEach(sectionId => {
            const section = sections[sectionId];
            normalized[sectionId] = {
                name: section.name || 'Unnamed Section',
                id: section.id || sectionId,
                panel: section.panel || 'todo',
                todo: (section.todo || []).map(item => this.normalizeItem(item)),
                inProgress: (section.inProgress || []).map(item => this.normalizeItem(item)),
                done: (section.done || []).map(item => this.normalizeItem(item))
            };
        });
        return normalized;
    }
    
    normalizeItem(item) {
        return {
            id: item.id || `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            itemId: item.itemId || item.id || `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            text: item.text || 'Untitled Item',
            createdAt: item.createdAt || new Date().toISOString(),
            sectionId: item.sectionId || null,
            dueDate: item.dueDate || null,
            panel: item.panel || 'todo',
            highPriority: item.highPriority === true || item.highPriority === 'true',
            recurringTaskId: item.recurringTaskId || null,
            deletedAt: item.deletedAt || null,
            completedAt: item.completedAt || null,
            priority: item.priority || null,
            tags: item.tags || null,
            notes: item.notes || null
        };
    }
    
    normalizeTrashItem(item) {
        return {
            id: item.id || `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            itemId: item.itemId || item.id || `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            text: item.text || 'Untitled Item',
            createdAt: item.createdAt || new Date().toISOString(),
            sectionId: item.sectionId || null,
            sectionName: item.sectionName || null,
            dueDate: item.dueDate || null,
            highPriority: item.highPriority === true || item.highPriority === 'true',
            recurringTaskId: item.recurringTaskId || null,
            panel: item.panel || 'todo',
            originalColumnType: item.originalColumnType || 'todo',
            deletedAt: item.deletedAt || new Date().toISOString(),
            originalDate: item.originalDate || new Date().toISOString().split('T')[0]
        };
    }
    
    normalizeCsvItem(item) {
        const currentDate = new Date().toISOString();
        const todayDateString = currentDate.split('T')[0];
        
        return {
            text: item.text || 'Untitled Item',
            panel: item.panel || 'todo',
            column: item.column || 'To Do',
            section_name: item.section_name || '',
            due_date: item.due_date || '',
            date: item.date || todayDateString,
            item_id: item.item_id || `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            created_at: item.created_at || currentDate,
            completed_at: item.completed_at || '',
            deleted_at: item.deleted_at || '',
            original_date: item.original_date || '',
            high_priority: item.high_priority === 'true' || item.high_priority === '1' || item.high_priority === 'yes',
            priority: item.priority || '',
            tags: item.tags || '',
            notes: item.notes || '',
            original_column_type: item.original_column_type || '',
            recurring_task_id: item.recurring_task_id || item.recurringTaskId || null
        };
    }
    
    importData(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const rawData = JSON.parse(e.target.result);
                
                // Validate imported data structure
                if (!rawData || typeof rawData !== 'object') {
                    throw new Error('Invalid JSON data: not an object');
                }
                
                // Add backwards compatibility defaults
                const importedData = this.normalizeImportData(rawData);
                
                if (!importedData.data) {
                    throw new Error('Invalid file format');
                }
                
                const confirmImport = await this.showCustomConfirm(
                    `Import ${Object.keys(importedData.data).length} days of todo data?\n\n` +
                    `This will overwrite existing data for those dates.\n` +
                    `Export Date: ${new Date(importedData.exportDate).toLocaleDateString()}`,
                    'Import Data',
                    'Cancel Import'
                );
                
                if (confirmImport) {
                    Object.entries(importedData.data).forEach(([date, todos]) => {
                        localStorage.setItem(`dailyTodos_${date}`, JSON.stringify(todos));
                    });
                    
                    // Import global unsorted items if they exist
                    if (importedData.globalUnsortedItems) {
                        localStorage.setItem('globalUnsortedItems', JSON.stringify(importedData.globalUnsortedItems));
                    }
                    
                    // Import backburner items if they exist
                    if (importedData.backburnerItems) {
                        localStorage.setItem('backburnerItems', JSON.stringify(importedData.backburnerItems));
                    }
                    
                    // Import trash items if they exist
                    if (importedData.trashItems) {
                        localStorage.setItem('dailyTodos_trash', JSON.stringify(importedData.trashItems));
                    }
                    
                    // Import notes if they exist
                    if (importedData.notes !== undefined) {
                        localStorage.setItem('dailyTodos_notes', importedData.notes);
                    }
                    
                    // Import whiteboard if it exists
                    if (importedData.whiteboard !== undefined) {
                        localStorage.setItem('dailyTodos_whiteboard', importedData.whiteboard);
                    }
                    
                    // Import recurring tasks if they exist
                    if (importedData.recurringTasks) {
                        localStorage.setItem('recurringTasks', JSON.stringify(importedData.recurringTasks));
                    }
                    
                    // Import daily notes if they exist
                    if (importedData.dailyNotes) {
                        Object.entries(importedData.dailyNotes).forEach(([date, noteContent]) => {
                            localStorage.setItem(`dailyNotes_${date}`, noteContent);
                        });
                    }
                    
                    this.loadTodosForDate();
                    this.loadBackburnerItems();
                    this.loadTrashItems();
                    this.loadNotes();
                    this.loadWhiteboard();
                    this.loadRecurringTasks();
                    this.updateStatistics();
                    this.showFeedback(`Imported ${Object.keys(importedData.data).length} days of todos!`);
                }
                
            } catch (error) {
                alert('Error importing file: ' + error.message);
            }
            
            event.target.value = '';
        };
        
        reader.readAsText(file);
    }
    
    importCsvData(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const csvText = e.target.result;
                const lines = csvText.split('\n').filter(line => line.trim());
                
                if (lines.length < 2) {
                    throw new Error('CSV file must have at least a header and one data row');
                }
                
                // Parse header
                const headers = this.parseCsvLine(lines[0]);
                const requiredFields = ['text'];
                const missingFields = requiredFields.filter(field => !headers.includes(field));
                
                if (missingFields.length > 0) {
                    throw new Error(`Missing required field: ${missingFields.join(', ')}`);
                }
                
                // Parse data rows
                const items = [];
                for (let i = 1; i < lines.length; i++) {
                    const values = this.parseCsvLine(lines[i]);
                    if (values.length !== headers.length) continue; // Skip malformed rows
                    
                    const item = {};
                    headers.forEach((header, index) => {
                        item[header] = values[index] || '';
                    });
                    
                    // Apply backwards compatibility defaults
                    const normalizedItem = this.normalizeCsvItem(item);
                    
                    // Validate required fields
                    if (normalizedItem.text) {
                        items.push(normalizedItem);
                    }
                }
                
                if (items.length === 0) {
                    throw new Error('No valid items found in CSV file');
                }
                
                const confirmImport = await this.showCustomConfirm(
                    `Import ${items.length} items from CSV?\n\n` +
                    `This will add items to existing data without overwriting.\n` +
                    `Items will be distributed across panels: ${[...new Set(items.map(i => i.panel))].join(', ')}`,
                    'Import CSV',
                    'Cancel Import'
                );
                
                if (confirmImport) {
                    this.processCsvItems(items);
                    this.updateStatistics();
                    this.showFeedback(`Successfully imported ${items.length} items from CSV!`);
                }
                
            } catch (error) {
                alert('Error importing CSV file: ' + error.message);
            }
            
            event.target.value = '';
        };
        
        reader.readAsText(file);
    }
    
    parseCsvLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                if (inQuotes && line[i + 1] === '"') {
                    current += '"';
                    i++; // Skip next quote
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        
        result.push(current.trim());
        return result;
    }
    
    processCsvItems(items) {
        const now = new Date();
        let itemsProcessed = 0;
        
        items.forEach(item => {
            // Create proper todo item with all metadata
            const itemElement = this.createTodoItem(
                item.text,
                null, // id - will be generated
                item.created_at,
                item.section_name || null, // sectionId
                item.item_id,
                item.due_date || null,
                item.panel,
                item.high_priority || false,
                item.recurring_task_id || null // recurringTaskId
            );
            
            // Handle different panels
            if (item.panel === 'todo') {
                this.processTodoItem(item, itemElement);
            } else if (item.panel === 'backburner') {
                this.processBackburnerItem(item, itemElement);
            } else if (item.panel === 'trash') {
                this.processTrashItem(item, itemElement);
            }
            
            itemsProcessed++;
        });
        
        // Refresh current view
        this.loadTodosForDate();
        this.loadBackburnerItems();
        this.loadTrashItems();
    }
    
    processTodoItem(item, itemElement) {
        const targetDate = item.date || this.formatDate(new Date());
        
        // Load existing todos for the date
        let todos = JSON.parse(localStorage.getItem(`dailyTodos_${targetDate}`)) || {};
        
        // Handle sections
        if (item.section_name) {
            if (!todos.sections) todos.sections = {};
            
            // Find existing section with the same name or create a new one
            let sectionId = null;
            for (const [id, section] of Object.entries(todos.sections)) {
                if (section.name === item.section_name) {
                    sectionId = id;
                    break;
                }
            }
            
            if (!sectionId) {
                sectionId = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                todos.sections[sectionId] = {
                    id: sectionId,
                    name: item.section_name,
                    panel: 'todo',
                    todo: [],
                    inProgress: [],
                    done: []
                };
            }
            
            const sectionColumn = item.column.toLowerCase().replace(' ', '');
            const columnKey = sectionColumn === 'todo' ? 'todo' : 
                             sectionColumn === 'inprogress' ? 'inProgress' : 'done';
            
            todos.sections[sectionId][columnKey].push({
                text: item.text,
                id: itemElement.id,
                itemId: itemElement.dataset.itemId,
                dueDate: item.due_date || null,
                createdAt: itemElement.dataset.createdAt,
                completedAt: item.completed_at || null,
                highPriority: item.high_priority || false,
                panel: 'todo',
                sectionId: sectionId
            });
        } else {
            // Handle main columns or unsorted
            if (item.column === 'Unsorted' || item.column === 'New Items') {
                // Add to global unsorted
                let unsorted = JSON.parse(localStorage.getItem('globalUnsortedItems')) || [];
                unsorted.push({
                    text: item.text,
                    id: itemElement.dataset.itemId,
                    itemId: itemElement.dataset.itemId,
                    dueDate: item.due_date || null,
                    createdAt: itemElement.dataset.createdAt,
                    priority: item.priority || null,
                    tags: item.tags || null,
                    notes: item.notes || null,
                    highPriority: item.high_priority || false,
                    panel: 'todo'
                });
                localStorage.setItem('globalUnsortedItems', JSON.stringify(unsorted));
            } else {
                const columnKey = item.column === 'To Do' ? 'todo' : 
                                 item.column === 'In Progress' ? 'inProgress' : 'done';
                
                if (!todos[columnKey]) todos[columnKey] = [];
                todos[columnKey].push({
                    text: item.text,
                    id: itemElement.dataset.itemId,
                    itemId: itemElement.dataset.itemId,
                    dueDate: item.due_date || null,
                    createdAt: itemElement.dataset.createdAt,
                    priority: item.priority || null,
                    tags: item.tags || null,
                    notes: item.notes || null,
                    completedAt: item.completed_at || null,
                    highPriority: item.high_priority || false,
                    panel: 'todo'
                });
            }
        }
        
        localStorage.setItem(`dailyTodos_${targetDate}`, JSON.stringify(todos));
    }
    
    processBackburnerItem(item, itemElement) {
        let backburnerData = JSON.parse(localStorage.getItem('backburnerItems')) || {};
        
        if (item.section_name) {
            if (!backburnerData.sections) backburnerData.sections = {};
            
            // Find existing section with the same name or create a new one
            let sectionId = null;
            for (const [id, section] of Object.entries(backburnerData.sections)) {
                if (section.name === item.section_name) {
                    sectionId = id;
                    break;
                }
            }
            
            if (!sectionId) {
                sectionId = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                backburnerData.sections[sectionId] = {
                    id: sectionId,
                    name: item.section_name,
                    panel: 'backburner',
                    todo: [],
                    inProgress: [],
                    done: []
                };
            }
            
            const columnKey = item.column === 'To Do' ? 'todo' : 
                             item.column === 'In Progress' ? 'inProgress' : 'done';
            
            backburnerData.sections[sectionId][columnKey].push({
                text: item.text,
                id: itemElement.id,
                itemId: itemElement.dataset.itemId,
                dueDate: item.due_date || null,
                createdAt: itemElement.dataset.createdAt,
                completedAt: item.completed_at || null,
                highPriority: item.high_priority || false,
                panel: 'backburner',
                sectionId: sectionId
            });
        } else if (item.column === 'Unsorted' || item.column === 'Misc Items') {
            if (!backburnerData.unsortedItems) backburnerData.unsortedItems = [];
            backburnerData.unsortedItems.push({
                text: item.text,
                id: itemElement.id,
                itemId: itemElement.dataset.itemId,
                dueDate: item.due_date || null,
                createdAt: itemElement.dataset.createdAt,
                highPriority: item.high_priority || false,
                panel: 'backburner'
            });
        }
        
        localStorage.setItem('backburnerItems', JSON.stringify(backburnerData));
    }
    
    processTrashItem(item, itemElement) {
        let trashData = JSON.parse(localStorage.getItem('dailyTodos_trash')) || [];
        
        trashData.push({
            id: `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            itemId: itemElement.dataset.itemId,
            text: item.text,
            createdAt: itemElement.dataset.createdAt,
            sectionId: item.section_name || null,
            dueDate: item.due_date || null,
            highPriority: item.high_priority || false,
            panel: item.panel || 'todo',
            originalColumnType: item.original_column_type || item.column || 'todo',
            deletedAt: item.deleted_at || new Date().toISOString(),
            originalDate: item.original_date || item.date || this.formatDate(new Date()),
            completedAt: item.completed_at || null
        });
        
        localStorage.setItem('dailyTodos_trash', JSON.stringify(trashData));
    }
    
    async importDataElectron(fileType) {
        try {
            const result = await window.electronAPI.selectImportFile();
            
            if (!result.success) {
                this.showFeedback('Import cancelled', 'info');
                return;
            }
            
            const { data, fileName } = result;
            
            if (fileType === 'json') {
                await this.processJsonImportData(data, fileName);
            } else if (fileType === 'csv') {
                await this.processCsvImportData(data, fileName);
            }
            
        } catch (error) {
            console.error('Electron import failed:', error);
            this.showFeedback('Import failed: ' + error.message, 'error');
        }
    }
    
    async processJsonImportData(data, fileName) {
        try {
            const rawData = JSON.parse(data);
            
            // Add backwards compatibility defaults
            const importedData = this.normalizeImportData(rawData);
            
            if (!importedData.data) {
                throw new Error('Invalid file format');
            }
            
            const confirmImport = await this.showCustomConfirm(
                `Import ${Object.keys(importedData.data).length} days of todo data from ${fileName}?\n\n` +
                `This will overwrite existing data for those dates.\n` +
                `Export Date: ${new Date(importedData.exportDate).toLocaleDateString()}`,
                'Import Data',
                'Cancel Import'
            );
            
            if (confirmImport) {
                Object.entries(importedData.data).forEach(([date, todos]) => {
                    localStorage.setItem(`dailyTodos_${date}`, JSON.stringify(todos));
                });
                
                // Import global unsorted items if they exist
                if (importedData.globalUnsortedItems) {
                    localStorage.setItem('globalUnsortedItems', JSON.stringify(importedData.globalUnsortedItems));
                }
                
                // Import backburner items if they exist
                if (importedData.backburnerItems) {
                    localStorage.setItem('backburnerItems', JSON.stringify(importedData.backburnerItems));
                }
                
                // Import trash items if they exist
                if (importedData.trashItems) {
                    localStorage.setItem('dailyTodos_trash', JSON.stringify(importedData.trashItems));
                }
                
                // Import notes if they exist
                if (importedData.notes !== undefined) {
                    localStorage.setItem('dailyTodos_notes', importedData.notes);
                }
                
                // Import whiteboard if it exists
                if (importedData.whiteboard !== undefined) {
                    localStorage.setItem('dailyTodos_whiteboard', importedData.whiteboard);
                }
                
                // Import recurring tasks if they exist
                if (importedData.recurringTasks) {
                    localStorage.setItem('recurringTasks', JSON.stringify(importedData.recurringTasks));
                }
                
                // Import daily notes if they exist
                if (importedData.dailyNotes) {
                    Object.entries(importedData.dailyNotes).forEach(([date, notes]) => {
                        localStorage.setItem(`dailyNotes_${date}`, notes);
                    });
                }
                
                this.showFeedback(`Data imported successfully from ${fileName}!`);
                this.loadTodosForDate();
                this.loadBackburnerItems();
                this.loadTrashItems();
                
                // Reload the current view to show imported data
                if (typeof this.refreshAll === 'function') {
                    this.refreshAll();
                }
            }
        } catch (error) {
            console.error('JSON import processing failed:', error);
            this.showFeedback('Failed to import JSON data: ' + error.message, 'error');
        }
    }
    
    async processCsvImportData(data, fileName) {
        try {
            const lines = data.split('\n').filter(line => line.trim());
            
            if (lines.length === 0) {
                this.showFeedback('CSV file is empty', 'error');
                return;
            }
            
            const confirmImport = await this.showCustomConfirm(
                `Import ${lines.length} items from CSV file ${fileName}?\n\n` +
                `Items will be added to today's todo list.`,
                'Import CSV',
                'Cancel Import'
            );
            
            if (confirmImport) {
                const items = lines.map(line => {
                    const parts = this.parseCsvLine(line);
                    return {
                        text: parts[0] || 'Untitled Item',
                        date: this.formatDate(new Date()),
                        column: 'todo',
                        panel: 'todo',
                        high_priority: false
                    };
                });
                
                this.processCsvItems(items);
                this.showFeedback(`${items.length} items imported successfully from ${fileName}!`);
            }
        } catch (error) {
            console.error('CSV import processing failed:', error);
            this.showFeedback('Failed to import CSV data: ' + error.message, 'error');
        }
    }
    
    autoDebugExport() {
        if (this.debugExportTimeout) {
            clearTimeout(this.debugExportTimeout);
        }
        
        this.debugExportTimeout = setTimeout(() => {
            try {
                const allData = {};
                
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key.startsWith('dailyTodos_') && !key.endsWith('_notes') && !key.endsWith('_trash')) {
                        const date = key.replace('dailyTodos_', '');
                        const data = localStorage.getItem(key);
                        if (data && data.trim()) {
                            try {
                                allData[date] = JSON.parse(data);
                            } catch (e) {
                                console.warn(`Failed to parse data for ${key}:`, e);
                                allData[date] = null;
                            }
                        }
                    }
                }
                
                const debugData = {
                    autoSaveTime: new Date().toISOString(),
                    currentDate: this.getDateKey(),
                    totalDays: Object.keys(allData).length,
                    data: allData
                };
                
                console.log('📝 Auto-saved todos:', debugData.autoSaveTime);
                console.log('Current data:', debugData);
                
            } catch (error) {
                console.log('Auto save logging failed:', error);
            }
        }, 1000);
    }
    
    logStorageDebugInfo() {
        console.log('=== DAILY TODO DEBUG INFO ===');
        console.log('App loaded at:', new Date().toISOString());
        console.log('Current date:', this.getDateKey());
        
        const allData = {};
        const allKeys = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('dailyTodos_')) {
                const date = key.replace('dailyTodos_', '');
                const value = localStorage.getItem(key);
                
                // Handle non-JSON values (like notes and whiteboard)
                if (key === 'dailyTodos_notes' || key === 'dailyTodos_whiteboard') {
                    allData[date] = value;
                } else {
                    try {
                        allData[date] = JSON.parse(value);
                    } catch (e) {
                        console.warn(`Failed to parse ${key}:`, e);
                        allData[date] = value; // Store raw value if parsing fails
                    }
                }
                allKeys.push(key);
            }
        }
        
        console.log('Total days with data:', Object.keys(allData).length);
        console.log('Storage keys:', allKeys);
        console.log('All todo data:', allData);
        
        // Create a formatted JSON string for easy copying
        const exportData = {
            exportDate: new Date().toISOString(),
            version: '1.0',
            currentDate: this.getDateKey(),
            totalDays: Object.keys(allData).length,
            data: allData
        };
        
        console.log('=== COPY THIS JSON FOR BACKUP ===');
        console.log(JSON.stringify(exportData, null, 2));
        console.log('=== END DEBUG INFO ===');
    }
    
    editItem(item) {
        const textElement = item.querySelector('.todo-text');
        const currentText = this.getItemText(item);
        const currentDueDate = item.dataset.dueDate || '';
        const currentHighPriority = item.dataset.highPriority === 'true';
        
        // Create edit container
        const editContainer = document.createElement('div');
        editContainer.className = 'edit-container';
        
        // Create text textarea
        const textInput = document.createElement('textarea');
        textInput.value = currentText;
        textInput.className = 'edit-text-input';
        textInput.rows = 1; // Start with 1 row
        
        // Create date and priority container
        const datePriorityContainer = document.createElement('div');
        datePriorityContainer.className = 'edit-date-priority-row';
        
        // Create due date input
        const dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.value = currentDueDate;
        dueDateInput.className = 'edit-date-input';
        
        // Create due date label
        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Due Date';
        dueDateLabel.setAttribute('for', dueDateInput.id || 'editDateInput');
        dueDateLabel.style.fontSize = '12px';
        dueDateLabel.style.color = '#666';
        dueDateLabel.style.fontWeight = '500';
        
        // Create high priority toggle
        const priorityLabel = document.createElement('label');
        priorityLabel.className = 'edit-priority-toggle';
        
        const priorityCheckbox = document.createElement('input');
        priorityCheckbox.type = 'checkbox';
        priorityCheckbox.checked = currentHighPriority;
        priorityCheckbox.className = 'edit-priority-checkbox';
        
        const priorityText = document.createElement('span');
        priorityText.textContent = 'Urgent';
        
        priorityLabel.appendChild(priorityText);
        priorityLabel.appendChild(priorityCheckbox);
        
        datePriorityContainer.appendChild(dueDateInput);
        datePriorityContainer.appendChild(dueDateLabel);
        datePriorityContainer.appendChild(priorityLabel);
        
        // Create buttons container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'edit-buttons';
        
        const saveBtn = document.createElement('button');
        saveBtn.textContent = '✓';
        saveBtn.className = 'edit-save-btn';
        
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = '×';
        cancelBtn.className = 'edit-cancel-btn';
        
        buttonsContainer.appendChild(saveBtn);
        buttonsContainer.appendChild(cancelBtn);
        
        editContainer.appendChild(textInput);
        editContainer.appendChild(datePriorityContainer);
        editContainer.appendChild(buttonsContainer);
        
        // Hide action buttons during edit
        const actionButtons = item.querySelector('.item-actions');
        if (actionButtons) {
            actionButtons.style.display = 'none';
        }
        
        // Replace text with edit container
        textElement.style.display = 'none';
        item.insertBefore(editContainer, textElement);
        
        // Prevent drag behavior on the entire item while editing
        item.draggable = false;
        
        // Prevent event interference
        editContainer.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });
        
        editContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Auto-resize textarea based on content
        const autoResize = () => {
            textInput.style.height = 'auto';
            textInput.style.height = textInput.scrollHeight + 'px';
        };
        
        // Initial resize and add event listener
        setTimeout(autoResize, 0);
        textInput.addEventListener('input', autoResize);
        
        textInput.focus();
        
        const saveEdit = () => {
            const newText = textInput.value.trim();
            const newDueDate = dueDateInput.value || null;
            const newHighPriority = priorityCheckbox.checked;
            
            if (newText && (newText !== currentText || newDueDate !== currentDueDate || newHighPriority !== currentHighPriority)) {
                // Update both the display and original text
                item.dataset.originalText = newText;
                textElement.innerHTML = this.linkifyText(newText);
                
                // Update due date
                if (newDueDate) {
                    item.dataset.dueDate = newDueDate;
                } else {
                    delete item.dataset.dueDate;
                }
                
                // Update high priority
                if (newHighPriority) {
                    item.dataset.highPriority = 'true';
                    item.classList.add('high-priority');
                } else {
                    delete item.dataset.highPriority;
                    item.classList.remove('high-priority');
                }
                
                
                // Re-apply due date styling after update
                this.applyDueDateStyling(item);
                
                this.saveTodosForDate();
                this.updateCalendarColors();
                this.showFeedback('Task updated');
            }
            editContainer.remove();
            textElement.style.display = 'block';
            item.draggable = true; // Re-enable dragging
            
            // Restore action buttons
            if (actionButtons) {
                actionButtons.style.display = '';
            }
        };
        
        const cancelEdit = () => {
            editContainer.remove();
            textElement.style.display = 'block';
            item.draggable = true; // Re-enable dragging
            
            // Restore action buttons
            if (actionButtons) {
                actionButtons.style.display = '';
            }
        };
        
        saveBtn.addEventListener('click', saveEdit);
        cancelBtn.addEventListener('click', cancelEdit);
        
        textInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (e.ctrlKey) {
                    // Ctrl+Enter: Insert new line manually
                    e.preventDefault();
                    const textarea = e.target;
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const value = textarea.value;
                    
                    // Insert newline at cursor position
                    textarea.value = value.substring(0, start) + '\n' + value.substring(end);
                    
                    // Move cursor to after the newline
                    textarea.selectionStart = textarea.selectionEnd = start + 1;
                    
                    // Trigger auto-resize
                    autoResize();
                } else {
                    // Regular Enter: Save the edit
                    saveEdit();
                }
            } else if (e.key === 'Escape') {
                cancelEdit();
            }
        });
        
        dueDateInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEdit();
            } else if (e.key === 'Escape') {
                cancelEdit();
            }
        });
    }
    
    deleteNewItems() {
        const globalUnsorted = localStorage.getItem('globalUnsortedItems');
        if (!globalUnsorted) {
            alert('No new items to move to trash.');
            return;
        }
        
        const unsortedItems = JSON.parse(globalUnsorted);
        if (unsortedItems.length === 0) {
            alert('No new items to move to trash.');
            return;
        }
        
        this.showCustomConfirm(
            `⚠️ Move ${unsortedItems.length} New Items to Trash?\n\nThese items will be moved to the trash where they can be restored if needed.`,
            'Move to Trash',
            'Keep Items'
        ).then((shouldMove) => {
            if (shouldMove) {
                this.captureStateForUndo('move_to_trash', `Move ${unsortedItems.length} new items to trash`);
                
                // Get existing trash data
                const existingTrash = JSON.parse(localStorage.getItem('dailyTodos_trash') || '[]');
                
                // Convert unsorted items to trash format
                unsortedItems.forEach(item => {
                    const trashItem = {
                        id: `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        itemId: item.id || `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        text: item.text,
                        createdAt: item.createdAt || new Date().toISOString(),
                        sectionId: null,
                        dueDate: null,
                        highPriority: item.highPriority || false,
                        panel: 'new_items',
                        originalColumnType: 'unsorted',
                        originalDate: this.getDateKey(),
                        movedToTrashAt: new Date().toISOString()
                    };
                    existingTrash.push(trashItem);
                });
                
                // Save updated trash and clear new items
                localStorage.setItem('dailyTodos_trash', JSON.stringify(existingTrash));
                localStorage.removeItem('globalUnsortedItems');
                this.unsortedItems.innerHTML = '';
                this.loadTrashItems();
                this.updateAllItemCounts();
                this.showFeedback(`Moved ${unsortedItems.length} new items to trash`);
            }
        });
    }

    deleteMiscItems() {
        const backburnerData = JSON.parse(localStorage.getItem('backburnerItems') || '{"unsortedItems": [], "sections": {}}');
        const miscItems = backburnerData.unsortedItems || [];
        
        if (miscItems.length === 0) {
            alert('No misc items to move to trash.');
            return;
        }
        
        this.showCustomConfirm(
            `⚠️ Move ${miscItems.length} Misc Items to Trash?\n\nThese items will be moved to the trash where they can be restored if needed.`,
            'Move to Trash',
            'Keep Items'
        ).then((shouldMove) => {
            if (shouldMove) {
                this.captureStateForUndo('move_to_trash', `Move ${miscItems.length} misc items to trash`);
                
                // Get existing trash data
                const existingTrash = JSON.parse(localStorage.getItem('dailyTodos_trash') || '[]');
                
                // Convert misc items to trash format
                miscItems.forEach(item => {
                    const trashItem = {
                        id: `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        itemId: item.id || `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        text: item.text,
                        createdAt: item.createdAt || new Date().toISOString(),
                        sectionId: null,
                        dueDate: null,
                        highPriority: item.highPriority || false,
                        panel: 'misc_items',
                        originalColumnType: 'backburner_unsorted',
                        originalDate: this.getDateKey(),
                        movedToTrashAt: new Date().toISOString()
                    };
                    existingTrash.push(trashItem);
                });
                
                // Save updated trash and clear misc items
                localStorage.setItem('dailyTodos_trash', JSON.stringify(existingTrash));
                
                // Clear only the unsorted items, keep sections
                backburnerData.unsortedItems = [];
                localStorage.setItem('backburnerItems', JSON.stringify(backburnerData));
                
                this.backburnerUnsortedItems.innerHTML = '';
                this.loadTrashItems();
                this.updateAllItemCounts();
                this.showFeedback(`Moved ${miscItems.length} misc items to trash`);
            }
        });
    }

    async deleteCurrentDay() {
        const dateKey = this.getDateKey();
        const dateDisplay = this.currentDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        const shouldDelete = await this.showCustomConfirm(
            `⚠️ MOVE DAY TO TRASH?\n\nThis will move all todos for:\n${dateDisplay}\n\nto the trash. You can restore them later from the trash panel.`,
            'Move to Trash',
            'Cancel'
        );
        if (shouldDelete) {
            // Get the saved data for the current day
            const todosData = JSON.parse(localStorage.getItem(`dailyTodos_${dateKey}`) || '{}');
            const trashData = JSON.parse(localStorage.getItem('dailyTodos_trash') || '[]');
            
            let itemCount = 0;
            
            // Process main columns
            ['todo', 'inProgress', 'done'].forEach(column => {
                if (todosData[column] && Array.isArray(todosData[column])) {
                    todosData[column].forEach(item => {
                        const newTrashItem = {
                            id: `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                            itemId: item.id,
                            text: item.text,
                            createdAt: item.createdAt,
                            sectionId: null,
                            sectionName: null,
                            dueDate: item.dueDate || null,
                            highPriority: item.highPriority || false,
                            recurringTaskId: item.recurringTaskId || null,
                            panel: 'todo',
                            originalColumnType: column,
                            deletedAt: new Date().toISOString(),
                            originalDate: this.currentDate.toISOString().split('T')[0]
                        };
                        trashData.push(newTrashItem);
                        itemCount++;
                    });
                }
            });
            
            // Process sections
            if (todosData.sections && typeof todosData.sections === 'object') {
                Object.entries(todosData.sections).forEach(([sectionId, section]) => {
                    ['todo', 'inProgress', 'done'].forEach(column => {
                        if (section[column] && Array.isArray(section[column])) {
                            section[column].forEach(item => {
                                const sectionName = todosData.sectionNames && todosData.sectionNames[sectionId] 
                                    ? todosData.sectionNames[sectionId] 
                                    : this.getSectionName(sectionId);
                                const newTrashItem = {
                                    id: `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                                    itemId: item.id,
                                    text: item.text,
                                    createdAt: item.createdAt,
                                    sectionId: sectionId,
                                    sectionName: sectionName,
                                    dueDate: item.dueDate || null,
                                    highPriority: item.highPriority || false,
                                    recurringTaskId: item.recurringTaskId || null,
                                    panel: 'todo',
                                    originalColumnType: column,
                                    deletedAt: new Date().toISOString(),
                                    originalDate: this.currentDate.toISOString().split('T')[0]
                                };
                                trashData.push(newTrashItem);
                                itemCount++;
                            });
                        }
                    });
                });
            }
            
            if (itemCount === 0) {
                this.showFeedback('No items to move to trash');
                return;
            }
            
            // Capture state for undo
            this.captureStateForUndo('deleteDay', `Move all items from ${dateDisplay} to trash`);
            
            // Clear the day's data and save trash
            localStorage.removeItem(`dailyTodos_${dateKey}`);
            localStorage.setItem('dailyTodos_trash', JSON.stringify(trashData));
            
            // Reload the current view
            this.loadTodosForDate();
            this.updateCalendarColors();
            
            this.showFeedback(`Moved ${itemCount} item${itemCount !== 1 ? 's' : ''} from ${dateDisplay} to trash`);
        }
    }
    
    async deleteCurrentWeek() {
        // Get start of week (Sunday)
        const weekStart = new Date(this.currentDate);
        const dayOfWeek = weekStart.getDay();
        weekStart.setDate(weekStart.getDate() - dayOfWeek);
        
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            weekDates.push(date);
        }
        
        const weekRange = `${weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekDates[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
        
        const shouldDelete = await this.showCustomConfirm(
            `⚠️ MOVE WEEK TO TRASH?\n\nThis will move all todos for the week:\n${weekRange}\n\nto the trash. You can restore them later from the trash panel.`,
            'Move to Trash',
            'Cancel'
        );
        if (shouldDelete) {
            // Capture state for undo
            this.captureStateForUndo('deleteWeek', `Move all items from week ${weekRange} to trash`);
            
            const trashData = JSON.parse(localStorage.getItem('dailyTodos_trash') || '[]');
            let totalItemsMoved = 0;
            
            // Process each day of the week
            for (const date of weekDates) {
                const dateKey = date.toISOString().split('T')[0];
                const todosData = JSON.parse(localStorage.getItem(`dailyTodos_${dateKey}`) || '{}');
                
                // Process main columns
                ['todo', 'inProgress', 'done'].forEach(column => {
                    if (todosData[column] && Array.isArray(todosData[column])) {
                        todosData[column].forEach(item => {
                            const newTrashItem = {
                                id: `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                                itemId: item.id,
                                text: item.text,
                                createdAt: item.createdAt,
                                sectionId: null,
                                sectionName: null,
                                dueDate: item.dueDate || null,
                                highPriority: item.highPriority || false,
                                recurringTaskId: item.recurringTaskId || null,
                                panel: 'todo',
                                originalColumnType: column,
                                deletedAt: new Date().toISOString(),
                                originalDate: dateKey
                            };
                            trashData.push(newTrashItem);
                            totalItemsMoved++;
                        });
                    }
                });
                
                // Process sections
                if (todosData.sections && typeof todosData.sections === 'object') {
                    Object.entries(todosData.sections).forEach(([sectionId, section]) => {
                        ['todo', 'inProgress', 'done'].forEach(column => {
                            if (section[column] && Array.isArray(section[column])) {
                                section[column].forEach(item => {
                                    const sectionName = todosData.sectionNames && todosData.sectionNames[sectionId] 
                                        ? todosData.sectionNames[sectionId] 
                                        : this.getSectionName(sectionId);
                                    const newTrashItem = {
                                        id: `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                                        itemId: item.id,
                                        text: item.text,
                                        createdAt: item.createdAt,
                                        sectionId: sectionId,
                                        sectionName: sectionName,
                                        dueDate: item.dueDate || null,
                                        highPriority: item.highPriority || false,
                                        recurringTaskId: item.recurringTaskId || null,
                                        panel: 'todo',
                                        originalColumnType: column,
                                        deletedAt: new Date().toISOString(),
                                        originalDate: dateKey
                                    };
                                    trashData.push(newTrashItem);
                                    totalItemsMoved++;
                                });
                            }
                        });
                    });
                }
                
                // Clear this day's data if any items were moved
                if (localStorage.getItem(`dailyTodos_${dateKey}`)) {
                    localStorage.removeItem(`dailyTodos_${dateKey}`);
                }
            }
            
            // Save updated trash data
            localStorage.setItem('dailyTodos_trash', JSON.stringify(trashData));
            
            // Reload the current view
            this.loadTodosForDate();
            this.updateCalendarColors();
            
            if (totalItemsMoved > 0) {
                this.showFeedback(`Moved ${totalItemsMoved} item${totalItemsMoved !== 1 ? 's' : ''} from week ${weekRange} to trash`);
            } else {
                this.showFeedback('No items to move to trash for this week');
            }
        }
    }
    
    async deleteAllData() {
        const allKeys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('dailyTodos_') && key !== 'dailyTodos_notes' && key !== 'dailyTodos_whiteboard') {
                allKeys.push(key);
            }
        }
        
        if (allKeys.length === 0) {
            alert('No todo data to delete.');
            return;
        }
        
        const shouldDelete = await this.showCustomConfirm(
            `⚠️ DELETE ALL TODO DATA?\n\nThis will permanently delete ALL your todos from ALL days (${allKeys.length} days total).\n\nThis action cannot be undone and will clear your entire todo history.\n\nNotes and sketches will remain intact.`,
            'Delete All Todos',
            'Keep Todos'
        );
        if (shouldDelete) {
            const finalConfirm = await this.showCustomConfirm(
                `🚨 FINAL CONFIRMATION\n\nYou are about to delete ${allKeys.length} days of todo data.\n\nTHIS WILL DELETE ALL TODO ITEMS!\n\nNotes and sketches will be preserved.`,
                'Yes, Delete All Todos',
                'No, Keep Todos'
            );
            if (finalConfirm) {
                allKeys.forEach(key => localStorage.removeItem(key));
                // Also delete global data
                localStorage.removeItem('globalUnsortedItems');
                localStorage.removeItem('dailyTodos_trash');
                localStorage.removeItem('recurringTasks');
                localStorage.removeItem('backburnerItems');
                // Note: NOT deleting notes and whiteboard - those stay intact
                this.loadTodosForDate();
                this.loadTrashItems();
                this.loadRecurringTasks();
                this.loadBackburnerItems();
                // Note: NOT reloading notes and whiteboard since we didn't delete them
                this.updateStatistics();
                this.showFeedback(`Deleted all todo data (${allKeys.length} days + all todo items). Notes and sketches preserved.`);
            }
        }
    }
    
    async clearAllStorage() {
        const totalItems = localStorage.length;
        
        if (totalItems === 0) {
            alert('Local storage is already empty.');
            return;
        }
        
        const shouldClear = await this.showCustomConfirm(
            `⚠️ CLEAR ALL LOCAL STORAGE?\n\nThis will permanently delete ALL data stored by this tab, including:\n- All todo data (${totalItems} items total)\n- Settings and preferences\n- Notes and sketches\n- Any other stored data\n\nThis action cannot be undone and will reset the app to a fresh state.`,
            'Clear All Storage',
            'Keep Storage'
        );
        if (shouldClear) {
            const finalConfirm = await this.showCustomConfirm(
                `🚨 FINAL CONFIRMATION\n\nYou are about to clear ALL ${totalItems} items from local storage.\n\nTHIS WILL DELETE EVERYTHING AND RESET THE APP!`,
                'Yes, Clear Everything',
                'No, Keep Data'
            );
            if (finalConfirm) {
                localStorage.clear();
                location.reload(); // Reload the page to reset the app state
            } else {
                this.showFeedback('Storage clear cancelled - all data preserved');
            }
        }
    }
    
    async emptyTrash() {
        // Get all visible items from the current panel
        let allItems = [];
        let panelName = '';
        
        if (!this.todoPanel.classList.contains('hidden')) {
            // Todo panel is active - get all todo items
            allItems = Array.from(document.querySelectorAll('.todo-item:not(.trash-item)'));
            panelName = 'todo';
        } else if (!this.backburnerPanel.classList.contains('hidden')) {
            // Backburner panel is active - get all backburner items
            allItems = Array.from(document.querySelectorAll('.todo-item:not(.trash-item)'));
            panelName = 'backburner';
        } else if (!this.trashPanel.classList.contains('hidden')) {
            // Trash panel is active - permanently delete all trash items (original behavior)
            const trashData = localStorage.getItem('dailyTodos_trash');
            
            if (!trashData) {
                alert('Trash is already empty.');
                return;
            }
            
            const trashItems = JSON.parse(trashData);
            const itemCount = trashItems.length;
            
            if (itemCount === 0) {
                alert('Trash is already empty.');
                return;
            }
            
            this.showCustomConfirm(
                `Empty trash and permanently delete ${itemCount} item${itemCount !== 1 ? 's' : ''}?\n\n⚠️ This action cannot be undone.`,
                'Empty Trash',
                'Keep Items'
            ).then((shouldEmpty) => {
                if (shouldEmpty) {
                    this.captureStateForUndo('empty_trash', `Empty trash (${itemCount} items)`);
                    
                    // Clear localStorage
                    localStorage.removeItem('dailyTodos_trash');
                    
                    // Clear DOM elements
                    this.trashColumns.innerHTML = '<div class="panel-content" style="text-align: center; color: #7f8c8d; padding: 40px;"> </div>';
                    
                    this.updateAllItemCounts();
                    this.showFeedback(`Emptied trash - deleted ${itemCount} item${itemCount !== 1 ? 's' : ''}`);
                }
            });
            return;
        }
        
        if (allItems.length === 0) {
            alert('No items to move to trash.');
            return;
        }
        
        const shouldMove = await this.showCustomConfirm(
            `⚠️ Move All Items to Trash?\n\nThis will move all ${allItems.length} visible item${allItems.length !== 1 ? 's' : ''} to the trash.\n\nThey can be restored from the trash if needed.`,
            'Move to Trash',
            'Keep Items'
        );
        if (shouldMove) {
            this.captureStateForUndo('move_all_to_trash', `Move all ${allItems.length} ${panelName} items to trash`);
            
            // Move all items to trash using the same logic as individual items
            // Create a copy of the array since moveItemToTrash removes items from DOM during iteration
            const itemsToMove = [...allItems];
            itemsToMove.forEach(item => {
                this.moveItemToTrash(item);
            });
            
            this.showFeedback(`Moved ${allItems.length} item${allItems.length !== 1 ? 's' : ''} to trash`);
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Convert URLs in text to clickable links
    linkifyText(text) {
        // Skip if text already contains HTML links (already processed)
        if (text.includes('<a href=') || text.includes('class="todo-link"')) {
            return text;
        }
        
        // First escape HTML to prevent XSS
        const escaped = this.escapeHtml(text);
        
        // URL regex pattern that matches http(s), www, and domain.com patterns
        const urlPattern = /(\b(?:https?:\/\/\S+|www\.\S+|[a-zA-Z0-9][a-zA-Z0-9-]*\.[a-zA-Z]{2,}(?:\/\S*)?))/gi;
        
        return escaped.replace(urlPattern, (url) => {
            // Ensure the URL has a protocol
            let href = url;
            if (!url.match(/^https?:\/\//i)) {
                href = 'http://' + url;
            }
            
            // Truncate display text for long URLs
            let displayText = "[LINK]"; // url
            //const maxLength = 20; // Adjust this value as needed
            //if (url.length > maxLength) {
            //    displayText = url.substring(0, maxLength - 3) + ' .....';
            //}
            
            // Create clickable link that opens in current browser tab
            return `<a href="${href}" class="todo-link" rel="noopener noreferrer" title="${href}">${displayText}</a>`;
        });
    }
    
    // Get original text from item for serialization (preserves links in saved data)
    getItemText(item) {
        // Use original text if available, fallback to textContent for backward compatibility
        return item.dataset.originalText || item.querySelector('.todo-text').textContent;
    }
    
    setupDragAndDrop() {
        const columns = [this.unsortedItems, this.backburnerUnsortedItems, this.todoItems, this.inProgressItems, this.doneItems];
        
        columns.forEach(column => {
            column.addEventListener('dragover', this.handleDragOver.bind(this));
            column.addEventListener('drop', this.handleDrop.bind(this));
            column.addEventListener('dragenter', this.handleDragEnter.bind(this));
            column.addEventListener('dragleave', this.handleDragLeave.bind(this));
        });
        
        // Also add drag handlers to the column containers themselves
        const columnContainers = document.querySelectorAll('.column');
        columnContainers.forEach(column => {
            column.addEventListener('dragover', this.handleDragOver.bind(this));
            column.addEventListener('drop', this.handleDrop.bind(this));
            column.addEventListener('dragenter', this.handleDragEnter.bind(this));
            column.addEventListener('dragleave', this.handleDragLeave.bind(this));
        });
        
        // Also add handlers to all unsorted panes (TODO and backburner)
        const unsortedPanes = document.querySelectorAll('.unsorted-pane');
        unsortedPanes.forEach(pane => {
            pane.addEventListener('dragover', this.handleDragOver.bind(this));
            pane.addEventListener('drop', this.handleDrop.bind(this));
            pane.addEventListener('dragenter', this.handleDragEnter.bind(this));
            pane.addEventListener('dragleave', this.handleDragLeave.bind(this));
        });
        
        // Note: Trash columns are set up individually in createTrashColumn()
    }
    
    handleDragStart(e) {
        // Check if the drag started from the text area - if so, prevent dragging to allow text selection
        if (e.target.classList.contains('todo-text') || e.target.closest('.todo-text')) {
            e.preventDefault();
            return false;
        }
        
        // Get the actual todo item if drag started from child elements
        const todoItem = e.target.closest('.todo-item');
        if (todoItem) {
            e.dataTransfer.setData('text/plain', todoItem.id);
            todoItem.classList.add('dragging');
            // Stop propagation to prevent section drag from interfering
            e.stopPropagation();
            
            // Fix for Electron: Set dropEffect to move
            e.dataTransfer.effectAllowed = 'move';
            
            // Start auto-scroll functionality
            document.addEventListener('dragover', this.handleAutoScrollDragOver.bind(this));
        }
    }
    
    handleDragEnd(e) {
        const todoItem = e.target.closest('.todo-item');
        if (todoItem) {
            todoItem.classList.remove('dragging');
        }
        
        // Clean up any lingering drag-over classes
        document.querySelectorAll('.drag-over').forEach(element => {
            element.classList.remove('drag-over');
        });
        document.querySelectorAll('.drag-over-later-return').forEach(element => {
            element.classList.remove('drag-over-later-return');
        });
        
        // Stop auto-scroll functionality
        this.stopAutoScroll();
        document.removeEventListener('dragover', this.handleAutoScrollDragOver.bind(this));
        
        // Fix for Electron: Ensure text inputs remain interactive after drag
        // Remove any drag-related attributes that might interfere
        document.querySelectorAll('[draggable]').forEach(el => {
            if (el.hasAttribute('draggable')) {
                el.setAttribute('draggable', 'true');
            }
        });
        
        // Force a reflow to ensure the DOM updates properly
        void document.body.offsetHeight;
        
        // Re-enable pointer events on all interactive elements
        document.querySelectorAll('input, textarea, button, select').forEach(el => {
            el.style.pointerEvents = '';
            el.style.userSelect = '';
        });
    }
    
    handleDragOver(e) {
        e.preventDefault();
    }
    
    handleAutoScrollDragOver(e) {
        e.preventDefault();
        // Update mouse position for auto-scroll
        this.currentMouseY = e.clientY;
        this.currentMouseX = e.clientX;
        
        // Start auto-scroll if not already running
        if (!this.autoScrollInterval) {
            this.startAutoScroll(e);
        }
    }
    
    handleDragEnter(e) {
        e.preventDefault();
        if (e.target.classList.contains('items')) {
            e.target.parentElement.classList.add('drag-over');
            
            // Special hover indicator when moving from backburner section "later" column to main "later" bar
            const draggedItem = document.querySelector('.todo-item.dragging');
            if (draggedItem) {
                const draggedFromBackburnerSection = draggedItem.closest('.section-row[data-panel="backburner"]') && 
                                                   draggedItem.closest('.section-todo');
                const droppingOnMainBackburnerBar = e.target.id === 'backburnerUnsortedItems';
                
                if (draggedFromBackburnerSection && droppingOnMainBackburnerBar) {
                    e.target.parentElement.classList.add('drag-over-later-return');
                }
            }
        }
    }
    
    handleDragLeave(e) {
        if (e.target.classList.contains('items') && !e.target.contains(e.relatedTarget)) {
            e.target.parentElement.classList.remove('drag-over');
            e.target.parentElement.classList.remove('drag-over-later-return');
        }
    }
    
    handleDrop(e) {
        e.preventDefault();
        const itemId = e.dataTransfer.getData('text/plain');
        const draggedItem = document.getElementById(itemId);
        
        // Check if draggedItem exists
        if (!draggedItem) {
            console.warn('Dragged item not found:', itemId);
            return;
        }
        
        // Find the items container - could be direct target or need to look up the DOM tree
        let itemsContainer = null;
        if (e.target.classList.contains('items')) {
            itemsContainer = e.target;
        } else if (e.target.classList.contains('todo-item') || e.target.closest('.todo-item')) {
            // Dropped onto a todo item - find the parent items container
            itemsContainer = e.target.closest('.items');
        } else if (e.target.classList.contains('column')) {
            // Dropped onto the column itself - find the items container within it
            itemsContainer = e.target.querySelector('.items');
        } else if (e.target.closest('.column')) {
            // Dropped onto some element within a column - find the items container
            const column = e.target.closest('.column');
            itemsContainer = column.querySelector('.items');
        } else if (e.target.classList.contains('unsorted-pane') || e.target.closest('.unsorted-pane')) {
            // Dropped onto the unsorted pane - find the items container within it
            const unsortedPane = e.target.classList.contains('unsorted-pane') ? e.target : e.target.closest('.unsorted-pane');
            itemsContainer = unsortedPane.querySelector('.items');
        }
        
        if (itemsContainer) {
            // Check if item is being moved from trash to main columns
            const wasInTrash = draggedItem.classList.contains('trash-item');
            const isMovingToMainColumn = itemsContainer !== this.trashItems;
            
            if (wasInTrash && isMovingToMainColumn) {
                // Capture state for undo
                const text = this.getItemText(draggedItem);
                this.captureStateForUndo('restore_from_trash', `Restore "${text.substring(0, 30)}${text.length > 30 ? '...' : ''}" from trash`);
                
                // Convert trash item back to regular todo item, preserving all original data
                const createdAt = draggedItem.dataset.createdAt;
                const sectionId = draggedItem.dataset.sectionId;
                const itemId = draggedItem.dataset.itemId;
                const dueDate = draggedItem.dataset.dueDate;
                const isHighPriority = draggedItem.dataset.highPriority === 'true';
                const recurringTaskId = draggedItem.dataset.recurringTaskId;
                const newItem = this.createTodoItem(text, null, createdAt, sectionId, itemId, dueDate, 'todo', isHighPriority, recurringTaskId);
                
                // Replace the trash item with a proper todo item (insert by priority)
                const todoDataTrash = {
                    urgent: false,  // No urgent support yet
                    highPriority: isHighPriority,
                    createdAt: createdAt
                };
                this.insertItemByPriority(itemsContainer, newItem, todoDataTrash);
                
                // Reapply due date styling for the new item
                this.applyDueDateStyling(newItem);
                
                draggedItem.remove();
                
                // Update trash storage
                this.saveTrashItems();
            } else {
                // Normal drag and drop - Store original section info for cleanup check
                const originalSectionId = draggedItem.dataset.sectionId;
                const originalPanel = draggedItem.dataset.panel || 'todo';
                
                // Determine destination section info
                const targetSectionColumn = itemsContainer.closest('.section-column');
                const targetSectionElement = targetSectionColumn ? targetSectionColumn.closest('[data-section-id]') : null;
                const newSectionId = targetSectionElement ? targetSectionElement.dataset.sectionId : null;
                
                // Update section association
                if (newSectionId) {
                    // Moving to a section
                    draggedItem.dataset.sectionId = newSectionId;
                } else {
                    // Moving to main column - remove section association
                    delete draggedItem.dataset.sectionId;
                }
                
                
                // Insert by priority instead of just appending
                const todoData = this.getTodoDataFromItem(draggedItem);
                this.insertItemByPriority(itemsContainer, draggedItem, todoData);
                
                // Check if original section needs cleanup (if item came from a different section)
                if (originalSectionId && originalSectionId !== newSectionId) {
                    // Determine if the original section was a backburner section
                    const originalSection = document.querySelector(`[data-section-id="${originalSectionId}"]`);
                    if (originalSection && originalSection.dataset.panel === 'backburner') {
                        this.checkAndCleanupEmptyBackburnerSection(originalSectionId);
                    } else {
                        this.checkAndCleanupEmptySection(originalSectionId);
                    }
                }
            }
            
            // Reapply due date styling since item may have moved to/from done column
            this.applyDueDateStyling(draggedItem);
            
            e.target.parentElement.classList.remove('drag-over');
            
            // If dropped in trash, save to trash storage, otherwise save to appropriate panel storage
            if (e.target === this.trashItems) {
                this.saveTrashItems();
                this.saveTodosForDate(); // Also update current day to remove from active items
                this.updateCalendarColors();
            } else {
                // Check if dropped in backburner area (main unsorted items or any backburner section)
                const isInBackburnerPanel = itemsContainer === this.backburnerUnsortedItems || 
                                          itemsContainer.closest('#backburnerPanel') ||
                                          itemsContainer.closest('#centerSectionBackburner') ||
                                          itemsContainer.closest('[data-panel="backburner"]');
                
                if (isInBackburnerPanel) {
                    // Update item panel when moved to backburner
                    draggedItem.dataset.panel = 'backburner';
                    // Update button in item if needed
                    const actions = draggedItem.querySelector('.item-actions');
                    const backburnerBtn = actions.querySelector('.backburner-btn');
                    if (backburnerBtn) {
                        backburnerBtn.outerHTML = '<button class="todo-btn" title="Move to today">📋</button>';
                        const todoBtn = actions.querySelector('.todo-btn');
                        todoBtn.addEventListener('click', () => {
                            this.moveItemToTodo(draggedItem);
                        });
                    }
                    this.saveBackburnerItems();
                } else {
                    // Update item panel when moved to TODO
                    draggedItem.dataset.panel = 'todo';
                    // Update button in item if needed
                    const actions = draggedItem.querySelector('.item-actions');
                    const todoBtn = actions.querySelector('.todo-btn');
                    if (todoBtn) {
                        todoBtn.outerHTML = '<button class="backburner-btn" title="Move to backburner">🔥</button>';
                        const backburnerBtn = actions.querySelector('.backburner-btn');
                        backburnerBtn.addEventListener('click', () => {
                            this.moveItemToBackburner(draggedItem);
                        });
                    }
                    this.saveTodosForDate();
                    this.updateCalendarColors();
                }
                // Trash is already saved above if item was restored from trash
            }
            
            this.updateAllItemCounts();
        }
        
        // Clean up any lingering drag-over classes after drop
        document.querySelectorAll('.drag-over').forEach(element => {
            element.classList.remove('drag-over');
        });
        document.querySelectorAll('.drag-over-later-return').forEach(element => {
            element.classList.remove('drag-over-later-return');
        });
    }
    
    handleWeekButtonDragOver(e) {
        e.preventDefault();
    }
    
    handleWeekButtonDragEnter(e) {
        e.preventDefault();
        // Find the button element (might be a child element that triggered the event)
        const button = e.target.closest('.week-day-btn') || e.target;
        button.classList.add('drag-over');
    }
    
    handleWeekButtonDragLeave(e) {
        // Find the button element (might be a child element that triggered the event)
        const button = e.target.closest('.week-day-btn') || e.target;
        if (!button.contains(e.relatedTarget)) {
            button.classList.remove('drag-over');
        }
    }
    
    handleWeekButtonDrop(e, targetDate) {
        e.preventDefault();
        // Find the button element (might be a child element that triggered the event)
        const button = e.target.closest('.week-day-btn') || e.target;
        button.classList.remove('drag-over');
        
        const dragData = e.dataTransfer.getData('text/plain');
        
        // Check if we're dragging a section
        if (dragData.startsWith('section:')) {
            const sectionId = dragData.replace('section:', '');
            this.moveSectionToDate(sectionId, targetDate);
            return;
        }
        
        // Handle regular item drag
        const draggedItem = document.getElementById(dragData);
        
        if (draggedItem) {
            const text = this.getItemText(draggedItem);
            let columnType = this.getColumnType(draggedItem);
            
            // Convert 'unsorted' to 'todo' when moving from New Items to dates
            if (columnType === 'unsorted') {
                columnType = 'todo';
            }
            
            // Preserve section association when moving to different dates via week buttons
            const sectionId = draggedItem.dataset.sectionId || null;
            const sectionName = sectionId ? this.getSectionName(sectionId) : null;
            
            // Add to target date with appropriate column type
            const dueDate = draggedItem.dataset.dueDate || null;
            const createdAt = draggedItem.dataset.createdAt || new Date().toISOString();
            const itemId = draggedItem.dataset.itemId;
            const isHighPriority = draggedItem.dataset.highPriority === 'true';
            const recurringTaskId = draggedItem.dataset.recurringTaskId || null;
            this.addItemToDate(text, columnType, targetDate, sectionId, dueDate, createdAt, itemId, sectionName, isHighPriority, 'todo', recurringTaskId);
            
            // Remove from current date
            draggedItem.remove();
            
            // Check if the original section needs cleanup (only for items in sections)
            if (sectionId) {
                this.checkAndCleanupEmptySection(sectionId);
            }
            
            this.saveTodosForDate();
            
            // Update calendar colors for both current date and target date
            this.updateCalendarColors();
            
            const dateStr = this.formatDateShort(targetDate);
            this.showFeedback(`Moved to ${dateStr}`);
        }
    }
    
    handleTodayButtonDrop(e) {
        e.preventDefault();
        // Find the button element (might be a child element that triggered the event)
        const button = e.target.closest('.today-nav-btn') || e.target;
        button.classList.remove('drag-over');
        
        const dragData = e.dataTransfer.getData('text/plain');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Check if we're dragging a section
        if (dragData.startsWith('section:')) {
            const sectionId = dragData.replace('section:', '');
            this.moveSectionToDate(sectionId, today);
            return;
        }
        
        // Handle regular item drag
        const draggedItem = document.getElementById(dragData);
        
        if (draggedItem) {
            const text = this.getItemText(draggedItem);
            let columnType = this.getColumnType(draggedItem);
            
            // Convert 'unsorted' to 'todo' when moving from New Items to dates
            if (columnType === 'unsorted') {
                columnType = 'todo';
            }
            
            // Preserve section association when moving to different dates via buttons
            const sectionId = draggedItem.dataset.sectionId || null;
            const sectionName = sectionId ? this.getSectionName(sectionId) : null;
            
            // Add to today with appropriate column type
            const dueDate = draggedItem.dataset.dueDate || null;
            const createdAt = draggedItem.dataset.createdAt || new Date().toISOString();
            const itemId = draggedItem.dataset.itemId;
            const isHighPriority = draggedItem.dataset.highPriority === 'true';
            const recurringTaskId = draggedItem.dataset.recurringTaskId || null;
            this.addItemToDate(text, columnType, today, sectionId, dueDate, createdAt, itemId, sectionName, isHighPriority, 'todo', recurringTaskId);
            
            // Remove from current date
            draggedItem.remove();
            
            // Check if the original section needs cleanup (only for items in sections)
            if (sectionId) {
                this.checkAndCleanupEmptySection(sectionId);
            }
            
            this.saveTodosForDate();
            
            this.showFeedback('Moved to today');
        }
    }
    
    handleNextWeekButtonDrop(e) {
        e.preventDefault();
        // Find the button element (might be a child element that triggered the event)
        const button = e.target.closest('.next-week-btn') || e.target;
        button.classList.remove('drag-over');
        
        const dragData = e.dataTransfer.getData('text/plain');
        // Fix Sunday edge case: if current day is Sunday, we need to add 8 days to get to next Monday
        // otherwise 7 days is correct
        const currentDay = this.currentDate.getDay();
        const daysToAdd = currentDay === 0 ? 8 : 7; // Sunday = 0
        const nextWeekMonday = this.getMondayOfWeek(new Date(this.currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000));
        
        // Check if we're dragging a section
        if (dragData.startsWith('section:')) {
            const sectionId = dragData.replace('section:', '');
            this.moveSectionToDate(sectionId, nextWeekMonday);
            return;
        }
        
        // Handle regular item drag
        const draggedItem = document.getElementById(dragData);
        
        if (draggedItem) {
            const text = this.getItemText(draggedItem);
            let columnType = this.getColumnType(draggedItem);
            
            // Convert 'unsorted' to 'todo' when moving from New Items to dates
            if (columnType === 'unsorted') {
                columnType = 'todo';
            }
            
            // Preserve section association when moving to different dates via buttons
            const sectionId = draggedItem.dataset.sectionId || null;
            const sectionName = sectionId ? this.getSectionName(sectionId) : null;
            
            // Add to next week with appropriate column type
            const dueDate = draggedItem.dataset.dueDate || null;
            const createdAt = draggedItem.dataset.createdAt || new Date().toISOString();
            const itemId = draggedItem.dataset.itemId;
            const isHighPriority = draggedItem.dataset.highPriority === 'true';
            const recurringTaskId = draggedItem.dataset.recurringTaskId || null;
            this.addItemToDate(text, columnType, nextWeekMonday, sectionId, dueDate, createdAt, itemId, sectionName, isHighPriority, 'todo', recurringTaskId);
            
            // Remove from current date
            draggedItem.remove();
            this.saveTodosForDate();
            this.updateCalendarColors();
            
            this.showFeedback('Moved to next week Monday');
        }
    }
    
    handleLastWeekButtonDrop(e) {
        e.preventDefault();
        // Find the button element (might be a child element that triggered the event)
        const button = e.target.closest('.last-week-btn') || e.target;
        button.classList.remove('drag-over');
        
        const dragData = e.dataTransfer.getData('text/plain');
        const lastWeekMonday = this.getMondayOfWeek(new Date(this.currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
        
        // Check if we're dragging a section
        if (dragData.startsWith('section:')) {
            const sectionId = dragData.replace('section:', '');
            this.moveSectionToDate(sectionId, lastWeekMonday);
            return;
        }
        
        // Handle regular item drag
        const draggedItem = document.getElementById(dragData);
        
        if (draggedItem) {
            const text = this.getItemText(draggedItem);
            let columnType = this.getColumnType(draggedItem);
            
            // Convert 'unsorted' to 'todo' when moving from New Items to dates
            if (columnType === 'unsorted') {
                columnType = 'todo';
            }
            
            // Preserve section association when moving to different dates via buttons
            const sectionId = draggedItem.dataset.sectionId || null;
            const sectionName = sectionId ? this.getSectionName(sectionId) : null;
            
            // Add to last week with appropriate column type
            const dueDate = draggedItem.dataset.dueDate || null;
            const createdAt = draggedItem.dataset.createdAt || new Date().toISOString();
            const itemId = draggedItem.dataset.itemId;
            const isHighPriority = draggedItem.dataset.highPriority === 'true';
            const recurringTaskId = draggedItem.dataset.recurringTaskId || null;
            this.addItemToDate(text, columnType, lastWeekMonday, sectionId, dueDate, createdAt, itemId, sectionName, isHighPriority, 'todo', recurringTaskId);
            
            // Remove from current date
            draggedItem.remove();
            this.saveTodosForDate();
            this.updateCalendarColors();
            
            this.showFeedback('Moved to last week Monday');
        }
    }
    
    handleNextDayButtonDrop(e) {
        e.preventDefault();
        // Find the button element (might be a child element that triggered the event)
        const button = e.target.closest('.next-day-btn') || e.target;
        button.classList.remove('drag-over');
        
        const dragData = e.dataTransfer.getData('text/plain');
        const nextDay = new Date(this.currentDate);
        nextDay.setDate(nextDay.getDate() + 1);
        
        // Check if we're dragging a section
        if (dragData.startsWith('section:')) {
            const sectionId = dragData.replace('section:', '');
            this.moveSectionToDate(sectionId, nextDay);
            return;
        }
        
        // Handle regular item drag
        const draggedItem = document.getElementById(dragData);
        
        if (draggedItem) {
            const text = this.getItemText(draggedItem);
            let columnType = this.getColumnType(draggedItem);
            
            // Convert 'unsorted' to 'todo' when moving from New Items to dates
            if (columnType === 'unsorted') {
                columnType = 'todo';
            }
            
            // Preserve section association when moving to different dates via buttons
            const sectionId = draggedItem.dataset.sectionId || null;
            const sectionName = sectionId ? this.getSectionName(sectionId) : null;
            
            // Add to next day with appropriate column type
            const dueDate = draggedItem.dataset.dueDate || null;
            const createdAt = draggedItem.dataset.createdAt || new Date().toISOString();
            const itemId = draggedItem.dataset.itemId;
            const isHighPriority = draggedItem.dataset.highPriority === 'true';
            const recurringTaskId = draggedItem.dataset.recurringTaskId || null;
            this.addItemToDate(text, columnType, nextDay, sectionId, dueDate, createdAt, itemId, sectionName, isHighPriority, 'todo', recurringTaskId);
            
            // Remove from current date
            draggedItem.remove();
            this.saveTodosForDate();
            this.updateCalendarColors();
            
            this.showFeedback('Moved to next day');
        }
    }
    
    handleLastDayButtonDrop(e) {
        e.preventDefault();
        // Find the button element (might be a child element that triggered the event)
        const button = e.target.closest('.last-day-btn') || e.target;
        button.classList.remove('drag-over');
        
        const dragData = e.dataTransfer.getData('text/plain');
        const lastDay = new Date(this.currentDate);
        lastDay.setDate(lastDay.getDate() - 1);
        
        // Check if we're dragging a section
        if (dragData.startsWith('section:')) {
            const sectionId = dragData.replace('section:', '');
            this.moveSectionToDate(sectionId, lastDay);
            return;
        }
        
        // Handle regular item drag
        const draggedItem = document.getElementById(dragData);
        
        if (draggedItem) {
            const text = this.getItemText(draggedItem);
            let columnType = this.getColumnType(draggedItem);
            
            // Convert 'unsorted' to 'todo' when moving from New Items to dates
            if (columnType === 'unsorted') {
                columnType = 'todo';
            }
            
            // Preserve section association when moving to different dates via buttons
            const sectionId = draggedItem.dataset.sectionId || null;
            const sectionName = sectionId ? this.getSectionName(sectionId) : null;
            
            // Add to last day with appropriate column type
            const dueDate = draggedItem.dataset.dueDate || null;
            const createdAt = draggedItem.dataset.createdAt || new Date().toISOString();
            const itemId = draggedItem.dataset.itemId;
            const isHighPriority = draggedItem.dataset.highPriority === 'true';
            const recurringTaskId = draggedItem.dataset.recurringTaskId || null;
            this.addItemToDate(text, columnType, lastDay, sectionId, dueDate, createdAt, itemId, sectionName, isHighPriority, 'todo', recurringTaskId);
            
            // Remove from current date
            draggedItem.remove();
            this.saveTodosForDate();
            this.updateCalendarColors();
            
            this.showFeedback('Moved to last day');
        }
    }
    
    moveItemToTrash(item) {
        const text = this.getItemText(item);
        this.captureStateForUndo('delete', `Delete "${text}"`);
        
        const createdAt = item.dataset.createdAt;
        const itemId = item.dataset.itemId;
        const sectionId = item.dataset.sectionId;
        const dueDate = item.dataset.dueDate;
        const isHighPriority = item.dataset.highPriority === 'true';
        const recurringTaskId = item.dataset.recurringTaskId;
        const panel = item.dataset.panel || 'todo';
        const originalColumnType = this.getColumnType(item); // Store which column it came from
        
        // Instead of creating DOM element, directly add to localStorage
        const trashData = JSON.parse(localStorage.getItem('dailyTodos_trash') || '[]');
        
        const newTrashItem = {
            id: `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            itemId: itemId,
            text: text,
            createdAt: createdAt,
            sectionId: sectionId || null,
            dueDate: dueDate || null,
            highPriority: isHighPriority,
            recurringTaskId: recurringTaskId || null,
            panel: panel,
            originalColumnType: originalColumnType, // Store the original column
            deletedAt: new Date().toISOString(),
            originalDate: panel === 'backburner' ? 'backburner' : this.currentDate.toISOString().split('T')[0] // Store the date it was deleted from or 'backburner'
        };
        
        trashData.push(newTrashItem);
        localStorage.setItem('dailyTodos_trash', JSON.stringify(trashData));
        
        item.remove();
        
        // Check if the original section needs cleanup
        if (sectionId) {
            if (panel === 'backburner') {
                this.checkAndCleanupEmptyBackburnerSection(sectionId);
            } else {
                this.checkAndCleanupEmptySection(sectionId);
            }
        }
        
        // Save the appropriate panel
        if (panel === 'backburner') {
            this.saveBackburnerItems();
        } else {
            this.saveTodosForDate();
            this.updateCalendarColors();
        }
        
        // If trash panel is currently visible, reorganize it
        if (!this.trashPanel.classList.contains('hidden')) {
            this.organizeTrashByTime();
        }
        
        this.updateAllItemCounts();
        this.showFeedback('Moved to trash');
    }
    
    restoreItemFromTrash(trashItem) {
        const text = this.getItemText(trashItem);
        const itemId = trashItem.dataset.itemId;
        const sectionId = trashItem.dataset.sectionId;
        const createdAt = trashItem.dataset.createdAt;
        const dueDate = trashItem.dataset.dueDate;
        const isHighPriority = trashItem.dataset.highPriority === 'true';
        const originalDate = trashItem.dataset.originalDate;
        const originalColumnType = trashItem.dataset.originalColumnType;
        const panel = trashItem.dataset.panel || 'todo';
        const recurringTaskId = trashItem.dataset.recurringTaskId || null;
        
        // Remove from trash storage
        const trashData = JSON.parse(localStorage.getItem('dailyTodos_trash') || '[]');
        const filteredTrashData = trashData.filter(item => item.id !== trashItem.id);
        
        if (filteredTrashData.length === 0) {
            localStorage.removeItem('dailyTodos_trash');
        } else {
            localStorage.setItem('dailyTodos_trash', JSON.stringify(filteredTrashData));
        }
        
        // Remove from DOM
        trashItem.remove();
        
        // Handle restoration based on panel type
        if (panel === 'backburner') {
            // Restore to backburner panel
            const backburnerData = JSON.parse(localStorage.getItem('backburnerItems') || '{"unsortedItems": [], "sections": {}}');
            
            const restoredItem = {
                id: `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                itemId: itemId,
                text: text,
                createdAt: createdAt,
                dueDate: dueDate,
                highPriority: isHighPriority,
                sectionId: sectionId
            };
            
            // Add recurring task ID if present
            if (recurringTaskId) {
                restoredItem.recurringTaskId = recurringTaskId;
            }
            
            if (sectionId) {
                // Restore to section
                if (!backburnerData.sections[sectionId]) {
                    // Create section if it doesn't exist
                    backburnerData.sections[sectionId] = {
                        id: sectionId,
                        name: 'Restored Section',
                        todo: [],
                        inProgress: [],
                        done: []
                    };
                }
                
                const columnType = originalColumnType || 'todo';
                if (columnType === 'inProgress') {
                    backburnerData.sections[sectionId].inProgress.push(restoredItem);
                } else if (columnType === 'done') {
                    backburnerData.sections[sectionId].done.push(restoredItem);
                } else {
                    backburnerData.sections[sectionId].todo.push(restoredItem);
                }
            } else {
                // Restore to misc items (handle both backburner_unsorted and regular unsorted)
                backburnerData.unsortedItems.push(restoredItem);
            }
            
            localStorage.setItem('backburnerItems', JSON.stringify(backburnerData));
            
            // If on backburner panel, reload it
            if (!this.backburnerPanel.classList.contains('hidden')) {
                this.loadBackburnerItems();
            }
            
            this.showFeedback('Item restored to backburner');
        } else if (originalDate) {
            const originalDateObj = new Date(originalDate);
            const dateKey = originalDateObj.toISOString().split('T')[0];
            
            // Determine the correct column type to restore to
            let restoreColumnType = originalColumnType || 'todo';
            
            // Get existing todos for the date
            const existingData = localStorage.getItem(`dailyTodos_${dateKey}`);
            let todos = {
                unsorted: [],
                todo: [],
                inProgress: [],
                done: [],
                sections: {}
            };
            
            if (existingData) {
                todos = JSON.parse(existingData);
                if (!todos.sections) todos.sections = {};
            }
            
            // Create the restored item with preserved data
            const restoredItem = {
                id: `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                itemId: itemId, // Preserve original itemId
                text: text,
                createdAt: createdAt, // Preserve original createdAt
                sectionId: sectionId,
                dueDate: dueDate || null, // Preserve original due date
                highPriority: isHighPriority
            };
            
            // Add recurring task ID if present
            if (recurringTaskId) {
                restoredItem.recurringTaskId = recurringTaskId;
            }
            
            // Add to appropriate location
            if (sectionId) {
                // Create section if it doesn't exist
                if (!todos.sections[sectionId]) {
                    const sectionName = this.getSectionName(sectionId) || 'Restored Section';
                    todos.sections[sectionId] = {
                        id: sectionId,
                        name: sectionName,
                        todo: [],
                        inProgress: [],
                        done: []
                    };
                }
                
                // Add to appropriate section column
                if (restoreColumnType === 'inProgress') {
                    todos.sections[sectionId].inProgress.push(restoredItem);
                } else if (restoreColumnType === 'done') {
                    todos.sections[sectionId].done.push(restoredItem);
                } else {
                    todos.sections[sectionId].todo.push(restoredItem);
                }
            } else {
                // Add to main columns
                if (restoreColumnType === 'unsorted') {
                    // Handle unsorted items separately - they go to global storage
                    const globalUnsorted = JSON.parse(localStorage.getItem('globalUnsortedItems') || '[]');
                    globalUnsorted.push(restoredItem);
                    localStorage.setItem('globalUnsortedItems', JSON.stringify(globalUnsorted));
                } else if (restoreColumnType === 'backburner_unsorted') {
                    // This was a backburner item, redirect to backburner panel
                    console.warn('Redirecting backburner_unsorted item to backburner panel');
                    // Don't add to todos, handle as backburner item instead
                    const backburnerData = JSON.parse(localStorage.getItem('backburnerItems') || '{"unsortedItems": [], "sections": {}}');
                    const backburnerItem = { ...restoredItem };
                    backburnerData.unsortedItems.push(backburnerItem);
                    localStorage.setItem('backburnerItems', JSON.stringify(backburnerData));
                    
                    // If on backburner panel, reload it
                    if (!this.backburnerPanel.classList.contains('hidden')) {
                        this.loadBackburnerItems();
                    }
                    this.showFeedback('Item restored to backburner');
                    return; // Early return to avoid double processing
                } else if (restoreColumnType === 'inProgress') {
                    todos.inProgress.push(restoredItem);
                } else if (restoreColumnType === 'done') {
                    todos.done.push(restoredItem);
                } else {
                    todos.todo.push(restoredItem);
                }
            }
            
            // Save the updated todos
            localStorage.setItem(`dailyTodos_${dateKey}`, JSON.stringify(todos));
            
            // Navigate to that date
            this.currentDate = originalDateObj;
            this.updateDateDisplay();
            this.updateInfoSection();
            this.renderWeekView();
            this.syncCalendarToCurrentDate();
            this.updateCalendarColors();
            
            // Clear current items and reload for the date (this will include our restored item)
            this.clearAllItems();
            this.loadTodosForDate();
        } else {
            // If no original date, restore to current date
            let restoreColumnType = originalColumnType || 'todo';
            
            // Create new item in the appropriate location on current date
            const newItem = this.createTodoItem(text, null, createdAt, sectionId, itemId, dueDate, 'todo', isHighPriority, recurringTaskId);
            
            // Determine which column to restore to
            let targetColumn;
            
            // If item was in a section, restore it to that section
            if (sectionId) {
                newItem.dataset.sectionId = sectionId;
                
                // Find or create the section
                let section = document.getElementById(sectionId);
                if (!section) {
                    // If section doesn't exist, create it
                    const sectionName = this.getSectionName(sectionId) || 'Restored Section';
                    section = this.createSection(sectionName, sectionId);
                }
                
                // Determine which section column to restore to based on original column type
                if (originalColumnType === 'inProgress') {
                    targetColumn = section.querySelector('.section-in-progress .items');
                } else if (originalColumnType === 'done') {
                    targetColumn = section.querySelector('.section-done .items');
                } else {
                    // Default to todo column for 'todo', 'unsorted', or unknown types
                    targetColumn = section.querySelector('.section-todo .items');
                }
                
                if (targetColumn) {
                    targetColumn.appendChild(newItem);
                } else {
                    // Fallback to main todo column
                    this.todoItems.appendChild(newItem);
                }
            } else {
                // Restore to appropriate main column based on original column type
                if (originalColumnType === 'backburner_unsorted') {
                    // This should be restored to backburner instead of todo panel
                    console.warn('Creating backburner item for backburner_unsorted restore');
                    newItem.remove(); // Remove the todo item we just created
                    
                    // Create as backburner item instead
                    const backburnerItem = this.createTodoItem(text, null, createdAt, sectionId, itemId, dueDate, 'backburner', isHighPriority, recurringTaskId);
                    this.backburnerUnsortedItems.appendChild(backburnerItem);
                    
                    // Save to backburner storage
                    this.saveBackburnerItems();
                    this.showFeedback('Item restored to backburner');
                    return; // Early return
                } else if (originalColumnType === 'inProgress') {
                    targetColumn = this.inProgressItems;
                } else if (originalColumnType === 'done') {
                    targetColumn = this.doneItems;
                } else if (originalColumnType === 'unsorted') {
                    targetColumn = this.unsortedItems;
                } else {
                    // Default to todo column for 'todo' or unknown types
                    targetColumn = this.todoItems;
                }
                
                targetColumn.appendChild(newItem);
            }
            
            // Items restored to current date will appear when user navigates to todo panel
        }
        
        // Save the restored state
        this.saveTodosForDate();
        this.updateCalendarColors();
        
        // Reorganize trash if still visible
        if (!this.trashPanel.classList.contains('hidden')) {
            this.organizeTrashByTime();
        }
        
        this.updateAllItemCounts();
        this.showFeedback('Item restored successfully');
    }
    
    createTrashItem(text, itemId = null, sectionId = null, createdAt = null, deletedAt = null, originalDate = null, originalColumnType = null, dueDate = null, panel = 'todo', isHighPriority = false, recurringTaskId = null, sectionName = null) {
        const item = document.createElement('div');
        item.className = 'todo-item trash-item';
        item.draggable = true;
        item.id = `trash-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Preserve item ID when moving to trash, or assign new one
        item.dataset.itemId = itemId || this.getNextItemId();
        
        // Preserve section ID when moving to trash
        if (sectionId) {
            item.dataset.sectionId = sectionId;
        }
        
        // Preserve section name when moving to trash
        if (sectionName) {
            item.dataset.sectionName = sectionName;
        }
        
        // Preserve original creation timestamp or set new one
        item.dataset.createdAt = createdAt || new Date().toISOString();
        
        // Preserve due date if provided
        if (dueDate) {
            item.dataset.dueDate = dueDate;
        }
        
        // Preserve high priority if provided
        if (isHighPriority) {
            item.dataset.highPriority = 'true';
            item.classList.add('high-priority');
        }
        
        // Preserve recurring task ID if provided
        if (recurringTaskId) {
            item.dataset.recurringTaskId = recurringTaskId;
            item.classList.add('recurring-task');
        }
        
        // Track when item was deleted
        item.dataset.deletedAt = deletedAt || new Date().toISOString();
        
        // Track what date the item was on before deletion
        if (originalDate) {
            item.dataset.originalDate = originalDate;
        }
        
        // Track which column the item was in before deletion
        if (originalColumnType) {
            item.dataset.originalColumnType = originalColumnType;
        }
        
        // Track which panel the item was in before deletion
        item.dataset.panel = panel;
        
        const uniqueTooltipId = `tooltip-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const recurringIndicator = recurringTaskId ? 
            `<div class="recurring-indicator-wrapper"><span class="recurring-indicator" title="${recurringTaskId}"></span></div>` : '';
        
        item.innerHTML = `
            <div class="todo-text">${this.escapeHtml(text)}</div>
            ${recurringIndicator}
            <div class="item-actions">
                <button class="restore-btn" title="Restore to original location">↶</button>
                <button class="delete-btn" title="Permanently delete">×</button>
            </div>
            <div class="tooltip" id="${uniqueTooltipId}"></div>
        `;
        
        item.querySelector('.restore-btn').addEventListener('click', () => {
            this.restoreItemFromTrash(item);
        });
        
        item.querySelector('.delete-btn').addEventListener('click', () => {
            item.remove();
            this.saveTrashItems();
            this.showFeedback('Permanently deleted');
        });
        
        item.addEventListener('dragstart', this.handleDragStart.bind(this));
        item.addEventListener('dragend', this.handleDragEnd.bind(this));
        
        // Prevent drag when starting from text area to allow text selection
        const textElement = item.querySelector('.todo-text');
        textElement.addEventListener('mousedown', (e) => {
            // Temporarily disable draggable during text selection
            item.draggable = false;
            setTimeout(() => {
                item.draggable = true;
            }, 100);
        });
        
        // Add hover functionality for tooltip
        item.addEventListener('mouseenter', (e) => this.showTooltip(e, item));
        item.addEventListener('mouseleave', () => this.hideTooltip(item));
        
        return item;
    }
    
    saveTrashItems() {
        // Collect trash items from all columns
        const allTrashItems = Array.from(document.querySelectorAll('.trash-item'));
        const trashData = allTrashItems.map(item => ({
            id: item.id,
            itemId: item.dataset.itemId,
            text: this.getItemText(item),
            createdAt: item.dataset.createdAt,
            sectionId: item.dataset.sectionId || null,
            sectionName: item.dataset.sectionName || null,
            dueDate: item.dataset.dueDate || null,
            highPriority: item.dataset.highPriority === 'true',
            panel: item.dataset.panel || 'todo',
            recurringTaskId: item.dataset.recurringTaskId || null,
            deletedAt: item.dataset.deletedAt,
            originalDate: item.dataset.originalDate,
            originalColumnType: item.dataset.originalColumnType
        }));
        
        if (trashData.length === 0) {
            localStorage.removeItem('dailyTodos_trash');
        } else {
            localStorage.setItem('dailyTodos_trash', JSON.stringify(trashData));
        }
        
        // Reorganize columns after saving
        this.organizeTrashByTime();
    }
    
    loadTrashItems() {
        // Clear existing columns
        this.trashColumns.innerHTML = '';
        
        const savedTrash = localStorage.getItem('dailyTodos_trash');
        if (savedTrash) {
            const trashData = JSON.parse(savedTrash);
            
            // Create a temporary container to hold items while organizing
            const tempContainer = document.createElement('div');
            
            trashData.forEach(trashItem => {
                const item = this.createTrashItem(trashItem.text, trashItem.itemId, trashItem.sectionId, trashItem.createdAt, trashItem.deletedAt, trashItem.originalDate, trashItem.originalColumnType, trashItem.dueDate, trashItem.panel || 'todo', trashItem.highPriority || false, trashItem.recurringTaskId, trashItem.sectionName);
                item.id = trashItem.id;
                tempContainer.appendChild(item);
            });
        }
        
        // Organize items into columns
        this.organizeTrashByTime();
    }
    
    organizeTrashByTime() {
        // Clear existing columns
        this.trashColumns.innerHTML = '';
        
        // Get trash data from localStorage instead of DOM
        const savedTrash = localStorage.getItem('dailyTodos_trash');
        if (!savedTrash) {
            this.trashColumns.innerHTML = '<div class="panel-content" style="text-align: center; color: #7f8c8d; padding: 40px;"> </div>';
            return;
        }
        
        const trashData = JSON.parse(savedTrash);
        if (trashData.length === 0) {
            this.trashColumns.innerHTML = '<div class="panel-content" style="text-align: center; color: #7f8c8d; padding: 40px;"> </div>';
            return;
        }
        
        // Define time periods
        const now = new Date();
        const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
        const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
        const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const twoMonthsAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
        
        // Categorize items by stored data
        const categories = {
            'Last Hour': [],
            'Last 24 Hours': [],
            'This Week': [],
            'Last Week': [],
            'This Month': [],
            'Last Month': [],
            months: new Map() // For specific months
        };
        
        trashData.forEach(trashItemData => {
            const deletedAt = new Date(trashItemData.deletedAt || trashItemData.createdAt);
            
            if (deletedAt > oneHourAgo) {
                categories['Last Hour'].push(trashItemData);
            } else if (deletedAt > oneDayAgo) {
                categories['Last 24 Hours'].push(trashItemData);
            } else if (deletedAt > oneWeekAgo) {
                categories['This Week'].push(trashItemData);
            } else if (deletedAt > twoWeeksAgo) {
                categories['Last Week'].push(trashItemData);
            } else if (deletedAt > oneMonthAgo) {
                categories['This Month'].push(trashItemData);
            } else if (deletedAt > twoMonthsAgo) {
                categories['Last Month'].push(trashItemData);
            } else {
                // Older items go into specific month columns
                const monthKey = deletedAt.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                if (!categories.months.has(monthKey)) {
                    categories.months.set(monthKey, []);
                }
                categories.months.get(monthKey).push(trashItemData);
            }
        });
        
        // Create columns in order
        const orderedCategories = ['Last Hour', 'Last 24 Hours', 'This Week', 'Last Week', 'This Month', 'Last Month'];
        
        orderedCategories.forEach(categoryName => {
            if (categories[categoryName].length > 0) {
                this.createTrashColumnFromData(categoryName, categories[categoryName]);
            }
        });
        
        // Add month columns (sorted by date, newest first)
        const sortedMonths = Array.from(categories.months.entries())
            .sort((a, b) => new Date(b[0] + ' 1') - new Date(a[0] + ' 1'));
            
        sortedMonths.forEach(([monthName, items]) => {
            if (items.length > 0) {
                this.createTrashColumnFromData(monthName, items);
            }
        });
    }
    
    createTrashColumn(title, items) {
        const column = document.createElement('div');
        column.className = 'trash-column';
        
        column.innerHTML = `
            <div class="trash-column-header">${title} (${items.length})</div>
            <div class="trash-column-items" data-column="${title}"></div>
        `;
        
        const itemsContainer = column.querySelector('.trash-column-items');
        
        // Sort items by deletion time (newest first)
        items.sort((a, b) => {
            const aTime = new Date(a.dataset.deletedAt || a.dataset.createdAt);
            const bTime = new Date(b.dataset.deletedAt || b.dataset.createdAt);
            return bTime - aTime;
        });
        
        items.forEach(item => {
            itemsContainer.appendChild(item);
        });
        
        // Set up drag and drop for the column
        itemsContainer.addEventListener('dragover', this.handleDragOver.bind(this));
        itemsContainer.addEventListener('drop', this.handleDrop.bind(this));
        itemsContainer.addEventListener('dragenter', this.handleDragEnter.bind(this));
        itemsContainer.addEventListener('dragleave', this.handleDragLeave.bind(this));
        
        this.trashColumns.appendChild(column);
    }
    
    createTrashColumnFromData(title, itemsData) {
        const column = document.createElement('div');
        column.className = 'trash-column';
        
        column.innerHTML = `
            <div class="trash-column-header">${title} (${itemsData.length})</div>
            <div class="trash-column-items" data-column="${title}"></div>
        `;
        
        const itemsContainer = column.querySelector('.trash-column-items');
        
        // Sort items by deletion time (newest first)
        itemsData.sort((a, b) => {
            const aTime = new Date(a.deletedAt || a.createdAt);
            const bTime = new Date(b.deletedAt || b.createdAt);
            return bTime - aTime;
        });
        
        // Create DOM elements from data
        itemsData.forEach(itemData => {
            const item = this.createTrashItem(
                itemData.text, 
                itemData.itemId, 
                itemData.sectionId, 
                itemData.createdAt, 
                itemData.deletedAt,
                itemData.originalDate,
                itemData.originalColumnType,
                itemData.dueDate,
                itemData.panel || 'todo',
                itemData.highPriority || false,
                itemData.recurringTaskId,
                itemData.sectionName
            );
            item.id = itemData.id; // Preserve the original ID
            itemsContainer.appendChild(item);
        });
        
        // Set up drag and drop for the column
        itemsContainer.addEventListener('dragover', this.handleDragOver.bind(this));
        itemsContainer.addEventListener('drop', this.handleDrop.bind(this));
        itemsContainer.addEventListener('dragenter', this.handleDragEnter.bind(this));
        itemsContainer.addEventListener('dragleave', this.handleDragLeave.bind(this));
        
        this.trashColumns.appendChild(column);
    }
    
    showTooltip(e, item) {
        const tooltip = item.querySelector('.tooltip');
        if (!tooltip) {
            return;
        }
        
        const createdAt = item.dataset.createdAt;
        const itemId = item.dataset.itemId;
        const sectionId = item.dataset.sectionId;
        const originalDate = item.dataset.originalDate;
        const dueDate = item.dataset.dueDate;
        const isTrashItem = item.classList.contains('trash-item');
        
        if (!createdAt) {
            return;
        }
        
        const createdDate = new Date(createdAt);
        const now = new Date();
        const timeAgo = this.calculateTimeAgo(createdDate, now);
        
        // Format the creation date in compact format: "Tues 2025-08-06 2:30PM"
        const weekday = createdDate.toLocaleDateString('en-US', { weekday: 'short' });
        const year = createdDate.getFullYear();
        const month = String(createdDate.getMonth() + 1).padStart(2, '0');
        const day = String(createdDate.getDate()).padStart(2, '0');
        const time = createdDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).replace(' ', '');
        
        const compactDateTime = `${weekday} ${year}-${month}-${day} ${time}`;
        
        // Get section name if item is in a section
        let sectionInfo = '';
        if (sectionId) {
            // Try to get section name from stored data first (for trash items)
            let sectionName = item.dataset.sectionName || this.getSectionName(sectionId);
            if (sectionName) {
                sectionInfo = `<div class="tooltip-section">Section: ${sectionName}</div>`;
            }
        }
        
        // Add original date info for trash items
        let originalDateInfo = '';
        if (isTrashItem && originalDate) {
            const originalDateObj = new Date(originalDate);
            const originalWeekday = originalDateObj.toLocaleDateString('en-US', { weekday: 'short' });
            const originalFormatted = `${originalWeekday} ${originalDate}`;
            originalDateInfo = `<div class="tooltip-original-date">Originally on: ${originalFormatted}</div>`;
        }
        
        // Add due date info if present or high priority
        let dueDateInfo = '';
        const isHighPriority = item.dataset.highPriority === 'true';
        
        if (isHighPriority && !dueDate) {
            // High priority items without due date show as "Due: Now!!!"
            dueDateInfo = `<div class="tooltip-due-date due-now">Due: Now!!!</div>`;
        } else if (dueDate) {
            const dueDateObj = new Date(dueDate);
            const dueDateWeekday = dueDateObj.toLocaleDateString('en-US', { weekday: 'short' });
            const dueDateFormatted = `${dueDateWeekday} ${dueDate}`;
            
            // Check if due date is past, today, or future (using local timezone)
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            
            // Parse the due date string (YYYY-MM-DD) in local timezone
            const [year, month, day] = dueDate.split('-').map(Number);
            const dueDateTime = new Date(year, month - 1, day);
            
            let dueDateClass = 'tooltip-due-date';
            if (dueDateTime < today) {
                dueDateClass += ' overdue'; // Red
            } else if (dueDateTime.getTime() === today.getTime()) {
                dueDateClass += ' due-today'; // Red
            } else if (dueDateTime.getTime() === tomorrow.getTime()) {
                dueDateClass += ' due-tomorrow'; // Yellow
            } else {
                dueDateClass += ' future'; // White
            }
            
            dueDateInfo = `<div class="${dueDateClass}">Due: ${dueDateFormatted}</div>`;
        }
        
        // Add recurring task info if present
        let recurringInfo = '';
        const recurringTaskId = item.dataset.recurringTaskId;
        if (recurringTaskId) {
            // Show the recurring ID (e.g., "Recurring 1", "Recurring 2")
            recurringInfo = `<div class="tooltip-recurring">${recurringTaskId}</div>`;
        }
        
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <div class="tooltip-date">Item ${itemId || 'N/A'} - ${timeAgo}</div>
                <div class="tooltip-time">${compactDateTime}</div>
                ${recurringInfo}
                ${dueDateInfo}
                ${sectionInfo}
                ${originalDateInfo}
            </div>
        `;
        
        tooltip.style.display = 'block';
        
        // Position tooltip
        const rect = item.getBoundingClientRect();
        const isTrashTooltip = item.classList.contains('trash-item');
        
        if (isTrashTooltip) {
            // Position below the item for trash tooltips only
            tooltip.style.left = '50%';
            tooltip.style.top = '100%';
            tooltip.style.transform = 'translateX(-50%) translateY(10px)';
        } else {
            // Use standard positioning for all other tooltips (above the item)
            tooltip.style.left = '50%';
            tooltip.style.top = '0';
            tooltip.style.transform = 'translateX(-50%) translateY(-100%) translateY(-10px)';
        }
    }
    
    hideTooltip(item) {
        const tooltip = item.querySelector('.tooltip');
        tooltip.style.display = 'none';
    }
    
    getSectionName(sectionId) {
        // Find section element by ID
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        if (sectionElement) {
            const titleElement = sectionElement.querySelector('.section-title');
            return titleElement ? titleElement.value.trim() : null;
        }
        
        // If not found in DOM, check stored section names from current date's data
        const dateKey = this.getDateKey();
        const todosData = JSON.parse(localStorage.getItem(`dailyTodos_${dateKey}`) || '{}');
        if (todosData.sectionNames && todosData.sectionNames[sectionId]) {
            return todosData.sectionNames[sectionId];
        }
        
        // If still not found, check backburner data
        const backburnerData = JSON.parse(localStorage.getItem('backburnerItems') || '{"unsortedItems": [], "sections": {}}');
        if (backburnerData.sections && backburnerData.sections[sectionId]) {
            return backburnerData.sections[sectionId].name;
        }
        
        // If still not found, check all stored dates for section names
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('dailyTodos_') && key !== 'dailyTodos_trash') {
                try {
                    const data = JSON.parse(localStorage.getItem(key) || '{}');
                    if (data.sectionNames && data.sectionNames[sectionId]) {
                        return data.sectionNames[sectionId];
                    }
                    // Also check sections directly
                    if (data.sections && data.sections[sectionId]) {
                        return data.sections[sectionId].name;
                    }
                } catch (e) {
                    // Skip invalid data
                }
            }
        }
        
        return null;
    }
    
    calculateTimeAgo(createdDate, now) {
        const diffMs = now - createdDate;
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffWeeks = Math.floor(diffDays / 7);
        
        const parts = [];
        
        if (diffWeeks > 0) {
            parts.push(`${diffWeeks} week${diffWeeks > 1 ? 's' : ''}`);
        }
        
        const remainingDays = diffDays % 7;
        if (remainingDays > 0) {
            parts.push(`${remainingDays} day${remainingDays > 1 ? 's' : ''}`);
        }
        
        const remainingHours = diffHours % 24;
        if (remainingHours > 0) {
            parts.push(`${remainingHours} hour${remainingHours > 1 ? 's' : ''}`);
        }
        
        const remainingMinutes = diffMinutes % 60;
        if (remainingMinutes > 0) {
            parts.push(`${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`);
        }
        
        if (parts.length === 0) {
            return 'Just created';
        }
        
        // Show max 2 most significant units
        const displayParts = parts.slice(0, 2);
        return `${displayParts.join(', ')} ago`;
    }
    
    // Section Management Methods
    createSectionFromItem(item) {
        // Store original section ID for cleanup check
        const originalSectionId = item.dataset.sectionId;
        
        // Generate section name with current date and time
        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const sectionName = `${dateStr} ${timeStr}`;
        
        // Create section in the same panel as the item
        const itemPanel = item.dataset.panel || 'todo';
        const sectionId = this.createSection(sectionName, null, itemPanel);
        
        // Move the item to the appropriate column in the new section
        const columnType = this.getColumnType(item);
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        
        let targetColumn;
        switch(columnType) {
            case 'todo':
                targetColumn = sectionElement.querySelector('.section-todo .items');
                break;
            case 'inProgress':
                targetColumn = sectionElement.querySelector('.section-in-progress .items');
                break;
            case 'done':
                targetColumn = sectionElement.querySelector('.section-done .items');
                break;
            default:
                targetColumn = sectionElement.querySelector('.section-todo .items');
        }
        
        // Update item's section ID
        item.dataset.sectionId = sectionId;
        
        // Move item to section
        targetColumn.appendChild(item);
        
        // Check if the original section needs cleanup
        if (originalSectionId) {
            if (itemPanel === 'backburner') {
                this.checkAndCleanupEmptyBackburnerSection(originalSectionId);
            } else {
                this.checkAndCleanupEmptySection(originalSectionId);
            }
        }
        
        // Save to the appropriate panel
        if (itemPanel === 'backburner') {
            this.saveBackburnerItems();
        } else {
            this.saveTodosForDate();
            this.updateCalendarColors();
        }
        
        this.updateAllItemCounts();
        this.showFeedback(`Created section "${sectionName}"`);
    }
    
    createNewSection() {
        // Generate section name with current date and time
        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const sectionName = `${dateStr} ${timeStr}`;
        
        // Detect which panel is currently active and create section in that panel
        const currentPanel = !this.backburnerPanel.classList.contains('hidden') ? 'backburner' : 'todo';
        const sectionId = this.createSection(sectionName, null, currentPanel);
        
        // Save to appropriate storage based on panel
        if (currentPanel === 'backburner') {
            this.saveBackburnerItems();
        } else {
            this.saveTodosForDate();
        }
        this.updateAllItemCounts();
        
        const panelName = currentPanel === 'backburner' ? 'LATER' : 'TODO';
        this.showFeedback(`Created new section "${sectionName}" in ${panelName} panel`);
        return sectionId;
    }

    createSection(name, existingId = null, panel = 'todo') {
        if (!existingId) {
            this.captureStateForUndo('section', `Create section "${name}"`);
        }
        
        const sectionId = existingId || `section-${this.sectionCounter++}`;
        const sectionsContainer = panel === 'todo' 
            ? document.getElementById('sectionsContainer')
            : document.getElementById('backburnerSectionsContainer');
        
        const sectionRow = document.createElement('div');
        sectionRow.className = 'section-row';
        sectionRow.dataset.sectionId = sectionId;
        sectionRow.dataset.panel = panel;
        sectionRow.draggable = true;
        
        const panelSwitchButton = panel === 'todo' 
            ? '<button class="section-backburner-btn" title="Move section to backburner">🔥</button>'
            : '<button class="section-todo-btn" title="Move section to today">📋</button>';
        
        const moveToNextDayButton = panel === 'todo' 
            ? '<button class="section-move-btn" title="Move section to next business day">➡️</button>'
            : '';
            
        sectionRow.innerHTML = `
            <div class="section-header">
                <input type="text" class="section-title" value="${this.escapeHtml(name)}" />
                <div class="section-actions">
                    <button class="section-up-btn" title="Move section up">▲</button>
                    <button class="section-down-btn" title="Move section down">▼</button>
                    ${panelSwitchButton}
                    ${moveToNextDayButton}
                    <button class="section-delete-btn" title="Delete section">×</button>
                </div>
            </div>
            <div class="section-column section-todo">
                <div class="items"></div>
            </div>
            <div class="section-column section-in-progress">
                <div class="items"></div>
            </div>
            <div class="section-column section-done">
                <div class="items"></div>
            </div>
        `;
        
        // Add event listeners
        const upBtn = sectionRow.querySelector('.section-up-btn');
        upBtn.addEventListener('click', () => {
            this.moveSectionUp(sectionId);
        });
        
        const downBtn = sectionRow.querySelector('.section-down-btn');
        downBtn.addEventListener('click', () => {
            this.moveSectionDown(sectionId);
        });
        
        const moveBtn = sectionRow.querySelector('.section-move-btn');
        if (moveBtn) {
            moveBtn.addEventListener('click', () => {
                this.moveSectionToNextDay(sectionId);
            });
        }
        
        const deleteBtn = sectionRow.querySelector('.section-delete-btn');
        deleteBtn.addEventListener('click', () => {
            this.deleteSection(sectionId);
        });
        
        // Add panel switch button listeners
        const backburnerBtn = sectionRow.querySelector('.section-backburner-btn');
        const todoBtn = sectionRow.querySelector('.section-todo-btn');
        
        if (backburnerBtn) {
            backburnerBtn.addEventListener('click', () => {
                this.moveSectionToBackburner(sectionId);
            });
        }
        
        if (todoBtn) {
            todoBtn.addEventListener('click', () => {
                this.moveSectionToTodo(sectionId);
            });
        }
        
        const titleInput = sectionRow.querySelector('.section-title');
        titleInput.addEventListener('blur', () => {
            this.handleSectionTitleChange(sectionId, titleInput.value.trim());
        });
        titleInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                titleInput.blur();
            }
        });
        
        // Setup drag and drop for section columns
        const sectionColumns = sectionRow.querySelectorAll('.section-column');
        sectionColumns.forEach(column => {
            column.addEventListener('dragover', this.handleDragOver.bind(this));
            column.addEventListener('drop', this.handleSectionDrop.bind(this));
            column.addEventListener('dragenter', this.handleDragEnter.bind(this));
            column.addEventListener('dragleave', this.handleDragLeave.bind(this));
        });
        
        // Setup section dragging
        sectionRow.addEventListener('dragstart', this.handleSectionDragStart.bind(this));
        sectionRow.addEventListener('dragend', this.handleSectionDragEnd.bind(this));
        
        // Prevent drag-over styling when dragging sections over section headers
        sectionRow.addEventListener('dragover', (e) => {
            // If we're dragging a section (check for dragging class), don't allow drop
            if (document.querySelector('.section-row.dragging')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            // Allow item drops to propagate to section columns
        });
        sectionRow.addEventListener('dragenter', (e) => {
            // If we're dragging a section, prevent drag-over effects
            if (document.querySelector('.section-row.dragging')) {
                e.preventDefault();
                e.stopPropagation();
            }
        });
        
        sectionsContainer.appendChild(sectionRow);
        
        // Update destination dropdowns when new section is created
        this.populateDestinationDropdowns();
        
        return sectionId;
    }
    
    handleSectionTitleChange(sectionId, title) {
        const currentSection = document.querySelector(`[data-section-id="${sectionId}"]`);
        const currentPanel = currentSection ? currentSection.dataset.panel || 'todo' : 'todo';
        
        if (!title) {
            // If empty, just save the changes using appropriate save method
            if (currentPanel === 'backburner') {
                this.saveBackburnerItems();
            } else {
                this.saveTodosForDate();
                this.updateCalendarColors();
            }
            return;
        }
        
        // Find all sections with the same title in the same panel
        const allSections = document.querySelectorAll(`.section-row[data-panel="${currentPanel}"]`);
        const matchingSections = [];
        
        allSections.forEach(section => {
            const sectionTitleInput = section.querySelector('.section-title');
            if (sectionTitleInput && sectionTitleInput.value.trim() === title && section.dataset.sectionId !== sectionId) {
                matchingSections.push(section);
            }
        });
        
        if (matchingSections.length > 0) {
            // Combine with the first matching section
            this.combineSections(sectionId, matchingSections[0].dataset.sectionId);
        } else {
            // Save using appropriate method based on panel
            if (currentPanel === 'backburner') {
                this.saveBackburnerItems();
            } else {
                this.saveTodosForDate();
                this.updateCalendarColors();
            }
            
            // Update destination dropdowns when section title changes
            this.populateDestinationDropdowns();
        }
    }
    
    combineSections(sourceSectionId, targetSectionId) {
        const sourceSection = document.querySelector(`[data-section-id="${sourceSectionId}"]`);
        const targetSection = document.querySelector(`[data-section-id="${targetSectionId}"]`);
        
        if (!sourceSection || !targetSection) return;
        
        this.captureStateForUndo('section', 'Combine sections');
        
        // Move all items from source to target section
        const sourceColumns = ['section-todo', 'section-in-progress', 'section-done'];
        
        sourceColumns.forEach(columnClass => {
            const sourceItems = sourceSection.querySelectorAll(`.${columnClass} .todo-item`);
            const targetColumn = targetSection.querySelector(`.${columnClass} .items`);
            
            sourceItems.forEach(item => {
                // Update the item's section ID to the target section
                item.dataset.sectionId = targetSectionId;
                targetColumn.appendChild(item);
            });
        });
        
        // Remove the source section
        sourceSection.remove();
        
        // Save the changes to localStorage - need to call appropriate save method based on panel
        const targetPanel = targetSection.dataset.panel || 'todo';
        if (targetPanel === 'backburner') {
            this.saveBackburnerItems();
        } else {
            this.saveTodosForDate();
            this.updateCalendarColors();
        }
        this.updateAllItemCounts();
    }
    
    deleteSection(sectionId) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        const sectionName = sectionElement.querySelector('.section-title').value;
        
        this.showCustomConfirm(
            `Delete section "${sectionName}"?\n\nAll items in this section will be moved back to the main columns.`,
            'Delete Section',
            'Keep Section'
        ).then((shouldDelete) => {
            if (shouldDelete) {
                this.captureStateForUndo('section', `Delete section "${sectionName}"`);
                
                // Move all items back to main columns
                const allItems = sectionElement.querySelectorAll('.todo-item');
                allItems.forEach(item => {
                    // Remove section ID from item
                    delete item.dataset.sectionId;
                    
                    // Determine which main column to move to based on current section column
                    const parentColumn = item.closest('.section-column');
                    let targetColumn;
                    
                    if (parentColumn.classList.contains('section-todo')) {
                        targetColumn = this.todoItems;
                    } else if (parentColumn.classList.contains('section-in-progress')) {
                        targetColumn = this.inProgressItems;
                    } else if (parentColumn.classList.contains('section-done')) {
                        targetColumn = this.doneItems;
                    } else {
                        targetColumn = this.todoItems; // default
                    }
                    
                    targetColumn.appendChild(item);
                });
                
                // Remove section element
                sectionElement.remove();
                
                this.saveTodosForDate();
                this.updateAllItemCounts();
                this.showFeedback(`Deleted section "${sectionName}"`);
                
                // Update destination dropdowns when section is deleted
                this.populateDestinationDropdowns();
            }
        });
    }
    
    moveSectionToNextDay(sectionId) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        const sectionName = sectionElement.querySelector('.section-title').value;
        
        this.captureStateForUndo('move', `Move section "${sectionName}" to next day`);
        
        const nextDate = this.getNextBusinessDay();
        
        // Get items from each column
        const todoItems = sectionElement.querySelector('.section-todo .items').children;
        const inProgressItems = sectionElement.querySelector('.section-in-progress .items').children;
        const doneItems = sectionElement.querySelector('.section-done .items').children;
        const hasDoneItems = doneItems.length > 0;
        
        // Collect only todo and in-progress items (done items stay on current day)
        const sectionData = {
            name: sectionName,
            todo: [],
            inProgress: [],
            done: [] // Keep empty - done items don't move
        };
        
        // Convert todo items
        Array.from(todoItems).forEach(item => {
            sectionData.todo.push({
                text: this.getItemText(item),
                dueDate: item.dataset.dueDate || null,
                isHighPriority: item.dataset.highPriority === 'true',
                createdAt: item.dataset.createdAt || new Date().toISOString(),
                itemId: item.dataset.itemId
            });
        });
        
        // Convert in progress items
        Array.from(inProgressItems).forEach(item => {
            sectionData.inProgress.push({
                text: this.getItemText(item),
                dueDate: item.dataset.dueDate || null,
                isHighPriority: item.dataset.highPriority === 'true',
                createdAt: item.dataset.createdAt || new Date().toISOString(),
                itemId: item.dataset.itemId
            });
        });
        
        // Only create section on next day if there are todo/in-progress items to move
        if (sectionData.todo.length > 0 || sectionData.inProgress.length > 0) {
            this.addSectionToDate(sectionData, nextDate);
        }
        
        // Remove moved items from current section
        Array.from(todoItems).forEach(item => item.remove());
        Array.from(inProgressItems).forEach(item => item.remove());
        
        // If section has no done items, remove the entire section
        // If section has done items, keep the section with done items
        if (!hasDoneItems) {
            sectionElement.remove();
        }
        
        this.saveTodosForDate();
        
        // Update calendar colors for both current date and target date
        this.updateCalendarColors();
        
        const itemCount = sectionData.todo.length + sectionData.inProgress.length;
        if (hasDoneItems) {
            this.showFeedback(`Moved ${itemCount} items from section "${sectionName}" to ${this.formatDateShort(nextDate)} (done items stayed)`);
        } else {
            this.showFeedback(`Moved section "${sectionName}" to ${this.formatDateShort(nextDate)}`);
        }
    }
    
    moveSectionUp(sectionId) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        
        // Find the previous section element (skip non-section siblings)
        let previousSibling = sectionElement.previousElementSibling;
        while (previousSibling && !previousSibling.classList.contains('section-row')) {
            previousSibling = previousSibling.previousElementSibling;
        }
        
        // Check if there's a section above it
        if (previousSibling && previousSibling.classList.contains('section-row')) {
            this.captureStateForUndo('reorder', 'Move section up');
            // Insert this section before the previous section
            sectionElement.parentNode.insertBefore(sectionElement, previousSibling);
            this.saveTodosForDate();
            this.updateCalendarColors();
            this.showFeedback('Section moved up');
        }
    }
    
    moveSectionDown(sectionId) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        
        // Find the next section element (skip non-section siblings)
        let nextSibling = sectionElement.nextElementSibling;
        while (nextSibling && !nextSibling.classList.contains('section-row')) {
            nextSibling = nextSibling.nextElementSibling;
        }
        
        // Check if there's a section below it
        if (nextSibling && nextSibling.classList.contains('section-row')) {
            this.captureStateForUndo('reorder', 'Move section down');
            // Insert the next section before this section (effectively moving this one down)
            sectionElement.parentNode.insertBefore(nextSibling, sectionElement);
            this.saveTodosForDate();
            this.updateCalendarColors();
            this.showFeedback('Section moved down');
        }
    }
    
    async moveKanbanToNextDay() {
        // Set flag to prevent multiple dialogs
        this.moveToNextDayInProgress = true;
        
        const nextDate = this.getNextBusinessDay();
        const nextDateStr = this.formatDateShort(nextDate);
        
        // Count items that will be moved (todo + in-progress, including sections)
        let itemCount = 0;
        let emptySectionsToMove = 0;
        itemCount += this.todoItems.children.length;
        itemCount += this.inProgressItems.children.length;
        
        // Count section items (todo + in-progress only) and empty sections
        const sections = document.querySelectorAll('.section-row');
        sections.forEach(section => {
            const todoItems = section.querySelector('.section-todo .items').children.length;
            const inProgressItems = section.querySelector('.section-in-progress .items').children.length;
            const doneItems = section.querySelector('.section-done .items').children.length;
            
            itemCount += todoItems + inProgressItems;
            
            // Count empty sections that will be moved (sections with no done items)
            if (todoItems === 0 && inProgressItems === 0 && doneItems === 0) {
                emptySectionsToMove++;
            }
        });
        
        if (itemCount === 0 && emptySectionsToMove === 0) {
            this.moveToNextDayInProgress = false; // Clear flag
            alert('No items or empty sections to move.');
            return;
        }
        
        // Create confirmation message
        let confirmMessage = '';
        if (itemCount > 0 && emptySectionsToMove > 0) {
            confirmMessage = `Move ${itemCount} items and ${emptySectionsToMove} empty section${emptySectionsToMove !== 1 ? 's' : ''} to ${nextDateStr}?\n\n(Done items will remain here)`;
        } else if (itemCount > 0) {
            confirmMessage = `Move ${itemCount} items from Todo and In Progress columns to ${nextDateStr}?\n\n(Done items will remain here)`;
        } else {
            confirmMessage = `Move ${emptySectionsToMove} empty section${emptySectionsToMove !== 1 ? 's' : ''} to ${nextDateStr}?`;
        }
        
        const shouldMove = await this.showCustomConfirm(
            confirmMessage,
            'Move Items',
            'Keep Items'
        );
        if (shouldMove) {
            this.captureStateForUndo('bulk_move', `Move ${itemCount} items to ${nextDateStr}`);
            // First, handle regular main column items
            const todoItemsToMove = Array.from(this.todoItems.children);
            const inProgressItemsToMove = Array.from(this.inProgressItems.children);
            
            // Move regular items
            todoItemsToMove.forEach(item => {
                const text = this.getItemText(item);
                const dueDate = item.dataset.dueDate || null;
                const createdAt = item.dataset.createdAt || new Date().toISOString();
                const itemId = item.dataset.itemId;
                this.addItemToDate(text, 'todo', nextDate, null, dueDate, createdAt, itemId);
                item.remove();
            });
            
            inProgressItemsToMove.forEach(item => {
                const text = this.getItemText(item);
                const dueDate = item.dataset.dueDate || null;
                const createdAt = item.dataset.createdAt || new Date().toISOString();
                const itemId = item.dataset.itemId;
                this.addItemToDate(text, 'inProgress', nextDate, null, dueDate, createdAt, itemId);
                item.remove();
            });
            
            // Handle sections
            sections.forEach(section => {
                const sectionId = section.dataset.sectionId;
                const sectionName = section.querySelector('.section-title').value;
                
                // Get items from each column
                const sectionTodoItems = section.querySelector('.section-todo .items').children;
                const sectionInProgressItems = section.querySelector('.section-in-progress .items').children;
                const sectionDoneItems = section.querySelector('.section-done .items').children;
                const hasDoneItems = sectionDoneItems.length > 0;
                
                // Collect section data (exclude done items)
                const sectionData = {
                    name: sectionName,
                    todo: [],
                    inProgress: [],
                    done: [] // Keep empty - we're not moving done items
                };
                
                // Get todo items from section
                Array.from(sectionTodoItems).forEach(item => {
                    sectionData.todo.push({
                        text: this.getItemText(item),
                        dueDate: item.dataset.dueDate || null,
                        isHighPriority: item.dataset.highPriority === 'true',
                        createdAt: item.dataset.createdAt || new Date().toISOString(),
                        itemId: item.dataset.itemId
                    });
                });
                
                // Get in-progress items from section
                Array.from(sectionInProgressItems).forEach(item => {
                    sectionData.inProgress.push({
                        text: this.getItemText(item),
                        dueDate: item.dataset.dueDate || null,
                        isHighPriority: item.dataset.highPriority === 'true',
                        createdAt: item.dataset.createdAt || new Date().toISOString(),
                        itemId: item.dataset.itemId
                    });
                });
                
                // Only create section on next day if there are todo/in-progress items to move
                if (sectionData.todo.length > 0 || sectionData.inProgress.length > 0) {
                    this.addSectionToDate(sectionData, nextDate);
                }
                
                // Remove moved items from current section
                Array.from(sectionTodoItems).forEach(item => item.remove());
                Array.from(sectionInProgressItems).forEach(item => item.remove());
                
                // Remove the entire section if it has no done items (move the section completely)
                // Keep the section if it has done items (since done items stay behind)
                if (!hasDoneItems) {
                    section.remove(); // Move empty section completely
                }
            });
            
            this.saveTodosForDate();
            this.updateCalendarColors();
            this.showFeedback(`Moved ${itemCount} items to ${nextDateStr}`);
        }
        
        // Clear flag when dialog is dismissed (either confirmed or canceled)
        this.moveToNextDayInProgress = false;
    }
    
    getNextBusinessDay() {
        const nextDate = new Date(this.currentDate);
        const currentDay = this.currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
        const skipDaysSelection = localStorage.getItem('skipDaysSelection') || 'both';
        
        if (skipDaysSelection === 'none') {
            // Just move to next calendar day
            nextDate.setDate(nextDate.getDate() + 1);
        } else if (skipDaysSelection === 'sunday') {
            // Skip Sunday only
            if (currentDay === 6) { // Saturday
                nextDate.setDate(nextDate.getDate() + 2); // Move to Monday
            } else { // Monday through Thursday
                nextDate.setDate(nextDate.getDate() + 1); // Move to next day
            }
        } else { // 'both' - skip Saturday and Sunday
            if (currentDay === 5) { // Friday
                nextDate.setDate(nextDate.getDate() + 3); // Move to Monday
            } else if (currentDay === 6) { // Saturday
                nextDate.setDate(nextDate.getDate() + 2); // Move to Monday
            } else { // Monday through Thursday
                nextDate.setDate(nextDate.getDate() + 1); // Move to next day
            }
        }
        
        return nextDate;
    }
    
    moveSectionToDate(sectionId, targetDate) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        const sectionName = sectionElement.querySelector('.section-title').value;
        const dateStr = this.formatDateShort(targetDate);
        
        this.captureStateForUndo('move', `Move section "${sectionName}" to ${dateStr}`);
        
        // Get items from each column
        const todoItems = sectionElement.querySelector('.section-todo .items').children;
        const inProgressItems = sectionElement.querySelector('.section-in-progress .items').children;
        const doneItems = sectionElement.querySelector('.section-done .items').children;
        const hasDoneItems = doneItems.length > 0;
        
        // Collect only todo and in-progress items (done items stay on current day)
        const sectionData = {
            name: sectionName,
            todo: [],
            inProgress: [],
            done: [] // Keep empty - done items don't move
        };
        
        // Convert todo items
        Array.from(todoItems).forEach(item => {
            sectionData.todo.push({
                text: this.getItemText(item),
                dueDate: item.dataset.dueDate || null,
                isHighPriority: item.dataset.highPriority === 'true',
                createdAt: item.dataset.createdAt || new Date().toISOString(),
                itemId: item.dataset.itemId
            });
        });
        
        // Convert in progress items
        Array.from(inProgressItems).forEach(item => {
            sectionData.inProgress.push({
                text: this.getItemText(item),
                dueDate: item.dataset.dueDate || null,
                isHighPriority: item.dataset.highPriority === 'true',
                createdAt: item.dataset.createdAt || new Date().toISOString(),
                itemId: item.dataset.itemId
            });
        });
        
        // Only create section on target date if there are todo/in-progress items to move
        if (sectionData.todo.length > 0 || sectionData.inProgress.length > 0) {
            this.addSectionToDate(sectionData, targetDate);
        }
        
        // Remove moved items from current section
        Array.from(todoItems).forEach(item => item.remove());
        Array.from(inProgressItems).forEach(item => item.remove());
        
        // If section has no done items, remove the entire section
        // If section has done items, keep the section with done items
        if (!hasDoneItems) {
            sectionElement.remove();
        }
        
        this.saveTodosForDate();
        
        // Update calendar colors for both current date and target date
        this.updateCalendarColors();
        
        const itemCount = sectionData.todo.length + sectionData.inProgress.length;
        if (hasDoneItems) {
            this.showFeedback(`Moved ${itemCount} items from section "${sectionName}" to ${dateStr} (done items stayed)`);
        } else {
            this.showFeedback(`Moved section "${sectionName}" to ${dateStr}`);
        }
    }
    
    addSectionToDate(sectionData, targetDate) {
        const dateKey = targetDate.toISOString().split('T')[0];
        const savedData = localStorage.getItem(`dailyTodos_${dateKey}`);
        
        let todos = {
            todo: [],
            inProgress: [],
            done: [],
            sections: {}
        };
        
        if (savedData) {
            todos = JSON.parse(savedData);
            if (!todos.sections) {
                todos.sections = {};
            }
        }
        
        // Check if there's already a section with the same name to combine with
        let targetSectionId = null;
        for (const [existingId, section] of Object.entries(todos.sections)) {
            if (section.name === sectionData.name) {
                targetSectionId = existingId;
                break;
            }
        }
        
        // If no existing section found, create new one
        if (!targetSectionId) {
            targetSectionId = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            todos.sections[targetSectionId] = {
                id: targetSectionId,
                name: sectionData.name,
                panel: 'todo',
                todo: [],
                inProgress: [],
                done: []
            };
        }
        
        // Add all items from the moved section to the target section
        const targetSection = todos.sections[targetSectionId];
        
        // Add todo items
        sectionData.todo.forEach(item => {
            targetSection.todo.push({
                id: `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                itemId: this.getNextItemId(),
                text: item.text,
                createdAt: item.createdAt,
                sectionId: targetSectionId
            });
        });
        
        // Add in progress items
        sectionData.inProgress.forEach(item => {
            targetSection.inProgress.push({
                id: `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                itemId: this.getNextItemId(),
                text: item.text,
                createdAt: item.createdAt,
                sectionId: targetSectionId
            });
        });
        
        // Add done items
        sectionData.done.forEach(item => {
            targetSection.done.push({
                id: `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                itemId: this.getNextItemId(),
                text: item.text,
                createdAt: item.createdAt,
                sectionId: targetSectionId
            });
        });
        
        localStorage.setItem(`dailyTodos_${dateKey}`, JSON.stringify(todos));
    }
    
    handleSectionDrop(e) {
        e.preventDefault();
        const itemId = e.dataTransfer.getData('text/plain');
        const draggedItem = document.getElementById(itemId);
        
        // Accept drops on both .items containers and .section-column elements
        const itemsContainer = e.target.classList.contains('items') 
            ? e.target 
            : e.target.querySelector('.items');
            
        if (draggedItem && itemsContainer) {
            // Get section ID from the section row
            const sectionRow = itemsContainer.closest('.section-row');
            const sectionId = sectionRow.dataset.sectionId;
            
            // Check if item is being moved from trash to section
            const wasInTrash = draggedItem.classList.contains('trash-item');
            
            if (wasInTrash) {
                // Capture state for undo
                const text = this.getItemText(draggedItem);
                this.captureStateForUndo('restore_from_trash', `Restore "${text.substring(0, 30)}${text.length > 30 ? '...' : ''}" from trash`);
                
                // Convert trash item back to regular todo item, preserving all original data
                const createdAt = draggedItem.dataset.createdAt;
                const originalSectionId = draggedItem.dataset.sectionId;
                const itemId = draggedItem.dataset.itemId;
                const dueDate = draggedItem.dataset.dueDate;
                const isHighPriority = draggedItem.dataset.highPriority === 'true';
                const recurringTaskId = draggedItem.dataset.recurringTaskId;
                const newItem = this.createTodoItem(text, null, createdAt, sectionId, itemId, dueDate, 'todo', isHighPriority, recurringTaskId);
                
                // Replace the trash item with a proper todo item (insert by priority)
                const todoDataTrash = {
                    urgent: false,  // No urgent support yet
                    highPriority: isHighPriority,
                    createdAt: createdAt
                };
                this.insertItemByPriority(itemsContainer, newItem, todoDataTrash);
                
                // Reapply due date styling for the new item
                this.applyDueDateStyling(newItem);
                
                draggedItem.remove();
                
                // Update trash storage
                this.saveTrashItems();
            } else {
                // Normal item - store original section for cleanup check
                const originalSectionId = draggedItem.dataset.sectionId;
                
                // Update section ID and move (insert by priority)
                draggedItem.dataset.sectionId = sectionId;
                const todoData = this.getTodoDataFromItem(draggedItem);
                this.insertItemByPriority(itemsContainer, draggedItem, todoData);
                
                // Check if original section needs cleanup (if moved from different section)
                if (originalSectionId && originalSectionId !== sectionId) {
                    // Determine original section panel for appropriate cleanup function
                    const originalSection = document.querySelector(`[data-section-id="${originalSectionId}"]`);
                    const originalSectionPanel = originalSection ? originalSection.dataset.panel : 'todo';
                    
                    if (originalSectionPanel === 'backburner') {
                        this.checkAndCleanupEmptyBackburnerSection(originalSectionId);
                    } else {
                        this.checkAndCleanupEmptySection(originalSectionId);
                    }
                }
                
                // Reapply due date styling since item may have moved to/from done column
                this.applyDueDateStyling(draggedItem);
            }
            
            // Remove drag-over styling from the section column
            const sectionColumn = itemsContainer.closest('.section-column');
            if (sectionColumn) {
                sectionColumn.classList.remove('drag-over');
            }
            
            // Save to appropriate panel based on section's panel
            const sectionElement = itemsContainer.closest('.section-row');
            const sectionPanel = sectionElement ? sectionElement.dataset.panel : 'todo';
            
            if (sectionPanel === 'backburner') {
                this.saveBackburnerItems();
            } else {
                this.saveTodosForDate();
                this.updateCalendarColors();
            }
            
            this.updateAllItemCounts();
        }
    }
    
    // Calendar Drag Handlers
    handleCalendarDragOver(e) {
        e.preventDefault();
    }
    
    handleCalendarDragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    handleCalendarDragLeave(e) {
        if (!e.target.contains(e.relatedTarget)) {
            e.target.classList.remove('drag-over');
        }
    }
    
    handleCalendarDrop(e, targetDate) {
        e.preventDefault();
        e.target.classList.remove('drag-over');
        
        const dragData = e.dataTransfer.getData('text/plain');
        
        // Check if we're dragging a section
        if (dragData.startsWith('section:')) {
            const sectionId = dragData.replace('section:', '');
            this.moveSectionToDate(sectionId, targetDate);
            return;
        }
        
        // Handle regular item drag
        const draggedItem = document.getElementById(dragData);
        
        if (draggedItem) {
            const text = this.getItemText(draggedItem);
            let columnType = this.getColumnType(draggedItem);
            
            // Convert 'unsorted' to 'todo' when moving from New Items to dates
            if (columnType === 'unsorted') {
                columnType = 'todo';
            }
            
            // Preserve section association when moving to different dates via calendar
            const sectionId = draggedItem.dataset.sectionId || null;
            const sectionName = sectionId ? this.getSectionName(sectionId) : null;
            
            // Add to target date with appropriate column type
            const dueDate = draggedItem.dataset.dueDate || null;
            const createdAt = draggedItem.dataset.createdAt || new Date().toISOString();
            const itemId = draggedItem.dataset.itemId;
            const isHighPriority = draggedItem.dataset.highPriority === 'true';
            const recurringTaskId = draggedItem.dataset.recurringTaskId || null;
            this.addItemToDate(text, columnType, targetDate, sectionId, dueDate, createdAt, itemId, sectionName, isHighPriority, 'todo', recurringTaskId);
            
            // Remove from current date
            draggedItem.remove();
            
            // Check if the original section needs cleanup (only for items in sections)
            if (sectionId) {
                this.checkAndCleanupEmptySection(sectionId);
            }
            
            this.saveTodosForDate();
            
            // Update calendar colors for both current date and target date
            this.updateCalendarColors();
            
            const dateStr = this.formatDateShort(targetDate);
            this.showFeedback(`Moved to ${dateStr}`);
        }
    }
    
    // Section Drag Handlers
    handleSectionDragStart(e) {
        // Prevent dragging when interacting with section controls
        if (e.target.classList.contains('section-title') || 
            e.target.classList.contains('section-move-btn') ||
            e.target.classList.contains('section-delete-btn') ||
            e.target.classList.contains('section-up-btn') ||
            e.target.classList.contains('section-down-btn') ||
            e.target.closest('.section-actions') ||
            e.target.closest('.section-column')) {
            e.preventDefault();
            return false;
        }
        
        const sectionRow = e.target.closest('.section-row');
        if (sectionRow) {
            e.dataTransfer.setData('text/plain', `section:${sectionRow.dataset.sectionId}`);
            sectionRow.classList.add('dragging');
        }
    }
    
    handleSectionDragEnd(e) {
        const sectionRow = e.target.closest('.section-row');
        if (sectionRow) {
            sectionRow.classList.remove('dragging');
        }
        
        // Clean up any lingering drag-over classes
        document.querySelectorAll('.drag-over').forEach(element => {
            element.classList.remove('drag-over');
        });
    }
    
    // Undo System Methods
    captureStateForUndo(operationType, description) {
        const currentState = {
            timestamp: new Date().toISOString(),
            operationType: operationType,
            description: description,
            date: new Date(this.currentDate),
            dailyData: this.captureCurrentDayData(),
            globalUnsorted: this.captureGlobalUnsortedData(),
            trashData: this.captureTrashData()
        };
        
        this.undoStack.push(currentState);
        
        // Limit undo stack to maxUndoOperations
        if (this.undoStack.length > this.maxUndoOperations) {
            this.undoStack.shift();
        }
        
        this.updateUndoButtonState();
    }
    
    captureStorageData(key) {
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : null;
    }
    
    captureCurrentDayData() {
        return this.captureStorageData(`dailyTodos_${this.getDateKey()}`);
    }
    
    captureGlobalUnsortedData() {
        return this.captureStorageData('globalUnsortedItems');
    }
    
    captureTrashData() {
        return this.captureStorageData('dailyTodos_trash');
    }
    
    async performUndo() {
        if (this.undoStack.length === 0) {
            alert('Nothing to undo');
            return;
        }
        
        const lastState = this.undoStack.pop();
        
        const shouldUndo = await this.showCustomConfirm(
            `Undo: ${lastState.description}?`,
            'Undo',
            'Cancel'
        );
        if (shouldUndo) {
            // Navigate to the date if different
            if (lastState.date.getTime() !== this.currentDate.getTime()) {
                this.currentDate = new Date(lastState.date);
                this.updateDateDisplay();
                this.updateInfoSection();
                this.renderWeekView();
                this.syncCalendarToCurrentDate();
            }
            
            // Restore daily data
            const dateKey = this.getDateKey();
            if (lastState.dailyData) {
                localStorage.setItem(`dailyTodos_${dateKey}`, JSON.stringify(lastState.dailyData));
            } else {
                localStorage.removeItem(`dailyTodos_${dateKey}`);
            }
            
            // Restore global unsorted data
            if (lastState.globalUnsorted) {
                localStorage.setItem('globalUnsortedItems', JSON.stringify(lastState.globalUnsorted));
            } else {
                localStorage.removeItem('globalUnsortedItems');
            }
            
            // Restore trash data
            if (lastState.trashData) {
                localStorage.setItem('dailyTodos_trash', JSON.stringify(lastState.trashData));
            } else {
                localStorage.removeItem('dailyTodos_trash');
            }
            
            // Reload the UI
            this.loadTodosForDate();
            this.loadTrashItems();
            this.updateCalendarColors();
            
            this.showFeedback(`Undid: ${lastState.description}`);
        } else {
            // Put the state back if user cancelled
            this.undoStack.push(lastState);
        }
        
        this.updateUndoButtonState();
    }
    
    updateUndoButtonState() {
        if (this.undoStack.length === 0) {
            this.undoBtn.disabled = true;
            this.undoBtn.style.opacity = '0.5';
            this.undoBtn.title = 'Nothing to undo';
        } else {
            this.undoBtn.disabled = false;
            this.undoBtn.style.opacity = '1';
            const lastOperation = this.undoStack[this.undoStack.length - 1];
            this.undoBtn.title = `Undo: ${lastOperation.description}`;
        }
    }
    
    // Panel switching methods
    moveItemToBackburner(item) {
        const text = this.getItemText(item);
        const sectionId = item.dataset.sectionId;
        const itemId = item.dataset.itemId;
        const createdAt = item.dataset.createdAt;
        const dueDate = item.dataset.dueDate;
        const isHighPriority = item.dataset.highPriority === 'true';
        const recurringTaskId = item.dataset.recurringTaskId;
        
        
        this.captureStateForUndo('move', `Move "${text}" to backburner`);
        
        // Create new backburner item
        const backburnerItem = this.createTodoItem(text, null, createdAt, sectionId, itemId, dueDate, 'backburner', isHighPriority, recurringTaskId);
        
        if (sectionId) {
            // Move to existing section with same name or create new section (following moveItemToTodo pattern)
            const originalSection = document.querySelector(`[data-section-id="${sectionId}"]`);
            if (originalSection) {
                const sectionName = originalSection.querySelector('.section-title').value;
                
                // Get existing backburner data to check for existing section
                const existingData = localStorage.getItem('backburnerItems');
                let backburnerData = { sections: {} };
                if (existingData) {
                    backburnerData = JSON.parse(existingData);
                    if (!backburnerData.sections) backburnerData.sections = {};
                }
                
                // Look for existing section with same name in backburner data
                let targetSectionId = null;
                for (const [id, section] of Object.entries(backburnerData.sections)) {
                    if (section.name === sectionName) {
                        targetSectionId = id;
                        break;
                    }
                }
                
                // Create new section ID if not found
                if (!targetSectionId) {
                    targetSectionId = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                }
                
                // Determine which column the item was in
                const columnType = this.getColumnType(item);
                let targetColumnType = 'todo';
                if (columnType === 'inProgress') {
                    targetColumnType = 'inProgress';
                } else if (columnType === 'done') {
                    targetColumnType = 'done';
                }
                
                // Add to backburner storage with proper section association
                this.addItemToBackburnerStorage(backburnerItem, targetColumnType, targetSectionId);
                
                // Update section name in storage if we created it
                if (!backburnerData.sections[targetSectionId]) {
                    const updatedData = JSON.parse(localStorage.getItem('backburnerItems'));
                    if (updatedData.sections[targetSectionId]) {
                        updatedData.sections[targetSectionId].name = sectionName;
                        localStorage.setItem('backburnerItems', JSON.stringify(updatedData));
                    }
                }
            }
        } else {
            // Move to misc items (add to backburner storage directly)
            this.addItemToBackburnerStorage(backburnerItem, 'unsorted');
        }
        
        // Remove original item
        item.remove();
        
        // Check if the original section needs cleanup
        this.checkAndCleanupEmptySection(sectionId);
        
        // Save todo panel data (backburner was saved by addItemToBackburnerStorage)
        this.saveTodosForDate();
        
        this.updateAllItemCounts();
        this.showFeedback(`Moved "${text}" to backburner`);
    }
    
    moveItemToTodo(item) {
        const text = this.getItemText(item);
        const sectionId = item.dataset.sectionId;
        const itemId = item.dataset.itemId;
        const createdAt = item.dataset.createdAt;
        const dueDate = item.dataset.dueDate;
        const isHighPriority = item.dataset.highPriority === 'true';
        const recurringTaskId = item.dataset.recurringTaskId;
        
        this.captureStateForUndo('move', `Move "${text}" to TODO`);
        
        // Create new todo item
        const todoItem = this.createTodoItem(text, null, createdAt, sectionId, itemId, dueDate, 'todo', isHighPriority, recurringTaskId);
        
        if (sectionId) {
            // Move to section under present day (today)
            const originalSection = document.querySelector(`[data-section-id="${sectionId}"]`);
            if (originalSection) {
                const sectionName = originalSection.querySelector('.section-title').value;
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const todayKey = today.toISOString().split('T')[0];
                
                // Get existing todos for today to check for existing section
                const existingData = localStorage.getItem(`dailyTodos_${todayKey}`);
                let todos = { sections: {} };
                if (existingData) {
                    todos = JSON.parse(existingData);
                    if (!todos.sections) todos.sections = {};
                }
                
                // Look for existing section with same name in today's data
                let targetSectionId = null;
                for (const [id, section] of Object.entries(todos.sections)) {
                    if (section.name === sectionName) {
                        targetSectionId = id;
                        break;
                    }
                }
                
                // Create new section ID if not found
                if (!targetSectionId) {
                    targetSectionId = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                }
                
                // Always place in todo column when moving from backburner
                this.addItemToDateStorage(todayKey, todoItem, 'todo', targetSectionId);
                
                // Update section name in storage if we created it
                if (!todos.sections[targetSectionId]) {
                    const updatedData = JSON.parse(localStorage.getItem(`dailyTodos_${todayKey}`));
                    if (updatedData.sections[targetSectionId]) {
                        updatedData.sections[targetSectionId].name = sectionName;
                        localStorage.setItem(`dailyTodos_${todayKey}`, JSON.stringify(updatedData));
                    }
                }
            }
        } else {
            // Move to To Do column under present day (today)
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const todayKey = today.toISOString().split('T')[0];
            this.addItemToDateStorage(todayKey, todoItem, 'todo');
        }
        
        // Remove original item
        item.remove();
        
        // Check if the original section needs cleanup (for backburner sections)
        if (item.dataset.panel === 'backburner') {
            this.checkAndCleanupEmptyBackburnerSection(sectionId);
        }
        
        // Save backburner (current date is not affected)
        this.saveBackburnerItems();
        
        this.updateAllItemCounts();
        this.showFeedback(`Moved "${text}" to TODO`);
    }
    
    moveSectionToBackburner(sectionId) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        if (!sectionElement) return;
        
        const sectionName = sectionElement.querySelector('.section-title').value;
        this.captureStateForUndo('move', `Move section "${sectionName}" to backburner`);
        
        // Create new backburner section
        const backburnerSectionId = this.createSection(sectionName, null, 'backburner');
        const backburnerSection = document.querySelector(`[data-section-id="${backburnerSectionId}"]`);
        
        // Move all items from each column
        ['todo', 'inProgress', 'done'].forEach(columnType => {
            const sourceColumn = sectionElement.querySelector(`.section-${columnType === 'inProgress' ? 'in-progress' : columnType} .items`);
            const targetColumn = backburnerSection.querySelector(`.section-${columnType === 'inProgress' ? 'in-progress' : columnType} .items`);
            
            Array.from(sourceColumn.children).forEach(item => {
                // Update item panel
                item.dataset.panel = 'backburner';
                item.dataset.sectionId = backburnerSectionId;
                
                // Update button in item
                const actions = item.querySelector('.item-actions');
                const backburnerBtn = actions.querySelector('.backburner-btn');
                if (backburnerBtn) {
                    backburnerBtn.outerHTML = '<button class="todo-btn" title="Move to TODO">📋</button>';
                    const todoBtn = actions.querySelector('.todo-btn');
                    todoBtn.addEventListener('click', () => {
                        this.moveItemToTodo(item);
                    });
                }
                
                targetColumn.appendChild(item);
            });
        });
        
        // Remove original section
        sectionElement.remove();
        
        // Save both panels
        this.saveTodosForDate();
        this.saveBackburnerItems();
        
        this.showFeedback(`Moved section "${sectionName}" to backburner`);
    }
    
    moveSectionToTodo(sectionId) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        if (!sectionElement) return;
        
        const sectionName = sectionElement.querySelector('.section-title').value;
        this.captureStateForUndo('move', `Move section "${sectionName}" to TODO`);
        
        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayKey = today.toISOString().split('T')[0];
        
        // Get existing todos for today
        const existingData = localStorage.getItem(`dailyTodos_${todayKey}`);
        let todos = { sections: {} };
        if (existingData) {
            todos = JSON.parse(existingData);
            if (!todos.sections) todos.sections = {};
        }
        
        // Look for existing section with same name or create new one
        let targetSectionId = null;
        for (const [id, section] of Object.entries(todos.sections)) {
            if (section.name === sectionName) {
                targetSectionId = id;
                break;
            }
        }
        
        if (!targetSectionId) {
            targetSectionId = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        }
        
        // Move all items from each column to today's storage
        ['todo', 'inProgress', 'done'].forEach(columnType => {
            const sourceColumn = sectionElement.querySelector(`.section-${columnType === 'inProgress' ? 'in-progress' : columnType} .items`);
            
            Array.from(sourceColumn.children).forEach(item => {
                this.addItemToDateStorage(todayKey, item, columnType, targetSectionId);
            });
        });
        
        // Update section name in today's storage
        const updatedData = JSON.parse(localStorage.getItem(`dailyTodos_${todayKey}`));
        if (updatedData.sections[targetSectionId]) {
            updatedData.sections[targetSectionId].name = sectionName;
            localStorage.setItem(`dailyTodos_${todayKey}`, JSON.stringify(updatedData));
        }
        
        // Remove original section from DOM
        sectionElement.remove();
        
        // Explicitly remove the section from backburner data before saving
        const backburnerData = JSON.parse(localStorage.getItem('backburnerItems') || '{"unsortedItems": [], "sections": {}}');
        if (backburnerData.sections[sectionId]) {
            delete backburnerData.sections[sectionId];
            localStorage.setItem('backburnerItems', JSON.stringify(backburnerData));
        }
        
        // Save backburner to ensure the removal is persisted
        this.saveBackburnerItems();
        
        this.showFeedback(`Moved section "${sectionName}" to TODO`);
    }

    checkAndCleanupEmptySection(originalSectionId) {
        if (!originalSectionId) return;
        
        const originalSection = document.querySelector(`[data-section-id="${originalSectionId}"]`);
        if (!originalSection) return;
        
        // Check if section has any items in todo or in-progress columns (ignore done items)
        const todoItems = originalSection.querySelectorAll('.section-todo .todo-item').length;
        const inProgressItems = originalSection.querySelectorAll('.section-in-progress .todo-item').length;
        const doneItems = originalSection.querySelectorAll('.section-done .todo-item').length;
        
        // Only delete if section is completely empty (no todo, in-progress, or done items)
        // If section has done items, keep it - no warning needed
        if (todoItems === 0 && inProgressItems === 0 && doneItems === 0) {
            const sectionName = originalSection.querySelector('.section-title').value;
            const message = `The section "${sectionName}" is now empty. Would you like to delete the empty section?`;
            
            this.showCustomConfirm(
                message,
                'Delete Section',
                'Keep Section'
            ).then((shouldDelete) => {
                if (shouldDelete) {
                    this.deleteSectionWithItems(originalSectionId);
                }
            });
        }
        // If section has done items (doneItems > 0), do nothing - keep the section
    }
    
    deleteSectionWithItems(sectionId) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        if (!sectionElement) return;
        
        const sectionName = sectionElement.querySelector('.section-title').value;
        
        // Move all items back to main columns before deleting section
        const allItems = sectionElement.querySelectorAll('.todo-item');
        allItems.forEach(item => {
            const columnType = this.getColumnType(item);
            let targetColumn;
            
            switch (columnType) {
                case 'todo':
                    targetColumn = this.todoItems;
                    break;
                case 'inProgress':
                    targetColumn = this.inProgressItems;
                    break;
                case 'done':
                    targetColumn = this.doneItems;
                    break;
                default:
                    targetColumn = this.todoItems;
            }
            
            // Clear section association
            item.dataset.sectionId = '';
            item.dataset.sectionName = '';
            
            if (targetColumn) {
                targetColumn.appendChild(item);
            }
        });
        
        // Remove the section element
        sectionElement.remove();
        
        // Update storage
        this.saveTodosForDate();
        this.updateAllItemCounts();
        
        this.showFeedback(`Deleted section "${sectionName}" and moved items to main columns`);
    }
    
    checkAndCleanupEmptyBackburnerSection(originalSectionId) {
        if (!originalSectionId) return;
        
        const originalSection = document.querySelector(`[data-section-id="${originalSectionId}"][data-panel="backburner"]`);
        if (!originalSection) return;
        
        // Check if section has any items in todo or in-progress columns (ignore done items)
        const todoItems = originalSection.querySelectorAll('.section-todo .todo-item').length;
        const inProgressItems = originalSection.querySelectorAll('.section-in-progress .todo-item').length;
        const doneItems = originalSection.querySelectorAll('.section-done .todo-item').length;
        
        // If section only has done items or is completely empty, ask if user wants to delete it
        if (todoItems === 0 && inProgressItems === 0) {
            const sectionName = originalSection.querySelector('.section-title').value;
            const hasOnlyDoneItems = doneItems > 0;
            
            let message;
            if (hasOnlyDoneItems) {
                message = `The backburner section "${sectionName}" now only has completed items. What would you like to do?\n\n⚠️ If you delete the section, the completed items will be permanently deleted.`;
            } else {
                message = `The backburner section "${sectionName}" is now empty. Would you like to delete the empty section?`;
            }
            
            this.showCustomConfirm(message).then((shouldDelete) => {
                if (shouldDelete) {
                    this.deleteBackburnerSectionWithItems(originalSectionId);
                }
            });
        }
    }
    
    deleteBackburnerSectionWithItems(sectionId) {
        const sectionElement = document.querySelector(`[data-section-id="${sectionId}"][data-panel="backburner"]`);
        if (!sectionElement) return;
        
        const sectionName = sectionElement.querySelector('.section-title').value;
        
        // Check what types of items are in the section
        const todoItems = sectionElement.querySelectorAll('.section-todo .todo-item');
        const inProgressItems = sectionElement.querySelectorAll('.section-in-progress .todo-item');
        const doneItems = sectionElement.querySelectorAll('.section-done .todo-item');
        
        // Move non-done items to misc items, but delete done items
        [...todoItems, ...inProgressItems].forEach(item => {
            // Clear section association
            item.dataset.sectionId = '';
            item.dataset.sectionName = '';
            
            // Move to misc items
            if (this.backburnerUnsortedItems) {
                this.backburnerUnsortedItems.appendChild(item);
            }
        });
        
        // Delete done items (move them to trash)
        doneItems.forEach(item => {
            this.moveItemToTrash(item, false); // false = don't capture undo state for each item
        });
        
        // Remove the section element
        sectionElement.remove();
        
        // Update storage
        this.saveBackburnerItems();
        this.updateAllItemCounts();
        
        if (doneItems.length > 0) {
            this.showFeedback(`Deleted backburner section "${sectionName}" and deleted ${doneItems.length} completed items`);
        } else {
            this.showFeedback(`Deleted backburner section "${sectionName}"`);
        }
    }

    getDefaultDueDate() {
        const setting = localStorage.getItem('defaultDueDateSetting') || 'none';
        
        if (setting === 'none') {
            return null;
        }
        
        const daysToAdd = parseInt(setting);
        // Use the current date in the app (not necessarily today)
        const baseDate = new Date(this.currentDate);
        baseDate.setHours(0, 0, 0, 0); // Reset to start of day
        
        const dueDate = new Date(baseDate);
        dueDate.setDate(baseDate.getDate() + daysToAdd);
        
        return dueDate.toISOString().split('T')[0]; // Return YYYY-MM-DD format
    }

    updateDefaultDueDateInputs(forceUpdate = false) {
        const setting = localStorage.getItem('defaultDueDateSetting') || 'none';
        
        // Skip if setting is "none" and not forcing update
        if (setting === 'none' && !forceUpdate) {
            return;
        }
        
        const defaultDueDate = this.getDefaultDueDate();
        
        console.log('Updating default due date inputs:', {
            setting,
            currentDate: this.currentDate.toISOString().split('T')[0],
            defaultDueDate,
            forceUpdate
        });
        
        if (defaultDueDate) {
            // Always update when navigating dates (setting !== 'none') or when forced
            this.dueDateInput.value = defaultDueDate;
            this.backburnerDueDateInput.value = defaultDueDate;
        } else if (forceUpdate) {
            // Clear inputs when forced and no default date
            this.dueDateInput.value = '';
            this.backburnerDueDateInput.value = '';
        }
    }

    autoResizeTextarea(textarea) {
        // Reset height to auto to get actual scrollHeight
        textarea.style.height = 'auto';
        
        // Calculate the new height based on content, with minimum height
        const minHeight = 60; // Minimum height in pixels
        const newHeight = Math.max(textarea.scrollHeight, minHeight);
        
        // Set the new height
        textarea.style.height = newHeight + 'px';
    }
    
    // Recurring Tasks Methods
    setDefaultRecurringDates() {
        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        const nextYear = new Date(today);
        nextYear.setFullYear(today.getFullYear() + 1);
        
        this.recurringStartDate.value = today.toISOString().split('T')[0];
        this.recurringEndDate.value = nextYear.toISOString().split('T')[0];
    }
    
    updateFrequencyOptions() {
        const frequencyType = this.recurringFrequencyType.value;
        
        // Hide all frequency options
        document.getElementById('dailyFrequency').classList.add('hidden');
        document.getElementById('weeklyFrequency').classList.add('hidden');
        document.getElementById('monthlyFrequency').classList.add('hidden');
        
        // Show selected frequency option
        switch(frequencyType) {
            case 'daily':
                document.getElementById('dailyFrequency').classList.remove('hidden');
                break;
            case 'weekly':
                document.getElementById('weeklyFrequency').classList.remove('hidden');
                break;
            case 'monthly':
                document.getElementById('monthlyFrequency').classList.remove('hidden');
                break;
        }
    }

    validateMonthlyDate() {
        const value = parseInt(this.monthlyDate.value);
        
        if (isNaN(value) || value < 1) {
            this.monthlyDate.value = 1;
        } else if (value > 31) {
            this.monthlyDate.value = 31;
            this.showFeedback('Day of month cannot exceed 31. Value set to 31.');
        }
    }
    
    generateRecurringId() {
        // Get the current counter from localStorage, or find the highest existing ID
        let counter = parseInt(localStorage.getItem('recurringIdCounter') || '0');
        
        // On first run or if counter is missing, find the highest existing ID
        if (counter === 0) {
            const recurringTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
            
            recurringTasks.forEach(task => {
                // Extract number from IDs like "Recurring 1", "Recurring 2", etc.
                const match = task.id.match(/Recurring (\d+)/);
                if (match) {
                    const num = parseInt(match[1]);
                    if (num > counter) counter = num;
                }
            });
        }
        
        // Increment counter and save it
        counter++;
        localStorage.setItem('recurringIdCounter', counter.toString());
        
        // Return the next sequential ID
        return `Recurring ${counter}`;
    }

    createRecurringTask() {
        // Check if we're in edit mode
        const isEditMode = this.editingRecurringTaskId;
        
        const taskText = this.recurringTaskInput.value.trim();
        if (!taskText) {
            alert('Please enter a task description.');
            return;
        }
        
        const startDateString = this.recurringStartDate.value;
        const endDateString = this.recurringEndDate.value;
        
        if (!startDateString || !endDateString) {
            alert('Please select both start and end dates.');
            return;
        }
        
        // Compare as strings since they're in YYYY-MM-DD format
        if (startDateString >= endDateString) {
            alert('End date must be after start date.');
            return;
        }
        
        const frequencyType = this.recurringFrequencyType.value;
        let frequencyData = {};
        
        switch(frequencyType) {
            case 'daily':
                const interval = parseInt(this.dailyInterval.value);
                if (interval <= 0) {
                    alert('Daily interval must be 1 or greater.');
                    return;
                }
                frequencyData = {
                    type: 'daily',
                    interval: interval
                };
                break;
            case 'weekly':
                frequencyData = {
                    type: 'weekly',
                    dayOfWeek: parseInt(this.weeklyDay.value)
                };
                break;
            case 'monthly':
                frequencyData = {
                    type: 'monthly',
                    dayOfMonth: parseInt(this.monthlyDate.value)
                };
                break;
        }
        
        if (isEditMode) {
            // Edit mode: update existing recurring task
            const recurringTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
            const taskIndex = recurringTasks.findIndex(t => t.id === this.editingRecurringTaskId);
            
            if (taskIndex === -1) {
                alert('Recurring task not found.');
                return;
            }
            
            const updatedTask = {
                ...recurringTasks[taskIndex],
                text: taskText,
                frequency: frequencyData,
                dueDateOffset: parseInt(this.dueDateOffset.value),
                startDate: startDateString,
                endDate: endDateString,
                isHighPriority: this.recurringHighPriority.checked
            };
            
            this.showCustomConfirm(
                `Update recurring task "${taskText}"?\n\nThis will delete incomplete instances within the old date range and regenerate them with the new settings (${startDateString} to ${endDateString}). Completed items will be preserved.`,
                'Update Task',
                'Cancel'
            ).then((shouldUpdate) => {
                if (shouldUpdate) {
                    // Get the old task's date range before updating
                    const oldTask = recurringTasks[taskIndex];
                    
                    // Delete instances within the old task's date range
                    this.deleteRecurringTaskInstancesInRange(this.editingRecurringTaskId, oldTask.startDate, oldTask.endDate);
                    
                    // Update the recurring task definition
                    recurringTasks[taskIndex] = updatedTask;
                    localStorage.setItem('recurringTasks', JSON.stringify(recurringTasks));
                    
                    // Generate new future instances
                    this.generateRecurringTaskInstances(updatedTask);
                    
                    // Clear edit mode
                    this.editingRecurringTaskId = null;
                    this.clearRecurringForm();
                    this.loadRecurringTasks();
                    this.showFeedback(`Recurring task "${taskText}" updated successfully!`);
                    
                    // Reset button text
                    this.createRecurringTaskBtn.textContent = 'Create Recurring Task';
                }
            });
        } else {
            // Create mode: create new recurring task
            const recurringTask = {
                id: this.generateRecurringId(),
                text: taskText,
                frequency: frequencyData,
                dueDateOffset: parseInt(this.dueDateOffset.value),
                startDate: startDateString,
                endDate: endDateString,
                isHighPriority: this.recurringHighPriority.checked,
                createdAt: new Date().toISOString()
            };
            
            this.showCustomConfirm(
                `Create recurring task "${taskText}"?\n\nThis will generate tasks for the entire date range (${startDateString} to ${endDateString}).`,
                'Create Task',
                'Cancel'
            ).then((shouldCreate) => {
                if (shouldCreate) {
                    this.saveRecurringTask(recurringTask);
                    this.generateRecurringTaskInstances(recurringTask);
                    this.clearRecurringForm();
                    this.loadRecurringTasks();
                    this.showFeedback(`Recurring task "${taskText}" created successfully!`);
                }
            });
        }
    }
    
    saveRecurringTask(recurringTask) {
        const savedRecurringTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
        savedRecurringTasks.push(recurringTask);
        localStorage.setItem('recurringTasks', JSON.stringify(savedRecurringTasks));
    }
    
    generateRecurringTaskInstances(recurringTask) {
        const instances = this.calculateRecurringInstances(recurringTask);
        
        instances.forEach(instance => {
            // Check if there's already a manually edited version of this task on this date
            const dateKey = instance.date;
            const existingData = localStorage.getItem(`dailyTodos_${dateKey}`);
            
            if (existingData) {
                const todos = JSON.parse(existingData);
                
                // Check all columns for items with matching text that don't have recurringTaskId
                // (indicating they were manually edited and disassociated from the group)
                const allItems = [
                    ...(todos.todo || []),
                    ...(todos.inProgress || []),
                    ...(todos.done || []),
                    ...(todos.unsorted || [])
                ];
                
                // Also check sections
                if (todos.sections) {
                    Object.values(todos.sections).forEach(section => {
                        allItems.push(...(section.todo || []));
                        allItems.push(...(section.inProgress || []));
                        allItems.push(...(section.done || []));
                    });
                }
                
                // If there's already an item with the same text that has no recurringTaskId,
                // skip creating a new instance (it was manually edited)
                const hasManuallyEditedVersion = allItems.some(item => 
                    item.text === recurringTask.text && !item.recurringTaskId
                );
                
                if (hasManuallyEditedVersion) {
                    return; // Skip this instance
                }
            }
            
            const dueDate = this.calculateDueDate(instance.date, recurringTask.dueDateOffset);
            
            this.addItemToDate(
                recurringTask.text,
                'todo',  // Always add to todo column
                new Date(instance.date),  // Convert string back to Date object
                null,    // No section initially
                dueDate,
                new Date().toISOString(),
                null,    // itemId - will use getNextItemId() automatically
                null,    // No section name
                recurringTask.isHighPriority,
                'todo',  // Panel
                recurringTask.id  // Recurring task ID
            );
        });
    }
    
    
    calculateRecurringInstances(recurringTask) {
        const instances = [];
        // Parse YYYY-MM-DD strings properly to avoid timezone issues
        const startDateParts = recurringTask.startDate.split('-');
        const endDateParts = recurringTask.endDate.split('-');
        
        const startDate = new Date(parseInt(startDateParts[0]), parseInt(startDateParts[1]) - 1, parseInt(startDateParts[2]));
        const endDate = new Date(parseInt(endDateParts[0]), parseInt(endDateParts[1]) - 1, parseInt(endDateParts[2]));
        const currentDate = new Date(startDate);
        
        // Safety check to prevent infinite loops and memory issues
        const maxInstances = 10000; // Reasonable upper limit
        let instanceCount = 0;
        
        while (currentDate <= endDate && instanceCount < maxInstances) {
            let shouldAddInstance = false;
            
            switch(recurringTask.frequency.type) {
                case 'daily':
                    shouldAddInstance = true;
                    break;
                case 'weekly':
                    shouldAddInstance = currentDate.getDay() === recurringTask.frequency.dayOfWeek;
                    break;
                case 'monthly':
                    // For monthly recurrence, handle cases where the requested day doesn't exist in the month
                    const requestedDay = recurringTask.frequency.dayOfMonth;
                    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
                    const actualDay = Math.min(requestedDay, lastDayOfMonth);
                    shouldAddInstance = currentDate.getDate() === actualDay;
                    break;
            }
            
            if (shouldAddInstance) {
                const correctDate = new Date(currentDate);
                instances.push({
                    date: correctDate.toISOString().split('T')[0]
                });
            }
            
            // Move to next date
            if (recurringTask.frequency.type === 'daily') {
                currentDate.setDate(currentDate.getDate() + recurringTask.frequency.interval);
            } else {
                currentDate.setDate(currentDate.getDate() + 1);
            }
            
            instanceCount++;
        }
        
        return instances;
    }
    
    calculateDueDate(instanceDate, offset) {
        if (offset === -1) return null;
        
        const dueDate = new Date(instanceDate);
        dueDate.setDate(dueDate.getDate() + offset);
        return dueDate.toISOString().split('T')[0];
    }
    
    clearRecurringForm() {
        this.recurringTaskInput.value = '';
        this.dailyInterval.value = '1';
        this.weeklyDay.value = '1';
        this.monthlyDate.value = '1';
        this.dueDateOffset.value = '-1';
        this.recurringHighPriority.checked = false;
        this.setDefaultRecurringDates();
        this.autoResizeTextarea(this.recurringTaskInput);
        
        // Clear edit mode
        this.editingRecurringTaskId = null;
        
        // Reset button text
        this.createRecurringTaskBtn.textContent = 'Create Recurring Task';
    }
    
    loadRecurringTasks() {
        const recurringTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
        this.renderRecurringTasksList(recurringTasks);
        this.updateRecurringTasksCount(recurringTasks.length);
    }
    
    renderRecurringTasksList(recurringTasks) {
        if (recurringTasks.length === 0) {
            this.recurringTasksList.innerHTML = `
                <div class="no-recurring-tasks">
                    <p>No recurring tasks configured.</p>
                    <p>Create one using the form on the left!</p>
                </div>
            `;
            return;
        }
        
        // Add warning message at the top
        const warningHTML = `
            <div class="recurring-warning">
                <p>⚠️ <strong>Important:</strong> Deleting a recurring task will remove all instances except those in "Done" columns or Backburner. Items always maintain their recurring association - even after editing or moving. Use "Duplicate" to create a new recurring task with similar settings.</p>
            </div>
        `;
        
        this.recurringTasksList.innerHTML = warningHTML + recurringTasks.map(task => this.createRecurringTaskHTML(task)).join('');
        
        // Add event listeners to action buttons
        recurringTasks.forEach(task => {
            const editBtn = document.getElementById(`edit-recurring-${task.id}`);
            const duplicateBtn = document.getElementById(`duplicate-recurring-${task.id}`);
            const deleteBtn = document.getElementById(`delete-recurring-${task.id}`);
            
            if (editBtn) editBtn.addEventListener('click', () => this.editRecurringTaskFuture(task.id));
            if (duplicateBtn) duplicateBtn.addEventListener('click', () => this.duplicateRecurringTask(task.id));
            if (deleteBtn) deleteBtn.addEventListener('click', () => this.deleteRecurringTask(task.id));
        });
    }
    
    createRecurringTaskHTML(task) {
        const frequencyText = this.getFrequencyDisplayText(task.frequency);
        const totalInstances = this.calculateRecurringInstances(task).length;
        
        return `
            <div class="recurring-task-item">
                <div class="recurring-task-header">
                    <div class="recurring-task-text">${task.text}</div>
                    <div class="recurring-task-header-right">
                        <div class="recurring-task-id">${task.id}</div>
                        <div class="recurring-task-actions">
                            <button id="edit-recurring-${task.id}" class="recurring-task-btn edit-recurring-btn">Edit</button>
                            <button id="duplicate-recurring-${task.id}" class="recurring-task-btn duplicate-recurring-btn">Duplicate</button>
                            <button id="delete-recurring-${task.id}" class="recurring-task-btn delete-recurring-btn">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="recurring-task-details">
                    <div class="recurring-detail">
                        <span class="recurring-detail-label">Frequency:</span>
                        <span class="recurring-detail-value">${frequencyText}</span>
                    </div>
                    <div class="recurring-detail">
                        <span class="recurring-detail-label">Due Date:</span>
                        <span class="recurring-detail-value">${task.dueDateOffset === -1 ? 'No due date' : task.dueDateOffset === 0 ? 'Same day' : `${task.dueDateOffset} day(s) after`}</span>
                    </div>
                    <div class="recurring-detail">
                        <span class="recurring-detail-label">Priority:</span>
                        <span class="recurring-detail-value">${task.isHighPriority ? 'High' : 'Normal'}</span>
                    </div>
                    <div class="recurring-detail">
                        <span class="recurring-detail-label">Date Range:</span>
                        <span class="recurring-detail-value">${task.startDate} to ${task.endDate}</span>
                    </div>
                    <div class="recurring-detail">
                        <span class="recurring-detail-label">Total Instances:</span>
                        <span class="recurring-detail-value">${totalInstances}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    getFrequencyDisplayText(frequency) {
        switch(frequency.type) {
            case 'daily':
                return `Every ${frequency.interval} day(s)`;
            case 'weekly':
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                return `Every ${days[frequency.dayOfWeek]}`;
            case 'monthly':
                return `Day ${frequency.dayOfMonth} of every month`;
            default:
                return 'Unknown frequency';
        }
    }
    
    updateRecurringTasksCount(count) {
        this.recurringTasksCount.textContent = `${count} recurring task${count !== 1 ? 's' : ''}`;
    }
    
    duplicateRecurringTask(taskId) {
        const recurringTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
        const task = recurringTasks.find(t => t.id === taskId);
        
        if (!task) return;
        
        // Populate form with task data
        this.recurringTaskInput.value = task.text;
        this.recurringFrequencyType.value = task.frequency.type;
        this.updateFrequencyOptions();
        
        switch(task.frequency.type) {
            case 'daily':
                this.dailyInterval.value = task.frequency.interval;
                break;
            case 'weekly':
                this.weeklyDay.value = task.frequency.dayOfWeek;
                break;
            case 'monthly':
                this.monthlyDate.value = task.frequency.dayOfMonth;
                break;
        }
        
        this.dueDateOffset.value = task.dueDateOffset;
        this.recurringStartDate.value = task.startDate;
        this.recurringEndDate.value = task.endDate;
        this.recurringHighPriority.checked = task.isHighPriority;
        
        // Keep create mode since this is now duplication
        this.showFeedback('Recurring task settings loaded for duplication. Modify as needed and click "Create Recurring Task" to create a new recurring task.');
    }

    editRecurringTaskFuture(taskId) {
        const recurringTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
        const task = recurringTasks.find(t => t.id === taskId);
        
        if (!task) return;
        
        // Populate form with task data
        this.recurringTaskInput.value = task.text;
        this.recurringFrequencyType.value = task.frequency.type;
        this.updateFrequencyOptions();
        
        switch(task.frequency.type) {
            case 'daily':
                this.dailyInterval.value = task.frequency.interval;
                break;
            case 'weekly':
                this.weeklyDay.value = task.frequency.dayOfWeek;
                break;
            case 'monthly':
                this.monthlyDate.value = task.frequency.dayOfMonth;
                break;
        }
        
        this.dueDateOffset.value = task.dueDateOffset;
        this.recurringStartDate.value = task.startDate;
        this.recurringEndDate.value = task.endDate;
        this.recurringHighPriority.checked = task.isHighPriority;
        
        // Store the task ID being edited
        this.editingRecurringTaskId = taskId;
        
        // Change button text to indicate edit mode
        this.createRecurringTaskBtn.textContent = 'Update Recurring Task';
        
        this.showFeedback('Recurring task settings loaded for editing. Modify as needed and click "Update Recurring Task" to update future instances.');
    }
    
    
    getFrequencyDataFromForm() {
        const frequencyType = this.recurringFrequencyType.value;
        
        switch(frequencyType) {
            case 'daily':
                return {
                    type: 'daily',
                    interval: parseInt(this.dailyInterval.value)
                };
            case 'weekly':
                return {
                    type: 'weekly',
                    dayOfWeek: parseInt(this.weeklyDay.value)
                };
            case 'monthly':
                return {
                    type: 'monthly',
                    dayOfMonth: parseInt(this.monthlyDate.value)
                };
        }
    }
    
    resetRecurringForm() {
        this.createRecurringTaskBtn.textContent = 'Create Recurring Task';
        
        // Remove existing event listeners and restore create listener
        const newBtn = this.createRecurringTaskBtn.cloneNode(true);
        this.createRecurringTaskBtn.parentNode.replaceChild(newBtn, this.createRecurringTaskBtn);
        this.createRecurringTaskBtn = newBtn;
        this.createRecurringTaskBtn.addEventListener('click', () => this.createRecurringTask());
        
        this.clearRecurringForm();
    }
    
    deleteRecurringTask(taskId) {
        const recurringTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
        const task = recurringTasks.find(t => t.id === taskId);
        
        if (!task) return;
        
        this.showCustomConfirm(
            `Delete recurring task "${task.text}"?\n\nThis will delete the recurring task definition and all incomplete instances. Completed items will be preserved.`,
            'Delete Task',
            'Keep Task'
        ).then((shouldDelete) => {
            if (shouldDelete) {
                // Delete only future instances
                this.deleteRecurringTaskInstances(taskId, true);
                
                // Remove from recurring tasks list
                const updatedTasks = recurringTasks.filter(t => t.id !== taskId);
                localStorage.setItem('recurringTasks', JSON.stringify(updatedTasks));
                
                this.loadRecurringTasks();
                this.showFeedback(`Recurring task "${task.text}" deleted successfully. Past instances preserved.`);
            }
        });
    }

    deleteAllRecurringTasks() {
        const recurringTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
        
        if (recurringTasks.length === 0) {
            this.showFeedback('No recurring tasks to delete.');
            return;
        }
        
        this.showCustomConfirm(
            `Delete ALL ${recurringTasks.length} recurring tasks?\n\nThis will permanently delete all recurring tasks and all their instances across all dates.\n\nThis action cannot be undone.`,
            'Delete All Tasks',
            'Keep Tasks'
        ).then((shouldDeleteAll) => {
            if (shouldDeleteAll) {
                // Delete all instances for each recurring task
                recurringTasks.forEach(task => {
                    this.deleteRecurringTaskInstances(task.id);
                });
                
                // Clear the recurring tasks list
                localStorage.setItem('recurringTasks', JSON.stringify([]));
                
                this.loadRecurringTasks();
                this.showFeedback(`All recurring tasks deleted successfully.`);
            }
        });
    }
    

    deleteRecurringTaskInstances(recurringTaskId, futureOnly = false) {
        // Get all localStorage keys for daily todos
        const dateKeys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('dailyTodos_') && !key.includes('trash') && !key.includes('unsorted')) {
                dateKeys.push(key);
            }
        }
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Process each date
        dateKeys.forEach(key => {
            const data = JSON.parse(localStorage.getItem(key) || '{}');
            let changed = false;
            
            // Always exclude done column to preserve completed work (regardless of date)
            const columnsToCheck = ['todo', 'inProgress'];
            
            columnsToCheck.forEach(column => {
                if (data[column]) {
                    const originalLength = data[column].length;
                    data[column] = data[column].filter(item => item.recurringTaskId !== recurringTaskId);
                    if (data[column].length !== originalLength) changed = true;
                }
            });
            
            // Remove from sections using same logic
            if (data.sections) {
                Object.values(data.sections).forEach(section => {
                    columnsToCheck.forEach(column => {
                        if (section[column]) {
                            const originalLength = section[column].length;
                            section[column] = section[column].filter(item => item.recurringTaskId !== recurringTaskId);
                            if (section[column].length !== originalLength) changed = true;
                        }
                    });
                });
            }
            
            if (changed) {
                localStorage.setItem(key, JSON.stringify(data));
            }
        });
        
        // Also remove from global unsorted items
        const globalData = JSON.parse(localStorage.getItem('dailyTodos_unsorted') || '[]');
        const filteredGlobalData = globalData.filter(item => item.recurringTaskId !== recurringTaskId);
        if (filteredGlobalData.length !== globalData.length) {
            localStorage.setItem('dailyTodos_unsorted', JSON.stringify(filteredGlobalData));
        }
    }
    
    deleteRecurringTaskInstancesInRange(recurringTaskId, startDate, endDate) {
        // Get all localStorage keys for daily todos
        const dateKeys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('dailyTodos_') && !key.includes('trash') && !key.includes('unsorted')) {
                dateKeys.push(key);
            }
        }
        
        const rangeStart = new Date(startDate);
        const rangeEnd = new Date(endDate);
        rangeStart.setHours(0, 0, 0, 0);
        rangeEnd.setHours(0, 0, 0, 0);
        
        // Process each date
        dateKeys.forEach(key => {
            const dateStr = key.replace('dailyTodos_', '');
            const keyDate = new Date(dateStr);
            keyDate.setHours(0, 0, 0, 0);
            
            // Only process dates within the old task's range (inclusive)
            if (keyDate < rangeStart || keyDate > rangeEnd) {
                return; // Skip dates outside the range
            }
            
            const data = JSON.parse(localStorage.getItem(key) || '{}');
            let changed = false;
            
            // Remove from todo and inProgress only (preserve done items regardless of date)
            const columnsToCheck = ['todo', 'inProgress'];
            
            columnsToCheck.forEach(column => {
                if (data[column]) {
                    const originalLength = data[column].length;
                    data[column] = data[column].filter(item => item.recurringTaskId !== recurringTaskId);
                    if (data[column].length !== originalLength) changed = true;
                }
            });
            
            // Remove from sections
            if (data.sections) {
                Object.values(data.sections).forEach(section => {
                    columnsToCheck.forEach(column => {
                        if (section[column]) {
                            const originalLength = section[column].length;
                            section[column] = section[column].filter(item => item.recurringTaskId !== recurringTaskId);
                            if (section[column].length !== originalLength) changed = true;
                        }
                    });
                });
            }
            
            if (changed) {
                localStorage.setItem(key, JSON.stringify(data));
            }
        });
        
        // Also remove from global unsorted items
        const globalData = JSON.parse(localStorage.getItem('dailyTodos_unsorted') || '[]');
        const filteredGlobalData = globalData.filter(item => item.recurringTaskId !== recurringTaskId);
        if (filteredGlobalData.length !== globalData.length) {
            localStorage.setItem('dailyTodos_unsorted', JSON.stringify(filteredGlobalData));
        }
    }
    
    setupAutosave() {
        // Initialize autosave properties
        this.autosaveFileHandle = null; // For browser mode
        this.autosaveFilePath = null;   // For Electron mode
        this.autosaveEnabled = localStorage.getItem('autosaveEnabled') === 'true';
        
        // Check if File System Access API is supported
        if (this.isFileSystemAccessSupported()) {
            // Preload saved file handle/path for faster access, but only if autosave is enabled
            if (this.autosaveEnabled) {
                if (this.isElectronMode()) {
                    this.preloadAutosaveFilePath();
                } else {
                    this.preloadAutosaveFileHandle();
                }
            }
            
            // Get saved interval or default to 1 minute
            const savedInterval = localStorage.getItem('autosaveInterval');
            const intervalMs = savedInterval ? parseInt(savedInterval) : 60000;
            
            // Set up autosave interval only if enabled
            if (this.autosaveEnabled) {
                this.autosaveInterval = setInterval(() => {
                    const currentlyEnabled = localStorage.getItem('autosaveEnabled') === 'true';
                    if (currentlyEnabled) {
                        this.performAutosave();
                    }
                }, intervalMs);
            }
            
            // Also save when the page is about to unload
            window.addEventListener('beforeunload', () => {
                const currentlyEnabled = localStorage.getItem('autosaveEnabled') === 'true';
                if (currentlyEnabled && this.autosaveFileHandle) {
                    this.performAutosave();
                }
            });
        }
    }
    
    async preloadAutosaveFileHandle() {
        try {
            const savedHandle = await this.getStoredFileHandle();
            if (savedHandle) {
                this.autosaveFileHandle = savedHandle;
            }
        } catch (error) {
            console.log('Could not preload autosave file handle:', error);
        }
    }
    
    restartAutosaveInterval() {
        // Always clear existing interval first
        if (this.autosaveInterval) {
            clearInterval(this.autosaveInterval);
            this.autosaveInterval = null;
        }
        
        // Get current enabled state and interval
        const isEnabled = localStorage.getItem('autosaveEnabled') === 'true';
        const savedInterval = localStorage.getItem('autosaveInterval');
        const intervalMs = savedInterval ? parseInt(savedInterval) : 60000;
        
        // Only set up new interval if autosave is enabled and API is supported
        if (this.isFileSystemAccessSupported() && isEnabled) {
            this.autosaveInterval = setInterval(() => {
                const currentlyEnabled = localStorage.getItem('autosaveEnabled') === 'true';
                if (currentlyEnabled) {
                    this.performAutosave();
                }
            }, intervalMs);
            
            console.log(`Autosave interval restarted: ${intervalMs}ms (${intervalMs/1000}s)`);
        } else {
            console.log('Autosave interval stopped (disabled or API not supported)');
        }
        
        // Update the instance property
        this.autosaveEnabled = isEnabled;
    }
    
    isElectronMode() {
        return window.electronAPI && typeof window.electronAPI.selectSaveFile === 'function';
    }

    isFileSystemAccessSupported() {
        // Check for Electron API first, then fall back to File System Access API
        if (this.isElectronMode()) {
            return true; // Electron API available
        }
        
        // Check for the File System Access API (browser)
        const supported = 'showSaveFilePicker' in window && 
                         'showOpenFilePicker' in window && 
                         'showDirectoryPicker' in window;
        
        return supported;
    }
    
    async performAutosave(manualSave = false) {
        try {
            // First check if autosave is actually enabled (skip this check for manual saves)
            if (!manualSave && (!this.autosaveEnabled || localStorage.getItem('autosaveEnabled') !== 'true')) {
                return;
            }
            
            // Get or create the file handle/path based on the environment
            if (this.isElectronMode()) {
                // Electron mode - use file path
                if (!this.autosaveFilePath) {
                    const savedPath = await window.electronAPI.getStoredFilePath();
                    if (savedPath) {
                        this.autosaveFilePath = savedPath;
                    } else {
                        if (manualSave) {
                            // For manual save, prompt user to select file
                            try {
                                await this.selectAutosaveFile();
                                if (!this.autosaveFilePath) {
                                    this.showFeedback('No file selected - save cancelled', 'error');
                                    return;
                                }
                            } catch (error) {
                                this.showFeedback('No file selected - save cancelled', 'error');
                                return;
                            }
                        } else {
                            console.log('No autosave file selected yet');
                            return;
                        }
                    }
                }
            } else {
                // Browser mode - use file handle
                if (!this.autosaveFileHandle) {
                    const savedHandle = await this.getStoredFileHandle();
                    if (savedHandle) {
                        this.autosaveFileHandle = savedHandle;
                    } else {
                        if (manualSave) {
                            // For manual save, prompt user to select file
                            try {
                                await this.selectAutosaveFile();
                                if (!this.autosaveFileHandle) {
                                    this.showFeedback('No file selected - save cancelled', 'error');
                                    return;
                                }
                            } catch (error) {
                                this.showFeedback('No file selected - save cancelled', 'error');
                                return;
                            }
                        } else {
                            console.log('No autosave file selected yet');
                            return;
                        }
                    }
                }
            }
            
            // Prepare export data
            const exportData = this.prepareExportData();
            const jsonString = JSON.stringify(exportData, null, 2);
            
            if (this.isElectronMode()) {
                // Electron mode - use file path
                if (this.autosaveFilePath) {
                    const result = await window.electronAPI.saveToFile(this.autosaveFilePath, jsonString);
                    if (result.success) {
                        this.showFeedback('Autosaved to file', 'success');
                        localStorage.setItem('lastAutosaveTime', new Date().toISOString());
                        await this.updateAutosaveStatus();
                        console.log("Autosaved: ", new Date().toISOString());
                    } else {
                        console.error('Autosave failed:', result.error);
                        this.showFeedback('Autosave failed: ' + result.error, 'error');
                    }
                }
            } else {
                // Browser mode - use file handle
                if (this.autosaveFileHandle) {
                    const writable = await this.autosaveFileHandle.createWritable();
                    await writable.write(jsonString);
                    await writable.close();
                    
                    this.showFeedback('Autosaved to file', 'success');
                    localStorage.setItem('lastAutosaveTime', new Date().toISOString());
                    await this.updateAutosaveStatus();
                    console.log("Autosaved: ", new Date().toISOString());
                }
            }
        } catch (error) {
            console.error('Autosave failed:', error);
            // Don't show error to user unless it's important
            if (error.name !== 'AbortError') {
                this.showFeedback('Autosave failed: ' + error.message, 'error');
            }
        }
    }
    
    async createDefaultAutosaveFile() {
        console.log('createDefaultAutosaveFile called but no longer used');
    }
    
    async selectAutosaveFile() {
        try {
            if (this.isElectronMode()) {
                // Electron mode - use file dialog
                const filePath = await window.electronAPI.selectSaveFile();
                if (filePath) {
                    this.autosaveFilePath = filePath;
                    await window.electronAPI.setStoredFilePath(filePath);
                    this.showFeedback('Autosave file selected successfully');
                    await this.updateAutosaveStatus();
                } else {
                    throw new Error('No file selected');
                }
            } else {
                // Browser mode - use File System Access API
                const options = {
                    types: [
                        {
                            description: 'JSON Files',
                            accept: {
                                'application/json': ['.json']
                            }
                        }
                    ],
                    suggestedName: `todo-autosave-${new Date().toISOString().split('T')[0]}.json`
                };
                
                this.autosaveFileHandle = await window.showSaveFilePicker(options);
                
                // Store file handle reference for future use
                await this.storeFileHandle(this.autosaveFileHandle);
                
                this.showFeedback('Autosave file selected successfully');
                
                // Update status in settings panel
                await this.updateAutosaveStatus();
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Failed to select autosave file:', error);
                this.showFeedback('Failed to select autosave file', 'error');
            }
            throw error; // Re-throw to handle in calling code
        }
    }
    
    async storeFileHandle(fileHandle) {
        // Store file handle in IndexedDB for persistence across sessions
        try {
            const db = await this.openAutosaveDB();
            const transaction = db.transaction(['fileHandles'], 'readwrite');
            const store = transaction.objectStore('fileHandles');
            const request = store.put(fileHandle, 'autosaveHandle');
            
            return new Promise((resolve, reject) => {
                request.onsuccess = () => {
                    resolve();
                };
                request.onerror = () => {
                    reject(request.error);
                };
            });
        } catch (error) {
            console.error('Error storing file handle:', error);
            throw error;
        }
    }
    
    async getStoredFileHandle() {
        try {
            const db = await this.openAutosaveDB();
            const transaction = db.transaction(['fileHandles'], 'readonly');
            const store = transaction.objectStore('fileHandles');
            
            const handle = await new Promise((resolve, reject) => {
                const request = store.get('autosaveHandle');
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
            
            // Verify we still have permission
            if (handle) {
                // Check if queryPermission is available (might not be in all browsers)
                if (handle.queryPermission) {
                    try {
                        const permission = await handle.queryPermission({ mode: 'readwrite' });
                        if (permission === 'granted') {
                            return handle;
                        } else if (permission === 'prompt') {
                            const newPermission = await handle.requestPermission({ mode: 'readwrite' });
                            if (newPermission === 'granted') {
                                return handle;
                            }
                        }
                    } catch (permError) {
                        // Permission check failed, try direct access
                        return handle;
                    }
                } else {
                    // Fallback: try to use the handle directly
                    // Some browsers might not implement permission methods
                    return handle;
                }
            }
        } catch (error) {
            console.error('Failed to retrieve stored file handle:', error);
        }
        return null;
    }
    
    async openAutosaveDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('TodoAutosaveDB', 1);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('fileHandles')) {
                    db.createObjectStore('fileHandles');
                }
            };
        });
    }
    
    async clearAutosaveFileHandle() {
        // Clear autosave file handle/path based on mode
        try {
            if (this.isElectronMode()) {
                // Clear file path in Electron
                await window.electronAPI.clearStoredFilePath();
                this.autosaveFilePath = null;
                console.log('Autosave file path cleared from Electron storage');
            } else {
                // Clear file handle from IndexedDB in browser
                const db = await this.openAutosaveDB();
                const transaction = db.transaction(['fileHandles'], 'readwrite');
                const store = transaction.objectStore('fileHandles');
                const request = store.delete('autosaveHandle');
                
                await new Promise((resolve, reject) => {
                    request.onsuccess = () => {
                        console.log('Autosave file handle cleared from IndexedDB');
                        resolve();
                    };
                    request.onerror = () => {
                        console.error('Error clearing autosave file handle:', request.error);
                        reject(request.error);
                    };
                });
                this.autosaveFileHandle = null;
            }
        } catch (error) {
            console.error('Error clearing autosave file handle/path:', error);
            throw error;
        }
    }
    
    async preloadAutosaveFileHandle() {
        // Preload file handle for browser mode
        try {
            const savedHandle = await this.getStoredFileHandle();
            if (savedHandle) {
                this.autosaveFileHandle = savedHandle;
                console.log('Preloaded autosave file handle');
            }
        } catch (error) {
            console.log('Could not preload autosave file handle:', error);
        }
    }
    
    async preloadAutosaveFilePath() {
        // Preload file path for Electron mode
        try {
            const savedPath = await window.electronAPI.getStoredFilePath();
            if (savedPath) {
                this.autosaveFilePath = savedPath;
                console.log('Preloaded autosave file path:', savedPath);
            }
        } catch (error) {
            console.log('Could not preload autosave file path:', error);
        }
    }
    
    prepareExportData() {
        const allData = {};
        const dailyNotes = {};
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('dailyTodos_') && 
                key !== 'dailyTodos_notes' && 
                key !== 'dailyTodos_whiteboard' && 
                key !== 'dailyTodos_trash') {
                const date = key.replace('dailyTodos_', '');
                const data = localStorage.getItem(key);
                if (data && data.trim()) {
                    try {
                        allData[date] = JSON.parse(data);
                    } catch (e) {
                        console.warn(`Failed to parse data for ${key}:`, e);
                        allData[date] = null;
                    }
                }
            } else if (key.startsWith('dailyNotes_')) {
                const date = key.replace('dailyNotes_', '');
                const noteContent = localStorage.getItem(key);
                if (noteContent && noteContent.trim()) {
                    dailyNotes[date] = noteContent;
                }
            }
        }
        
        // Include all other data
        const globalUnsorted = localStorage.getItem('globalUnsortedItems');
        const backburnerItems = localStorage.getItem('backburnerItems');
        const trashItems = localStorage.getItem('dailyTodos_trash');
        const notes = localStorage.getItem('dailyTodos_notes');
        const whiteboard = localStorage.getItem('dailyTodos_whiteboard');
        const recurringTasks = localStorage.getItem('recurringTasks');
        
        return {
            exportDate: new Date().toISOString(),
            version: '6.0',
            autosave: true,
            data: allData,
            dailyNotes: dailyNotes,
            globalUnsortedItems: globalUnsorted ? JSON.parse(globalUnsorted) : [],
            backburnerItems: backburnerItems ? JSON.parse(backburnerItems) : { unsortedItems: [], sections: {} },
            trashItems: trashItems ? JSON.parse(trashItems) : [],
            notes: notes || '',
            whiteboard: whiteboard || '',
            recurringTasks: recurringTasks ? JSON.parse(recurringTasks) : []
        };
    }
    
    async updateAutosaveStatus() {
        const statusElement = document.getElementById('autosaveStatus');
        if (!statusElement) return;
        
        if (!this.isFileSystemAccessSupported()) {
            statusElement.textContent = 'Autosave status: Not supported in this browser';
            statusElement.style.color = '#e74c3c';
            return;
        }
        
        try {
            let hasValidFile = false;
            let fileName = '';
            
            if (this.isElectronMode()) {
                // Check for Electron mode file path
                const savedPath = await window.electronAPI.getStoredFilePath();
                if (savedPath) {
                    hasValidFile = true;
                    // Extract filename from path
                    fileName = savedPath.split(/[\\/]/).pop();
                    // Update instance property
                    this.autosaveFilePath = savedPath;
                }
            } else {
                // Check for browser mode file handle
                const savedHandle = await this.getStoredFileHandle();
                if (savedHandle) {
                    hasValidFile = true;
                    fileName = savedHandle.name;
                    // Update instance property
                    this.autosaveFileHandle = savedHandle;
                }
            }
            
            if (hasValidFile) {
                // Get the current interval setting
                const savedInterval = localStorage.getItem('autosaveInterval');
                const intervalMs = savedInterval ? parseInt(savedInterval) : 60000;
                const intervalText = this.getIntervalText(intervalMs);
                
                let statusText = `Autosave status: Configured ${intervalText} (${fileName})`;
                
                // Add last autosave time if available
                const lastAutosaveTime = localStorage.getItem('lastAutosaveTime');
                if (lastAutosaveTime) {
                    const lastSave = new Date(lastAutosaveTime);
                    const timeAgo = this.getTimeAgo(lastSave);
                    statusText += `<br>Last saved: ${timeAgo}`;
                }
                
                statusElement.innerHTML = statusText;
                statusElement.style.color = '#27ae60';
            } else {
                statusElement.textContent = 'Autosave status: Not configured - click "Select Autosave File Location"';
                statusElement.style.color = '#f39c12';
            }
        } catch (error) {
            statusElement.textContent = 'Autosave status: Error checking configuration';
            statusElement.style.color = '#e74c3c';
        }
    }
    
    getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        
        if (seconds < 60) return 'just now';
        
        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };
        
        for (const [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / secondsInUnit);
            if (interval >= 1) {
                return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
            }
        }
        
        return 'just now';
    }
    
    getIntervalText(intervalMs) {
        switch(intervalMs) {
            case 60000: return 'every minute';
            case 600000: return 'every 10 minutes';
            case 1800000: return 'every 30 minutes';
            case 3600000: return 'every hour';
            case 7200000: return 'every 2 hours';
            case 86400000: return 'every 24 hours';
            default: return 'every minute';
        }
    }
    
    initializeSearch() {
        this.searchInput = document.getElementById('searchInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.clearSearchBtn = document.getElementById('clearSearchBtn');
        this.searchResultsCount = document.getElementById('searchResultsCount');
        this.searchResults = document.getElementById('searchResults');
        this.excludeDoneItemsFilter = document.getElementById('excludeDoneItemsFilter');
        this.currentFutureOnlyFilter = document.getElementById('currentFutureOnlyFilter');
        
        if (this.searchInput && !this.searchInput.dataset.initialized) {
            this.searchInput.addEventListener('input', (e) => this.performSearch(e.target.value));
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(e.target.value);
                }
            });
            this.searchInput.dataset.initialized = 'true';
        }
        
        if (this.searchBtn && !this.searchBtn.dataset.initialized) {
            this.searchBtn.addEventListener('click', () => {
                this.performSearch(this.searchInput.value);
            });
            this.searchBtn.dataset.initialized = 'true';
        }
        
        if (this.clearSearchBtn && !this.clearSearchBtn.dataset.initialized) {
            this.clearSearchBtn.addEventListener('click', () => {
                this.searchInput.value = '';
                this.clearSearchResults();
            });
            this.clearSearchBtn.dataset.initialized = 'true';
        }
        
        // Add event listeners for filter checkboxes
        if (this.excludeDoneItemsFilter && !this.excludeDoneItemsFilter.dataset.initialized) {
            this.excludeDoneItemsFilter.addEventListener('change', () => {
                if (this.searchInput.value.trim()) {
                    this.performSearch(this.searchInput.value);
                }
            });
            this.excludeDoneItemsFilter.dataset.initialized = 'true';
        }
        
        if (this.currentFutureOnlyFilter && !this.currentFutureOnlyFilter.dataset.initialized) {
            this.currentFutureOnlyFilter.addEventListener('change', () => {
                if (this.searchInput.value.trim()) {
                    this.performSearch(this.searchInput.value);
                }
            });
            this.currentFutureOnlyFilter.dataset.initialized = 'true';
        }
    }
    
    performSearch(searchTerm) {
        const trimmedTerm = searchTerm.trim().toLowerCase();
        
        if (!trimmedTerm) {
            this.clearSearchResults();
            return;
        }
        
        const results = this.searchAllItems(trimmedTerm);
        const filteredResults = this.applySearchFilters(results);
        this.displaySearchResults(filteredResults, trimmedTerm);
    }
    
    applySearchFilters(results) {
        let filteredResults = results;
        
        // Apply exclude done items filter
        if (this.excludeDoneItemsFilter && this.excludeDoneItemsFilter.checked) {
            filteredResults = filteredResults.filter(item => item.column !== 'Done');
        }
        
        // Apply current/future only filter
        if (this.currentFutureOnlyFilter && this.currentFutureOnlyFilter.checked) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            filteredResults = filteredResults.filter(item => {
                // Always include items without dates or with "N/A" dates
                if (!item.originalDateKey || item.originalDateKey === 'N/A') {
                    return true;
                }
                
                try {
                    // Handle the date key format properly (YYYY-MM-DD)
                    const itemDate = new Date(item.originalDateKey + 'T00:00:00');
                    
                    // If that fails, try alternative parsing
                    if (isNaN(itemDate.getTime())) {
                        const itemDateAlt = new Date(item.originalDateKey);
                        itemDateAlt.setHours(0, 0, 0, 0);
                        return itemDateAlt >= today;
                    }
                    
                    itemDate.setHours(0, 0, 0, 0);
                    return itemDate >= today;
                } catch (e) {
                    // If date parsing fails, include the item
                    return true;
                }
            });
        }
        
        return filteredResults;
    }
    
    searchAllItems(searchTerm) {
        const allItems = [];
        const maxSearchResults = 1000; // Limit results to prevent memory issues
        
        // Search daily todos
        for (let i = 0; i < localStorage.length && allItems.length < maxSearchResults; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('dailyTodos_') && !key.endsWith('_notes') && !key.endsWith('_trash') && !key.endsWith('_whiteboard')) {
                const dateKey = key.replace('dailyTodos_', '');
                const data = JSON.parse(localStorage.getItem(key) || '{}');
                
                this.extractItemsFromData(data, allItems, 'daily', dateKey, searchTerm, maxSearchResults);
            }
        }
        
        // Search global unsorted items
        if (allItems.length < maxSearchResults) {
            const globalUnsorted = JSON.parse(localStorage.getItem('globalUnsortedItems') || '[]');
            for (const item of globalUnsorted) {
                if (allItems.length >= maxSearchResults) break;
                if (item.text && item.text.toLowerCase().includes(searchTerm)) {
                    allItems.push({
                        ...item,
                        source: 'new-items',
                        date: 'N/A',
                        column: 'New Items'
                    });
                }
            }
        }
        
        // Search backburner items
        const backburnerData = JSON.parse(localStorage.getItem('backburnerItems') || '{"unsortedItems": [], "sections": {}}');
        
        // Search backburner unsorted items
        backburnerData.unsortedItems?.forEach(item => {
            if (item.text && item.text.toLowerCase().includes(searchTerm)) {
                allItems.push({
                    ...item,
                    source: 'backburner',
                    date: 'N/A',
                    column: 'Backburner'
                });
            }
        });
        
        // Search backburner sections
        Object.values(backburnerData.sections || {}).forEach(section => {
            this.extractItemsFromData(section, allItems, 'backburner', 'N/A', searchTerm, maxSearchResults);
        });
        
        // Search trash items
        const trashData = JSON.parse(localStorage.getItem('dailyTodos_trash') || '[]');
        trashData.forEach(item => {
            if (item.text && item.text.toLowerCase().includes(searchTerm)) {
                allItems.push({
                    ...item,
                    source: 'trash',
                    date: item.originalDate ? this.formatDateForDisplay(item.originalDate) : 'N/A',
                    column: item.originalColumn || 'Trash'
                });
            }
        });
        
        return allItems;
    }
    
    extractItemsFromData(data, allItems, source, dateKey, searchTerm, maxResults) {
        const columns = ['todo', 'inProgress', 'done'];
        
        for (const columnType of columns) {
            if (allItems.length >= maxResults) break;
            const items = data[columnType] || [];
            for (const item of items) {
                if (allItems.length >= maxResults) break;
                if (item.text && item.text.toLowerCase().includes(searchTerm)) {
                    allItems.push({
                        ...item,
                        source: source,
                        date: dateKey === 'N/A' ? 'N/A' : this.formatDateForDisplay(dateKey),
                        originalDateKey: dateKey,
                        column: this.getColumnDisplayName(columnType),
                        sectionName: data.name || null
                    });
                }
            }
        }
        
        // Search sections if they exist
        if (data.sections && allItems.length < maxResults) {
            for (const section of Object.values(data.sections)) {
                if (allItems.length >= maxResults) break;
                for (const columnType of columns) {
                    if (allItems.length >= maxResults) break;
                    const items = section[columnType] || [];
                    for (const item of items) {
                        if (allItems.length >= maxResults) break;
                        if (item.text && item.text.toLowerCase().includes(searchTerm)) {
                            allItems.push({
                                ...item,
                                source: source,
                                date: dateKey === 'N/A' ? 'N/A' : this.formatDateForDisplay(dateKey),
                                originalDateKey: dateKey,
                                column: this.getColumnDisplayName(columnType),
                                sectionName: section.name || 'Unnamed Section'
                            });
                        }
                    }
                }
            }
        }
    }
    
    getColumnDisplayName(columnType) {
        switch (columnType) {
            case 'todo': return 'To Do';
            case 'inProgress': return 'In Progress';
            case 'done': return 'Done';
            default: return columnType;
        }
    }
    
    formatDateForDisplay(dateKey) {
        if (dateKey === 'N/A') return 'N/A';
        
        try {
            const date = new Date(dateKey);
            // Fix timezone issue by adding 1 day
            date.setDate(date.getDate() + 1);
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const dateStr = date.toDateString();
            const todayStr = today.toDateString();
            const yesterdayStr = yesterday.toDateString();
            const tomorrowStr = tomorrow.toDateString();
            
            if (dateStr === todayStr) return 'Today';
            if (dateStr === yesterdayStr) return 'Yesterday';
            if (dateStr === tomorrowStr) return 'Tomorrow';
            
            return date.toLocaleDateString();
        } catch (error) {
            return dateKey;
        }
    }
    
    displaySearchResults(results, searchTerm) {
        this.searchResultsCount.textContent = `Found ${results.length} item${results.length !== 1 ? 's' : ''} matching "${searchTerm}"`;
        
        if (results.length === 0) {
            this.searchResults.innerHTML = '<div class="search-result-item" style="text-align: center; color: #7f8c8d;">No items found</div>';
            return;
        }
        
        const resultsHtml = results.map(item => this.createSearchResultHtml(item, searchTerm)).join('');
        this.searchResults.innerHTML = resultsHtml;
        
        // Add event listeners to buttons
        this.searchResults.querySelectorAll('.search-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleSearchAction(e));
        });
    }
    
    createSearchResultHtml(item, searchTerm) {
        const highlightedText = this.highlightSearchTerm(item.text, searchTerm);
        
        return `
            <div class="search-result-item">
                <div class="search-result-text">${highlightedText}</div>
                <div class="search-result-meta">
                    <span>📅 ${item.date}</span>
                    ${(item.source === 'daily' || item.source === 'trash') ? `<span>📋 ${item.column}</span>` : ''}
                    ${item.sectionName ? `<span>📁 ${item.sectionName}</span>` : ''}
                    ${item.source ? `<span>🔍 ${this.getSourceDisplayName(item.source)}</span>` : ''}
                    ${item.dueDate ? `<span>⏰ Due: ${this.formatDateForDisplay(item.dueDate)}</span>` : ''}
                    ${item.highPriority ? '<span style="background: #e74c3c; color: white;">❗ High Priority</span>' : ''}
                </div>
                <div class="search-result-actions">
                    ${this.getActionButtons(item)}
                </div>
            </div>
        `;
    }
    
    getSourceDisplayName(source) {
        switch (source) {
            case 'daily': return 'TODO';
            case 'new-items': return 'New Items';
            case 'backburner': return 'Backburner';
            case 'trash': return 'Trash';
            default: return source;
        }
    }
    
    getActionButtons(item) {
        let buttons = '';
        
        // Navigation button for daily items - show for any item from daily todos
        if (item.source === 'daily') {
            const displayDate = item.date && item.date !== 'N/A' ? item.date : 'that day';
            const dateKey = item.originalDateKey || item.date;
            buttons += `<button class="search-action-btn search-action-nav" data-action="navigate" data-date="${dateKey}" data-item-id="${item.id}">📍 Go to ${displayDate}</button>`;
        }
        
        // Add to new items button
        buttons += `<button class="search-action-btn search-action-add" data-action="add-new-items" data-text="${this.escapeAttribute(item.text)}" data-due-date="${item.dueDate || ''}" data-high-priority="${item.highPriority || false}">➕ Add to New Items</button>`;
        
        // Add to backburner button
        buttons += `<button class="search-action-btn search-action-backburner" data-action="add-backburner" data-text="${this.escapeAttribute(item.text)}" data-due-date="${item.dueDate || ''}" data-high-priority="${item.highPriority || false}">🔄 Add to Backburner</button>`;
        
        return buttons;
    }
    
    escapeAttribute(text) {
        return text.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    
    highlightSearchTerm(text, searchTerm) {
        if (!searchTerm) return this.escapeHtml(text);
        
        const regex = new RegExp(`(${this.escapeRegex(searchTerm)})`, 'gi');
        return this.escapeHtml(text).replace(regex, '<span class="search-highlight">$1</span>');
    }
    
    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    handleSearchAction(event) {
        const button = event.target;
        const action = button.dataset.action;
        
        switch (action) {
            case 'navigate':
                this.navigateToDateFromSearch(button.dataset.date);
                break;
            case 'add-new-items':
                this.addToNewItems(button.dataset.text, button.dataset.dueDate, button.dataset.highPriority === 'true');
                break;
            case 'add-backburner':
                this.addToBackburner(button.dataset.text, button.dataset.dueDate, button.dataset.highPriority === 'true');
                break;
        }
    }
    
    navigateToDateFromSearch(dateStr) {
        try {
            let targetDate;
            
            if (dateStr === 'Today') {
                targetDate = new Date();
            } else if (dateStr === 'Yesterday') {
                targetDate = new Date();
                targetDate.setDate(targetDate.getDate() - 1);
            } else if (dateStr === 'Tomorrow') {
                targetDate = new Date();
                targetDate.setDate(targetDate.getDate() + 1);
            } else {
                targetDate = new Date(dateStr);
                if (isNaN(targetDate.getTime())) {
                    throw new Error('Invalid date format');
                }
                // Fix timezone issue by adding 1 day for navigation
                targetDate.setDate(targetDate.getDate() + 1);
            }
            
            targetDate.setHours(0, 0, 0, 0); // Normalize time
            this.switchPanel('todo');
            this.navigateToDate(targetDate); // Use existing method
            this.showFeedback('Navigated to ' + (targetDate.toLocaleDateString() || dateStr), 'success');
        } catch (error) {
            this.showFeedback('Error navigating to date: ' + dateStr, 'error');
        }
    }
    
    addToNewItems(text, dueDate, isHighPriority) {
        const item = this.createTodoItem(text, null, null, null, null, dueDate, 'todo', isHighPriority);
        this.unsortedItems.appendChild(item);
        this.saveGlobalUnsortedItems();
        this.updateAllItemCounts();
        this.showFeedback('Added to New Items', 'success');
    }
    
    addToBackburner(text, dueDate, isHighPriority) {
        const item = this.createTodoItem(text, null, null, null, null, dueDate, 'backburner', isHighPriority);
        
        // Get backburner unsorted container
        const backburnerUnsorted = document.getElementById('backburnerUnsortedItems');
        if (backburnerUnsorted) {
            backburnerUnsorted.appendChild(item);
            this.saveBackburnerItems();
            this.updateBackburnerItemCounts();
            this.showFeedback('Added to Backburner', 'success');
        } else {
            this.showFeedback('Error adding to backburner', 'error');
        }
    }
    
    clearSearchResults() {
        this.searchResultsCount.textContent = 'Enter text to search...';
        this.searchResults.innerHTML = '';
    }
    
    // Pomodoro Timer Methods
    initPomodoro() {
        this.loadPomodoroSettings();
        this.updatePomodoroDisplay();
        this.updatePomodoroSession();
        
        // Don't request notification permission on init - only when user enables the checkbox
    }
    
    loadPomodoroSettings() {
        const savedSettings = localStorage.getItem('pomodoroSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            this.pomodoroWorkDuration.value = settings.workDuration || 25;
            this.pomodoroBreakDuration.value = settings.breakDuration || 5;
            this.pomodoroLongBreakDuration.value = settings.longBreakDuration || 15;
            this.pomodoroNotifications.checked = settings.notifications === true; // Default to false
        }
        
        // Load timer state if it exists, otherwise use default time based on mode
        this.loadPomodoroState();
        
        // If no saved state, update the time remaining based on current mode and loaded settings
        const savedState = localStorage.getItem('pomodoroState');
        if (!savedState) {
            if (this.pomodoroMode === 'work') {
                this.pomodoroTimeRemaining = parseInt(this.pomodoroWorkDuration.value) * 60;
            } else if (this.pomodoroMode === 'break') {
                this.pomodoroTimeRemaining = parseInt(this.pomodoroBreakDuration.value) * 60;
            } else if (this.pomodoroMode === 'long-break') {
                this.pomodoroTimeRemaining = parseInt(this.pomodoroLongBreakDuration.value) * 60;
            }
        }
    }
    
    savePomodoroSettings() {
        const settings = {
            workDuration: parseInt(this.pomodoroWorkDuration.value),
            breakDuration: parseInt(this.pomodoroBreakDuration.value),
            longBreakDuration: parseInt(this.pomodoroLongBreakDuration.value),
            notifications: this.pomodoroNotifications.checked
        };
        localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
    }
    
    loadPanelVisibilitySettings() {
        const showWikiPanel = localStorage.getItem('showWikiPanel');
        const showNotesPanel = localStorage.getItem('showNotesPanel');
        const showSketchPanel = localStorage.getItem('showSketchPanel');
        
        this.showWikiPanel.checked = showWikiPanel !== 'false'; // Default to true
        this.showNotesPanel.checked = showNotesPanel !== 'false'; // Default to true
        this.showSketchPanel.checked = showSketchPanel !== 'false'; // Default to true
        
        this.applyPanelVisibility();
    }
    
    savePanelVisibilitySettings() {
        localStorage.setItem('showWikiPanel', this.showWikiPanel.checked.toString());
        localStorage.setItem('showNotesPanel', this.showNotesPanel.checked.toString());
        localStorage.setItem('showSketchPanel', this.showSketchPanel.checked.toString());
    }
    
    togglePanelVisibility(panelType) {
        const navBtns = {
            wiki: this.wikiNavBtn,
            notes: this.notesNavBtn,
            sketch: this.sketchNavBtn
        };
        
        const panels = {
            wiki: this.wikiPanel,
            notes: this.notesPanel,
            sketch: this.sketchPanel
        };
        
        const checkboxes = {
            wiki: this.showWikiPanel,
            notes: this.showNotesPanel,
            sketch: this.showSketchPanel
        };
        
        const navBtn = navBtns[panelType];
        const panel = panels[panelType];
        const checkbox = checkboxes[panelType];
        
        if (checkbox.checked) {
            navBtn.style.display = 'block';
        } else {
            navBtn.style.display = 'none';
            // If currently on this panel, switch to todo panel
            if (!panel.classList.contains('hidden')) {
                this.switchPanel('todo');
            }
        }
    }
    
    applyPanelVisibility() {
        this.togglePanelVisibility('wiki');
        this.togglePanelVisibility('notes');
        this.togglePanelVisibility('sketch');
        // Settings panel is always visible - no toggle needed
    }
    
    savePomodoroState() {
        const state = {
            timeRemaining: this.pomodoroTimeRemaining,
            currentSession: this.pomodoroCurrentSession,
            completedSessions: this.pomodoroCompletedSessions,
            mode: this.pomodoroMode,
            isRunning: this.pomodoroIsRunning
        };
        localStorage.setItem('pomodoroState', JSON.stringify(state));
    }
    
    loadPomodoroState() {
        const savedState = localStorage.getItem('pomodoroState');
        if (savedState) {
            const state = JSON.parse(savedState);
            this.pomodoroTimeRemaining = state.timeRemaining || 25 * 60;
            this.pomodoroCurrentSession = state.currentSession || 1;
            this.pomodoroCompletedSessions = state.completedSessions || 0;
            this.pomodoroMode = state.mode || 'work';
            this.pomodoroIsRunning = false; // Always start stopped after refresh
        }
    }
    
    updatePomodoroSettings() {
        // Update the time remaining based on current mode and new settings
        if (this.pomodoroMode === 'work') {
            this.pomodoroTimeRemaining = parseInt(this.pomodoroWorkDuration.value) * 60;
        } else if (this.pomodoroMode === 'break') {
            this.pomodoroTimeRemaining = parseInt(this.pomodoroBreakDuration.value) * 60;
        } else if (this.pomodoroMode === 'long-break') {
            this.pomodoroTimeRemaining = parseInt(this.pomodoroLongBreakDuration.value) * 60;
        }
        this.updatePomodoroDisplay();
        this.savePomodoroSettings();
        this.savePomodoroState();
    }
    
    startPomodoro() {
        this.pomodoroIsRunning = true;
        this.pomodoroIsPaused = false;
        
        this.pomodoroStart.disabled = true;
        this.pomodoroPause.disabled = false;
        this.pomodoroStop.disabled = false;
        this.pomodoroSkip.disabled = false;
        
        this.pomodoroTimer.classList.add('pomodoro-active');
        this.updatePomodoroStatus();
        
        this.pomodoroInterval = setInterval(() => {
            this.pomodoroTimeRemaining--;
            this.updatePomodoroDisplay();
            
            if (this.pomodoroTimeRemaining <= 0) {
                this.pomodoroSessionComplete();
            }
        }, 1000);
        
        this.showFeedback(`${this.pomodoroMode === 'work' ? 'Work' : 'Break'} session started!`, 'success');
        this.savePomodoroState();
    }
    
    pausePomodoro() {
        if (this.pomodoroIsRunning) {
            clearInterval(this.pomodoroInterval);
            this.pomodoroIsRunning = false;
            this.pomodoroIsPaused = true;
            
            this.pomodoroStart.disabled = false;
            this.pomodoroPause.disabled = true;
            this.pomodoroTimer.classList.remove('pomodoro-active');
            
            // this.pomodoroStatus.textContent = 'Paused'; // Removed - compact UI no longer has status display
            this.showFeedback('Timer paused', 'success');
            this.savePomodoroState();
        }
    }
    
    stopPomodoro() {
        this.resetPomodoro();
        this.showFeedback('Timer stopped', 'success');
        this.savePomodoroState();
    }
    
    skipPomodoro() {
        if (this.pomodoroIsRunning) {
            // If timer is running, skip to completion
            clearInterval(this.pomodoroInterval);
            this.pomodoroSessionComplete();
            this.showFeedback('Session skipped', 'success');
        } else {
            // If timer is not running, advance to next session state
            if (this.pomodoroMode === 'work') {
                this.pomodoroCompletedSessions++;
                if (this.pomodoroCompletedSessions % 4 === 0) {
                    this.pomodoroMode = 'long-break';
                    this.pomodoroTimeRemaining = parseInt(this.pomodoroLongBreakDuration.value) * 60;
                } else {
                    this.pomodoroMode = 'break';
                    this.pomodoroTimeRemaining = parseInt(this.pomodoroBreakDuration.value) * 60;
                }
            } else {
                this.pomodoroMode = 'work';
                this.pomodoroTimeRemaining = parseInt(this.pomodoroWorkDuration.value) * 60;
                this.pomodoroCurrentSession++;
                
                if (this.pomodoroCurrentSession > this.pomodoroTotalSessions) {
                    this.pomodoroCurrentSession = 1;
                    this.pomodoroCompletedSessions = 0;
                }
            }
            this.updatePomodoroDisplay();
            this.updatePomodoroSession();
            this.updatePomodoroStatus();
            this.showFeedback('Advanced to next session', 'success');
            this.savePomodoroState();
        }
    }
    
    resetPomodoro() {
        clearInterval(this.pomodoroInterval);
        this.pomodoroIsRunning = false;
        this.pomodoroIsPaused = false;
        
        this.pomodoroStart.disabled = false;
        this.pomodoroPause.disabled = true;
        this.pomodoroStop.disabled = true;
        
        this.pomodoroTimer.classList.remove('pomodoro-active');
        
        if (this.pomodoroMode === 'work') {
            this.pomodoroTimeRemaining = parseInt(this.pomodoroWorkDuration.value) * 60;
        } else if (this.pomodoroMode === 'break') {
            this.pomodoroTimeRemaining = parseInt(this.pomodoroBreakDuration.value) * 60;
        } else if (this.pomodoroMode === 'long-break') {
            this.pomodoroTimeRemaining = parseInt(this.pomodoroLongBreakDuration.value) * 60;
        }
        
        this.updatePomodoroDisplay();
        this.updatePomodoroStatus();
    }
    
    pomodoroSessionComplete() {
        clearInterval(this.pomodoroInterval);
        
        this.showPomodoroNotification();
        this.showPomodoroCompletionOverlay();
        
        if (this.pomodoroMode === 'work') {
            // Increment completed sessions when finishing a work session
            this.pomodoroCompletedSessions++;
            
            // Switch to break mode
            if (this.pomodoroCompletedSessions % 4 === 0) {
                // Long break after every 4th session
                this.pomodoroMode = 'long-break';
                this.pomodoroTimeRemaining = parseInt(this.pomodoroLongBreakDuration.value) * 60;
            } else {
                // Short break
                this.pomodoroMode = 'break';
                this.pomodoroTimeRemaining = parseInt(this.pomodoroBreakDuration.value) * 60;
            }
        } else {
            // Switch back to work mode
            this.pomodoroMode = 'work';
            this.pomodoroTimeRemaining = parseInt(this.pomodoroWorkDuration.value) * 60;
            this.pomodoroCurrentSession++;
            
            // Reset session counter after completing all 4 sessions + breaks
            if (this.pomodoroCurrentSession > this.pomodoroTotalSessions) {
                this.pomodoroCurrentSession = 1;
                this.pomodoroCompletedSessions = 0;
            }
        }
        
        this.resetPomodoro();
        this.updatePomodoroSession();
        this.updatePomodoroStatus();
        this.savePomodoroState();
    }
    
    async showPomodoroNotification() {
        if (!this.pomodoroNotifications.checked) {
            return;
        }
        
        let title, body;
        
        if (this.pomodoroMode === 'work') {
            if (this.pomodoroCompletedSessions % 4 === 0) {
                title = 'Work Session Complete! 🎉';
                body = 'Time for a long break! You\'ve earned it.';
            } else {
                title = 'Work Session Complete! ✅';
                body = 'Time for a short break!';
            }
        } else {
            title = 'Break Complete! 💪';
            body = 'Ready to get back to work?';
        }
        
        if (this.isElectronMode()) {
            // Use Electron's native notifications
            try {
                await window.electronAPI.showNotification(title, {
                    body: body,
                    silent: false
                });
            } catch (error) {
                console.error('Electron notification failed:', error);
                // Fallback to web notification
                this.showWebNotification(title, body);
            }
        } else {
            // Use web notifications
            this.showWebNotification(title, body);
        }
    }
    
    showWebNotification(title, body) {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, {
                body: body,
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="%23e74c3c"/><text x="32" y="40" text-anchor="middle" fill="white" font-size="24">🍅</text></svg>'
            });
        }
        
        // Audio events disabled
        // try {
        //     const audio = new Audio('data:audio/wav;base64,UklGRvQIAABXQVZFZm10IBAAAAABAAEARAAAEAAIAP4AAAB4AQAAfgAAAQD8BAABagAuAogAhgDqAlwCBAA1AD8AVQBOAK0ApQCFAHkAfgCJAIYAhgCCAIQAggCEAIIAggCCAIQAhACCAIQAhACEAIQAggCEAIAAjADgAzYC');
        //     audio.volume = 0.3;
        //     audio.play().catch(() => {});
        // } catch (e) {}
    }
    
    updatePomodoroDisplay() {
        const minutes = Math.floor(this.pomodoroTimeRemaining / 60);
        const seconds = this.pomodoroTimeRemaining % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        this.pomodoroTimer.textContent = display;
        
        // Update timer color based on mode
        this.pomodoroTimer.className = 'pomodoro-timer';
        if (this.pomodoroMode === 'work') {
            this.pomodoroTimer.classList.add('work-mode');
        } else if (this.pomodoroMode === 'break') {
            this.pomodoroTimer.classList.add('break-mode');
        } else if (this.pomodoroMode === 'long-break') {
            this.pomodoroTimer.classList.add('long-break-mode');
        }
        
        if (this.pomodoroIsRunning) {
            this.pomodoroTimer.classList.add('pomodoro-active');
        }
    }
    
    updatePomodoroStatus() {
        let status;
        if (this.pomodoroIsPaused) {
            status = 'Paused';
        } else if (this.pomodoroIsRunning) {
            if (this.pomodoroMode === 'work') {
                status = 'Focus time! 🎯';
            } else if (this.pomodoroMode === 'break') {
                status = 'Short break 😌';
            } else if (this.pomodoroMode === 'long-break') {
                status = 'Long break 🌴';
            }
        } else {
            if (this.pomodoroMode === 'work') {
                status = 'Ready to focus';
            } else if (this.pomodoroMode === 'break') {
                status = 'Break time ready';
            } else if (this.pomodoroMode === 'long-break') {
                status = 'Long break ready';
            }
        }
        
        // this.pomodoroStatus.textContent = status; // Removed - compact UI no longer has status display
    }
    
    updatePomodoroSession() {
        // Update the session counter (always shows current session out of total)
        this.pomodoroSession.textContent = `${this.pomodoroCurrentSession}/${this.pomodoroTotalSessions}`;
        
        // Update the mode text
        if (this.pomodoroMode === 'work') {
            this.pomodoroModeText.textContent = 'Focus:';
        } else if (this.pomodoroMode === 'break') {
            this.pomodoroModeText.textContent = 'Relax:';
        } else if (this.pomodoroMode === 'long-break') {
            this.pomodoroModeText.textContent = 'Relax:';
        }
    }
    
    showPomodoroCompletionOverlay() {
        let title, message;
        
        if (this.pomodoroMode === 'work') {
            if (this.pomodoroCompletedSessions % 4 === 0) {
                title = 'Work Session Complete! 🎉';
                message = 'Amazing work! Time for a well-deserved long break.';
            } else {
                title = 'Work Session Complete! ✅';
                message = 'Great job! Time for a short break.';
            }
        } else if (this.pomodoroMode === 'long-break') {
            title = 'Long Break Complete! 💪';
            message = 'You\'ve completed a full cycle! Ready for the next one?';
        } else {
            title = 'Break Complete! 🚀';
            message = 'Refreshed? Let\'s get back to work!';
        }
        
        this.pomodoroCompletionTitle.textContent = title;
        this.pomodoroCompletionMessage.textContent = message;
        this.pomodoroCompletionOverlay.classList.remove('hidden');
        
        // Audio events disabled
        // try {
        //     const audio = new Audio('data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAAA8AAA=');
        //     audio.play();
        // } catch (e) {
        //     // Ignore audio errors
        // }
    }
    
    hidePomodoroCompletionOverlay() {
        this.pomodoroCompletionOverlay.classList.add('hidden');
    }
    
    // Dark Mode Functions
    applyDarkMode(isDarkMode) {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DailyTodoApp();
});