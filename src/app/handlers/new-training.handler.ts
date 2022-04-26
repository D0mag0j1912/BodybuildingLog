
export function fillBodyweight(
    initialBodyweight: number,
    editBodyweight: number,
): string {
    if (initialBodyweight) {
        if (!editBodyweight) {
            return initialBodyweight.toString();
        }
        else {
            return editBodyweight.toString();
        }
    }
    else {
        if (!editBodyweight) {
            return null;
        }
        else{
            return editBodyweight.toString();
        }
    }
}
