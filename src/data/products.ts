import { Product } from '../types';
import vaso16oz from '../assets/vaso16oz.jpg'
import yogurt6oz from '../assets/yogurt6oz.jpg'
import tina8oz from '../assets/tina8oz.jpg'
import tina16oz from '../assets/tina16oz.jpg'
import tina22oz from '../assets/tina22oz.jpg'

export const products: Product[] = [
  {
    id: 'yogurt-6oz',
    name: 'Yogurt',
    size: '6 Oz',
    image: yogurt6oz,
    priceTiers: [
      { min: 12, max: 99, price: 450 },
      { min: 100, max: 499, price: 410 },
      { min: 500, max: null, price: 370 }
    ]
  },
  {
    id: 'vaso-16oz',
    name: 'Vaso',
    size: '16 Oz',
    image: vaso16oz,
    priceTiers: [
      { min: 12, max: 99, price: 730 },
      { min: 100, max: 499, price: 680 },
      { min: 500, max: null, price: 650 }
    ]
  },
  {
    id: 'tina-8oz',
    name: 'Tina',
    size: '8 Oz',
    image: tina8oz,
    priceTiers: [
      { min: 12, max: 99, price: 570 },
      { min: 100, max: 499, price: 520 },
      { min: 500, max: null, price: 490 }
    ]
  },
  {
    id: 'tina-16oz',
    name: 'Tina',
    size: '16 Oz',
    image: tina16oz,
    priceTiers: [
      { min: 12, max: 99, price: 730 },
      { min: 100, max: 499, price: 680 },
      { min: 500, max: null, price: 650 }
    ]
  },
  {
    id: 'tina-22oz',
    name: 'Tina',
    size: '22 Oz',
    image: tina22oz,
    priceTiers: [
      { min: 12, max: 99, price: 810 },
      { min: 100, max: 499, price: 760 },
      { min: 500, max: null, price: 730 }
    ]
  }
];