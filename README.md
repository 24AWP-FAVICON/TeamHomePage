# Menu Structure Diagram

App
├── InitFont
├── Header
│   └── Nav
└── Routes
    ├── "/" -> Home
    │   ├── Introduction (Click the "Introduction" button in Nav)
    │   ├── TeamMember (Click the "MemberInfo" button in Nav)
    │   │   ├── Member1 (Click on the image in TeamMember)
    │   │   ├── Member2
    │   │   ├── Member3
    │   │   ├── Member4
    │   │   ├── Member5
    │   │   └── Member6
    │   ├── Post (Click the "Post" button in Nav)
    │   └── About (Click the "About" button in Nav)
    ├── "/teamMember/*" -> TeamMember
    ├── "/introduction" -> Introduction
    ├── "/about" -> About
    └── "/post" -> Post
