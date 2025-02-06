const attrGetter = {
  attributes: {},

  getAttributes(products) {
    const attributesMap = {}

    products.forEach(product => {
      const { attributes } = product
      for (const key in attributes) {
        if (!attributesMap[key]) {
          attributesMap[key] = new Set()
        }

        attributesMap[key].add(attributes[key])
      }
    })

    this.attributes = {}
    for (const key in attributesMap) {
      this.attributes[key] = Array.from(attributesMap[key])
    }

    return this.attributes
  },
}

// const products = [
//   {
//     attributes: {
//       "Тип ОЗУ": "DDR4",
//       "Тип накопителя": "SSD",
//       "Процессор": "AMD",
//       "Количество ядер": "4",
//       "Объем накопителя": "240Gb",
//       "Частота процессора": "3.8Ghz",
//       "Объем ОЗУ": "8Gb",
//       "Частота ОЗУ": "3200Mhz",
//       "Материнская плата": "Asus",
//       "Блок питания": "500W"
//     }
//   },
//   {
//     attributes: {
//       "Тип ОЗУ": "DDR4",
//       "Тип накопителя": "HDD",
//       "Процессор": "Intel",
//       "Количество ядер": "6",
//       "Объем накопителя": "500Gb",
//       "Частота процессора": "4.0Ghz",
//       "Объем ОЗУ": "16Gb",
//       "Частота ОЗУ": "3600Mhz",
//       "Материнская плата": "MSI",
//       "Блок питания": "600W"
//     }
//   },
//   {
//     attributes: {
//       "Тип ОЗУ": "DDR3",
//       "Тип накопителя": "SSD",
//       "Процессор": "AMD",
//       "Количество ядер": "8",
//       "Объем накопителя": "1Tb",
//       "Частота процессора": "3.6Ghz",
//       "Объем ОЗУ": "8Gb",
//       "Частота ОЗУ": "2666Mhz",
//       "Материнская плата": "Gigabyte",
//       "Блок питания": "750W"
//     }
//   },
//   {
//     attributes: {
//       "Тип ОЗУ": "DDR4",
//       "Тип накопителя": "NVMe",
//       "Процессор": "Intel",
//       "Количество ядер": "8",
//       "Объем накопителя": "2Tb",
//       "Частота процессора": "4.2Ghz",
//       "Объем ОЗУ": "32Gb",
//       "Частота ОЗУ": "4000Mhz",
//       "Материнская плата": "Asus",
//       "Блок питания": "850W"
//     }
//   },
//   {
//     attributes: {
//       "Тип ОЗУ": "DDR5",
//       "Тип накопителя": "SSD",
//       "Процессор": "AMD",
//       "Количество ядер": "12",
//       "Объем накопителя": "1Tb",
//       "Частота процессора": "4.5Ghz",
//       "Объем ОЗУ": "64Gb",
//       "Частота ОЗУ": "4800Mhz",
//       "Материнская плата": "ASRock",
//       "Блок питания": "1000W"
//     }
//   },
//   {
//     attributes: {
//       "Тип ОЗУ": "DDR3",
//       "Тип накопителя": "HDD",
//       "Процессор": "Intel",
//       "Количество ядер": "2",
//       "Объем накопителя": "500Gb",
//       "Частота процессора": "3.0Ghz",
//       "Объем ОЗУ": "4Gb",
//       "Частота ОЗУ": "1600Mhz",
//       "Материнская плата": "Biostar",
//       "Блок питания": "450W"
//     }
//   }
// ]

// console.log(attrGetter.getAttributes(products))
// const result = attrGetter.getAttributes(products)
// result
