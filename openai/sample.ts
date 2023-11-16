const cbSample = {
  data: `date,month,area,region,city,subs,product\r\n10/1/2023,Oct-23,AREA 4,SULAWESI,Kota Ternate,1998,By.U\r\n11/1/2023,Nov-23,AREA 2,JAVA,Jakarta,1800,By.V\r\n12/1/2023,Dec-23,AREA 3,SUMATRA,Medan,1500,By.U\r\n1/1/2024,Jan-24,AREA 1,BORNEO,Balikpapan,2200,By.V\r\n2/1/2024,Feb-24,AREA 4,SULAWESI,Makassar,2100,By.U\r\n3/1/2024,Mar-24,AREA 3,SUMATRA,Palembang,1700,By.V\r\n4/1/2024,Apr-24,AREA 2,JAVA,Bandung,1900,By.U\r\n5/1/2024,May-24,AREA 1,BORNEO,Samarinda,2000,By.V\r\n6/1/2024,Jun-24,AREA 4,SULAWESI,Manado,2400,By.U\r\n7/1/2024,Jul-24,AREA 3,SUMATRA,Banda Aceh,1600,By.V\r\n8/1/2024,Aug-24,AREA 2,JAVA,Surabaya,1750,By.U\r\n9/1/2024,Sep-24,AREA 1,BORNEO,Pontianak,1950,By.V\r\n10/1/2024,Oct-24,AREA 4,SULAWESI,Gorontalo,1850,By.U\r\n11/1/2024,Nov-24,AREA 3,SUMATRA,Bengkulu,1650,By.V\r\n12/1/2024,Dec-24,AREA 2,JAVA,Denpasar,2100,By.U\r\n1/1/2025,Jan-25,AREA 1,BORNEO,Balikpapan,2200,By.V\r\n2/1/2025,Feb-25,AREA 4,SULAWESI,Makassar,2100,By.U\r\n3/1/2025,Mar-25,AREA 3,SUMATRA,Palembang,1700,By.V\r\n4/1/2025,Apr-25,AREA 2,JAVA,Bandung,1900,By.U\r\n5/1/2025,May-25,AREA 1,BORNEO,Samarinda,2000,By.V\r\n6/1/2025,Jun-25,AREA 4,SULAWESI,Manado,2400,By.U\r\n7/1/2025,Jul-25,AREA 3,SUMATRA,Banda Aceh,1600,By.V\r\n8/1/2025,Aug-25,AREA 2,JAVA,Surabaya,1750,By.U\r\n9/1/2025,Sep-25,AREA 1,BORNEO,Pontianak,1950,By.V\r\n10/1/2025,Oct-25,AREA 4,SULAWESI,Gorontalo,1850,By.U\r\n11/1/2025,Nov-25,AREA 3,SUMATRA,Bengkulu,1650,By.V\r\n12/1/2025,Dec-25,AREA 2,JAVA,Denpasar,2100,By.U\r\n1/1/2026,Jan-26,AREA 1,BORNEO,Balikpapan,2200,By.V\r\n2/1/2026,Feb-26,AREA 4,SULAWESI,Makassar,2100,By.U\r\n3/1/2026,Mar-26,AREA 3,SUMATRA,Palembang,1700,By.V\r\n4/1/2026,Apr-26,AREA 2,JAVA,Bandung,1900,By.U\r\n5/1/2026,May-26,AREA 1,BORNEO,Samarinda,2000,By.V\r\n6/1/2026,Jun-26,AREA 4,SULAWESI,Manado,2400,By.U\r\n7/1/2026,Jul-26,AREA 3,SUMATRA,Banda Aceh,1600,By.V\r\n8/1/2026,Aug-26,AREA 2,JAVA,Surabaya,1750,By.U\r\n9/1/2026,Sep-26,AREA 1,BORNEO,Pontianak,1950,By.V\r\n10/1/2026,Oct-26,AREA 4,SULAWESI,Gorontalo,1850,By.U\r\n11/1/2026,Nov-26,AREA 3,SUMATRA,Bengkulu,1650,By.V\r\n12/1/2026,Dec-26,AREA 2,JAVA,Denpasar,2100,By.U\r\n1/1/2027,Jan-27,AREA 1,BORNEO,Balikpapan,2200,By.V\r\n2/1/2027,Feb-27,AREA 4,SULAWESI,Makassar,2100,By.U\r\n3/1/2027,Mar-27,AREA 3,SUMATRA,Palembang,1700,By.V\r\n4/1/2027,Apr-27,AREA 2,JAVA,Bandung,1900,By.U\r\n5/1/2027,May-27,AREA 1,BORNEO,Samarinda,2000,By.V\r\n6/1/2027,Jun-27,AREA 4,SULAWESI,Manado,2400,By.U\r\n7/1/2027,Jul-27,AREA 3,SUMATRA,Banda Aceh,1600,By.V\r\n8/1/2027,Aug-27,AREA 2,JAVA,Surabaya,1750,By.U\r\n9/1/2027,Sep-27,AREA 1,BORNEO,Pontianak,1950,By.V\r\n10/1/2027,Oct-27,AREA 4,SULAWESI,Gorontalo,1850,By.U\r\n11/1/2027,Nov-27,AREA 3,SUMATRA,Bengkulu,1650,By.V\r\n12/1/2027,Dec-27,AREA 2,JAVA,Denpasar,2100,By.U`,
  samples: [
    {
      context: `This sample dataset contains information about subscribers on a platform named CB. The data provides insights into subscriber counts across different areas, regions, cities, and products.`,
      dashboard: {
        filters: [
          { title: "Date", column: "date" },
          { title: "Month", column: "month" },
          { title: "Area", column: "area" },
          { title: "Region", column: "region" },
          { title: "City", column: "city" },
          { title: "Subs", column: "subs" },
          { title: "Product", column: "product" },
        ],
        kpis: [
          {
            title: "Total Subs",
            javascriptFunction:
              "data => { let totalSubs = 0; data.forEach(row => { if(row['subs']) { const subs = parseNumber(row['subs']); if(!isNaN(subs)) { totalSubs += subs; } } }); return totalSubs; }",
          },
          {
            title: "Average Subs",
            javascriptFunction:
              "data => { let totalSubs = 0; let count = 0; data.forEach(row => { if(row['subs']) { const subs = parseNumber(row['subs']); if(!isNaN(subs)) { totalSubs += subs; count++; } } }); return totalSubs / count; }",
          },
          {
            title: "Max Subs",
            javascriptFunction:
              "data => { let maxSubs = 0; data.forEach(row => { if(row['subs']) { const subs = parseNumber(row['subs']); if(!isNaN(subs) && subs > maxSubs) { maxSubs = subs; } } }); return maxSubs; }",
          },
          {
            title: "Min Subs",
            javascriptFunction:
              "data => { let minSubs = Infinity; data.forEach(row => { if(row['subs']) { const subs = parseNumber(row['subs']); if(!isNaN(subs) && subs < minSubs) { minSubs = subs; } } }); return minSubs === Infinity ? 0 : minSubs; }",
          },
        ],
        charts: [
          {
            title: "Subs by Area",
            chartType: "barChart",
            javascriptFunction:
              "data => { const areas = data.reduce((acc, row) => { if(row['area'] && row['subs']) { const area = row['area']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[area]) { acc[area] += subs; } else { acc[area] = subs; } } } return acc; }, {}); const result = Object.keys(areas).map(area => { return { x: area, y: areas[area] }; }); return result; }",
          },
          {
            title: "Subs by Region",
            chartType: "barChart",
            javascriptFunction:
              "data => { const regions = data.reduce((acc, row) => { if(row['region'] && row['subs']) { const region = row['region']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[region]) { acc[region] += subs; } else { acc[region] = subs; } } } return acc; }, {}); const result = Object.keys(regions).map(region => { return { x: region, y: regions[region] }; }); return result; }",
          },
          {
            title: "Subs by City",
            chartType: "barChart",
            javascriptFunction:
              "data => { const cities = data.reduce((acc, row) => { if(row['city'] && row['subs']) { const city = row['city']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[city]) { acc[city] += subs; } else { acc[city] = subs; } } } return acc; }, {}); const result = Object.keys(cities).map(city => { return { x: city, y: cities[city] }; }); return result; }",
          },
          {
            title: "Subs by Product",
            chartType: "barChart",
            javascriptFunction:
              "data => { const products = data.reduce((acc, row) => { if(row['product'] && row['subs']) { const product = row['product']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[product]) { acc[product] += subs; } else { acc[product] = subs; } } } return acc; }, {}); const result = Object.keys(products).map(product => { return { x: product, y: products[product] }; }); return result; }",
          },
          {
            title: "Subs by Month",
            chartType: "lineChart",
            javascriptFunction:
              "data => { const months = data.reduce((acc, row) => { if(row['month'] && row['subs']) { const month = row['month']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[month]) { acc[month] += subs; } else { acc[month] = subs; } } } return acc; }, {}); const result = Object.keys(months).map(month => { return { x: month, y: months[month] }; }); return result; }",
          },
        ],
      },
    },
  ],
};

