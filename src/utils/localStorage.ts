import { memory } from "../App";

export const storeItem = (item: memory) => {
  localStorage.setItem(item.id, JSON.stringify(item));
};

export const deleteItem = (itemId: string) => {
  localStorage.removeItem(itemId);
};

export const getAllItems = () => {
  const allItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key as string) as string);
    allItems.push(item);
  }

  return allItems;
};
