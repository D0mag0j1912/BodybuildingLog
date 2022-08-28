export function fillBodyweight(initialBodyweight: number, editBodyweight: number): number {
    if (initialBodyweight) {
        if (!editBodyweight) {
            return initialBodyweight;
        } else {
            return editBodyweight;
        }
    } else {
        if (!editBodyweight) {
            return null;
        } else {
            return editBodyweight;
        }
    }
}