const orbitSample = {
 data: `date,month,region_sales,package_service,channel_name,rev,trx,subs,rev_cvm,trx_cvm,subs_cvm\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,393000,3,3,0,0,0\r\n
11/30/2023,Nov-23,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,399000,4,4,0,0,0\r\n
12/31/2023,Dec-23,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,405000,5,5,0,0,0\r\n
1/31/2024,Jan-24,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,410000,6,6,0,0,0\r\n
2/29/2024,Feb-24,CENTRAL JABOTABEK,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,415000,7,7,0,0,0\r\n
3/31/2024,Mar-24,CENTRAL JABOTABEK,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,420000,8,8,0,0,0\r\n
4/30/2024,Apr-24,CENTRAL JABOTABEK,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,425000,9,9,0,0,0\r\n
5/31/2024,May-24,CENTRAL JABOTABEK,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,430000,10,10,0,0,0\r\n
6/30/2024,Jun-24,CENTRAL JABOTABEK,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,435000,11,11,0,0,0\r\n
7/31/2024,Jul-24,CENTRAL JABOTABEK,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,440000,12,12,0,0,0\r\n
8/31/2024,Aug-24,JABAR,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,445000,13,13,0,0,0\r\n
9/30/2024,Sep-24,JABAR,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,450000,14,14,0,0,0\r\n
10/31/2024,Oct-24,JABAR,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,455000,15,15,0,0,0\r\n
11/30/2024,Nov-24,JABAR,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,460000,16,16,0,0,0\r\n
12/31/2024,Dec-24,JATENG,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,465000,17,17,0,0,0\r\n
1/31/2025,Jan-25,JATENG,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,470000,18,18,0,0,0\r\n
2/28/2025,Feb-25,JATENG,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,475000,19,19,0,0,0\r\n
3/31/2025,Mar-25,JATENG,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,480000,20,20,0,0,0\r\n
4/30/2025,Apr-25,JATIM,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,485000,21,21,0,0,0\r\n
5/31/2025,May-25,JATIM,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,490000,22,22,0,0,0\r\n
6/30/2025,Jun-25,JATIM,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,495000,23,23,0,0,0\r\n
7/31/2025,Jul-25,JATIM,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,500000,24,24,0,0,0\r\n
8/31/2025,Aug-25,JATIM,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,505000,25,25,0,0,0\r\n
9/30/2025,Sep-25,JATIM,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,510000,26,26,0,0,0\r\n
10/31/2025,Oct-25,KALIMANTAN,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,515000,27,27,0,0,0\r\n
11/30/2025,Nov-25,KALIMANTAN,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,520000,28,28,0,0,0\r\n
12/31/2025,Dec-25,KALIMANTAN,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,525000,29,29,0,0,0\r\n
1/31/2026,Jan-26,KALIMANTAN,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,530000,30,30,0,0,0\r\n
2/28/2026,Feb-26,KALIMANTAN,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,535000,31,31,0,0,0\r\n
3/31/2026,Mar-26,KALIMANTAN,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,540000,32,32,0,0,0\r\n
4/30/2026,Apr-26,PUMA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,545000,33,33,0,0,0\r\n
5/31/2026,May-26,PUMA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,550000,34,34,0,0,0\r\n
6/30/2026,Jun-26,PUMA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,555000,35,35,0,0,0\r\n
7/31/2026,Jul-26,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,560000,36,36,0,0,0\r\n
8/31/2026,Aug-26,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,565000,37,37,0,0,0\r\n
9/30/2026,Sep-26,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,570000,38,38,0,0,0\r\n
10/31/2026,Oct-26,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,575000,39,39,0,0,0\r\n
11/30/2026,Nov-26,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,580000,40,40,0,0,0\r\n
12/31/2026,Dec-26,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,585000,41,41,0,0,0\r\n
1/31/2027,Jan-27,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,590000,42,42,0,0,0\r\n
2/28/2027,Feb-27,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,595000,43,43,0,0,0\r\n
3/31/2027,Mar-27,SUMBAGSEL,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,600000,44,44,0,0,0\r\n
4/30/2027,Apr-27,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,605000,45,45,0,0,0\r\n
5/31/2027,May-27,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,610000,46,46,0,0,0\r\n
6/30/2027,Jun-27,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,615000,47,47,0,0,0\r\n
7/31/2027,Jul-27,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,620000,48,48,0,0,0\r\n
8/31/2027,Aug-27,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,625000,49,49,0,0,0\r\n
9/30/2027,Sep-27,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,630000,50,50,0,0,0\r\n`,
  samples: [
    {
      context: `Orbit Sample Context Description`,
      dashboard: {
        filters: [
          { title: "Date", column: "date" },
          { title: "Month", column: "month" },
          { title: "Region Sales", column: "region_sales" },
          { title: "Package Service", column: "package_service" },
          { title: "Channel Name", column: "channel_name" },
          { title: "Revenue", column: "rev" },
          { title: "Transactions", column: "trx" },
          { title: "Subs", column: "subs" },
          { title: "Revenue CVM", column: "rev_cvm" },
          { title: "Transactions CVM", column: "trx_cvm" },
          { title: "Subs CVM", column: "subs_cvm" },
        ],
        kpis: [
          {
            title: "Total Subs",
            javascriptFunction:
              "data => { let totalSubs = 0; data.forEach(row => { if(row['subs']) { const subs = parseNumber(row['subs']); if(!isNaN(subs)) { totalSubs += subs; } } }); return totalSubs; }",
          },
          {
            title: "Average Subs",
            javascriptFunction:
              "data => { let totalSubs = 0; let count = 0; data.forEach(row => { if(row['subs']) { const subs = parseNumber(row['subs']); if(!isNaN(subs)) { totalSubs += subs; count++; } } }); return totalSubs / count; }",
          },
          {
            title: "Max Subs",
            javascriptFunction:
              "data => { let maxSubs = 0; data.forEach(row => { if(row['subs']) { const subs = parseNumber(row['subs']); if(!isNaN(subs) && subs > maxSubs) { maxSubs = subs; } } }); return maxSubs; }",
          },
          {
            title: "Min Subs",
            javascriptFunction:
              "data => { let minSubs = Infinity; data.forEach(row => { if(row['subs']) { const subs = parseNumber(row['subs']); if(!isNaN(subs) && subs < minSubs) { minSubs = subs; } } }); return minSubs === Infinity ? 0 : minSubs; }",
          },
        ],
        charts: [
          {
            title: "Subs by Region Sales",
            chartType: "barChart",
            javascriptFunction:
              "data => { const regionSales = data.reduce((acc, row) => { if(row['region_sales'] && row['subs']) { const regionSales = row['region_sales']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[regionSales]) { acc[regionSales] += subs; } else { acc[regionSales] = subs; } } } return acc; }, {}); const result = Object.keys(regionSales).map(regionSales => { return { x: regionSales, y: regionSales[regionSales] }; }); return result; }",
          },
          {
            title: "Subs by Package Service",
            chartType: "barChart",
            javascriptFunction:
              "data => { const packageService = data.reduce((acc, row) => { if(row['package_service'] && row['subs']) { const packageService = row['package_service']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[packageService]) { acc[packageService] += subs; } else { acc[packageService] = subs; } } } return acc; }, {}); const result = Object.keys(packageService).map(packageService => { return { x: packageService, y: packageService[packageService] }; }); return result; }",
          },
          {
            title: "Subs by Channel Name",
            chartType: "barChart",
            javascriptFunction:
              "data => { const channelName = data.reduce((acc, row) => { if(row['channel_name'] && row['subs']) { const channelName = row['channel_name']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[channelName]) { acc[channelName] += subs; } else { acc[channelName] = subs; } } } return acc; }, {}); const result = Object.keys(channelName).map(channelName => { return { x: channelName, y: channelName[channelName] }; }); return result; }",
          },
          {
            title: "Subs by Month",
            chartType: "lineChart",
            javascriptFunction:
              "data => { const months = data.reduce((acc, row) => { if(row['month'] && row['subs']) { const month = row['month']; const subs = parseNumber(row['subs']); if(!isNaN(subs)) { if(acc[month]) { acc[month] += subs; } else { acc[month] = subs; } } } return acc; }, {}); const result = Object.keys(months).map(month => { return { x: month, y: months[month] }; }); return result; }",
          },
        ],
      },
    },
  ],
};

