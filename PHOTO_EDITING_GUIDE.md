# Photo editing guide

The Photos gallery is now data-driven. Do not edit gallery markup in `photos.html` when adding photos.

1. Put web-ready images in `assets/photos/`.
2. Open `photos-data.js`.
3. For the five permanent top-row images, edit `fixedPhotos`.
4. For normal gallery images, add an item to `photos`. The page sorts these automatically by `number` in descending order, so the newest/largest number appears first.
5. `position` is optional and controls the crop shown inside the gallery tile, e.g. `"50% 35%"`.

Example:
```js
{ number: 11, src: "assets/photos/photo-011.jpg", alt: "Subaru Telescope", position: "50% 40%" }
```
