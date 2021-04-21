export const resultTests = (arr) => arr?.map((test) => test.testResult);

export const correctAnswer = (arr, oldIndex) => {
    arr?.forEach(element => {
        if(element.correct) oldIndex = arr.indexOf(element)
    });
    return oldIndex
}