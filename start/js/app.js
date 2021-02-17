// The for loop cycles over list items and applies a color to each item using the values stored in the colors array.
// For example, the first color in the array ( #C2272D) is applied to the first list item,
// the second color (#F8931F) to the second list item, and so on.
// Complete the code by setting the variable listItems to refer to a collection.
// The collection should contain all list items in the <ul> element with the ID of rainbow.
var listItems;
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];
}