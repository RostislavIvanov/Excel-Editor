export const countOccurrences = (arr: any[]) => {
    return arr.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
    }, {});
};

export const getObjectKeyTypes = (obj: Record<string, number | string>): string[] => {
    const types = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            types.push(typeof obj[key]);
        }
    }
    return types;
};
