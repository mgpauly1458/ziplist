const testData = ['a', 'b', 'c'];
const testData2 = [1, 2, 3];
const zipList = (list1, list2) => {
  const answer = [];
  for (let i = 0; i < list1.length; i++) {
    answer.push(list1[i]);
    answer.push(list2[i]);
  }
  return answer;
};

const zipListSimpleWay = (list1, list2) => {
  const answer = _.zip(list1, list2);
  const arr = [];
  _.each(answer, (element) => {
    _.each(element, (element2) => {
      arr.push(element2);
    });
  });
  return arr;
};

console.log(zipListSimpleWay(testData, testData2));
console.log(zipList(testData, testData2));
