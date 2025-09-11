# Hearts Counter Homework

1) Hide/Show [+] and [-] buttons based on current count

- Show [-] only when count > 0 and [+] only when count < 5.
- Prevents going below 0 or above 5.
- Comment used in code:

```js
// Show [-] only when count > 0 and [+] only when count < 5
// (prevents going below 0 and above 5; hides buttons at the limits)
// Used Conditional Rendering
```

2) Keep layout stable when buttons hide/show

- Comments in code:

```js
// 2. Imported the styles for the UserRating component
```

- The CSS keeps spacing simple and stable with a single row and padding.


3) Add a header and wrapper to make it feel like an app

- Added a top header ("Hearts Demo") and a main container.
- Card is centered on the page.

Comment in code:

```js
// 3. Added the header wrapper
```

Files changed

- `hearts-counter/src/components/UserRating/index.js` — conditional rendering for +/- and added class names.
- `hearts-counter/src/components/UserRating/index.css` — simple styles for row, hearts, and styled buttons.
- `hearts-counter/src/components/RecipeCard/index.js` — moved `<UserRating />` above the title; removed old instance.
- `hearts-counter/src/components/RecipeCard/RecipeCard.css` — centered the card (`margin: 1rem auto`).
- `hearts-counter/src/App.js` — added header and wrapper structure.
- `hearts-counter/src/global.css` — header and container styles; centered header title.


