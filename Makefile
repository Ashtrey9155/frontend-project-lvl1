install:
	npm install

start:
<<<<<<< HEAD
	npx bable-node src/bin/brain-games.js
=======
	npx babel-node src/bin/brain-games.js
	npx bable-node src/bin/brain-even.js
>>>>>>> e84ddd01a5810a73626252a952dbf8c471a036a9

publish:
	npm publish --dry-run

lint:
	npx eslint .
