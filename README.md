Shape Test
==========

Setup
-----

```
npm install
```

Run
---

```
npm start
```

Once a tile is added you can drag and resize it.

Development notes
-----------------

- It seems that this task is best suited to: drawing, dragging, resizing, snapping and collision detection. I've done this sort of thing in [react-image-crop](https://www.npmjs.com/package/react-image-crop) and I think it'd take days to refine! So I settled on leveraging [react-grid-layout](https://github.com/STRML/react-grid-layout) for the task.

As a byproduct there isn't too much surface area to unit test. I prefer to test non-trivial pieces of code rather than testing every UI method, most of which are simple render routines or events which call an action.
