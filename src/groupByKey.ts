type GroupsMap<T> = {
  [key: string]: T[];
};

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  pages: number;
  title: string;
  year: number;
}

export function groupByKey(
  items: [],
  key: string,
): GroupsMap<Book[] | Student[]> {
  const values: string[] = [];

  for (const item of items) {
    const value = item[key];

    if (!values.includes(value)) {
      values.push(value);
    }
  }

  const result: GroupsMap<Book[] | Student[]> = {};

  for (const value of values) {
    result[value] = items.filter((item) => item[key] === value);
  }

  return result;
}
