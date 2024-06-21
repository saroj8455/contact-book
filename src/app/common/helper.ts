// create the null and undefined check using generic

export function isNullOrUndefined<T>(value: T | null | undefined) {
  return value === null || value === undefined;
}

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export function generateUUID(): string {
  debugger;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
