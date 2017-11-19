# UBS Test

## Setup

```
npm install
```

## Run

```
npm start
```

Once a tile is added you can drag and resize it.

## Development notes

- It seems that this task is best suited to: drawing, dragging, resizing, snapping and collision detection. To write such things from scratch would take a long time - days to get the basics working. I have experience in this when making a cropping tool - [react-image-crop](https://www.npmjs.com/package/react-image-crop).

In the real world I'd look for tools that could help me with this non-trivial behaviour anyway. So I settled on leveraging [react-grid-layout](https://github.com/STRML/react-grid-layout) for the task.

As a byproduct there isn't too much surface area to unit test. I prefer to test non-trivial pieces of code rather than testing every UI method, most of which are simple render routines or events which call an action.
