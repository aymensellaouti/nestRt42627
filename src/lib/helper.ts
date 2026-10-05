export function findOccurence(tab: number[], car: number): number | null {
    return tab.find(element => element == car) ?? null;
} 

export const envTest = {type : 'prod'};