export const countOccurrences = (arr: any[]) => {
    return arr.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
    }, {});
};