const superSeruSample = {
  data: `trx_date,region,area,channel,pack_group,pack_subgroup,pack_category,subs,trx,rev\r
  \n2023-09-06,SUMBAGSEL,Area 1,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,514,514,51400000\r\n
  2023-09-12,SULAWESI,Area 4,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,1068,1069,106898000\r\n
  2023-09-11,JATENG,Area 3,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,20,20,3000000\r\n
2023-09-27,SUMBAGSEL,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 110K,25,25,2750000\r\n
2023-09-22,JABAR,Area 2,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 200K,3,3,600000\r\n
2023-09-19,BALINUSRA,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 510K,1,1,510000\r\n
2023-09-25,PUMA,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 250K,6,6,1500000\r\n
2023-09-06,SULAWESI,Area 4,others,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,7,7,700000\r\n
2023-09-19,WESTERN JABOTABEK,Area 2,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,1,1,160000\r\n
2023-09-07,SULAWESI,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,332,332,49800000\r\n
2023-09-06,SUMBAGTENG,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,1173,1175,117500000\r\n
2023-09-29,SULAWESI,Area 4,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,6,6,900000\r\n
2023-09-12,WESTERN JABOTABEK,Area 2,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,16,16,2400000\r\n
2023-09-28,SULAWESI,Area 4,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,19,19,2850000\r\n
2023-09-30,PUMA,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 110K,9,9,990000\r\n
2023-09-06,CENTRAL JABOTABEK,Area 2,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 500K,2,2,1000000\r\n
2023-09-29,KALIMANTAN,Area 4,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,74,74,7400000\r\n
2023-09-14,BALINUSRA,Area 3,others,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,7,7,700000\r\n
2023-09-27,SUMBAGUT,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 250K,4,4,1000000\r\n
2023-09-18,JATIM,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 260K,1,1,260000\r\n
2023-09-14,JATENG,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 250K,4,4,1000000\r\n
2023-09-13,JATENG,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 300K,1,1,300000\r\n
2023-09-26,BALINUSRA,Area 3,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 250K,1,1,250000\r\n
2023-09-15,SUMBAGUT,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,181,181,27148000\r\n
2023-09-05,JABAR,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,194,196,29400000\r\n
2023-09-08,BALINUSRA,Area 3,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,41,41,6150000\r\n
2023-09-17,WESTERN JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 110K,16,16,1760000\r\n
2023-09-21,JATENG,Area 3,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,10,10,1000000\r\n
2023-09-17,CENTRAL JABOTABEK,Area 2,others,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,5,5,500000\r\n
2023-09-07,EASTERN JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 500K,1,1,500000\r\n
2023-09-16,SULAWESI,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 210K,2,2,420000\r\n
2023-09-18,SULAWESI,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 310K,1,1,310000\r\n
2023-09-16,CENTRAL JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 210K,2,2,420000\r\n
2023-09-30,JATENG,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 500K,1,1,500000\r\n
2023-09-08,SUMBAGUT,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 300K,8,8,2400000\r\n
2023-09-21,SUMBAGUT,Area 1,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 300K,1,1,300000\r\n
2023-09-27,SUMBAGTENG,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,6,6,960000\r\n
2023-09-12,JABAR,Area 2,others,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,4,4,400000\r\n
2023-09-12,SUMBAGSEL,Area 1,others,03. CVM (BTL),03-17. Super Seru,Super Seru 200K,1,1,200000\r\n
2023-09-07,JATENG,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,212,218,32700000\r\n
2023-09-30,PUMA,Area 4,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,30,30,4500000\r\n
2023-09-25,JATIM,Area 3,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 50K,9,9,450000\r\n
2023-09-14,KALIMANTAN,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 260K,3,3,780000\r\n
2023-09-10,JATIM,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 300K,2,2,600000\r\n
2023-09-29,JATENG,Area 3,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,26,26,2600000\r\n
2023-09-21,SUMBAGSEL,Area 1,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 300K,1,1,300000\r\n
2023-09-09,SUMBAGUT,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 500K,2,2,1000000\r\n
2023-09-29,SUMBAGTENG,Area 1,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 310K,1,1,310000\r\n
2023-09-30,SUMBAGUT,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,1016,1018,101800000\r\n
2023-09-14,SULAWESI,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,255,255,38250000\r\n
2023-09-17,SULAWESI,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 200K,56,56,11200000\r\n
2023-09-15,SULAWESI,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 310K,3,3,930000\r\n
2023-09-18,CENTRAL JABOTABEK,Area 2,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 200K,1,1,200000\r\n
2023-09-17,SULAWESI,Area 4,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,3,3,450000\r\n
2023-09-28,JABAR,Area 2,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,387,387,38700000\r\n
2023-09-15,EASTERN JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 300K,4,4,1200000\r\n
2023-09-16,SUMBAGSEL,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,12,12,1920000\r\n
2023-09-17,SUMBAGSEL,Area 1,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,3,3,450000\r\n
2023-09-27,JATIM,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 50K,1479,1480,74000000\r\n
2023-09-10,SUMBAGUT,Area 1,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,623,623,62300000\r\n
2023-09-11,JATENG,Area 3,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,301,301,30100000\r\n
2023-09-24,KALIMANTAN,Area 4,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 300K,3,3,900000\r\n
2023-09-04,WESTERN JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,396,397,39700000\r\n
2023-09-13,SUMBAGSEL,Area 1,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,90,90,9000000\r\n
2023-09-16,SULAWESI,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 200K,64,64,12800000\r\n
2023-09-15,PUMA,Area 4,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,8,8,800000\r\n
2023-09-21,JATENG,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,10,10,1600000\r\n
2023-09-17,KALIMANTAN,Area 4,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,1,1,160000\r\n
2023-09-24,WESTERN JABOTABEK,Area 2,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 110K,1,1,110000\r\n
2023-09-18,EASTERN JABOTABEK,Area 2,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,2,2,300000\r\n
2023-09-13,KALIMANTAN,Area 4,others,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,1,1,150000\r\n
2023-09-28,SULAWESI,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 210K,1,1,210000\r\n
2023-09-14,SUMBAGUT,Area 1,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,134,134,13400000\r\n
2023-09-23,SUMBAGSEL,Area 1,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 300K,1,1,300000\r\n
2023-09-06,WESTERN JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 110K,1,1,110000\r\n
2023-09-21,JABAR,Area 2,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 200K,1,1,200000\r\n
2023-09-22,JATIM,Area 3,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,39,39,5850000\r\n
2023-09-14,PUMA,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,9,9,1440000\r\n
2023-09-19,CENTRAL JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 500K,2,2,1000000\r\n
2023-09-04,SULAWESI,Area 4,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,23,23,3450000\r\n
2023-09-05,WESTERN JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 250K,5,5,1250000\r\n
2023-09-27,EASTERN JABOTABEK,Area 2,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,14,14,1400000\r\n
2023-09-20,BALINUSRA,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,2,2,320000\r\n
2023-09-28,KALIMANTAN,Area 4,others,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,1,1,150000\r\n
2023-09-14,SUMBAGSEL,Area 1,others,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,4,4,400000\r\n
2023-09-24,SUMBAGSEL,Area 1,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 50K,1,1,50000\r\n
2023-09-17,JATIM,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 50K,1448,1448,72400000\r\n
2023-09-18,PUMA,Area 4,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,665,665,66500000\r\n
2023-09-25,SUMBAGUT,Area 1,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,198,199,29850000\r\n
2023-09-29,SUMBAGSEL,Area 1,MKIOS,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,94,94,9400000\r\n
2023-09-28,JATIM,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 500K,2,2,1000000\r\n
2023-09-23,BALINUSRA,Area 3,UMB,03. CVM (BTL),03-17. Super Seru,Super Seru 200K,3,3,600000\r\n
2023-09-16,CENTRAL JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 250K,7,7,1750000\r\n
2023-09-14,SUMBAGSEL,Area 1,URP Modern Channel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,2,2,300000\r\n
2023-09-13,JABAR,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,6,6,960000\r\n
2023-09-27,JATIM,Area 3,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 150K,71,71,10650000\r\n
2023-09-15,JABAR,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 160K,8,8,1280000\r\n
2023-09-10,SUMBAGSEL,Area 1,others,03. CVM (BTL),03-17. Super Seru,Super Seru 100K,4,4,400000\r\n
2023-09-14,CENTRAL JABOTABEK,Area 2,MyTelkomsel,03. CVM (BTL),03-17. Super Seru,Super Seru 500K,3,3,1500000`,
  samples: [
    {
      context: `This sample dataset contains information about Super Seru subscriptions.`,
      dashboard: {
        filters: [
          { title: "Region", column: "region" },
          { title: "Area", column: "area" },
          { title: "Channel", column: "channel" },
          { title: "Pack Group", column: "pack_group" },
        ],
        kpis: [
          {
            title: "Total Subscribers",
            javascriptFunction:
              "data => { let totalSubs = 0; data.forEach(row => { if(row['subs']) { const subs = parseInt(row['subs']); if(!isNaN(subs)) { totalSubs += subs; } } }); return totalSubs; }",
          },
          {
            title: "Total Transactions",
            javascriptFunction:
              "data => { let totalTrx = 0; data.forEach(row => { if(row['trx']) { const trx = parseInt(row['trx']); if(!isNaN(trx)) { totalTrx += trx; } } }); return totalTrx; }",
          },
          {
            title: "Total Revenue",
            javascriptFunction:
              "data => { let totalRev = 0; data.forEach(row => { if(row['rev']) { const rev = parseInt(row['rev']); if(!isNaN(rev)) { totalRev += rev; } } }); return totalRev; }",
          },
          {
            title: "Average Revenue per Transaction",
            javascriptFunction:
              "data => { let totalRev = 0; let totalTrx = 0; data.forEach(row => { if(row['rev'] && row['trx']) { const rev = parseInt(row['rev']); const trx = parseInt(row['trx']); if(!isNaN(rev) && !isNaN(trx)) { totalRev += rev; totalTrx += trx; } } }); return totalTrx !== 0 ? totalRev / totalTrx : 0; }",
          },
        ],
        charts: [
          {
            title: "Total Subscribers by Region",
            chartType: "barChart",
            javascriptFunction:
              "data => { const subsByRegion = data.reduce((acc, row) => { if(row['region'] && row['subs']) { const region = row['region']; const subs = parseInt(row['subs']); if(!isNaN(subs)) { acc[region] = (acc[region] || 0) + subs; } } return acc; }, {}); return Object.keys(subsByRegion).map(region => ({ x: region, y: subsByRegion[region] })); }",
          },
          {
            title: "Total Transactions by Area",
            chartType: "barChart",
            javascriptFunction:
              "data => { const trxByArea = data.reduce((acc, row) => { if(row['area'] && row['trx']) { const area = row['area']; const trx = parseInt(row['trx']); if(!isNaN(trx)) { acc[area] = (acc[area] || 0) + trx; } } return acc; }, {}); return Object.keys(trxByArea).map(area => ({ x: area, y: trxByArea[area] })); }",
          },
          {
            title: "Total Revenue by Channel",
            chartType: "barChart",
            javascriptFunction:
              "data => { const revByChannel = data.reduce((acc, row) => { if(row['channel'] && row['rev']) { const channel = row['channel']; const rev = parseInt(row['rev']); if(!isNaN(rev)) { acc[channel] = (acc[channel] || 0) + rev; } } return acc; }, {}); return Object.keys(revByChannel).map(channel => ({ x: channel, y: revByChannel[channel] })); }",
          },
          {
            title: "Total Revenue by Pack Group",
            chartType: "barChart",
            javascriptFunction:
              "data => { const revByPackGroup = data.reduce((acc, row) => { if(row['pack_group'] && row['rev']) { const packGroup = row['pack_group']; const rev = parseInt(row['rev']); if(!isNaN(rev)) { acc[packGroup] = (acc[packGroup] || 0) + rev; } } return acc; }, {}); return Object.keys(revByPackGroup).map(packGroup => ({ x: packGroup, y: revByPackGroup[packGroup] })); }",
          },
          {
            title: "Top 5 Pack Subgroups by Revenue",
            chartType: "pieChart",
            javascriptFunction: "data => { const revByPackSubgroup = data.reduce((acc, row) => { if(row['pack_subgroup'] && row['rev']) { const packSubgroup = row['pack_subgroup']; const rev = parseInt(row['rev']); if(!isNaN(rev)) { acc[packSubgroup] = (acc[packSubgroup] || 0) + rev; } } return acc; }, {}); const sortedSubgroups = Object.keys(revByPackSubgroup).sort((a, b) => revByPackSubgroup[b] - revByPackSubgroup[a]).slice(0, 5); return sortedSubgroups.map(subgroup => ({ x: subgroup, y: revByPackSubgroup[subgroup] })); }",
          },
          {
            title: "Total Revenue by Pack Category",
            chartType: "lineChart",
            javascriptFunction: "data => { const revByPackCategory = data.reduce((acc, row) => { if(row['pack_category'] && row['rev']) { const packCategory = row['pack_category']; const rev = parseInt(row['rev']); if(!isNaN(rev)) { acc[packCategory] = (acc[packCategory] || 0) + rev; } } return acc; }, {}); return Object.keys(revByPackCategory).map(packCategory => ({ x: packCategory, y: revByPackCategory[packCategory] })); }",
          },
        ],
      },
    },
  ],
};


