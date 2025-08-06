Task Manager & File Manager API

Method	Endpoint	Description	Request body
GET	/tasks	Get all tasks	-
GET	/tasks/:id	Get task by ID	-
POST	/tasks	Create new task	{ "title": "...", "description": "...", "completed": true/false }
PUT	/tasks/:id	Update task by ID	{ "title": "...", "description": "...", "completed": true/false }
DELETE	/tasks/:id	Delete task by ID	-

/file-manager/copySync    → Copies file sync (read/write sync)

/file-manager/copyAsync    → Copies file async (read/write async)

/file-manager/readSyncWriteAsync → Read sync, write async

/file-manager/readAsyncWriteSync → Read async, write sync

File Manager
Exposes several endpoints for copying/moving files using different combinations of synchronous and asynchronous Node.js file system methods.
