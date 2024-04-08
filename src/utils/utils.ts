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

export const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
};
