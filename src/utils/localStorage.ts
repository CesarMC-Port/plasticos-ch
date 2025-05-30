import { CalculatorState } from '../types';

const STORAGE_KEY = 'price-calculator-state';

export const saveState = (state: CalculatorState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Could not save calculator state', err);
  }
};

export const loadState = (): CalculatorState | null => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (!serializedState) return null;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load calculator state', err);
    return null;
  }
};

export const clearState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Could not clear calculator state', err);
  }
};