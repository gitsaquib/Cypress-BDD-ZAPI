/* global given then */
let selectedFruits;

given(/I choose (Apple|Banana)/, selection => {
  selectedFruits = selection;
});

then("{word} is chosen", selection => {
  expect(selectedFruits).to.equal(selection);
});
