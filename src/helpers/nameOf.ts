import { DeepRequired } from 'ts-essentials';

export type NameOfPathFunc<T> = (obj: DeepRequired<T> | never) => unknown;
export type NameOf<T> = (f: NameOfPathFunc<T> | keyof T, deep: number) => string;

export const nameOf = <T>(f: NameOfPathFunc<T> | keyof T, deep: number = 0): string => {
  if (typeof f === 'string') {
    return f;
  }

  const arr = f
    .toString()
    .replace(/ ;\}\s./g, '')
    .split('.');
  const result = arr.splice(deep + 1).join('.');
  return result;
};

export const nameOfFabric = <T>() => (f: NameOfPathFunc<T> | keyof T, deep: number = 0) => nameOf<T>(f, deep);
