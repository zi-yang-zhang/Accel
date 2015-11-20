**ACCEL AUTO home site**
===========================


STRUCTURE
-------------
```
.
├── /build/                     # Compiled output
├── /config/                    # Webpack scripts.
├── /dist/                      # Production compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /app/                       # Source code of the client application
│   ├── /components/            # React components
├── /server/                    # The source code of the server application
│   ├── /api/                   # REST APIs
│       ├── /endpoints/         # Endpoint implementation
│       ├── /index.js           # Endpoints routing
│   ├── /flavor/                # Server build flavors
│   ├── /constant/              # Constants
├── /assets/                    # Static resources
│   ├── /image/                 # image asset
│   ├── config                  # JSON configuration file, used for <head> metas today, more later...
└── package.json                # The list of 3rd party libraries and utilities
```

API
-------------
*/api/picture/:id*: Get picture with id