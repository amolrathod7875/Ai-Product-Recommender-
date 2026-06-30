// Import all your local images
import iphoneImage from '../assets/IPhone13.png';
import pixelImage from '../assets/Google Pixel 6a.png';
import samsungImage from '../assets/Samsung A54.png';
import macbookImage from '../assets/Mac Book AIR.png';
import sonyImage from '../assets/Sony WH-1000XM4.png';       // Add this
import airpodsImage from '../assets/AirPods Pro 2.png'; // Add this

export const MOCK_PRODUCTS = [
  { 
    id: 1, name: "iPhone 13", price: 599, category: "Smartphone", specs: "128GB, A15 Bionic",
    image: iphoneImage 
  },
  { 
    id: 2, name: "Google Pixel 6a", price: 349, category: "Smartphone", specs: "128GB, Google Tensor",
    image: pixelImage 
  },
  { 
    id: 3, name: "Samsung Galaxy A54", price: 449, category: "Smartphone", specs: "128GB, Exynos 1380",
    image: samsungImage 
  },
  { 
    id: 4, name: "MacBook Air M1", price: 899, category: "Laptop", specs: "256GB, 8GB RAM",
    image: macbookImage 
  },
  { 
    id: 5, name: "Sony WH-1000XM4", price: 298, category: "Headphones", specs: "Noise Cancelling",
    image: sonyImage // Replace null with the new image
  },
  { 
    id: 6, name: "AirPods Pro 2", price: 249, category: "Headphones", specs: "Spatial Audio",
    image: airpodsImage // Replace null with the new image
  },
];