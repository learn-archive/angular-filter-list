export type FilterState = {
  search: string;
  color: {
    [key: string]: boolean;
  };
};

export const colors = ['red', 'blue', 'green'];
