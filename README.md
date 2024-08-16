# Etch a Sketch
This project was part of [The Odin Project Foundation Course](https://www.theodinproject.com/paths/foundations/courses/foundations).

## Grid size
- You can set custom grid size (defaults to 16x16).
- Enter in the text input does submit the value.
- Grid size bigger than 100x100 sets to 100x100.
- Negative values default to 16x16.
- All grid sizes should fit to the same area.
- Button "Reset grid" not only sets the grid size, but also deletes any coloring.

## Select color scheme
1) Orange
   - This one is just orange color all the way.
2) Fifty shades of gray
   - This one was by far the hardest to implement.
   - Starts at light gray all the way to black the more you mouse over it.
3) Random color
   - Selects completely random color for each box.
4) Rainbow
   - Goes through rainbow colors in a loop.

## Recoloring toggle
This feature allows recoloring of already colored boxes if checked. If unchecked, it wont recolor already colored squares.

## Known bugs
1) ~~Unchecked recoloring for Fifty shades of gray doesn't darken the squares.~~ Fixed!   
2) ~~Checked recoloring for Fifty shades of gray: When you color some square with fifty shades of gray, it remembers the last gray color even if you recolor it with different scheme. Meaning that it will start, if you recolor it again, where it lastly was. You have to reset the grid for completely starting over.~~ Fixed!

