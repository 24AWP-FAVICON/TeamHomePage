# Menu Structure Diagram

App </br>
├── InitFont</br>
├── Header</br>
│   └── Nav</br>
└── Routes</br>
    ├── "/" -> Home</br>
    │   ├── Introduction (Click the "Introduction" button in Nav)</br>
    │   ├── TeamMember (Click the "MemberInfo" button in Nav)</br>
    │   │   ├── Member1 (Click on the image in TeamMember)</br>
    │   │   ├── Member2</br>
    │   │   ├── Member3</br>
    │   │   ├── Member4</br>
    │   │   ├── Member5</br>
    │   │   └── Member6</br>
    │   ├── Post (Click the "Post" button in Nav)</br>
    │   └── About (Click the "About" button in Nav)</br>
    ├── "/teamMember/*" -> TeamMember</br>
    ├── "/introduction" -> Introduction</br>
    ├── "/about" -> About</br>
    └── "/post" -> Post</br>
