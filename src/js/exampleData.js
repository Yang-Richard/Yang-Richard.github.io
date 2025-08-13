// Random data generator for demonstration purposes

window.ExampleData = {
    /////////////////////////////////////
    // CONFIGURATION WEIGHTS
    /////////////////////////////////////

    weights: {
        // Probability distributions for different aspects
        miscAreaChance: 0.3,          // 30% chance items go to misc area (no section)
        highPriorityChance: 0.3,      // 30% of items are urgent
        
        // Due date distribution (should add up to 1.0)
        dueDateDistribution: {
            overdue: 0.1,
            sameDay: 0.4,
            future: 0.3,
            noDueDate: 0.2 
        },
        
        // Column distribution for past items (should add up to 1.0)
        pastColumnDistribution: {
            done: 0.97,
            inProgress: 0.025,
            toDo: 0.005
        },
        
        // Column distribution for recent past items (should add up to 1.0)
        recentPastColumnDistribution: {
            done: 0.75,
            inProgress: 0.20,
            toDo: 0.05
        },
        
        // Column distribution for future items (should add up to 1.0)
        futureColumnDistribution: {
            done: 0.40,
            inProgress: 0.30,
            toDo: 0.40
        },
        
        // Backburner column distribution (should add up to 1.0)
        backburnerColumnDistribution: {
            toDo: 0.4,
            inProgress: 0.25,
            done: 0.15,
            miscItems: 0.2
        },
        
        // Hour weights for realistic creation times (24 hours, should add up to 1.0)
        hourWeights: [
            0.01, 0.01, 0.01, 0.01, 0.01, 0.02, // 0-5 AM (very low)
            0.05, 0.08, 0.12, 0.15, 0.12, 0.10, // 6-11 AM (morning surge)
            0.08, 0.10, 0.12, 0.08, 0.06, 0.04, // 12-5 PM (afternoon)
            0.03, 0.08, 0.06, 0.03, 0.02, 0.01  // 6-11 PM (evening taper)
        ],
        
        // Items per day based on distance from today
        itemsPerDay: {
            nearTerm: { min: 10, max: 25 },    // Last/next week (days 0-7)
            midTerm: { min: 7, max: 15 },      // Last/next month (days 8-30)
            farTerm: { min: 5, max: 10 }       // Further out (days 31+)
        },
        
        // Total item counts for different areas
        itemCounts: {
            newItems: 30,      // Items in "New Items" column
            backburner: 100,   // Items in backburner panel
            trash: 40          // Deleted items in trash
        },
        
        // Date ranges
        dateRange: {
            monthsBefore: 12,
            monthsAfter: 3
        }
    },
    
    // Item descriptions organized by category (removed configurable items)
    itemTemplates: {
        "Work Projects": [
            "Client contract review deadline",
            "Production server maintenance", 
            "Review Q3 project proposal",
            "Complete design mockups for mobile app",
            "Client meeting - project kickoff",
            "Update project timeline",
            "Code review - authentication module",
            "Deploy to staging environment",
            "Write API documentation",
            "Bug fix for payment system",
            "Security vulnerability patch",
            "Performance optimization review",
            "Database backup verification",
            "Team performance review",
            "Sprint planning meeting",
            "Architecture design review",
            "Infrastructure cost analysis",
            "Vendor contract negotiation",
            "Quality assurance testing",
            "Documentation update",
            "Daily standup meeting",
            "Review pull requests",
            "Send weekly report",
            "Database optimization",
            "Security audit review",
            "Prepare presentation slides",
            "Research new technologies",
            "Code refactoring task",
            "Unit test coverage improvement",
            "Performance monitoring setup",
            "Bug triage and prioritization",
            "Documentation review",
            "Team knowledge sharing session",
            "Deployment pipeline optimization",
            "Code quality metrics review",
            "Weekly code backup",
            "API endpoint testing",
            "System monitoring setup",
            "Load balancing configuration",
            "Microservices architecture planning",
            "Update user interface designs",
            "Conduct usability testing",
            "Implement authentication system",
            "Set up continuous integration",
            "Create development environment",
            "Write technical specifications",
            "Review security protocols",
            "Optimize database queries",
            "Configure load testing",
            "Update third-party integrations",
            "Implement error handling",
            "Create user documentation",
            "Set up monitoring alerts",
            "Review code standards",
            "Plan feature rollout",
            "Conduct stakeholder meeting",
            "Update project dependencies",
            "Implement caching strategy",
            "Create backup procedures",
            "Review performance metrics",
            "Update API versioning",
            "Implement feature flags",
            "Set up analytics tracking",
            "Create deployment checklist",
            "Review access controls",
            "Update environment variables",
            "Implement rate limiting",
            "Create testing scenarios",
            "Review disaster recovery plan",
            "Update compliance documentation",
            "Implement logging system",
            "Create onboarding process",
            "Review technical debt",
            "Update development tools",
            "Implement user feedback system",
            "Create maintenance schedule",
            "Review integration tests",
            "Update security patches",
            "Implement automated testing",
            "Create performance benchmarks"
        ],
        
        "Personal Tasks": [
            "Buy groceries for the week",
            "Schedule dentist appointment", 
            "Pay monthly bills",
            "Organize home office",
            "Call insurance company",
            "Book vacation flights",
            "Clean out garage",
            "Renew driver's license",
            "Schedule home inspection",
            "Update emergency contacts",
            "Organize photo albums",
            "Review insurance policies",
            "Tax document organization",
            "Update will and testament",
            "Home maintenance checklist",
            "Financial planning review",
            "Organize closet and donate clothes",
            "Update address book",
            "Schedule pest control",
            "Digital photo backup",
            "Water plants",
            "Return library books",
            "Schedule car maintenance",
            "Order new business cards",
            "Plan next month's budget",
            "Organize tool shed",
            "Update emergency kit",
            "Research home security systems",
            "Plan winter weather preparations",
            "Organize holiday decorations",
            "Schedule HVAC maintenance",
            "Research energy efficient upgrades",
            "Plan landscape improvements",
            "Weekly meal prep",
            "Monthly budget review",
            "Update passport documents",
            "Schedule oil change",
            "Clean out attic storage",
            "Organize important papers",
            "Research mortgage refinancing",
            "Update beneficiary information",
            "Schedule eye exam",
            "Plan garden design",
            "Research solar panels",
            "Update home security codes",
            "Schedule chimney cleaning",
            "Research investment options",
            "Plan vacation itinerary",
            "Update subscription services",
            "Schedule appliance maintenance",
            "Research health insurance",
            "Plan retirement savings",
            "Update contact information",
            "Schedule home repairs",
            "Research new phone plan",
            "Plan holiday celebrations",
            "Update utility providers",
            "Schedule professional cleaning",
            "Research car insurance",
            "Plan home renovations",
            "Update banking information",
            "Schedule medical checkups",
            "Research travel insurance",
            "Plan emergency preparedness",
            "Update legal documents",
            "Schedule equipment servicing",
            "Research new utilities",
            "Plan seasonal activities",
            "Update memberships",
            "Schedule maintenance checks",
            "Research financial advisors",
            "Plan charitable giving",
            "Update emergency plans",
            "Schedule annual reviews"
        ],

        "Health & Fitness": [
            "Workout - chest and triceps",
            "Meal prep for the week",
            "Yoga class",
            "Track daily water intake",
            "Schedule annual physical",
            "Blood work appointment",
            "Start meditation practice",
            "Plan healthy meal schedule",
            "Join local gym membership",
            "Schedule eye exam",
            "Update fitness tracker goals",
            "Research nutrition supplements",
            "Schedule dermatologist appointment",
            "Buy workout equipment",
            "Plan running route",
            "Daily exercise routine",
            "Morning stretching routine",
            "Plan weekly workouts",
            "Research personal trainer",
            "Schedule physical therapy",
            "Workout - legs and glutes",
            "Workout - back and biceps",
            "Workout - cardio session",
            "Workout - core strengthening",
            "Schedule dental cleaning",
            "Plan hiking trip",
            "Research healthy recipes",
            "Track sleep patterns",
            "Schedule massage therapy",
            "Plan bike ride",
            "Research mindfulness apps",
            "Schedule vision screening",
            "Plan swimming session",
            "Research meditation classes",
            "Schedule wellness checkup",
            "Plan outdoor activities",
            "Research stress management",
            "Schedule nutrition consultation",
            "Plan strength training",
            "Research fitness classes",
            "Schedule mental health checkup",
            "Plan flexibility training",
            "Research recovery techniques",
            "Schedule sports medicine visit",
            "Plan endurance training",
            "Research healthy lifestyle changes",
            "Schedule preventive care",
            "Plan weekend activities",
            "Research holistic health",
            "Schedule specialist appointments",
            "Plan fitness challenges",
            "Research wellness programs",
            "Schedule health screenings",
            "Plan active hobbies",
            "Research dietary changes",
            "Schedule therapy sessions",
            "Plan exercise variety",
            "Research health metrics",
            "Schedule follow-up appointments"
        ],

        "Family Events": [
            "Plan birthday party",
            "Buy birthday gift for mom",
            "Family dinner reservation",
            "Pick up dry cleaning",
            "Anniversary dinner planning",
            "Family vacation itinerary",
            "School supplies shopping",
            "Plan graduation party", 
            "Book family photos session",
            "Organize family reunion",
            "Kids sports registration",
            "Plan weekend camping trip",
            "Extended family check-in calls",
            "Weekend hiking trip",
            "Visit farmers market",
            "Movie night with friends",
            "Beach day preparation",
            "BBQ party planning",
            "Game night setup",
            "Concert tickets purchase",
            "Museum visit planning",
            "Sports event attendance"
        ],

        "Learning & Development": [
            "Study JavaScript frameworks",
            "Read 'Clean Code' book",
            "Complete online course on Docker",
            "Practice coding challenges",
            "Research cloud computing trends",
            "Master Python for data analysis",
            "Complete AWS certification",
            "Study system design patterns",
            "Complete React advanced course",
            "Study database optimization",
            "Master Kubernetes deployment",
            "Study cybersecurity fundamentals",
            "Complete frontend framework comparison",
            "Complete tax preparation research",
            "Investment portfolio review",
            "Research retirement planning options",
            "Budget analysis and optimization",
            "Insurance coverage review",
            "Emergency fund calculation",
            "Debt consolidation research",
            "College savings plan setup",
            "Estate planning consultation",
            "Credit score improvement plan",
            "Property investment research",
            "Small business startup planning",
            "Learn French language basics",
            "Research cryptocurrency investment",
            "Study photography techniques",
            "Learn to play guitar",
            "Research sustainable living practices",
            "Study mindfulness and meditation",
            "Learn calligraphy",
            "Research genealogy and family history",
            "Study astronomy and stargazing",
            "Learn woodworking basics",
            "Research sustainable gardening",
            "Study machine learning algorithms",
            "Learn TypeScript fundamentals",
            "Complete Azure certification",
            "Study blockchain technology",
            "Learn mobile app development",
            "Study data science techniques",
            "Complete Google Cloud certification",
            "Learn artificial intelligence basics",
            "Study web security practices",
            "Learn NoSQL database management",
            "Complete DevOps certification",
            "Study microservices architecture",
            "Learn test-driven development",
            "Study agile methodologies",
            "Complete project management course",
            "Learn design thinking principles",
            "Study user experience design",
            "Learn digital marketing strategies",
            "Complete financial planning course",
            "Study investment strategies",
            "Learn business analytics",
            "Complete leadership training",
            "Study negotiation techniques",
            "Learn public speaking skills",
            "Complete time management course",
            "Study creative problem solving",
            "Learn team building strategies",
            "Complete communication workshop",
            "Study conflict resolution",
            "Learn emotional intelligence",
            "Complete stress management course",
            "Study cultural awareness",
            "Learn diversity and inclusion",
            "Complete ethics training",
            "Study environmental sustainability",
            "Learn renewable energy systems",
            "Complete first aid certification",
            "Study emergency preparedness",
            "Learn wilderness survival skills",
            "Complete cooking fundamentals course",
            "Study nutrition science",
            "Learn meditation techniques",
            "Complete yoga instructor training",
            "Study alternative medicine",
            "Learn herbalism basics",
            "Complete aromatherapy course",
            "Study holistic wellness",
            "Learn massage therapy techniques"
        ],

        "Side Projects": [
            "Build portfolio website",
            "Write blog post about React hooks",
            "Update LinkedIn profile",
            "Contribute to open source project",
            "Build weather app with API",
            "Create GitHub project showcase",
            "Develop personal finance tracker",
            "Build recipe sharing app",
            "Create coding tutorial videos",
            "Design personal brand logo",
            "Build task management tool",
            "Create developer podcast",
            "Build photo sharing platform"
        ],

        "Weekend Plans": [
            "Weekend hiking trip",
            "Visit farmers market",
            "Movie night with friends",
            "Beach day preparation",
            "BBQ party planning",
            "Game night setup",
            "Concert tickets purchase",
            "Museum visit planning",
            "Sports event attendance"
        ]
    },

    // Additional items for New Items and Do Later sections
    miscItems: [
        "Fix broken kitchen faucet",
        "Research vacation destinations",
        "Update resume",
        "Backup computer files",
        "Organize digital music library",
        "Clean computer keyboard and monitor",
        "Update software licenses",
        "Organize email inbox",
        "Review and update passwords",
        "Clean out downloads folder",
        "Update contact information",
        "Organize bookmarks and favorites",
        "Set up automated backups",
        "Clean out old files and folders",
        "Update privacy settings on social media",
        "Organize cloud storage",
        "Review subscription services",
        "Clean browser cache and cookies",
        "Organize spice rack",
        "Clean out refrigerator",
        "Update kitchen inventory",
        "Research new recipes",
        "Plan weekly meal prep",
        "Organize pantry shelves",
        "Research cooking techniques",
        "Update shopping list template",
        "Research kitchen gadgets",
        "Plan dinner party menu",
        "Declutter bedroom closet",
        "Organize bathroom supplies",
        "Update first aid kit",
        "Plan garden layout",
        "Research smart home devices",
        "Organize craft supplies",
        "Sort through old magazines",
        "Update emergency contact list",
        "Plan home improvement projects",
        "Research local services",
        "Organize important documents",
        "Create family photo album",
        "Replace air filters",
        "Check smoke detector batteries",
        "Update software on devices",
        "Organize cable management",
        "Research streaming services",
        "Clean out car interior",
        "Update vehicle registration",
        "Research new apps",
        "Organize photo storage",
        "Update social media profiles",
        "Research online courses",
        "Plan weekend projects",
        "Organize desk workspace",
        "Research productivity tools",
        "Update calendar appointments",
        "Clean out email subscriptions",
        "Research gift ideas",
        "Plan seasonal decorating",
        "Organize holiday plans",
        "Research local events",
        "Update address books",
        "Plan technology upgrades",
        "Research new restaurants",
        "Organize entertainment center",
        "Update home network settings",
        "Research travel deals",
        "Plan spring cleaning",
        "Organize storage areas",
        "Research home automation",
        "Update emergency supplies",
        "Plan energy conservation",
        "Research recycling options",
        "Organize tool collection",
        "Update home inventory",
        "Research security systems",
        "Plan outdoor maintenance",
        "Organize seasonal clothing",
        "Research new hobbies",
        "Update skill certifications",
        "Plan creative projects",
        "Research community activities",
        "Organize volunteer opportunities",
        "Update professional network",
        "Research side hustles",
        "Plan skill development",
        "Organize learning materials",
        "Research mentorship programs",
        "Update personal goals",
        "Plan networking events",
        "Research industry trends",
        "Organize reference materials",
        "Update portfolio projects",
        "Research career opportunities",
        "Plan continuing education",
        "Organize work resources",
        "Research professional development",
        "Update LinkedIn connections",
        "Plan knowledge sharing",
        "Research best practices",
        "Organize feedback collection",
        "Update performance metrics",
        "Research innovation ideas",
        "Plan process improvements",
        "Organize project archives"
    ],

    // Helper functions
    getRandomItem: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    getRandomDate: function(startDate, endDate) {
        const start = startDate.getTime();
        const end = endDate.getTime();
        return new Date(start + Math.random() * (end - start));
    },

    formatDate: function(date) {
        return date.toISOString().split('T')[0];
    },

    formatDateTime: function(date) {
        return date.toISOString();
    },

    generateRandomData: function() {
        const today = new Date();
        const startDate = new Date(today);
        startDate.setMonth(today.getMonth() - this.weights.dateRange.monthsBefore);

        const endDate = new Date(today);
        endDate.setMonth(today.getMonth() + this.weights.dateRange.monthsAfter);

        let csvContent = 'text,panel,column,section_name,due_date,date,item_id,created_at,completed_at,deleted_at,original_date,high_priority,recurring_task_id\n';
        let itemId = 1;
        const items = [];

        // Generate daily items (about 1600 items)
        const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // ~180 days
        for (let day = 0; day < totalDays; day++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + day);
            
            // Vary items per day based on how far from today (more recent = more items)
            const daysFromToday = Math.abs((currentDate - today) / (1000 * 60 * 60 * 24));
            let itemsPerDay;
            if (daysFromToday <= 7) { // Last/next week - more activity
                const config = this.weights.itemsPerDay.nearTerm;
                itemsPerDay = Math.floor(Math.random() * (config.max - config.min + 1)) + config.min;
            } else if (daysFromToday <= 30) { // Last/next month - moderate activity
                const config = this.weights.itemsPerDay.midTerm;
                itemsPerDay = Math.floor(Math.random() * (config.max - config.min + 1)) + config.min;
            } else { // Further out - less activity  
                const config = this.weights.itemsPerDay.farTerm;
                itemsPerDay = Math.floor(Math.random() * (config.max - config.min + 1)) + config.min;
            }
            
            for (let i = 0; i < itemsPerDay; i++) {
                // Chance to put items in misc area (no section)
                let category = '';
                let text = '';
                
                if (Math.random() < this.weights.miscAreaChance) {
                    // Use misc items for unsectioned items
                    text = this.getRandomItem(this.miscItems);
                    category = '';
                } else {
                    // Use categorized items
                    const categoryNames = Object.keys(this.itemTemplates);
                    category = this.getRandomItem(categoryNames);
                    text = this.getRandomItem(this.itemTemplates[category]);
                }
                
                // Column distribution varies by date relation to today
                let column;
                const isInPast = currentDate < today;
                const isPastWeek = currentDate < new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                
                if (isInPast) {
                    // Older items more likely to be done
                    const rand = Math.random();
                    const weights = this.weights.pastColumnDistribution;
                    if (rand < weights.done) column = 'Done';
                    else if (rand < weights.done + weights.inProgress) column = 'In Progress';
                    else column = 'To Do';
                } else if (isPastWeek) {
                    // Recent past items mixed
                    const rand = Math.random();
                    const weights = this.weights.recentPastColumnDistribution;
                    if (rand < weights.done) column = 'Done';
                    else if (rand < weights.done + weights.inProgress) column = 'In Progress';
                    else column = 'To Do';
                } else {
                    // Future items mostly todo/in progress
                    const rand = Math.random();
                    const weights = this.weights.futureColumnDistribution;
                    if (rand < weights.done) column = 'Done';
                    else if (rand < weights.done + weights.inProgress) column = 'In Progress';
                    else column = 'To Do';
                }

                // High priority chance
                const isHighPriority = Math.random() < this.weights.highPriorityChance;
                
                // Due date distribution - make it realistic based on when item was created
                let dueDate = '';
                const dueDateRand = Math.random();
                const dueDist = this.weights.dueDateDistribution;
                if (dueDateRand < dueDist.overdue) {
                    const overdue = new Date(currentDate);
                    overdue.setDate(currentDate.getDate() - Math.floor(Math.random() * 5) - 1);
                    dueDate = this.formatDate(overdue);
                } else if (dueDateRand < dueDist.overdue + dueDist.sameDay) {
                    dueDate = this.formatDate(currentDate);
                } else if (dueDateRand < dueDist.overdue + dueDist.sameDay + dueDist.future) {
                    const future = new Date(currentDate);
                    future.setDate(currentDate.getDate() + Math.floor(Math.random() * 21) + 1); // 1-21 days later
                    dueDate = this.formatDate(future);
                }
                // Remaining percentage gets no due date

                // Create realistic creation time - items created throughout the day but weighted toward work hours
                const createdAt = new Date(currentDate);
                const hourWeights = this.weights.hourWeights;
                
                let randomHour = 0;
                const rand = Math.random();
                let cumulative = 0;
                for (let h = 0; h < 24; h++) {
                    cumulative += hourWeights[h];
                    if (rand < cumulative) {
                        randomHour = h;
                        break;
                    }
                }
                
                createdAt.setHours(randomHour);
                createdAt.setMinutes(Math.floor(Math.random() * 60));
                createdAt.setSeconds(Math.floor(Math.random() * 60));

                // Logical completion time for done items
                let completedAt = '';
                if (column === 'Done') {
                    const completed = new Date(createdAt);
                    // Complete within 1-24 hours of creation, but not before creation
                    const hoursToComplete = Math.floor(Math.random() * 24) + 1;
                    completed.setTime(completed.getTime() + hoursToComplete * 60 * 60 * 1000);
                    
                    // Don't complete items in the future
                    if (completed <= today) {
                        completedAt = this.formatDateTime(completed);
                    } else if (currentDate <= today) {
                        // Complete it sometime today if it's from today or past
                        const todayCompletion = new Date(today);
                        todayCompletion.setHours(Math.floor(Math.random() * 12) + 8); // 8 AM to 8 PM today
                        completedAt = this.formatDateTime(todayCompletion);
                    }
                }

                items.push({
                    text: text,
                    panel: 'todo',
                    column: column,
                    section_name: category,
                    due_date: dueDate,
                    date: this.formatDate(currentDate),
                    item_id: `item_${String(itemId).padStart(3, '0')}`,
                    created_at: this.formatDateTime(createdAt),
                    completed_at: completedAt,
                    deleted_at: '',
                    original_date: this.formatDate(currentDate),
                    high_priority: isHighPriority ? 'true' : '',
                    recurring_task_id: ''
                });
                itemId++;
            }
        }

        // Generate New Items - mostly recent, unsorted tasks
        for (let i = 0; i < this.weights.itemCounts.newItems; i++) {
            let text = this.getRandomItem(this.miscItems);
            
            // New items are typically created recently (bias toward last few days)
            const daysBack = Math.floor(Math.pow(Math.random(), 2) * 14); // Weighted toward recent days
            const createdDate = new Date(today);
            createdDate.setDate(today.getDate() - daysBack);
            
            // Random realistic time of day
            const createdAt = new Date(createdDate);
            createdAt.setHours(Math.floor(Math.random() * 16) + 6); // 6 AM to 10 PM
            createdAt.setMinutes(Math.floor(Math.random() * 60));
            createdAt.setSeconds(Math.floor(Math.random() * 60));
            
            const isHighPriority = Math.random() < this.weights.highPriorityChance;

            items.push({
                text: text,
                panel: 'todo',
                column: 'New Items',
                section_name: '',
                due_date: '',
                date: this.formatDate(createdDate),
                item_id: `item_${String(itemId).padStart(3, '0')}`,
                created_at: this.formatDateTime(createdAt),
                completed_at: '',
                deleted_at: '',
                original_date: this.formatDate(createdDate),
                high_priority: isHighPriority ? 'true' : '',
                recurring_task_id: ''
            });
            itemId++;
        }

        // Generate Backburner items - longer-term, less urgent tasks
        for (let i = 0; i < this.weights.itemCounts.backburner; i++) {
            const categoryNames = Object.keys(this.itemTemplates);
            const category = this.getRandomItem(categoryNames);
            let text = this.getRandomItem(this.itemTemplates[category]);
            
            // Backburner items weighted toward certain columns
            const columns = ['To Do', 'In Progress', 'Done', 'Misc Items'];
            const weights = this.weights.backburnerColumnDistribution;
            const columnWeights = [weights.toDo, weights.inProgress, weights.done, weights.miscItems];
            let column;
            const rand = Math.random();
            let cumulative = 0;
            for (let c = 0; c < columns.length; c++) {
                cumulative += columnWeights[c];
                if (rand < cumulative) {
                    column = columns[c];
                    break;
                }
            }
            
            // Backburner items created over longer time period
            const createdDate = this.getRandomDate(startDate, endDate);
            const createdAt = new Date(createdDate);
            createdAt.setHours(Math.floor(Math.random() * 16) + 6);
            createdAt.setMinutes(Math.floor(Math.random() * 60));
            createdAt.setSeconds(Math.floor(Math.random() * 60));
            
            const isHighPriority = Math.random() < this.weights.highPriorityChance;

            let completedAt = '';
            if (column === 'Done') {
                const completed = new Date(createdAt);
                const hoursToComplete = Math.floor(Math.random() * 72) + 1; // 1-72 hours later
                completed.setTime(completed.getTime() + hoursToComplete * 60 * 60 * 1000);
                
                // Only set completion time if it's not in the future
                if (completed <= today) {
                    completedAt = this.formatDateTime(completed);
                }
            }

            items.push({
                text: text,
                panel: 'backburner',
                column: column,
                section_name: column === 'Misc Items' ? '' : category,
                due_date: '',
                date: '',
                item_id: `item_${String(itemId).padStart(3, '0')}`,
                created_at: this.formatDateTime(createdAt),
                completed_at: completedAt,
                deleted_at: '',
                original_date: this.formatDate(createdDate),
                high_priority: isHighPriority ? 'true' : '',
                recurring_task_id: ''
            });
            itemId++;
        }

        // Generate some Trash items - deleted tasks for realism
        for (let i = 0; i < this.weights.itemCounts.trash; i++) {
            const categoryNames = Object.keys(this.itemTemplates);
            const category = this.getRandomItem(categoryNames);
            const text = this.getRandomItem(this.itemTemplates[category]);
            
            // Trash items from various time periods
            const originalDate = this.getRandomDate(startDate, new Date(today.getTime() - 24 * 60 * 60 * 1000)); // Not from future
            const createdAt = new Date(originalDate);
            createdAt.setHours(Math.floor(Math.random() * 16) + 6);
            createdAt.setMinutes(Math.floor(Math.random() * 60));
            
            // Deleted 1-7 days after creation
            const deletedAt = new Date(createdAt);
            deletedAt.setTime(deletedAt.getTime() + (Math.floor(Math.random() * 7) + 1) * 24 * 60 * 60 * 1000);
            
            // Make sure deletion isn't in the future
            if (deletedAt > today) {
                deletedAt.setTime(today.getTime() - Math.floor(Math.random() * 24) * 60 * 60 * 1000);
            }
            
            const column = this.getRandomItem(['To Do', 'In Progress', 'Done']);
            let completedAt = '';
            if (column === 'Done') {
                const completed = new Date(createdAt);
                completed.setTime(completed.getTime() + Math.floor(Math.random() * 48) * 60 * 60 * 1000);
                if (completed < deletedAt) {
                    completedAt = this.formatDateTime(completed);
                }
            }

            items.push({
                text: text,
                panel: 'trash',
                column: column,
                section_name: category,
                due_date: '',
                date: '',
                item_id: `item_${String(itemId).padStart(3, '0')}`,
                created_at: this.formatDateTime(createdAt),
                completed_at: completedAt,
                deleted_at: this.formatDateTime(deletedAt),
                original_date: this.formatDate(originalDate),
                high_priority: Math.random() < this.weights.highPriorityChance ? 'true' : '',
                recurring_task_id: ''
            });
            itemId++;
        }

        // Convert items to CSV
        items.forEach(item => {
            const row = [
                `"${item.text}"`,
                item.panel,
                `"${item.column}"`,
                `"${item.section_name}"`,
                item.due_date,
                item.date,
                item.item_id,
                item.created_at,
                item.completed_at,
                item.deleted_at,
                item.original_date,
                item.high_priority,
                item.recurring_task_id
            ].join(',');
            csvContent += row + '\n';
        });

        return csvContent;
    },

    getCsvContent: function() {
        return this.generateRandomData();
    },

    // Create example recurring tasks for demonstration
    createExampleRecurringTasks: function() {
        // Get existing recurring tasks to avoid duplicates
        const existingTasks = JSON.parse(localStorage.getItem('recurringTasks') || '[]');
        
        // Example 1: Daily standup meeting
        const dailyStandup = {
            id: "Recurring Example 1",
            text: "10 day standup sync",
            frequency: {
                type: 'daily',
                interval: 10
            },
            dueDateOffset: 0,
            startDate: this.formatDate(new Date()),
            endDate: this.formatDate(new Date(Date.now() + 120 * 24 * 60 * 60 * 1000)), // 120 days from now
            isHighPriority: true,
            createdAt: new Date().toISOString()
        };
        
        // Example 2: Weekly team retrospective (Fridays)
        const weeklyRetrospective = {
            id: "Recurring Example 2",
            text: "Weekly team retrospective",
            frequency: {
                type: 'weekly',
                dayOfWeek: 5 // Friday
            },
            dueDateOffset: 1,
            startDate: this.formatDate(new Date()),
            endDate: this.formatDate(new Date(Date.now() + 120 * 24 * 60 * 60 * 1000)), // 120 days from now
            isHighPriority: false,
            createdAt: new Date().toISOString()
        };
        
        // Check if these examples already exist (by text content)
        const standupExists = existingTasks.some(task => task.text.includes("standup sync"));
        const retroExists = existingTasks.some(task => task.text.includes("team retrospective"));
        
        // Add the new recurring tasks if they don't exist
        if (!standupExists) {
            existingTasks.push(dailyStandup);
        }
        if (!retroExists) {
            existingTasks.push(weeklyRetrospective);
        }
        
        // Save updated recurring tasks
        localStorage.setItem('recurringTasks', JSON.stringify(existingTasks));
        
        return { standupExists, retroExists };
    }
};