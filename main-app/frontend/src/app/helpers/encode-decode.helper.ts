export function encodeFilter<T>(object: T): string {
    const base64 = btoa(JSON.stringify(object));
    return base64;
}

export function decodeFilter<T>(data: string): T {
    return JSON.parse(atob(data));
}
