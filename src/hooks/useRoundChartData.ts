import { countOccurrences, generateRandomColor } from '~/utils/utils.ts';
import { TableDataType } from '~/types/tableTypes.ts';

export const useRoundChartData = (data: TableDataType, chosenCol: number) => {
    const chosenOne = data.map((row) => row[Object.keys(data[0])[chosenCol]]);
    const occurrences = countOccurrences(chosenOne);
    const labels = Object.keys(occurrences);
    const dataValues = Object.values(occurrences);
    const backgroundColorData = labels.map(() => generateRandomColor());
    return { labels, dataValues, backgroundColorData };
};
