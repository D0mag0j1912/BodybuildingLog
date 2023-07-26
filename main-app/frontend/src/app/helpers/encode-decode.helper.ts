export function encodeData<T>(object: T): string {
    const base64 = btoa(JSON.stringify(object));
    return base64;
}

export function decodeData<T>(data: string): T {
    return JSON.parse(atob(data));
}
