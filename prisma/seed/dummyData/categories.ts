import type { Category } from "@prisma/client";

const categoriesDummyData: Category[] = [
  {
    "name": "clothing",
    "count": 9
  },
  {
    "name": "accessories",
    "count": 8
  },
  {
    "name": "misc",
    "count": 5
  },
  {
    "name": "shoes",
    "count": 8
  }
];

export default categoriesDummyData;
