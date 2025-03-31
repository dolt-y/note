function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
console.log(removeDuplicates([1, 2, 3, 2, 1, 4, 5, 4, 6, 7, 8, 7, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]