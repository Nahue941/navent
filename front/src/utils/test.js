export const resultTests = (arr) => arr?.map((test) => test.testResult);

export const correctAnswer = (arr, oldIndex) => {
  arr?.forEach((element) => {
    if (element.correct) oldIndex = arr.indexOf(element);
  });
  return oldIndex;
};

export const filterAnswer = (arr, condition, newArr = [...arr]) => {
  newArr?.forEach((e, i) => {
    if (Number(e.answerId) === condition) {
      newArr.splice(i, 1);
    }
  });

  return newArr;
};

export const getIndexOf = (arr, id) => {
  let index;
 arr.forEach((e, i) => {
    if (e.id === id) index = i;
  });
  return index;
};

// export const editStatusAnswer = (arr, answer, newArr = [...arr]) => {
//   console.log('Este es answer !!!!',answer); // recorrer actual y matchear con el anwerID, para sacar el correct correcto
//   console.log('Este es edit !!',arr);
//   console.log('Este es answerId !!',answer.id);

//   newArr.forEach((e, i) => {
//   console.log('Este es e !!',e);
//     console.log('...........');
//     // if (answer.id === Number(answerId)) newArr[i].correct = !correct;
//   });
//   return newArr;
// };
