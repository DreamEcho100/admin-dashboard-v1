import type { Product } from "@prisma/client";

const productsDummyData: Omit<Product, "createdAt" | "updatedAt">[] = [
  {
    "name": "Port Beckley",
    "price": 311.71,
    "description": "Revision of Nonaut Sub in Mouth/Throat, Via Opening",
    "category": "clothing",
    "rating": 1.15,
    "supply": 1320,
    "id": "63701d24f03239c72c00018e"
  },
  {
    "name": "Killy Fidian",
    "price": 649.77,
    "description": "Removal of Drain Dev from L Metatarsophal Jt, Perc Approach",
    "category": "accessories",
    "rating": 4.84,
    "supply": 633,
    "id": "63701d24f03239c72c00018f"
  },
  {
    "name": "Federica Pieper",
    "price": 576.06,
    "description": "Replace of R Up Arm Tendon with Nonaut Sub, Open Approach",
    "category": "clothing",
    "rating": 1.48,
    "supply": 977,
    "id": "63701d24f03239c72c000190"
  },
  {
    "name": "Solomon Ferrandez",
    "price": 77.54,
    "description": "Beam Radiation of Adrenal Glands using Electrons, Intraop",
    "category": "misc",
    "rating": 1.72,
    "supply": 190,
    "id": "63701d24f03239c72c000191"
  },
  {
    "name": "Filia Rusling",
    "price": 293.64,
    "description": "Division of Left Trunk Tendon, Open Approach",
    "category": "accessories",
    "rating": 4.1,
    "supply": 235,
    "id": "63701d24f03239867500012a"
  },
  {
    "name": "Madeleine Mateescu",
    "price": 361.14,
    "description": "Destruction of Thoracic Duct, Percutaneous Approach",
    "category": "shoes",
    "rating": 1.92,
    "supply": 1274,
    "id": "63701d24f03239867500012b"
  },
  {
    "name": "Moyna Birkinshaw",
    "price": 219.56,
    "description": "Extirpation of Matter from R Fem Art, Open Approach",
    "category": "shoes",
    "rating": 3.52,
    "supply": 212,
    "id": "63701d24f03239867500012c"
  },
  {
    "name": "Rosa Lemon",
    "price": 16.91,
    "description": "Replace L Up Leg Subcu/Fascia w Nonaut Sub, Open",
    "category": "accessories",
    "rating": 4.1,
    "supply": 655,
    "id": "63701d24f03239867500012d"
  },
  {
    "name": "Loleta Meach",
    "price": 555.73,
    "description": "Supplement Head & Neck Tendon with Autol Sub, Open Approach",
    "category": "shoes",
    "rating": 1.5,
    "supply": 880,
    "id": "63701d24f03239b7f7000015"
  },
  {
    "name": "Cordelie Packe",
    "price": 269.45,
    "description": "Stereotactic Other Photon Radiosurgery of Bronchus",
    "category": "clothing",
    "rating": 2.83,
    "supply": 1101,
    "id": "63701d24f03239b7f7000016"
  },
  {
    "name": "Norene Swiggs",
    "price": 642.61,
    "description": "Revision of Nonaut Sub in Low Bursa/Lig, Open Approach",
    "category": "misc",
    "rating": 4.96,
    "supply": 736,
    "id": "63701d24f03239b7f7000017"
  },
  {
    "name": "Duane Docharty",
    "price": 949.37,
    "description": "Removal of Synth Sub from L Patella, Perc Endo Approach",
    "category": "clothing",
    "rating": 1.56,
    "supply": 1026,
    "id": "63701d24f03239b7f7000018"
  },
  {
    "name": "Mirabella Doucette",
    "price": 11.7,
    "description": "Destruction of Anus, External Approach",
    "category": "accessories",
    "rating": 2.31,
    "supply": 734,
    "id": "63701d24f0323944410002ec"
  },
  {
    "name": "Hoebart Isted",
    "price": 380.01,
    "description": "Drainage of Left Inguinal Region, Perc Endo Approach",
    "category": "shoes",
    "rating": 4.4,
    "supply": 958,
    "id": "63701d24f0323944410002ed"
  },
  {
    "name": "Dayna Maruska",
    "price": 670.71,
    "description": "Low Dose Rate (LDR) Brachytherapy of Lung using Iodine 125",
    "category": "clothing",
    "rating": 1.02,
    "supply": 527,
    "id": "63701d24f0323944410002ee"
  },
  {
    "name": "Horacio Lippitt",
    "price": 690.23,
    "description": "Fusion of Right Wrist Joint with Int Fix, Perc Approach",
    "category": "accessories",
    "rating": 1.73,
    "supply": 520,
    "id": "63701d24f0323944410002ef"
  },
  {
    "name": "Elnore Knoton",
    "price": 104.24,
    "description": "Division of Right Hand Muscle, Perc Endo Approach",
    "category": "clothing",
    "rating": 4,
    "supply": 395,
    "id": "63701d24f03239d81e000015"
  },
  {
    "name": "Charisse Shakespeare",
    "price": 132.95,
    "description": "Drainage of Left Radial Artery, Open Approach",
    "category": "misc",
    "rating": 2.81,
    "supply": 863,
    "id": "63701d24f03239d81e000016"
  },
  {
    "name": "Pablo Sharrock",
    "price": 459.23,
    "description": "Revision of Other Device in GI Tract, Perc Approach",
    "category": "shoes",
    "rating": 3.25,
    "supply": 704,
    "id": "63701d24f03239d81e000017"
  },
  {
    "name": "Rollo Prendergrast",
    "price": 629.2,
    "description": "Drainage of Urethra with Drainage Device, Endo",
    "category": "accessories",
    "rating": 2.36,
    "supply": 1177,
    "id": "63701d24f03239d81e000018"
  },
  {
    "name": "Elle Chart",
    "price": 530.86,
    "description": "Occlusion of Right Axillary Vein, Perc Endo Approach",
    "category": "shoes",
    "rating": 1.53,
    "supply": 450,
    "id": "63701d24f032390a34000327"
  },
  {
    "name": "Letti Garnam",
    "price": 934.46,
    "description": "Bypass Ileum to Descending Colon, Endo",
    "category": "accessories",
    "rating": 2.64,
    "supply": 480,
    "id": "63701d24f032390a34000328"
  },
  {
    "name": "Micheil Roumier",
    "price": 867.33,
    "description": "Destruction of Left Toe Phalangeal Joint, Open Approach",
    "category": "misc",
    "rating": 3.89,
    "supply": 1164,
    "id": "63701d24f032390a34000329"
  },
  {
    "name": "Elli Hyde-Chambers",
    "price": 22.98,
    "description": "Revision of Extraluminal Device in Low Intest Tract, Endo",
    "category": "misc",
    "rating": 3.26,
    "supply": 617,
    "id": "63701d24f032390a3400032a"
  },
  {
    "name": "Jessie Marioneau",
    "price": 607.7,
    "description": "Reposition Right Peroneal Artery, Percutaneous Approach",
    "category": "shoes",
    "rating": 2.71,
    "supply": 385,
    "id": "63701d24f032395b3300012a"
  },
  {
    "name": "Oriana Blofeld",
    "price": 988.4,
    "description": "Release Left Thorax Muscle, Percutaneous Endoscopic Approach",
    "category": "clothing",
    "rating": 2.54,
    "supply": 314,
    "id": "63701d24f032395b3300012b"
  },
  {
    "name": "Barnie Divill",
    "price": 786.02,
    "description": "Excision of Right Foot Muscle, Percutaneous Approach",
    "category": "shoes",
    "rating": 1.11,
    "supply": 858,
    "id": "63701d24f032395b3300012c"
  },
  {
    "name": "Tomasina Faithfull",
    "price": 211.21,
    "description": "Supplement Left Foot Tendon with Autol Sub, Open Approach",
    "category": "accessories",
    "rating": 4.98,
    "supply": 1185,
    "id": "63701d24f032395b3300012d"
  },
  {
    "name": "Pollyanna Pilmer",
    "price": 247.93,
    "description": "Immobilization of Right Foot using Cast",
    "category": "clothing",
    "rating": 1.17,
    "supply": 659,
    "id": "63701d25f03239d591000327"
  },
  {
    "name": "Israel Chason",
    "price": 342.56,
    "description": "Transfuse Autol Hemat Stem Cell in Central Art, Perc",
    "category": "clothing",
    "rating": 1.43,
    "supply": 157,
    "id": "63701d25f03239d591000328"
  }
];

export default productsDummyData;
