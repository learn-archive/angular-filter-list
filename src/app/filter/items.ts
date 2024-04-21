export type Item = {
  id: number;
  name: string;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple';
  weight: number;
  price: number;
};

export const items: Item[] = [
  {
    id: 1,
    name: 'Apple',
    color: 'red',
    weight: 150,
    price: 1.5,
  },
  {
    id: 2,
    name: 'Banana',
    color: 'yellow',
    weight: 120,
    price: 1.2,
  },
  {
    id: 3,
    name: 'Orange',
    color: 'orange',
    weight: 180,
    price: 1.8,
  },
  {
    id: 4,
    name: 'Grapes',
    color: 'purple',
    weight: 200,
    price: 2.0,
  },
  {
    id: 5,
    name: 'Watermelon',
    color: 'green',
    weight: 5000,
    price: 5.0,
  },
  {
    id: 6,
    name: 'Strawberry',
    color: 'red',
    weight: 50,
    price: 0.5,
  },
  {
    id: 7,
    name: 'Pineapple',
    color: 'yellow',
    weight: 1000,
    price: 1.0,
  },
  {
    id: 8,
    name: 'Blueberry',
    color: 'blue',
    weight: 20,
    price: 0.2,
  },
  {
    id: 9,
    name: 'Mango',
    color: 'orange',
    weight: 300,
    price: 3.0,
  },
  {
    id: 10,
    name: 'Pear',
    color: 'green',
    weight: 200,
    price: 2.5,
  },
];