export const sample = [
  cbSample,
  orbitSample,
  superSeruSample,
];

export function getRandomDataset(currentIndex: number) {
  let randomSampleIndex = currentIndex;
  while (randomSampleIndex === currentIndex) {
    randomSampleIndex = Math.round(Math.random() * (sample.length - 1));
  }

  const dSample = sample[randomSampleIndex];

  const randomDashboardIndex = Math.round(
    Math.random() * (dSample.samples.length - 1)
  );

  return {
    index: randomSampleIndex,
    data: dSample.data,
    dashboard: dSample.samples[randomDashboardIndex].dashboard,
    context: dSample.samples[randomDashboardIndex].context,
  };
}

export function getSpecificDataset(index: number) {
  if (index < 0 || index >= sample.length) {
    throw new Error('Invalid dataset index');
  }

  const selectedSample = sample[index];

  if (!selectedSample || !selectedSample.samples || selectedSample.samples.length === 0) {
    throw new Error('Invalid dataset structure');
  }

  const randomDashboardIndex = Math.round(Math.random() * (selectedSample.samples.length - 1));

  return {
    index,
    data: selectedSample.data,
    dashboard: selectedSample.samples[randomDashboardIndex].dashboard,
    context: selectedSample.samples[randomDashboardIndex].context,
  };
}

