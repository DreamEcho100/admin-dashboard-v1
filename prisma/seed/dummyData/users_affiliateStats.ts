import type { TPrisma } from '../index';

const users_affiliateStatsDummyData: Parameters<TPrisma["user"]["update"]>["0"][] = [
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 11,
          "id": "6371251df03239e680000033",
          "createdAt": "2020-12-19T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239bef0000140",
                  "cost": 2674.7,
                  "productsCount": 2,
                  "createdAt": "2020-12-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000140"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000150",
                  "cost": 1864.03,
                  "productsCount": 1,
                  "createdAt": "2020-12-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000150"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002f",
                  "cost": 2709.97,
                  "productsCount": 4,
                  "createdAt": "2020-12-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      },
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e8"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014a",
                  "cost": 2538.89,
                  "productsCount": 2,
                  "createdAt": "2020-12-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034d",
                  "cost": 270.33,
                  "productsCount": 2,
                  "createdAt": "2020-12-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034d"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239f09e00018a"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 28,
          "id": "6371251df03239e680000034",
          "createdAt": "2020-12-01T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032398675000144",
                  "cost": 1824.33,
                  "productsCount": 1,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000144"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100034a",
                  "cost": 1149.82,
                  "productsCount": 1,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000344",
                  "cost": 3278.33,
                  "productsCount": 4,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000344"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100032f",
                  "cost": 1604.44,
                  "productsCount": 2,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100032f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000145",
                  "cost": 3004.11,
                  "productsCount": 4,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000145"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000357",
                  "cost": 1513.85,
                  "productsCount": 5,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000357"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100034b",
                  "cost": 1802.53,
                  "productsCount": 2,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000042",
                  "cost": 2654.51,
                  "productsCount": 4,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000042"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000020",
                  "cost": 669.23,
                  "productsCount": 1,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db6900011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000020"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000140",
                  "cost": 783.69,
                  "productsCount": 1,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000140"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000020",
                  "cost": 1236.25,
                  "productsCount": 3,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000020"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000143",
                  "cost": 583.34,
                  "productsCount": 3,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000143"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000141",
                  "cost": 3808.22,
                  "productsCount": 5,
                  "createdAt": "2020-12-31T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000141"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d40b000044"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 18,
          "id": "6371251df032398675000196",
          "createdAt": "2020-12-10T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032396b8e000045",
                  "cost": 2460.5,
                  "productsCount": 1,
                  "createdAt": "2021-01-01T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033a",
                  "cost": 1732.47,
                  "productsCount": 1,
                  "createdAt": "2021-01-01T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033c",
                  "cost": 847.35,
                  "productsCount": 5,
                  "createdAt": "2021-01-01T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000027",
                  "cost": 3286.44,
                  "productsCount": 5,
                  "createdAt": "2021-01-01T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001be",
                  "cost": 1378.31,
                  "productsCount": 4,
                  "createdAt": "2021-01-01T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001be"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000031",
                  "cost": 255.71,
                  "productsCount": 5,
                  "createdAt": "2021-01-01T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000031"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000159",
                  "cost": 3730.68,
                  "productsCount": 4,
                  "createdAt": "2021-01-01T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000159"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000149",
                  "cost": 3616.77,
                  "productsCount": 1,
                  "createdAt": "2021-01-01T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000149"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032395694000009"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 75,
          "id": "6371251df032398675000197",
          "createdAt": "2020-10-13T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239444100030b",
                  "cost": 3241.98,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000149",
                  "cost": 2824.68,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000149"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000346",
                  "cost": 3120.14,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000346"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c00019f",
                  "cost": 1213.83,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c00019f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100033e",
                  "cost": 124.21,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100033e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032c",
                  "cost": 1298.33,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000353",
                  "cost": 3648.94,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000353"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000028",
                  "cost": 118.18,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e5"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000028"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000140",
                  "cost": 404.7,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002de"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000140"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001b",
                  "cost": 1000.84,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001a",
                  "cost": 2593.32,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000027",
                  "cost": 3673.32,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700002f",
                  "cost": 1720.08,
                  "productsCount": 1,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700002f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002f",
                  "cost": 3787.19,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001f",
                  "cost": 2192.19,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000146",
                  "cost": 830.15,
                  "productsCount": 1,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000146"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003c",
                  "cost": 2818.55,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000029",
                  "cost": 3655.64,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000349",
                  "cost": 2077.81,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000349"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000148",
                  "cost": 2715.02,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000148"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00002c",
                  "cost": 1390.8,
                  "productsCount": 1,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014a",
                  "cost": 108.35,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014a"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fb",
                  "cost": 2191.37,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e9"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fb"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000303",
                  "cost": 1988.69,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000303"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000137",
                  "cost": 3117.84,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000318"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000137"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000315",
                  "cost": 323.69,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000315"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000357",
                  "cost": 1513.85,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000357"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000354",
                  "cost": 2447.29,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000354"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000041",
                  "cost": 1031.98,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000041"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00003f",
                  "cost": 1177.57,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00003f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000040",
                  "cost": 3532.94,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000040"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00003e",
                  "cost": 1677,
                  "productsCount": 1,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00003e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000148",
                  "cost": 2765.52,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000046"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000148"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000046",
                  "cost": 2758.74,
                  "productsCount": 1,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000046"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001d",
                  "cost": 732.46,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100031c",
                  "cost": 2104.01,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100031c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000033",
                  "cost": 41.64,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000033"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014a",
                  "cost": 2867.59,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000320"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000332",
                  "cost": 2596.99,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000327"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000332"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000143",
                  "cost": 3087.45,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000143"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000145",
                  "cost": 3238.44,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000145"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000013f",
                  "cost": 2686.67,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000039"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000013f"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239c72c000181"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 35,
          "id": "6371251df03239b7f7000081",
          "createdAt": "2020-11-21T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239569400001a",
                  "cost": 3788.51,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000321"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c00019f",
                  "cost": 1213.83,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c00019f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000143",
                  "cost": 583.34,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000143"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000020",
                  "cost": 2963.61,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000020"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000019",
                  "cost": 1006.17,
                  "productsCount": 1,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000187"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000041",
                  "cost": 2292.43,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002df"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000041"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000137",
                  "cost": 3117.84,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000318"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000137"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000332",
                  "cost": 3994.9,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000332"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000154",
                  "cost": 1984.49,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000154"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001bb",
                  "cost": 1638.82,
                  "productsCount": 2,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001bb"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001f",
                  "cost": 3525.19,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000023",
                  "cost": 776.76,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000023"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033e",
                  "cost": 526.81,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001d",
                  "cost": 927.82,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000331",
                  "cost": 1141.49,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000331"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c00019a",
                  "cost": 2113.01,
                  "productsCount": 1,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c00019a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000349",
                  "cost": 226.39,
                  "productsCount": 4,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000180"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000349"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002c",
                  "cost": 1587.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000043"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000027",
                  "cost": 3286.44,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000147",
                  "cost": 3313.44,
                  "productsCount": 3,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      },
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000147"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033b",
                  "cost": 3183.64,
                  "productsCount": 5,
                  "createdAt": "2021-01-02T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e00017f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033b"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239f09e000181"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 18,
          "id": "6371251df03239b7f7000082",
          "createdAt": "2020-12-07T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032394441000315",
                  "cost": 323.69,
                  "productsCount": 2,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000315"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000019",
                  "cost": 2503.88,
                  "productsCount": 3,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239569400000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100034b",
                  "cost": 1802.53,
                  "productsCount": 2,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000342",
                  "cost": 2863.68,
                  "productsCount": 4,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000320"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000342"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000130",
                  "cost": 2428.57,
                  "productsCount": 5,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000130"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000335",
                  "cost": 929.8,
                  "productsCount": 2,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000335"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000152",
                  "cost": 919.82,
                  "productsCount": 3,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000152"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000305",
                  "cost": 20.45,
                  "productsCount": 5,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000305"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000131",
                  "cost": 2996.52,
                  "productsCount": 3,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000131"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000019",
                  "cost": 531.23,
                  "productsCount": 1,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001ac",
                  "cost": 2028.64,
                  "productsCount": 5,
                  "createdAt": "2021-01-03T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001ac"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032390a3400031a"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 52,
          "id": "6371251df032394441000358",
          "createdAt": "2020-11-02T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032395b3300014f",
                  "cost": 1846.55,
                  "productsCount": 1,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000152",
                  "cost": 2254.13,
                  "productsCount": 1,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000152"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032c",
                  "cost": 1298.33,
                  "productsCount": 3,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000142",
                  "cost": 311.93,
                  "productsCount": 1,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000006"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000142"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000141",
                  "cost": 1349.65,
                  "productsCount": 4,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000141"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000149",
                  "cost": 2683.83,
                  "productsCount": 3,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000149"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000019",
                  "cost": 2503.88,
                  "productsCount": 3,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239569400000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000355",
                  "cost": 915.05,
                  "productsCount": 3,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000355"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001bf",
                  "cost": 3395.92,
                  "productsCount": 4,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e8"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001bf"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000344",
                  "cost": 252.61,
                  "productsCount": 2,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000344"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fa",
                  "cost": 937.92,
                  "productsCount": 3,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fa"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000143",
                  "cost": 3087.45,
                  "productsCount": 4,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000143"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000139",
                  "cost": 2986.56,
                  "productsCount": 1,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000139"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002a",
                  "cost": 2965.69,
                  "productsCount": 2,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00003a",
                  "cost": 3790.45,
                  "productsCount": 1,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001b",
                  "cost": 3282.35,
                  "productsCount": 4,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034c",
                  "cost": 661.95,
                  "productsCount": 2,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033f",
                  "cost": 789.3,
                  "productsCount": 4,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030f",
                  "cost": 3720.71,
                  "productsCount": 3,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002dd"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000042",
                  "cost": 2382.42,
                  "productsCount": 5,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000042"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b4",
                  "cost": 1530.11,
                  "productsCount": 3,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b4"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002b",
                  "cost": 3961.87,
                  "productsCount": 4,
                  "createdAt": "2021-01-04T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002b"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d81e000007"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 26,
          "id": "6371251df032394441000359",
          "createdAt": "2020-11-27T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239c72c0001b9",
                  "cost": 2664.34,
                  "productsCount": 5,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000325"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b9"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000311",
                  "cost": 273.86,
                  "productsCount": 4,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e5"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000311"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000141",
                  "cost": 3808.22,
                  "productsCount": 5,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000141"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000020",
                  "cost": 669.23,
                  "productsCount": 1,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db6900011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000020"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001ab",
                  "cost": 39.18,
                  "productsCount": 1,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001ab"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014f",
                  "cost": 1702.69,
                  "productsCount": 2,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00003b",
                  "cost": 3013.88,
                  "productsCount": 4,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      },
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00003b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000330",
                  "cost": 273.52,
                  "productsCount": 1,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000330"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000142",
                  "cost": 2868.43,
                  "productsCount": 1,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000142"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000355",
                  "cost": 3542.2,
                  "productsCount": 2,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000355"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000040",
                  "cost": 1557.75,
                  "productsCount": 2,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000040"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003a",
                  "cost": 933.48,
                  "productsCount": 4,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000331",
                  "cost": 1141.49,
                  "productsCount": 5,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000331"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000335",
                  "cost": 1372.83,
                  "productsCount": 1,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002ea"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000335"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003d",
                  "cost": 3816.89,
                  "productsCount": 2,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000318"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000043",
                  "cost": 1592.8,
                  "productsCount": 5,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db6900011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000043"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000147",
                  "cost": 3716.79,
                  "productsCount": 1,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000147"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032394c4900011b"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 30,
          "id": "6371251df03239d81e000081",
          "createdAt": "2020-11-22T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032395b33000155",
                  "cost": 3487.3,
                  "productsCount": 3,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000155"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000157",
                  "cost": 3031.51,
                  "productsCount": 2,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000180"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000157"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001aa",
                  "cost": 2666,
                  "productsCount": 2,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001aa"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032d",
                  "cost": 366.28,
                  "productsCount": 2,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000326"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000027",
                  "cost": 3419.77,
                  "productsCount": 5,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000137",
                  "cost": 2687.49,
                  "productsCount": 4,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000137"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002b",
                  "cost": 3961.87,
                  "productsCount": 4,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032e",
                  "cost": 1003.36,
                  "productsCount": 4,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000029",
                  "cost": 456.8,
                  "productsCount": 2,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100032d",
                  "cost": 1740.06,
                  "productsCount": 4,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100032d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001a4",
                  "cost": 3332.39,
                  "productsCount": 5,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a4"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000135",
                  "cost": 3782.1,
                  "productsCount": 4,
                  "createdAt": "2021-01-05T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000135"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f0323986f3000123"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 26,
          "id": "6371251df03239d81e000082",
          "createdAt": "2020-11-25T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239c72c0001a0",
                  "cost": 350.07,
                  "productsCount": 3,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000320"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a0"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001a2",
                  "cost": 2719.34,
                  "productsCount": 1,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a2"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f8",
                  "cost": 192.99,
                  "productsCount": 5,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f8"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000141",
                  "cost": 2984.15,
                  "productsCount": 4,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000187"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000141"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000348",
                  "cost": 3694.83,
                  "productsCount": 5,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000348"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002d",
                  "cost": 596.77,
                  "productsCount": 4,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000133",
                  "cost": 1937.53,
                  "productsCount": 4,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000041"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000133"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001d",
                  "cost": 874.77,
                  "productsCount": 4,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012d"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000198",
                  "cost": 3898.69,
                  "productsCount": 4,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000198"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000331",
                  "cost": 1141.49,
                  "productsCount": 5,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000331"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000034",
                  "cost": 742.71,
                  "productsCount": 1,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000326"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000034"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000038",
                  "cost": 33.34,
                  "productsCount": 5,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f03239867500012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000038"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000196",
                  "cost": 3944.07,
                  "productsCount": 3,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000196"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001bf",
                  "cost": 3395.92,
                  "productsCount": 4,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e8"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001bf"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000138",
                  "cost": 15.81,
                  "productsCount": 4,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000138"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000025",
                  "cost": 479,
                  "productsCount": 5,
                  "createdAt": "2021-01-06T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000025"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032390a34000324"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 47,
          "id": "6371251df03239eb0c000000",
          "createdAt": "2020-11-03T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239bef0000146",
                  "cost": 1232.26,
                  "productsCount": 5,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002ea"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000146"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000030",
                  "cost": 1035.65,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000305",
                  "cost": 20.45,
                  "productsCount": 5,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000305"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000138",
                  "cost": 15.81,
                  "productsCount": 4,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000138"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000141",
                  "cost": 1349.65,
                  "productsCount": 4,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000141"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000319",
                  "cost": 777.82,
                  "productsCount": 5,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000189"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000319"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000145",
                  "cost": 3238.44,
                  "productsCount": 4,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000145"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000351",
                  "cost": 2584.93,
                  "productsCount": 5,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000351"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014f",
                  "cost": 1729.13,
                  "productsCount": 3,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000148",
                  "cost": 1205.8,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000148"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500015b",
                  "cost": 2068.11,
                  "productsCount": 1,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500015b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000310",
                  "cost": 3040.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000310"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00003e",
                  "cost": 3956.27,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239569400000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00003e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002c",
                  "cost": 3971,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000350",
                  "cost": 1428.08,
                  "productsCount": 5,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000350"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100034f",
                  "cost": 99.52,
                  "productsCount": 5,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      },
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000345",
                  "cost": 752.29,
                  "productsCount": 4,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000345"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000156",
                  "cost": 326.64,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000156"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000343",
                  "cost": 1231.1,
                  "productsCount": 5,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      },
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000343"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000026",
                  "cost": 2729.82,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000026"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000034",
                  "cost": 742.71,
                  "productsCount": 1,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000326"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000034"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000134",
                  "cost": 1434.83,
                  "productsCount": 5,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012d"
                      },
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000134"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00003d",
                  "cost": 2747.76,
                  "productsCount": 3,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00003d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000045",
                  "cost": 3199.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000356",
                  "cost": 2636.43,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000356"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003b",
                  "cost": 585.64,
                  "productsCount": 1,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000038",
                  "cost": 3861.7,
                  "productsCount": 3,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000038"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b5",
                  "cost": 394.26,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000183"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b5"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000339",
                  "cost": 2839.16,
                  "productsCount": 2,
                  "createdAt": "2021-01-07T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002de"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000339"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239b7f700000e"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 70,
          "id": "6371251df03239eb0c000001",
          "createdAt": "2020-10-10T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239b7f700002a",
                  "cost": 3971.67,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700002a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014d",
                  "cost": 1471.05,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000321"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034a",
                  "cost": 879.42,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000352",
                  "cost": 1011.56,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000352"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000336",
                  "cost": 1933.72,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000336"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000030",
                  "cost": 3812.92,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300013b",
                  "cost": 3285.66,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300013b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032e",
                  "cost": 1003.36,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000013e",
                  "cost": 3432.11,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000013e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014b",
                  "cost": 1856.78,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032d",
                  "cost": 366.28,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000326"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001bb",
                  "cost": 1638.82,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001bb"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001e",
                  "cost": 1178.68,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000308",
                  "cost": 393.18,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239569400000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000308"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000029",
                  "cost": 2797.14,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000330",
                  "cost": 273.52,
                  "productsCount": 1,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000330"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000026",
                  "cost": 1952.66,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000183"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000026"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001ab",
                  "cost": 39.18,
                  "productsCount": 1,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001ab"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000153",
                  "cost": 1839.71,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000153"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000153",
                  "cost": 2493.86,
                  "productsCount": 3,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000044"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000153"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100032b",
                  "cost": 1225.16,
                  "productsCount": 1,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100032b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000036",
                  "cost": 1959.18,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000036"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b7",
                  "cost": 1277.12,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b7"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000035",
                  "cost": 2028.57,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000040"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000035"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000043",
                  "cost": 3021.81,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000043"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034d",
                  "cost": 270.33,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002e",
                  "cost": 1729.43,
                  "productsCount": 1,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500013b",
                  "cost": 448.24,
                  "productsCount": 1,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500013b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000036",
                  "cost": 1712.97,
                  "productsCount": 3,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e7"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000036"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000144",
                  "cost": 3276.83,
                  "productsCount": 3,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000040"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000144"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000340",
                  "cost": 522.18,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012d"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000340"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014b",
                  "cost": 2417.55,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014b"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f9",
                  "cost": 1498.53,
                  "productsCount": 3,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f9"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c00019b",
                  "cost": 526.17,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c00019b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033e",
                  "cost": 526.81,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033e"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f0",
                  "cost": 1011.46,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f0"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b1",
                  "cost": 3531.1,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b1"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000029",
                  "cost": 3361.11,
                  "productsCount": 5,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000137",
                  "cost": 2612.1,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000137"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000351",
                  "cost": 1271.59,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000351"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239528f000011"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 7,
          "id": "6371251df032395b33000196",
          "createdAt": "2020-12-11T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032394441000307",
                  "cost": 2395.14,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000185"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000307"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000037",
                  "cost": 1794.9,
                  "productsCount": 4,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000037"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000139",
                  "cost": 2691.9,
                  "productsCount": 2,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000189"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000139"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000035",
                  "cost": 2479.46,
                  "productsCount": 1,
                  "createdAt": "2021-01-08T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000035"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239867500011d"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 64,
          "id": "6371251df032395b33000197",
          "createdAt": "2020-10-14T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239c72c0001b4",
                  "cost": 1530.11,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b4"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fb",
                  "cost": 2191.37,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e9"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fb"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000027",
                  "cost": 3419.77,
                  "productsCount": 5,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000039",
                  "cost": 1961.93,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000039"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000131",
                  "cost": 107.48,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000131"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003b",
                  "cost": 2035.98,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000030",
                  "cost": 3812.92,
                  "productsCount": 5,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000139",
                  "cost": 2828.47,
                  "productsCount": 2,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000139"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000027",
                  "cost": 3673.32,
                  "productsCount": 2,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100032b",
                  "cost": 1225.16,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100032b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000033",
                  "cost": 1829.97,
                  "productsCount": 2,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000033"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000141",
                  "cost": 3808.22,
                  "productsCount": 5,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000141"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000358",
                  "cost": 1254.83,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000358"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f5",
                  "cost": 1720.34,
                  "productsCount": 5,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f5"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000150",
                  "cost": 2249.24,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000318"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000150"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001e",
                  "cost": 659.42,
                  "productsCount": 2,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000180"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003d",
                  "cost": 2872.61,
                  "productsCount": 2,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000030",
                  "cost": 3556.56,
                  "productsCount": 2,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000358",
                  "cost": 1689.74,
                  "productsCount": 4,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000358"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000045",
                  "cost": 3061.74,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030f",
                  "cost": 3720.71,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002dd"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000145",
                  "cost": 3004.11,
                  "productsCount": 4,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000145"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014d",
                  "cost": 810.78,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00003e",
                  "cost": 3956.27,
                  "productsCount": 2,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239569400000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00003e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000355",
                  "cost": 915.05,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000355"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000019",
                  "cost": 1206.91,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003a",
                  "cost": 2136.5,
                  "productsCount": 5,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100031c",
                  "cost": 2104.01,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100031c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000149",
                  "cost": 2824.68,
                  "productsCount": 5,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000149"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000023",
                  "cost": 668.7,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000023"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000193",
                  "cost": 2872.78,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000193"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000136",
                  "cost": 2473.8,
                  "productsCount": 5,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e00018d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000136"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000148",
                  "cost": 2765.52,
                  "productsCount": 3,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000046"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000148"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000024",
                  "cost": 2559.5,
                  "productsCount": 1,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000024"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000331",
                  "cost": 1141.49,
                  "productsCount": 5,
                  "createdAt": "2021-01-09T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000331"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032390a34000326"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 11,
          "id": "6371251df03239d591000393",
          "createdAt": "2020-12-05T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239867500013f",
                  "cost": 322.72,
                  "productsCount": 5,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500013f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000032",
                  "cost": 2962.55,
                  "productsCount": 5,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000032"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000020",
                  "cost": 669.23,
                  "productsCount": 1,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db6900011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000020"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003a",
                  "cost": 933.48,
                  "productsCount": 4,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000305",
                  "cost": 20.45,
                  "productsCount": 5,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000305"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fe",
                  "cost": 1379.87,
                  "productsCount": 5,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fe"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001c",
                  "cost": 1347.43,
                  "productsCount": 1,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001c"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239569400000f"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 39,
          "id": "6371251df03239d591000394",
          "createdAt": "2020-11-06T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239c72c0001b3",
                  "cost": 1681.56,
                  "productsCount": 5,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b3"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000342",
                  "cost": 2894.43,
                  "productsCount": 2,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000342"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002ff",
                  "cost": 180.64,
                  "productsCount": 4,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012d"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002ff"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000154",
                  "cost": 3231.81,
                  "productsCount": 1,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000154"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014e",
                  "cost": 2403.19,
                  "productsCount": 1,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000152",
                  "cost": 919.82,
                  "productsCount": 3,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000152"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000012f",
                  "cost": 3075.49,
                  "productsCount": 5,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000012f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000026",
                  "cost": 2729.82,
                  "productsCount": 2,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000026"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014c",
                  "cost": 1124.55,
                  "productsCount": 3,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000041",
                  "cost": 1031.98,
                  "productsCount": 4,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000041"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003a",
                  "cost": 2136.5,
                  "productsCount": 5,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000035",
                  "cost": 2028.57,
                  "productsCount": 2,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000040"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000035"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000144",
                  "cost": 2701.65,
                  "productsCount": 4,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000144"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000037",
                  "cost": 1845.49,
                  "productsCount": 3,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000037"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000131",
                  "cost": 107.48,
                  "productsCount": 3,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000131"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000038",
                  "cost": 1878.32,
                  "productsCount": 2,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000322"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000038"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f7",
                  "cost": 711.15,
                  "productsCount": 1,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000045"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f7"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000193",
                  "cost": 2872.78,
                  "productsCount": 1,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000193"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000032",
                  "cost": 62.48,
                  "productsCount": 5,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000032"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000045",
                  "cost": 3061.74,
                  "productsCount": 3,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000022",
                  "cost": 1630.72,
                  "productsCount": 4,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000022"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000013d",
                  "cost": 2263.82,
                  "productsCount": 3,
                  "createdAt": "2021-01-10T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000013d"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032398675000125"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 25,
          "id": "6371251df032395694000081",
          "createdAt": "2020-11-19T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032390a34000350",
                  "cost": 3340.88,
                  "productsCount": 5,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000350"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001f",
                  "cost": 2192.19,
                  "productsCount": 2,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000345",
                  "cost": 3301.41,
                  "productsCount": 4,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000185"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000345"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000139",
                  "cost": 2828.47,
                  "productsCount": 2,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000139"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000023",
                  "cost": 1171.28,
                  "productsCount": 1,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000023"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100031c",
                  "cost": 2104.01,
                  "productsCount": 3,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100031c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000356",
                  "cost": 3176.67,
                  "productsCount": 4,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002ea"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000356"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000046",
                  "cost": 2457.04,
                  "productsCount": 3,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000046"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000045",
                  "cost": 493.94,
                  "productsCount": 3,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000132",
                  "cost": 1028.7,
                  "productsCount": 4,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000132"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000022",
                  "cost": 2015.04,
                  "productsCount": 4,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000022"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000136",
                  "cost": 3358.05,
                  "productsCount": 2,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000136"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000357",
                  "cost": 1513.85,
                  "productsCount": 5,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000357"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000031",
                  "cost": 223.87,
                  "productsCount": 3,
                  "createdAt": "2021-01-11T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000031"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032396b8e000007"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 30,
          "id": "6371251df032395694000082",
          "createdAt": "2020-11-13T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239b7f7000036",
                  "cost": 1800.07,
                  "productsCount": 1,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000036"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000198",
                  "cost": 3898.69,
                  "productsCount": 4,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000198"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000045",
                  "cost": 3199.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100034f",
                  "cost": 99.52,
                  "productsCount": 5,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      },
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000036",
                  "cost": 1959.18,
                  "productsCount": 4,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000036"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000146",
                  "cost": 830.15,
                  "productsCount": 1,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000146"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700002f",
                  "cost": 1720.08,
                  "productsCount": 1,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700002f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000138",
                  "cost": 15.81,
                  "productsCount": 4,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000138"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000155",
                  "cost": 740.68,
                  "productsCount": 2,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000155"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000019",
                  "cost": 531.23,
                  "productsCount": 1,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00003e",
                  "cost": 1677,
                  "productsCount": 1,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00003e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000040",
                  "cost": 1557.75,
                  "productsCount": 2,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000040"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000342",
                  "cost": 2863.68,
                  "productsCount": 4,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000320"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000342"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000310",
                  "cost": 3040.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000310"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001d",
                  "cost": 1918.67,
                  "productsCount": 5,
                  "createdAt": "2021-01-12T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000322"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001d"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239db6900011c"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 41,
          "id": "6371251df032396b8e000081",
          "createdAt": "2020-11-01T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032395b3300013f",
                  "cost": 774.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300013f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000026",
                  "cost": 2729.82,
                  "productsCount": 2,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000026"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003a",
                  "cost": 933.48,
                  "productsCount": 4,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000142",
                  "cost": 311.93,
                  "productsCount": 1,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000006"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000142"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000013b",
                  "cost": 2033.47,
                  "productsCount": 5,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000013b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000132",
                  "cost": 3072.8,
                  "productsCount": 5,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000318"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000132"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fd",
                  "cost": 341.97,
                  "productsCount": 1,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fd"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000033",
                  "cost": 2149.4,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000033"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000031",
                  "cost": 255.71,
                  "productsCount": 5,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000031"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014b",
                  "cost": 2417.55,
                  "productsCount": 4,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100032d",
                  "cost": 1740.06,
                  "productsCount": 4,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100032d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001a4",
                  "cost": 3332.39,
                  "productsCount": 5,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a4"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001a",
                  "cost": 3788.51,
                  "productsCount": 2,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000321"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000022",
                  "cost": 1104.58,
                  "productsCount": 5,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000022"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300015a",
                  "cost": 2192.21,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300015a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000193",
                  "cost": 2872.78,
                  "productsCount": 1,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000193"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000136",
                  "cost": 235.02,
                  "productsCount": 2,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000136"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000145",
                  "cost": 3238.44,
                  "productsCount": 4,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000145"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002c",
                  "cost": 3971,
                  "productsCount": 2,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000033",
                  "cost": 3538.76,
                  "productsCount": 5,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000326"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000033"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000039",
                  "cost": 1701.46,
                  "productsCount": 2,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000039"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000148",
                  "cost": 2715.02,
                  "productsCount": 5,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000148"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014f",
                  "cost": 1729.13,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014f"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239f09e000188"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 24,
          "id": "6371251df032396b8e000082",
          "createdAt": "2020-11-17T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032395b33000131",
                  "cost": 107.48,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000131"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000133",
                  "cost": 3463.58,
                  "productsCount": 5,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000133"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000034",
                  "cost": 542.47,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000034"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000351",
                  "cost": 1271.59,
                  "productsCount": 4,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000351"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000139",
                  "cost": 2986.56,
                  "productsCount": 1,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000139"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000023",
                  "cost": 776.76,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000023"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034a",
                  "cost": 879.42,
                  "productsCount": 4,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000024",
                  "cost": 2576.39,
                  "productsCount": 4,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000024"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000130",
                  "cost": 3219.87,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000130"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000306",
                  "cost": 52.32,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000306"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000030",
                  "cost": 2269.68,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000144",
                  "cost": 1824.33,
                  "productsCount": 1,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000144"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000331",
                  "cost": 491.56,
                  "productsCount": 3,
                  "createdAt": "2021-01-13T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000331"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d59100031b"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 31,
          "id": "6371251df03239bef0000196",
          "createdAt": "2020-11-09T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032395694000035",
                  "cost": 2028.57,
                  "productsCount": 2,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000040"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000035"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001d",
                  "cost": 1918.67,
                  "productsCount": 5,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000322"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000151",
                  "cost": 3880.97,
                  "productsCount": 3,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000186"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000151"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001f",
                  "cost": 3525.19,
                  "productsCount": 4,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000141",
                  "cost": 2984.15,
                  "productsCount": 4,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000187"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000141"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000034",
                  "cost": 1159.29,
                  "productsCount": 3,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000034"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000131",
                  "cost": 554.41,
                  "productsCount": 3,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000131"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000355",
                  "cost": 3542.2,
                  "productsCount": 2,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000355"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000045",
                  "cost": 2460.5,
                  "productsCount": 1,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f6",
                  "cost": 3682.05,
                  "productsCount": 2,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f6"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000038",
                  "cost": 3861.7,
                  "productsCount": 3,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000038"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000039",
                  "cost": 3976.65,
                  "productsCount": 5,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000039"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003d",
                  "cost": 3816.89,
                  "productsCount": 2,
                  "createdAt": "2021-01-14T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000318"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003d"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032396b8e000009"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 14,
          "id": "6371251df03239bef0000197",
          "createdAt": "2020-11-25T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239d81e00001b",
                  "cost": 441.63,
                  "productsCount": 4,
                  "createdAt": "2021-01-15T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000159",
                  "cost": 3730.68,
                  "productsCount": 4,
                  "createdAt": "2021-01-15T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000159"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003b",
                  "cost": 2035.98,
                  "productsCount": 3,
                  "createdAt": "2021-01-15T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001bc",
                  "cost": 1165.64,
                  "productsCount": 2,
                  "createdAt": "2021-01-15T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001bc"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00002d",
                  "cost": 3458.65,
                  "productsCount": 1,
                  "createdAt": "2021-01-15T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00002d"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239b913000009"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 38,
          "id": "6371251df03239f793000000",
          "createdAt": "2020-10-31T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032390a3400034e",
                  "cost": 1059.47,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000030",
                  "cost": 3812.92,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000153",
                  "cost": 2493.86,
                  "productsCount": 3,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000044"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000153"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000334",
                  "cost": 219.07,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000189"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000334"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000145",
                  "cost": 2951.06,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000145"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014b",
                  "cost": 2417.55,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000196",
                  "cost": 3944.07,
                  "productsCount": 3,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000196"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000019",
                  "cost": 2503.88,
                  "productsCount": 3,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239569400000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000035",
                  "cost": 2371.02,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000035"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001ad",
                  "cost": 2666.12,
                  "productsCount": 1,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001ad"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001e",
                  "cost": 2835.28,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000028",
                  "cost": 3012.39,
                  "productsCount": 2,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e00018c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000028"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100034c",
                  "cost": 2128.92,
                  "productsCount": 1,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000012f",
                  "cost": 3075.49,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000012f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300015b",
                  "cost": 899.75,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300015b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003b",
                  "cost": 2035.98,
                  "productsCount": 3,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000020",
                  "cost": 1236.25,
                  "productsCount": 3,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000020"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f5",
                  "cost": 1720.34,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f5"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000132",
                  "cost": 1028.7,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000132"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000143",
                  "cost": 583.34,
                  "productsCount": 3,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000143"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000131",
                  "cost": 2996.52,
                  "productsCount": 3,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000131"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000352",
                  "cost": 1011.56,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000352"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000335",
                  "cost": 929.8,
                  "productsCount": 2,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000335"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000148",
                  "cost": 1205.8,
                  "productsCount": 2,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000148"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033e",
                  "cost": 526.81,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000354",
                  "cost": 2921.72,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000006"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000354"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000145",
                  "cost": 3238.44,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000145"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000318",
                  "cost": 1941.33,
                  "productsCount": 2,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000186"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000318"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239b7f700000d"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 33,
          "id": "6371251df03239f793000001",
          "createdAt": "2020-11-04T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032398675000149",
                  "cost": 3616.77,
                  "productsCount": 1,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000149"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000040",
                  "cost": 1557.75,
                  "productsCount": 2,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000040"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000023",
                  "cost": 668.7,
                  "productsCount": 1,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000023"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00003f",
                  "cost": 1406.13,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00003f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034c",
                  "cost": 661.95,
                  "productsCount": 2,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003c",
                  "cost": 61.48,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e00018b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000041",
                  "cost": 1031.98,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000041"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000156",
                  "cost": 326.64,
                  "productsCount": 2,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000156"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000355",
                  "cost": 915.05,
                  "productsCount": 3,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000355"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000156",
                  "cost": 2745.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000324"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000156"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000334",
                  "cost": 1358.84,
                  "productsCount": 2,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000334"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000307",
                  "cost": 2395.14,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000185"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000307"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000357",
                  "cost": 1513.85,
                  "productsCount": 5,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000357"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000045",
                  "cost": 3199.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00003b",
                  "cost": 1550.04,
                  "productsCount": 4,
                  "createdAt": "2021-01-16T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000323"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00003b"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d40b00003a"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 34,
          "id": "6371251df03239528f000081",
          "createdAt": "2020-11-02T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239569400003a",
                  "cost": 933.48,
                  "productsCount": 4,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700002a",
                  "cost": 3971.67,
                  "productsCount": 4,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700002a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000024",
                  "cost": 2576.39,
                  "productsCount": 4,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000024"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000153",
                  "cost": 1839.71,
                  "productsCount": 4,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000153"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000152",
                  "cost": 2254.13,
                  "productsCount": 1,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000152"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000143",
                  "cost": 3087.45,
                  "productsCount": 4,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000143"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000351",
                  "cost": 2584.93,
                  "productsCount": 5,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000351"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000030",
                  "cost": 3556.56,
                  "productsCount": 2,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001b",
                  "cost": 1191.14,
                  "productsCount": 3,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000137",
                  "cost": 2687.49,
                  "productsCount": 4,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000137"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000029",
                  "cost": 456.8,
                  "productsCount": 2,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000037",
                  "cost": 2370.96,
                  "productsCount": 3,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000037"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001d",
                  "cost": 732.46,
                  "productsCount": 5,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000142",
                  "cost": 311.93,
                  "productsCount": 1,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000006"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000142"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c00019f",
                  "cost": 1213.83,
                  "productsCount": 5,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c00019f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014e",
                  "cost": 3025.73,
                  "productsCount": 2,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000035",
                  "cost": 2028.57,
                  "productsCount": 2,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000040"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000035"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014b",
                  "cost": 808.18,
                  "productsCount": 5,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000137",
                  "cost": 3117.84,
                  "productsCount": 5,
                  "createdAt": "2021-01-17T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000318"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000137"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d40b00003c"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 60,
          "id": "6371251df03239528f000082",
          "createdAt": "2020-10-06T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032398675000151",
                  "cost": 326.45,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000151"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300015a",
                  "cost": 2192.21,
                  "productsCount": 3,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300015a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034d",
                  "cost": 270.33,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000043",
                  "cost": 3808.93,
                  "productsCount": 3,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000043"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000336",
                  "cost": 1933.72,
                  "productsCount": 5,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000336"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700002f",
                  "cost": 1720.08,
                  "productsCount": 1,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700002f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000340",
                  "cost": 522.18,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012d"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000340"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034a",
                  "cost": 879.42,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000140",
                  "cost": 404.7,
                  "productsCount": 3,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002de"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000140"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000030",
                  "cost": 2269.68,
                  "productsCount": 3,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000305",
                  "cost": 20.45,
                  "productsCount": 5,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000305"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000046",
                  "cost": 2457.04,
                  "productsCount": 3,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000046"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000339",
                  "cost": 2839.16,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002de"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000339"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000336",
                  "cost": 559.15,
                  "productsCount": 3,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000336"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fc",
                  "cost": 1696.79,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fc"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032d",
                  "cost": 366.28,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000326"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032f",
                  "cost": 412.99,
                  "productsCount": 3,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db6900011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000358",
                  "cost": 1254.83,
                  "productsCount": 1,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000358"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000303",
                  "cost": 1988.69,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000303"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000022",
                  "cost": 1342.61,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f03239867500012d"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000022"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b7",
                  "cost": 1277.12,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b7"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000355",
                  "cost": 3542.2,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000355"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032e",
                  "cost": 1003.36,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000343",
                  "cost": 451.44,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000343"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000033",
                  "cost": 41.64,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000033"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000141",
                  "cost": 1349.65,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000141"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001f",
                  "cost": 1523.55,
                  "productsCount": 1,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002eb"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000043",
                  "cost": 3021.81,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000043"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000349",
                  "cost": 226.39,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000180"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000349"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d59100031f"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 37,
          "id": "6371251df03239f09e0001fa",
          "createdAt": "2020-10-28T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239c72c0001ad",
                  "cost": 2666.12,
                  "productsCount": 1,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001ad"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033e",
                  "cost": 526.81,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034a",
                  "cost": 879.42,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001a8",
                  "cost": 3430.65,
                  "productsCount": 2,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002de"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a8"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000141",
                  "cost": 3808.22,
                  "productsCount": 5,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000141"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000022",
                  "cost": 1342.61,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f03239867500012d"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000022"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000353",
                  "cost": 2356.11,
                  "productsCount": 1,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e9"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000353"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000030",
                  "cost": 3812.92,
                  "productsCount": 5,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00003a",
                  "cost": 1201.56,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000022",
                  "cost": 1630.72,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000022"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000149",
                  "cost": 2824.68,
                  "productsCount": 5,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000149"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000338",
                  "cost": 1036.87,
                  "productsCount": 1,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000338"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000154",
                  "cost": 3231.81,
                  "productsCount": 1,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000154"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014b",
                  "cost": 2417.55,
                  "productsCount": 4,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300013b",
                  "cost": 3285.66,
                  "productsCount": 5,
                  "createdAt": "2021-01-18T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300013b"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239528f000014"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 1,
          "id": "6371251df03239f09e0001fb",
          "createdAt": "2020-12-02T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": []
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d81e000006"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 11,
          "id": "6371251df03239db69000196",
          "createdAt": "2020-11-21T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239d81e00001f",
                  "cost": 1523.55,
                  "productsCount": 1,
                  "createdAt": "2021-01-20T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002eb"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000146",
                  "cost": 741.08,
                  "productsCount": 4,
                  "createdAt": "2021-01-20T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000324"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000146"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000314",
                  "cost": 562.1,
                  "productsCount": 1,
                  "createdAt": "2021-01-20T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000006"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000314"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002c",
                  "cost": 3971,
                  "productsCount": 2,
                  "createdAt": "2021-01-20T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000301",
                  "cost": 3881.29,
                  "productsCount": 4,
                  "createdAt": "2021-01-20T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000322"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000301"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b1",
                  "cost": 3531.1,
                  "productsCount": 4,
                  "createdAt": "2021-01-20T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b1"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000041",
                  "cost": 1058.08,
                  "productsCount": 1,
                  "createdAt": "2021-01-20T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000041"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000149",
                  "cost": 3616.77,
                  "productsCount": 1,
                  "createdAt": "2021-01-20T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000149"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032395694000008"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 37,
          "id": "6371251df03239b913000081",
          "createdAt": "2020-10-24T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032396b8e00001c",
                  "cost": 3514.81,
                  "productsCount": 1,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000331",
                  "cost": 491.56,
                  "productsCount": 3,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000331"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001bb",
                  "cost": 1638.82,
                  "productsCount": 2,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001bb"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000192",
                  "cost": 3584.18,
                  "productsCount": 4,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f03239867500012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000192"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014f",
                  "cost": 1729.13,
                  "productsCount": 3,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000149",
                  "cost": 2824.68,
                  "productsCount": 5,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000149"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000027",
                  "cost": 2457.33,
                  "productsCount": 4,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002b",
                  "cost": 3961.87,
                  "productsCount": 4,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100034a",
                  "cost": 1149.82,
                  "productsCount": 1,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000027",
                  "cost": 3419.77,
                  "productsCount": 5,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000148",
                  "cost": 2715.02,
                  "productsCount": 5,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000148"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000134",
                  "cost": 2182.98,
                  "productsCount": 1,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000134"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b3",
                  "cost": 1681.56,
                  "productsCount": 5,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b3"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000133",
                  "cost": 3463.58,
                  "productsCount": 5,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000133"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000026",
                  "cost": 658.96,
                  "productsCount": 3,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000026"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000345",
                  "cost": 3301.41,
                  "productsCount": 4,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000185"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000345"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000339",
                  "cost": 2839.16,
                  "productsCount": 2,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002de"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000339"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f2",
                  "cost": 272.9,
                  "productsCount": 2,
                  "createdAt": "2021-01-21T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f2"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239528f00000c"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 37,
          "id": "6371251df03239b913000082",
          "createdAt": "2020-10-23T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239d81e00001a",
                  "cost": 2593.32,
                  "productsCount": 5,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001ab",
                  "cost": 39.18,
                  "productsCount": 1,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001ab"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000045",
                  "cost": 3061.74,
                  "productsCount": 3,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c0000011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002c",
                  "cost": 1587.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000043"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000153",
                  "cost": 2493.86,
                  "productsCount": 3,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000044"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000153"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000336",
                  "cost": 1933.72,
                  "productsCount": 5,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000336"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001a",
                  "cost": 3788.51,
                  "productsCount": 2,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000321"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003a",
                  "cost": 933.48,
                  "productsCount": 4,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      },
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000151",
                  "cost": 326.45,
                  "productsCount": 2,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000151"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000157",
                  "cost": 12.77,
                  "productsCount": 2,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000157"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000040",
                  "cost": 1844.95,
                  "productsCount": 5,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000321"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000040"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100031a",
                  "cost": 896.38,
                  "productsCount": 1,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100031a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000036",
                  "cost": 1959.18,
                  "productsCount": 4,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000036"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003e",
                  "cost": 1588.75,
                  "productsCount": 3,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d25f03239d591000327"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000198",
                  "cost": 3898.69,
                  "productsCount": 4,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000198"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000153",
                  "cost": 1839.71,
                  "productsCount": 4,
                  "createdAt": "2021-01-22T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000153"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032390a3400031f"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 32,
          "id": "6371251df03239cdc5000081",
          "createdAt": "2020-10-27T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239b7f7000031",
                  "cost": 223.87,
                  "productsCount": 3,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000031"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000029",
                  "cost": 3655.64,
                  "productsCount": 3,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000045",
                  "cost": 493.94,
                  "productsCount": 3,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001d",
                  "cost": 732.46,
                  "productsCount": 5,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000152",
                  "cost": 442.46,
                  "productsCount": 2,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000152"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000334",
                  "cost": 219.07,
                  "productsCount": 4,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000189"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000334"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034c",
                  "cost": 661.95,
                  "productsCount": 2,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300012e",
                  "cost": 838.14,
                  "productsCount": 4,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e4"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300012e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000039",
                  "cost": 1961.93,
                  "productsCount": 1,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000039"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000350",
                  "cost": 3340.88,
                  "productsCount": 5,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000350"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000025",
                  "cost": 83.04,
                  "productsCount": 1,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000025"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000151",
                  "cost": 3880.97,
                  "productsCount": 3,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000186"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000151"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000355",
                  "cost": 915.05,
                  "productsCount": 3,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000355"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014d",
                  "cost": 2642.94,
                  "productsCount": 1,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000310",
                  "cost": 3040.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000310"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030f",
                  "cost": 3720.71,
                  "productsCount": 3,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002dd"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000303",
                  "cost": 1988.69,
                  "productsCount": 4,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000303"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000348",
                  "cost": 2499.55,
                  "productsCount": 3,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000348"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000344",
                  "cost": 3278.33,
                  "productsCount": 4,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000344"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000022",
                  "cost": 1104.58,
                  "productsCount": 5,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000022"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100033b",
                  "cost": 3502.96,
                  "productsCount": 2,
                  "createdAt": "2021-01-23T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000183"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100033b"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032394c4900011c"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 42,
          "id": "6371251df03239cdc5000082",
          "createdAt": "2020-10-16T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239d81e000040",
                  "cost": 3532.94,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000040"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100031d",
                  "cost": 1424.53,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100031d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000147",
                  "cost": 3716.79,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000147"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001ba",
                  "cost": 3066.85,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001ba"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000358",
                  "cost": 1254.83,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000358"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000026",
                  "cost": 1952.66,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000183"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000026"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000044",
                  "cost": 1008.2,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000044"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000032",
                  "cost": 2976.32,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000032"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000027",
                  "cost": 2457.33,
                  "productsCount": 4,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000356",
                  "cost": 3176.67,
                  "productsCount": 4,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002ea"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000356"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000039",
                  "cost": 1349.24,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000039"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100032b",
                  "cost": 1225.16,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100032b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000336",
                  "cost": 559.15,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000336"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000351",
                  "cost": 1271.59,
                  "productsCount": 4,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000351"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b1",
                  "cost": 3531.1,
                  "productsCount": 4,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b1"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400001e",
                  "cost": 1178.68,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400001e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700002d",
                  "cost": 3323.5,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700002d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300013e",
                  "cost": 751.81,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300013e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032c",
                  "cost": 1298.33,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032c"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239f09e00018d"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 59,
          "id": "6371251df032399c00000196",
          "createdAt": "2020-09-28T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239b7f700001c",
                  "cost": 1347.43,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001c"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f0",
                  "cost": 1011.46,
                  "productsCount": 4,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f0"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000313",
                  "cost": 698.12,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000313"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001e",
                  "cost": 659.42,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000180"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000033",
                  "cost": 2149.4,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000033"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000027",
                  "cost": 3286.44,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fe",
                  "cost": 1379.87,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fe"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100034e",
                  "cost": 2001.58,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e00018d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001a",
                  "cost": 2318.07,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030d",
                  "cost": 3024.75,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000150",
                  "cost": 2832.48,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000150"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001c",
                  "cost": 3543.34,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000185"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014f",
                  "cost": 1702.69,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030e",
                  "cost": 882.19,
                  "productsCount": 4,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000344",
                  "cost": 252.61,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000344"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000024",
                  "cost": 2269.3,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000024"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014e",
                  "cost": 1513.8,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d25f03239d591000327"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002eb"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001e",
                  "cost": 1846.95,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002c",
                  "cost": 1587.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000043"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001d",
                  "cost": 927.82,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000155",
                  "cost": 3487.3,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000155"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003b",
                  "cost": 2035.98,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000344",
                  "cost": 3278.33,
                  "productsCount": 4,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000344"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100033a",
                  "cost": 3228.67,
                  "productsCount": 3,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100033a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000147",
                  "cost": 1416.51,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000147"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000341",
                  "cost": 2570.3,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e8"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000341"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000038",
                  "cost": 1878.32,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000322"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000038"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00002b",
                  "cost": 3852.49,
                  "productsCount": 1,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000038"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00002b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000042",
                  "cost": 2382.42,
                  "productsCount": 5,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000042"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002c",
                  "cost": 3971,
                  "productsCount": 2,
                  "createdAt": "2021-01-24T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002c"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239b7f7000010"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 14,
          "id": "6371251df032399c00000197",
          "createdAt": "2020-11-11T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032390a34000337",
                  "cost": 619.13,
                  "productsCount": 4,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000337"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000357",
                  "cost": 22.7,
                  "productsCount": 1,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000357"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034d",
                  "cost": 270.33,
                  "productsCount": 2,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000351",
                  "cost": 1271.59,
                  "productsCount": 4,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000351"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000026",
                  "cost": 1952.66,
                  "productsCount": 5,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000183"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000026"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002e",
                  "cost": 1729.43,
                  "productsCount": 1,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000153",
                  "cost": 968.95,
                  "productsCount": 5,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000125"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000153"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100032c",
                  "cost": 502.51,
                  "productsCount": 1,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239569400000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100032c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000025",
                  "cost": 479,
                  "productsCount": 5,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000025"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500015a",
                  "cost": 2928.08,
                  "productsCount": 2,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500015a"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000036",
                  "cost": 1959.18,
                  "productsCount": 4,
                  "createdAt": "2021-01-25T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000036"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d81e000010"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 36,
          "id": "6371251df0323986f3000196",
          "createdAt": "2020-10-19T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239d59100034d",
                  "cost": 3647.52,
                  "productsCount": 4,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100034d"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f3",
                  "cost": 1751.19,
                  "productsCount": 5,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f3"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002e",
                  "cost": 1729.43,
                  "productsCount": 1,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001ad",
                  "cost": 2666.12,
                  "productsCount": 1,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001ad"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000348",
                  "cost": 2499.55,
                  "productsCount": 3,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000348"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b5",
                  "cost": 394.26,
                  "productsCount": 2,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000183"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b5"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000038",
                  "cost": 33.34,
                  "productsCount": 5,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f03239867500012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000038"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500012e",
                  "cost": 3934.55,
                  "productsCount": 2,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500012e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000031",
                  "cost": 2163.93,
                  "productsCount": 4,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e1"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000031"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000029",
                  "cost": 3361.11,
                  "productsCount": 5,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400033c",
                  "cost": 847.35,
                  "productsCount": 5,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400033c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000029",
                  "cost": 2797.14,
                  "productsCount": 4,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000132",
                  "cost": 3072.8,
                  "productsCount": 5,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000318"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000132"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100033d",
                  "cost": 2510.55,
                  "productsCount": 1,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100033d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000044",
                  "cost": 3855.51,
                  "productsCount": 1,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000006"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000044"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000045",
                  "cost": 493.94,
                  "productsCount": 3,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000045"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000153",
                  "cost": 2493.86,
                  "productsCount": 3,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000044"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000153"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000196",
                  "cost": 3944.07,
                  "productsCount": 3,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000196"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000013e",
                  "cost": 3432.11,
                  "productsCount": 5,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000013e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000356",
                  "cost": 2636.43,
                  "productsCount": 2,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000356"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000029",
                  "cost": 3655.64,
                  "productsCount": 3,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000029"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014f",
                  "cost": 1729.13,
                  "productsCount": 3,
                  "createdAt": "2021-01-26T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014f"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239d591000325"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 45,
          "id": "6371251df0323986f3000197",
          "createdAt": "2020-10-09T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239d591000349",
                  "cost": 226.39,
                  "productsCount": 4,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000180"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000349"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fb",
                  "cost": 2191.37,
                  "productsCount": 3,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e9"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fb"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f6",
                  "cost": 3682.05,
                  "productsCount": 2,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f6"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000146",
                  "cost": 1232.26,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002ea"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000146"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001d",
                  "cost": 732.46,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c00019c",
                  "cost": 2455.22,
                  "productsCount": 4,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000322"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c00019c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000344",
                  "cost": 252.61,
                  "productsCount": 2,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000344"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000140",
                  "cost": 404.7,
                  "productsCount": 3,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002de"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000140"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001e",
                  "cost": 1846.95,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000153",
                  "cost": 1839.71,
                  "productsCount": 4,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000153"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000024",
                  "cost": 3888.08,
                  "productsCount": 2,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000323"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000024"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00003e",
                  "cost": 3956.27,
                  "productsCount": 2,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239569400000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00003e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000036",
                  "cost": 1800.07,
                  "productsCount": 1,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000036"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000150",
                  "cost": 1864.03,
                  "productsCount": 1,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000150"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014b",
                  "cost": 808.18,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000033",
                  "cost": 41.64,
                  "productsCount": 4,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000033"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000337",
                  "cost": 2297.98,
                  "productsCount": 3,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f03239867500012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000187"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000337"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001c",
                  "cost": 1347.43,
                  "productsCount": 1,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000356",
                  "cost": 3176.67,
                  "productsCount": 4,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002ea"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000356"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b3",
                  "cost": 1681.56,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000013"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b3"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239cdc5000011"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 29,
          "id": "6371251df03239d40b0000ce",
          "createdAt": "2020-10-24T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239bef0000146",
                  "cost": 1232.26,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002ea"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000146"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000130",
                  "cost": 3550.63,
                  "productsCount": 4,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e7"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000130"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000135",
                  "cost": 3925.03,
                  "productsCount": 3,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000135"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000155",
                  "cost": 740.68,
                  "productsCount": 2,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000155"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001d",
                  "cost": 732.46,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002d",
                  "cost": 229.26,
                  "productsCount": 1,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db6900011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000143",
                  "cost": 3740.97,
                  "productsCount": 2,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000143"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700002c",
                  "cost": 1756.36,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e00017f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000037",
                  "cost": 1845.49,
                  "productsCount": 3,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000037"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001a7",
                  "cost": 2866.23,
                  "productsCount": 3,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      },
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a7"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00003f",
                  "cost": 1406.13,
                  "productsCount": 4,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00003f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000154",
                  "cost": 1984.49,
                  "productsCount": 2,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000154"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00002b",
                  "cost": 3852.49,
                  "productsCount": 1,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000038"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00002b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030d",
                  "cost": 3024.75,
                  "productsCount": 1,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000300",
                  "cost": 145.14,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000300"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000305",
                  "cost": 20.45,
                  "productsCount": 5,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000305"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000334",
                  "cost": 219.07,
                  "productsCount": 4,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000189"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000334"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030f",
                  "cost": 3720.71,
                  "productsCount": 3,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002dd"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001a",
                  "cost": 2318.07,
                  "productsCount": 2,
                  "createdAt": "2021-01-27T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001a"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032390a3400031c"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 54,
          "id": "6371251df03239d40b0000cf",
          "createdAt": "2020-09-28T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032395694000030",
                  "cost": 2269.68,
                  "productsCount": 3,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000031",
                  "cost": 223.87,
                  "productsCount": 3,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000031"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000303",
                  "cost": 1988.69,
                  "productsCount": 4,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000303"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000353",
                  "cost": 2356.11,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e9"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000353"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014c",
                  "cost": 1124.55,
                  "productsCount": 3,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000135",
                  "cost": 3782.1,
                  "productsCount": 4,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000135"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014c",
                  "cost": 2570.97,
                  "productsCount": 5,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001c",
                  "cost": 1347.43,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000182"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b8",
                  "cost": 46.81,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b8"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000356",
                  "cost": 3176.67,
                  "productsCount": 4,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002ea"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000356"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032f",
                  "cost": 412.99,
                  "productsCount": 3,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db6900011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000036",
                  "cost": 1800.07,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000036"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000345",
                  "cost": 752.29,
                  "productsCount": 4,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f032390a3400032a"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000345"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00002a",
                  "cost": 2519.39,
                  "productsCount": 3,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00002a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000033",
                  "cost": 3538.76,
                  "productsCount": 5,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000326"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000033"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000024",
                  "cost": 2269.3,
                  "productsCount": 3,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000024"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000035",
                  "cost": 2479.46,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000035"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002c",
                  "cost": 3971,
                  "productsCount": 2,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fc",
                  "cost": 1696.79,
                  "productsCount": 2,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fc"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700003b",
                  "cost": 2035.98,
                  "productsCount": 3,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000012"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700003b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014e",
                  "cost": 2403.19,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000154",
                  "cost": 3889.06,
                  "productsCount": 4,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000043"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000154"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000337",
                  "cost": 619.13,
                  "productsCount": 4,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000337"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000352",
                  "cost": 1011.56,
                  "productsCount": 5,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000352"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000312",
                  "cost": 1751.67,
                  "productsCount": 5,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000312"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000336",
                  "cost": 1933.72,
                  "productsCount": 5,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000336"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000133",
                  "cost": 3463.58,
                  "productsCount": 5,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000133"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000019",
                  "cost": 531.23,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400003f",
                  "cost": 2530.27,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400003f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001e",
                  "cost": 2835.28,
                  "productsCount": 5,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001e"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014b",
                  "cost": 1856.78,
                  "productsCount": 4,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d59100031e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000025",
                  "cost": 88.81,
                  "productsCount": 2,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000025"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00001a",
                  "cost": 833.05,
                  "productsCount": 5,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      },
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00001a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000014a",
                  "cost": 2538.89,
                  "productsCount": 2,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000014a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001a2",
                  "cost": 2719.34,
                  "productsCount": 1,
                  "createdAt": "2021-01-28T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a2"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239528f000008"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 66,
          "id": "6371251df03239d40b0000d0",
          "createdAt": "2020-09-15T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239d81e000032",
                  "cost": 2976.32,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef000011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000032"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef000013c",
                  "cost": 1484.96,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef000013c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001aa",
                  "cost": 2666,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000124"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001aa"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000306",
                  "cost": 52.32,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000306"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000038",
                  "cost": 3861.7,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000121"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000038"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000345",
                  "cost": 3301.41,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000185"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000345"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000354",
                  "cost": 2447.29,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      },
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000181"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000354"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000139",
                  "cost": 2828.47,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00018b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000139"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001a0",
                  "cost": 350.07,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000320"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a0"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000159",
                  "cost": 1446.87,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012d"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f3000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000159"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500014f",
                  "cost": 1729.13,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500014f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000038",
                  "cost": 2760.45,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d591000322"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000038"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000309",
                  "cost": 1668.42,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c00017f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000309"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000037",
                  "cost": 2370.96,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      },
                      {
                        "id": "63701d24f032390a3400032a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000037"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000353",
                  "cost": 3648.94,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000353"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000148",
                  "cost": 1205.8,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000148"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c000196",
                  "cost": 3944.07,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c000196"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000042",
                  "cost": 2382.42,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000042"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000354",
                  "cost": 2921.72,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000006"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000354"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500015a",
                  "cost": 2928.08,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      },
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500015a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030c",
                  "cost": 537.57,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      },
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00003d",
                  "cost": 2747.76,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00003d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000019",
                  "cost": 1006.17,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000187"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000019"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00002c",
                  "cost": 1390.8,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b3300011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f5",
                  "cost": 1720.34,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f5"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000144",
                  "cost": 3276.83,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d25f03239d591000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000040"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000144"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000140",
                  "cost": 2674.7,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012c"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000140"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000044",
                  "cost": 3855.51,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000006"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000044"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000045",
                  "cost": 3199.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000045"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f0323944410002dd"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 68,
          "id": "6371251df03239d40b0000d1",
          "createdAt": "2020-09-12T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f032390a3400032d",
                  "cost": 366.28,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000326"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000135",
                  "cost": 616.02,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f0323944410002ec"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000135"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000137",
                  "cost": 2687.49,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000137"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000338",
                  "cost": 1036.87,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000188"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000338"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000346",
                  "cost": 3120.14,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000346"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000031",
                  "cost": 2374.64,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239867500011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000031"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000341",
                  "cost": 2198.03,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      },
                      {
                        "id": "63701d25f03239d591000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000341"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239569400002c",
                  "cost": 1587.09,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b000043"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239569400002c"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000131",
                  "cost": 554.41,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000009"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000131"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300013b",
                  "cost": 3285.66,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000126"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300013b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000343",
                  "cost": 1231.1,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      },
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000343"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000030",
                  "cost": 1035.65,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000342",
                  "cost": 2863.68,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      },
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000320"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000342"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000030",
                  "cost": 3812.92,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000030"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001bb",
                  "cost": 1638.82,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001bb"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fe",
                  "cost": 1379.87,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032398675000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fe"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000027",
                  "cost": 3419.77,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000027"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e00002b",
                  "cost": 2036.19,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e00002b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001f",
                  "cost": 2192.19,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400034c",
                  "cost": 661.95,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc5000010"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400034c"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000043",
                  "cost": 1592.8,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f0323944410002ed"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db6900011b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000043"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000028",
                  "cost": 118.18,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ed"
                      },
                      {
                        "id": "63701d24f03239c72c000191"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e5"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000028"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b33000155",
                  "cost": 3487.3,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b33000155"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000348",
                  "cost": 2499.55,
                  "productsCount": 3,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000122"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000348"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300014d",
                  "cost": 810.78,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300014d"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000032",
                  "cost": 62.48,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000032"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001bd",
                  "cost": 2329.2,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e2"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001bd"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a3400032e",
                  "cost": 1003.36,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a3400032e"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000316",
                  "cost": 1783.11,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002de"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000316"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001b7",
                  "cost": 1277.12,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239867500012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395b33000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001b7"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c00019b",
                  "cost": 526.17,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c00019b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001d",
                  "cost": 927.82,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c000190"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239444100030a",
                  "cost": 2774.08,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      },
                      {
                        "id": "63701d24f03239c72c00018f"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b91300000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239444100030a"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000355",
                  "cost": 3542.2,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f03239d81e000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000355"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000042",
                  "cost": 2654.51,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000017"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000042"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000044",
                  "cost": 607.91,
                  "productsCount": 5,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a34000319"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000044"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395b3300015b",
                  "cost": 899.75,
                  "productsCount": 4,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f03239d81e000018"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032395694000008"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395b3300015b"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d591000342",
                  "cost": 2894.43,
                  "productsCount": 2,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d591000342"
                }
              },
              {
                "create": {
                  "id": "63701d74f032394441000302",
                  "cost": 24.01,
                  "productsCount": 1,
                  "createdAt": "2021-01-29T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b913000011"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032394441000302"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f03239c72c000184"
    }
  },
  {
    "data": {
      "AffiliateStat": {
        "create": {
          "affiliateSalesCount": 46,
          "id": "6371251df03239d40b0000d2",
          "createdAt": "2020-10-03T00:00:00.000Z",
          "affiliateSales": {
            "connectOrCreate": [
              {
                "create": {
                  "id": "63701d74f03239867500012f",
                  "cost": 1650.67,
                  "productsCount": 1,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e00000b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500012f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000157",
                  "cost": 12.77,
                  "productsCount": 2,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000120"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000157"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000132",
                  "cost": 1028.7,
                  "productsCount": 4,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000015"
                      },
                      {
                        "id": "63701d24f032395b3300012a"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f700000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000132"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002f0",
                  "cost": 1011.46,
                  "productsCount": 4,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f0323944410002ee"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c49000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002f0"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c0001a5",
                  "cost": 1417.86,
                  "productsCount": 1,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d81e000014"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c0001a5"
                }
              },
              {
                "create": {
                  "id": "63701d74f032390a34000331",
                  "cost": 491.56,
                  "productsCount": 3,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      },
                      {
                        "id": "63701d24f03239867500012b"
                      },
                      {
                        "id": "63701d24f03239d81e000015"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239bef0000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032390a34000331"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d59100032d",
                  "cost": 1740.06,
                  "productsCount": 4,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000129"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d59100032d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700001b",
                  "cost": 3282.35,
                  "productsCount": 4,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239528f000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700001b"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000041",
                  "cost": 1058.08,
                  "productsCount": 1,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ef"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239b7f7000007"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000041"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000149",
                  "cost": 2683.83,
                  "productsCount": 3,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      },
                      {
                        "id": "63701d24f032395b3300012d"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239db69000128"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000149"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239867500013d",
                  "cost": 1047.45,
                  "productsCount": 5,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239c72c000189"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239867500013d"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f700002f",
                  "cost": 1720.08,
                  "productsCount": 1,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000123"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f700002f"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239c72c00019f",
                  "cost": 1213.83,
                  "productsCount": 5,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239d81e000015"
                      },
                      {
                        "id": "63701d24f03239b7f7000016"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239c72c00019f"
                }
              },
              {
                "create": {
                  "id": "63701d74f032395694000023",
                  "cost": 864.03,
                  "productsCount": 5,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f03239c72c00018e"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239cdc500000e"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032395694000023"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000023",
                  "cost": 776.76,
                  "productsCount": 3,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032396b8e00000f"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000023"
                }
              },
              {
                "create": {
                  "id": "63701d74f032398675000144",
                  "cost": 1824.33,
                  "productsCount": 1,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239f09e000184"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032398675000144"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e000035",
                  "cost": 2371.02,
                  "productsCount": 4,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000328"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032394c4900011c"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e000035"
                }
              },
              {
                "create": {
                  "id": "63701d74f032396b8e000031",
                  "cost": 2163.93,
                  "productsCount": 4,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032390a34000329"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323944410002e1"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f032396b8e000031"
                }
              },
              {
                "create": {
                  "id": "63701d74f0323944410002fa",
                  "cost": 937.92,
                  "productsCount": 3,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f0323944410002ec"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f03239d40b00003b"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f0323944410002fa"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239b7f7000040",
                  "cost": 1589.39,
                  "productsCount": 5,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": [
                      {
                        "id": "63701d24f032395b3300012d"
                      },
                      {
                        "id": "63701d24f032390a34000327"
                      }
                    ]
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f0323986f300011d"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239b7f7000040"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239bef0000152",
                  "cost": 919.82,
                  "productsCount": 3,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032390a3400031a"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239bef0000152"
                }
              },
              {
                "create": {
                  "id": "63701d74f03239d81e00001b",
                  "cost": 441.63,
                  "productsCount": 4,
                  "createdAt": "2021-01-30T00:00:00.000Z",
                  "products": {
                    "connect": []
                  },
                  "User": {
                    "connect": {
                      "id": "63701cc1f032399c00000127"
                    }
                  }
                },
                "where": {
                  "id": "63701d74f03239d81e00001b"
                }
              }
            ]
          }
        }
      }
    },
    "where": {
      "id": "63701cc1f032394c49000126"
    }
  }
];

export default users_affiliateStatsDummyData;
