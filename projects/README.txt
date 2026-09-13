PROJECT FILES

Create one folder per project, for example:

projects/
  space-shooter-game/
    project.zip
    screenshot-1.png
    screenshot-2.png

Keep project ZIP files and screenshots in public/projects/.
Then add the public paths in src/data/portfolio.ts:

projectFile: '/projects/space-shooter-game/project.zip',
screenshots: [
  '/projects/space-shooter-game/screenshot-1.png',
  '/projects/space-shooter-game/screenshot-2.png',
]

Use a ZIP file for the downloadable project folder. A browser cannot open
your private Windows folder directly after deployment.
