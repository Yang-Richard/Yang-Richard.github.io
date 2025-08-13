// Example CSV data for demonstration purposes
// Contains 200 comprehensive todo items spanning August 2025

window.ExampleData = {
    getCsvContent: function() {
        return `text,panel,column,section_name,due_date,date,item_id,created_at,completed_at,deleted_at,original_date,high_priority,recurring_task_id
"Client contract review deadline",todo,"To Do","Work Projects",2025-08-08,2025-08-07,item_001,2025-08-07T08:00:00Z,,,,"true",
"CRITICAL: Production server maintenance",todo,"In Progress","Work Projects",2025-08-09,2025-08-07,item_002,2025-08-07T08:30:00Z,,,,"true",
"Review Q3 project proposal",todo,"To Do","Work Projects",2025-08-10,2025-08-07,item_003,2025-08-07T09:00:00Z,,,,"true",
"Complete design mockups for mobile app",todo,"In Progress","Work Projects",2025-08-09,2025-08-07,item_004,2025-08-07T10:30:00Z,,,,,,"Recurring 1"
"Client meeting - project kickoff",todo,Done,"Work Projects",,2025-08-06,item_005,2025-08-06T14:00:00Z,2025-08-06T16:00:00Z,,,,
"Update project timeline",todo,"To Do","Work Projects",2025-08-12,2025-08-08,item_006,2025-08-08T09:00:00Z,,,,"true"
"Code review - authentication module",todo,"In Progress","Work Projects",,2025-08-08,item_007,2025-08-08T11:00:00Z,,,,
"Deploy to staging environment",todo,Done,"Work Projects",,2025-08-05,item_008,2025-08-05T16:00:00Z,2025-08-05T18:30:00Z,,,,
"Write API documentation",todo,"To Do","Work Projects",2025-08-15,2025-08-09,item_009,2025-08-09T10:00:00Z,,,,
"Bug fix for payment system",todo,"To Do","Work Projects",2025-08-08,2025-08-07,item_010,2025-08-07T15:00:00Z,,,,"true"
"Security vulnerability patch",todo,"In Progress","Work Projects",2025-08-09,2025-08-08,item_011,2025-08-08T16:00:00Z,,,,"true"
"Performance optimization review",todo,"To Do","Work Projects",2025-08-11,2025-08-09,item_012,2025-08-09T14:00:00Z,,,,
"Database backup verification",todo,"In Progress","Work Projects",,2025-08-10,item_013,2025-08-10T09:00:00Z,,,,
"Team performance review",todo,"To Do","Work Projects",2025-08-13,2025-08-11,item_014,2025-08-11T10:00:00Z,,,,
"Sprint planning meeting",todo,Done,"Work Projects",,2025-08-05,item_015,2025-08-05T14:00:00Z,2025-08-05T15:30:00Z,,,,
"Architecture design review",todo,"In Progress","Work Projects",2025-08-14,2025-08-12,item_016,2025-08-12T11:00:00Z,,,,
"Infrastructure cost analysis",todo,"To Do","Work Projects",2025-08-16,2025-08-13,item_017,2025-08-13T13:00:00Z,,,,
"Vendor contract negotiation",todo,"To Do","Work Projects",2025-08-18,2025-08-15,item_018,2025-08-15T10:00:00Z,,,,"true"
"Quality assurance testing",todo,"In Progress","Work Projects",,2025-08-16,item_019,2025-08-16T09:00:00Z,,,,
"Documentation update",todo,"To Do","Work Projects",2025-08-20,2025-08-17,item_020,2025-08-17T14:00:00Z,,,,

"Buy groceries for the week",todo,"To Do","Personal Tasks",2025-08-08,2025-08-07,item_021,2025-08-07T08:15:00Z,,,,
"Schedule dentist appointment",todo,"To Do","Personal Tasks",2025-08-10,2025-08-08,item_022,2025-08-08T12:00:00Z,,,,"true"
"Pay monthly bills",todo,Done,"Personal Tasks",,2025-08-01,item_023,2025-08-01T19:00:00Z,2025-08-01T20:15:00Z,,,,
"Organize home office",todo,"In Progress","Personal Tasks",,2025-08-09,item_024,2025-08-09T14:00:00Z,,,,
"Call insurance company",todo,"To Do","Personal Tasks",2025-08-11,2025-08-10,item_025,2025-08-10T10:30:00Z,,,,
"Book vacation flights",todo,"To Do","Personal Tasks",2025-08-14,2025-08-11,item_026,2025-08-11T16:00:00Z,,,,"true"
"Clean out garage",todo,"New Items","Personal Tasks",,2025-08-12,item_027,2025-08-12T08:00:00Z,,,,
"Renew driver's license",todo,"To Do","Personal Tasks",2025-08-09,2025-08-08,item_028,2025-08-08T15:00:00Z,,,,"true"
"Schedule home inspection",todo,"In Progress","Personal Tasks",2025-08-15,2025-08-13,item_029,2025-08-13T11:00:00Z,,,,
"Update emergency contacts",todo,"To Do","Personal Tasks",,2025-08-14,item_030,2025-08-14T10:00:00Z,,,,
"Organize photo albums",todo,"New Items","Personal Tasks",,2025-08-15,item_031,2025-08-15T13:00:00Z,,,,
"Review insurance policies",todo,"To Do","Personal Tasks",2025-08-17,2025-08-16,item_032,2025-08-16T09:00:00Z,,,,
"Tax document organization",todo,"In Progress","Personal Tasks",,2025-08-17,item_033,2025-08-17T11:00:00Z,,,,
"Update will and testament",todo,"To Do","Personal Tasks",2025-08-20,2025-08-18,item_034,2025-08-18T14:00:00Z,,,,"true"
"Home maintenance checklist",todo,"New Items","Personal Tasks",,2025-08-19,item_035,2025-08-19T08:00:00Z,,,,
"Financial planning review",todo,"To Do","Personal Tasks",2025-08-22,2025-08-20,item_036,2025-08-20T10:00:00Z,,,,"true"
"Organize closet and donate clothes",todo,"In Progress","Personal Tasks",,2025-08-21,item_037,2025-08-21T15:00:00Z,,,,
"Update address book",todo,"New Items","Personal Tasks",,2025-08-22,item_038,2025-08-22T09:00:00Z,,,,
"Schedule pest control",todo,"To Do","Personal Tasks",2025-08-25,2025-08-23,item_039,2025-08-23T11:00:00Z,,,,
"Digital photo backup",todo,"New Items","Personal Tasks",,2025-08-24,item_040,2025-08-24T14:00:00Z,,,,

"Workout - chest and triceps",todo,Done,"Health & Fitness",,2025-08-07,item_041,2025-08-07T06:00:00Z,2025-08-07T07:00:00Z,,,,
"Meal prep for the week",todo,"In Progress","Health & Fitness",,2025-08-08,item_042,2025-08-08T18:00:00Z,,,,
"Yoga class",todo,"To Do","Health & Fitness",2025-08-09,2025-08-09,item_043,2025-08-09T07:00:00Z,,,,
"Track daily water intake",todo,"New Items","Health & Fitness",,2025-08-10,item_044,2025-08-10T09:00:00Z,,,,
"Schedule annual physical",todo,"To Do","Health & Fitness",2025-08-13,2025-08-11,item_045,2025-08-11T11:00:00Z,,,,
"Blood work appointment",todo,"To Do","Health & Fitness",2025-08-10,2025-08-09,item_046,2025-08-09T08:00:00Z,,,,"true"
"Start meditation practice",todo,"In Progress","Health & Fitness",,2025-08-12,item_047,2025-08-12T07:00:00Z,,,,
"Plan healthy meal schedule",todo,"To Do","Health & Fitness",,2025-08-13,item_048,2025-08-13T19:00:00Z,,,,
"Join local gym membership",todo,"New Items","Health & Fitness",,2025-08-14,item_049,2025-08-14T10:00:00Z,,,,
"Schedule eye exam",todo,"To Do","Health & Fitness",2025-08-18,2025-08-15,item_050,2025-08-15T12:00:00Z,,,,"true"
"Update fitness tracker goals",todo,"In Progress","Health & Fitness",,2025-08-16,item_051,2025-08-16T08:00:00Z,,,,
"Research nutrition supplements",todo,"New Items","Health & Fitness",,2025-08-17,item_052,2025-08-17T20:00:00Z,,,,
"Schedule dermatologist appointment",todo,"To Do","Health & Fitness",2025-08-21,2025-08-18,item_053,2025-08-18T11:00:00Z,,,,
"Buy workout equipment",todo,"In Progress","Health & Fitness",,2025-08-19,item_054,2025-08-19T14:00:00Z,,,,
"Plan running route",todo,"New Items","Health & Fitness",,2025-08-20,item_055,2025-08-20T06:00:00Z,,,,

"Plan birthday party",todo,"In Progress","Family Events",,2025-08-12,item_056,2025-08-12T15:00:00Z,,,,
"Buy birthday gift for mom",todo,"To Do","Family Events",2025-08-16,2025-08-13,item_057,2025-08-13T12:00:00Z,,,,"true"
"Family dinner reservation",todo,Done,"Family Events",,2025-08-04,item_058,2025-08-04T17:00:00Z,2025-08-04T17:30:00Z,,,,
"Pick up dry cleaning",todo,"To Do","Family Events",2025-08-10,2025-08-09,item_059,2025-08-09T13:00:00Z,,,,
"Anniversary dinner planning",todo,"In Progress","Family Events",2025-08-20,2025-08-17,item_060,2025-08-17T16:00:00Z,,,,"true"
"Family vacation itinerary",todo,"To Do","Family Events",,2025-08-18,item_061,2025-08-18T10:00:00Z,,,,
"School supplies shopping",todo,"New Items","Family Events",,2025-08-19,item_062,2025-08-19T13:00:00Z,,,,"true"
"Plan graduation party",todo,"In Progress","Family Events",2025-08-25,2025-08-20,item_063,2025-08-20T15:00:00Z,,,,
"Book family photos session",todo,"To Do","Family Events",2025-08-22,2025-08-21,item_064,2025-08-21T11:00:00Z,,,,
"Organize family reunion",todo,"New Items","Family Events",,2025-08-22,item_065,2025-08-22T14:00:00Z,,,,"true"
"Kids sports registration",todo,"To Do","Family Events",2025-08-27,2025-08-23,item_066,2025-08-23T12:00:00Z,,,,"true"
"Plan weekend camping trip",todo,"In Progress","Family Events",,2025-08-24,item_067,2025-08-24T16:00:00Z,,,,
"Extended family check-in calls",todo,"New Items","Family Events",,2025-08-25,item_068,2025-08-25T18:00:00Z,,,,

"Study JavaScript frameworks",backburner,"To Do","Learning & Development",,,item_069,2025-08-01T12:00:00Z,,,,
"Read 'Clean Code' book",backburner,"In Progress","Learning & Development",,,item_070,2025-08-03T20:00:00Z,,,,
"Complete online course on Docker",backburner,"To Do","Learning & Development",,,item_071,2025-08-05T19:00:00Z,,,,
"Practice coding challenges",backburner,Done,"Learning & Development",,,item_072,2025-08-02T21:00:00Z,2025-08-02T22:30:00Z,,
"Learn Spanish - Duolingo",backburner,"Misc Items",,,,item_073,2025-08-04T18:00:00Z,,,,
"Watch tech conference videos",backburner,"Misc Items",,,,item_074,2025-08-06T20:00:00Z,,,,
"Research cloud computing trends",backburner,"In Progress","Learning & Development",,,item_075,2025-08-07T21:00:00Z,,,,
"Master Python for data analysis",backburner,"To Do","Learning & Development",,,item_076,2025-08-08T19:00:00Z,,,,
"Learn machine learning basics",backburner,"Misc Items",,,,item_077,2025-08-09T21:00:00Z,,,,
"Complete AWS certification",backburner,"In Progress","Learning & Development",,,item_078,2025-08-10T20:00:00Z,,,,
"Study system design patterns",backburner,"To Do","Learning & Development",,,item_079,2025-08-11T18:00:00Z,,,,
"Learn GraphQL fundamentals",backburner,"Misc Items",,,,item_080,2025-08-12T19:00:00Z,,,,
"Complete React advanced course",backburner,"In Progress","Learning & Development",,,item_081,2025-08-13T17:00:00Z,,,,
"Study database optimization",backburner,"To Do","Learning & Development",,,item_082,2025-08-14T20:00:00Z,,,,
"Learn DevOps practices",backburner,"Misc Items",,,,item_083,2025-08-15T18:00:00Z,,,,
"Master Kubernetes deployment",backburner,"In Progress","Learning & Development",,,item_084,2025-08-16T19:00:00Z,,,,
"Study cybersecurity fundamentals",backburner,"To Do","Learning & Development",,,item_085,2025-08-17T21:00:00Z,,,,
"Learn mobile app development",backburner,"Misc Items",,,,item_086,2025-08-18T20:00:00Z,,,,
"Complete frontend framework comparison",backburner,"In Progress","Learning & Development",,,item_087,2025-08-19T18:00:00Z,,,,
"Study blockchain technology",backburner,"Misc Items",,,,item_088,2025-08-20T19:00:00Z,,,,

"Side project - build portfolio website",backburner,"To Do","Side Projects",,,item_089,2025-08-08T22:00:00Z,,,,
"Write blog post about React hooks",backburner,"In Progress","Side Projects",,,item_090,2025-08-09T19:30:00Z,,,,
"Update LinkedIn profile",backburner,"Misc Items",,,,item_091,2025-08-10T20:00:00Z,,,,
"Contribute to open source project",backburner,"To Do","Side Projects",,,item_092,2025-08-11T21:30:00Z,,,,
"Build weather app with API",backburner,"In Progress","Side Projects",,,item_093,2025-08-12T20:00:00Z,,,,
"Create GitHub project showcase",backburner,"To Do","Side Projects",,,item_094,2025-08-13T21:00:00Z,,,,
"Develop personal finance tracker",backburner,"Misc Items",,,,item_095,2025-08-14T19:00:00Z,,,,
"Build recipe sharing app",backburner,"In Progress","Side Projects",,,item_096,2025-08-15T20:30:00Z,,,,
"Create coding tutorial videos",backburner,"To Do","Side Projects",,,item_097,2025-08-16T18:00:00Z,,,,
"Design personal brand logo",backburner,"Misc Items",,,,item_098,2025-08-17T19:30:00Z,,,,
"Build task management tool",backburner,"In Progress","Side Projects",,,item_099,2025-08-18T21:00:00Z,,,,
"Create developer podcast",backburner,"To Do","Side Projects",,,item_100,2025-08-19T20:00:00Z,,,,
"Build photo sharing platform",backburner,"Misc Items",,,,item_101,2025-08-20T18:30:00Z,,,,

"Fix broken kitchen faucet",todo,"New Items",,,2025-08-14,item_102,2025-08-14T10:00:00Z,,,,
"Research vacation destinations",todo,"New Items",,,2025-08-15,item_103,2025-08-15T14:00:00Z,,,,
"Update resume",todo,"New Items",,,2025-08-16,item_104,2025-08-16T11:00:00Z,,,,
"Backup computer files",todo,"New Items",,,2025-08-17,item_105,2025-08-17T16:00:00Z,,,,"true"
"Organize digital music library",todo,"New Items",,,2025-08-18,item_106,2025-08-18T12:00:00Z,,,,
"Clean computer keyboard and monitor",todo,"New Items",,,2025-08-19,item_107,2025-08-19T15:00:00Z,,,,
"Update software licenses",todo,"New Items",,,2025-08-20,item_108,2025-08-20T13:00:00Z,,,,
"Organize email inbox",todo,"New Items",,,2025-08-21,item_109,2025-08-21T10:00:00Z,,,,
"Review and update passwords",todo,"New Items",,,2025-08-22,item_110,2025-08-22T16:00:00Z,,,,"true"
"Clean out downloads folder",todo,"New Items",,,2025-08-23,item_111,2025-08-23T14:00:00Z,,,,
"Update contact information",todo,"New Items",,,2025-08-24,item_112,2025-08-24T11:00:00Z,,,,
"Organize bookmarks and favorites",todo,"New Items",,,2025-08-25,item_113,2025-08-25T13:00:00Z,,,,
"Set up automated backups",todo,"New Items",,,2025-08-26,item_114,2025-08-26T15:00:00Z,,,,"true"
"Clean out old files and folders",todo,"New Items",,,2025-08-27,item_115,2025-08-27T12:00:00Z,,,,
"Update privacy settings on social media",todo,"New Items",,,2025-08-28,item_116,2025-08-28T16:00:00Z,,,,
"Organize cloud storage",todo,"New Items",,,2025-08-29,item_117,2025-08-29T14:00:00Z,,,,
"Review subscription services",todo,"New Items",,,2025-08-30,item_118,2025-08-30T10:00:00Z,,,,"true"
"Clean browser cache and cookies",todo,"New Items",,,2025-08-31,item_119,2025-08-31T13:00:00Z,,,,

"Attend team standup",todo,Done,,2025-08-07,2025-08-07,item_120,2025-08-07T09:30:00Z,2025-08-07T09:45:00Z,,,,
"Review pull requests",todo,Done,,2025-08-07,2025-08-07,item_121,2025-08-07T14:00:00Z,2025-08-07T15:30:00Z,,,,
"Send weekly report",todo,"To Do",,2025-08-09,2025-08-08,item_122,2025-08-08T17:00:00Z,,,,"true"
"Database optimization",todo,"In Progress",,2025-08-11,2025-08-09,item_123,2025-08-09T10:00:00Z,,,,
"Security audit review",todo,"To Do",,2025-08-13,2025-08-10,item_124,2025-08-10T09:00:00Z,,,,
"Prepare presentation slides",todo,"In Progress",,2025-08-12,2025-08-11,item_125,2025-08-11T13:00:00Z,,,,
"Research new technologies",todo,"To Do",,2025-08-14,2025-08-12,item_126,2025-08-12T16:00:00Z,,,,
"Code refactoring task",todo,"In Progress",,2025-08-15,2025-08-13,item_127,2025-08-13T11:00:00Z,,,,
"Unit test coverage improvement",todo,"To Do",,2025-08-16,2025-08-14,item_128,2025-08-14T14:00:00Z,,,,
"Performance monitoring setup",todo,"In Progress",,2025-08-17,2025-08-15,item_129,2025-08-15T15:00:00Z,,,,
"Bug triage and prioritization",todo,"To Do",,2025-08-18,2025-08-16,item_130,2025-08-16T12:00:00Z,,,,"true"
"Documentation review",todo,"In Progress",,2025-08-19,2025-08-17,item_131,2025-08-17T13:00:00Z,,,,
"Team knowledge sharing session",todo,"To Do",,2025-08-20,2025-08-18,item_132,2025-08-18T16:00:00Z,,,,
"Deployment pipeline optimization",todo,"In Progress",,2025-08-21,2025-08-19,item_133,2025-08-19T11:00:00Z,,,,
"Code quality metrics review",todo,"To Do",,2025-08-22,2025-08-20,item_134,2025-08-20T14:00:00Z,,,,

"Old project files cleanup",trash,"To Do",,,,item_135,2025-08-01T10:00:00Z,,2025-08-05T15:30:00Z,2025-08-01,
"Cancelled team meeting",trash,"In Progress",,,,item_136,2025-08-02T14:00:00Z,,2025-08-06T11:00:00Z,2025-08-02,
"Duplicate task - removed",trash,Done,,,,item_137,2025-08-03T16:00:00Z,2025-08-03T16:30:00Z,2025-08-07T09:00:00Z,2025-08-03,
"Obsolete documentation",trash,"To Do",,,,item_138,2025-08-04T11:00:00Z,,2025-08-08T14:00:00Z,2025-08-04,
"Old client requirements",trash,"In Progress",,,,item_139,2025-08-05T15:00:00Z,,2025-08-09T12:00:00Z,2025-08-05,
"Outdated meeting notes",trash,"To Do",,,,item_140,2025-08-06T09:00:00Z,,2025-08-10T16:00:00Z,2025-08-06,
"Deprecated code snippets",trash,"In Progress",,,,item_141,2025-08-07T13:00:00Z,,2025-08-11T10:00:00Z,2025-08-07,
"Cancelled appointment",trash,Done,,,,item_142,2025-08-08T11:00:00Z,2025-08-08T11:30:00Z,2025-08-12T14:00:00Z,2025-08-08,
"Invalid user feedback",trash,"To Do",,,,item_143,2025-08-09T15:00:00Z,,2025-08-13T12:00:00Z,2025-08-09,
"Outdated design mockups",trash,"In Progress",,,,item_144,2025-08-10T14:00:00Z,,2025-08-14T11:00:00Z,2025-08-10,

"Weekend hiking trip",todo,"To Do","Weekend Plans",2025-08-16,2025-08-15,item_145,2025-08-15T12:00:00Z,,,,"true"
"Visit farmers market",todo,"New Items","Weekend Plans",,2025-08-17,item_146,2025-08-17T09:00:00Z,,,,
"Movie night with friends",todo,"To Do","Weekend Plans",2025-08-17,2025-08-16,item_147,2025-08-16T19:00:00Z,,,,
"Beach day preparation",todo,"In Progress","Weekend Plans",,2025-08-18,item_148,2025-08-18T11:00:00Z,,,,
"BBQ party planning",todo,"To Do","Weekend Plans",2025-08-23,2025-08-19,item_149,2025-08-19T16:00:00Z,,,,"true"
"Game night setup",todo,"New Items","Weekend Plans",,2025-08-24,item_150,2025-08-24T18:00:00Z,,,,
"Concert tickets purchase",todo,"In Progress","Weekend Plans",2025-08-30,2025-08-25,item_151,2025-08-25T15:00:00Z,,,,"true"
"Museum visit planning",todo,"To Do","Weekend Plans",,2025-08-26,item_152,2025-08-26T10:00:00Z,,,,
"Sports event attendance",todo,"New Items","Weekend Plans",,2025-08-31,item_153,2025-08-31T14:00:00Z,,,,"true"

"Water plants",todo,"New Items",,,2025-08-18,item_154,2025-08-18T08:00:00Z,,,,
"Return library books",todo,"To Do",,2025-08-19,2025-08-18,item_155,2025-08-18T14:00:00Z,,,,
"Schedule car maintenance",todo,"To Do",,2025-08-20,2025-08-19,item_156,2025-08-19T10:00:00Z,,,,
"Order new business cards",todo,"New Items",,,2025-08-21,item_157,2025-08-21T12:00:00Z,,,,
"Plan next month's budget",todo,"To Do",,2025-08-22,2025-08-20,item_158,2025-08-20T16:00:00Z,,,,"true"
"Organize tool shed",todo,"New Items",,,2025-08-23,item_159,2025-08-23T09:00:00Z,,,,
"Update emergency kit",todo,"To Do",,2025-08-24,2025-08-22,item_160,2025-08-22T11:00:00Z,,,,"true"
"Research home security systems",todo,"New Items",,,2025-08-25,item_161,2025-08-25T14:00:00Z,,,,
"Plan winter weather preparations",todo,"To Do",,2025-08-26,2025-08-24,item_162,2025-08-24T13:00:00Z,,,,
"Organize holiday decorations",todo,"New Items",,,2025-08-27,item_163,2025-08-27T10:00:00Z,,,,
"Schedule HVAC maintenance",todo,"To Do",,2025-08-28,2025-08-26,item_164,2025-08-26T15:00:00Z,,,,"true"
"Research energy efficient upgrades",todo,"New Items",,,2025-08-29,item_165,2025-08-29T11:00:00Z,,,,
"Plan landscape improvements",todo,"To Do",,2025-08-30,2025-08-28,item_166,2025-08-28T14:00:00Z,,,,

"Learn French language basics",backburner,"Misc Items",,,,item_167,2025-08-21T19:00:00Z,,,,
"Research cryptocurrency investment",backburner,"Misc Items",,,,item_168,2025-08-22T20:00:00Z,,,,
"Study photography techniques",backburner,"Misc Items",,,,item_169,2025-08-23T18:00:00Z,,,,
"Learn to play guitar",backburner,"Misc Items",,,,item_170,2025-08-24T19:30:00Z,,,,
"Research sustainable living practices",backburner,"Misc Items",,,,item_171,2025-08-25T17:00:00Z,,,,
"Study mindfulness and meditation",backburner,"Misc Items",,,,item_172,2025-08-26T20:30:00Z,,,,
"Learn calligraphy",backburner,"Misc Items",,,,item_173,2025-08-27T18:30:00Z,,,,
"Research genealogy and family history",backburner,"Misc Items",,,,item_174,2025-08-28T19:00:00Z,,,,
"Study astronomy and stargazing",backburner,"Misc Items",,,,item_175,2025-08-29T21:00:00Z,,,,
"Learn woodworking basics",backburner,"Misc Items",,,,item_176,2025-08-30T18:00:00Z,,,,
"Research sustainable gardening",backburner,"Misc Items",,,,item_177,2025-08-31T17:30:00Z,,,,

"Organize spice rack",todo,"New Items",,,2025-08-30,item_178,2025-08-30T09:00:00Z,,,,
"Clean out refrigerator",todo,"New Items",,,2025-08-31,item_179,2025-08-31T11:00:00Z,,,,
"Update kitchen inventory",todo,"New Items",,,2025-08-31,item_180,2025-08-31T15:00:00Z,,,,
"Research new recipes",todo,"New Items",,,2025-08-31,item_181,2025-08-31T17:00:00Z,,,,
"Plan weekly meal prep",todo,"New Items",,,2025-08-31,item_182,2025-08-31T19:00:00Z,,,,
"Organize pantry shelves",todo,"New Items",,,2025-08-31,item_183,2025-08-31T20:00:00Z,,,,
"Research cooking techniques",todo,"New Items",,,2025-08-31,item_184,2025-08-31T21:00:00Z,,,,
"Update shopping list template",todo,"New Items",,,2025-08-31,item_185,2025-08-31T21:30:00Z,,,,
"Research kitchen gadgets",todo,"New Items",,,2025-08-31,item_186,2025-08-31T22:00:00Z,,,,
"Plan dinner party menu",todo,"New Items",,,2025-08-31,item_187,2025-08-31T22:30:00Z,,,,

"Complete tax preparation research",backburner,"To Do","Financial Planning",,,item_188,2025-08-15T16:00:00Z,,,,
"Investment portfolio review",backburner,"In Progress","Financial Planning",,,item_189,2025-08-16T17:00:00Z,,,,
"Research retirement planning options",backburner,"To Do","Financial Planning",,,item_190,2025-08-17T18:00:00Z,,,,
"Budget analysis and optimization",backburner,"In Progress","Financial Planning",,,item_191,2025-08-18T19:00:00Z,,,,
"Insurance coverage review",backburner,"To Do","Financial Planning",,,item_192,2025-08-19T16:30:00Z,,,,
"Emergency fund calculation",backburner,"In Progress","Financial Planning",,,item_193,2025-08-20T17:30:00Z,,,,
"Debt consolidation research",backburner,"To Do","Financial Planning",,,item_194,2025-08-21T18:30:00Z,,,,
"College savings plan setup",backburner,"In Progress","Financial Planning",,,item_195,2025-08-22T19:30:00Z,,,,
"Estate planning consultation",backburner,"To Do","Financial Planning",,,item_196,2025-08-23T16:45:00Z,,,,"true",
"Credit score improvement plan",backburner,"In Progress","Financial Planning",,,item_197,2025-08-24T17:45:00Z,,,,
"Property investment research",backburner,"To Do","Financial Planning",,,item_198,2025-08-25T18:45:00Z,,,,
"Small business startup planning",backburner,"In Progress","Financial Planning",,,item_199,2025-08-26T19:45:00Z,,,,
"Cryptocurrency portfolio diversification",backburner,"To Do","Financial Planning",,,item_200,2025-08-27T20:45:00Z,,,,

"Daily standup meeting",todo,"To Do","Work Projects",2025-08-08,2025-08-08,item_201,2025-08-08T09:00:00Z,,,,,,"Recurring 3"
"Weekly team review",todo,"In Progress","Work Projects",2025-08-12,2025-08-08,item_202,2025-08-08T14:00:00Z,,,,,,"Recurring 4"
"Monthly budget review",todo,"To Do","Personal Tasks",2025-08-31,2025-08-01,item_203,2025-08-01T10:00:00Z,,,,,,"Recurring 5"
"Daily exercise routine",todo,"Done","Health & Fitness",2025-08-08,2025-08-08,item_204,2025-08-08T06:00:00Z,2025-08-08T07:00:00Z,,,,,"Recurring 6"
"Weekly meal prep",todo,"To Do","Personal Tasks",2025-08-11,2025-08-11,item_205,2025-08-11T18:00:00Z,,,,,,"Recurring 7"
"Daily water plants",todo,"New Items",,,2025-08-08,item_206,2025-08-08T08:00:00Z,,,,,,"Recurring 8"
"Weekly code backup",todo,"In Progress","Work Projects",2025-08-16,2025-08-09,item_207,2025-08-09T17:00:00Z,,,,,,"Recurring 9"
"Monthly insurance review",backburner,"To Do","Financial Planning",,,item_208,2025-08-01T12:00:00Z,,,,,,"Recurring 10"`;
    }
};