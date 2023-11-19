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
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit 5G New Sales,Web Self Srvc - Home LTE,131000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit Bonus,Mobile Apps - Home LTE,30300000,825,737,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit Bonus,Web Self Srvc - Home LTE,8120000,817,658,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,Ext Modern - FINNET,131000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,Ext Modern - KISEL,66000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,GraPARI - DSC,15421000,136,117,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,Mobile Apps - DigiPos,58401500,595,439,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,Mobile Apps - Home LTE,27740000,305,229,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,Mobile Apps - MyTelkomsel App,12185000,128,94,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,UMB - USSD (ADN: 363),126000,6,3,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,Virtual Assistant - Line,5821000,51,46,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,Web Portal - my.telkomsel.com,309000,4,3,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit New Sales,Web Self Srvc - Home LTE,331726000,3458,2244,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Acquisition - Orbit Postpaid New Sales,GraPARI - DSC,66000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Bundling - Orbit Bundling,Mobile Apps - Home LTE,20000,2,2,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Lapser Prevention,Mobile Apps - DigiPos,8336500,69,57,8336500,69,57\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Lapser Prevention,Mobile Apps - Home LTE,2935000,21,20,2935000,21,20\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Lapser Prevention,Mobile Apps - MyTelkomsel App,9490000,80,70,9490000,80,70\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Lapser Prevention,Web Self Srvc - Home LTE,23710000,189,150,23710000,189,150\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Low Denom,Mobile Apps - Home LTE,245000,23,18,245000,23,18\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Low Denom,Web Self Srvc - Home LTE,275000,28,22,275000,28,22\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Stimulation,Mobile Apps - DigiPos,1915000,15,15,1915000,15,15\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Stimulation,Mobile Apps - Home LTE,15830000,101,91,15830000,101,91\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Stimulation,Mobile Apps - MyTelkomsel App,700000,4,4,700000,4,4\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Stimulation,Web Self Srvc - Home LTE,252885000,1741,1500,252885000,1741,1500\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Uplift,Ext Modern - FINNET,105000,1,1,105000,1,1\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Uplift,GraPARI - DSC,760000,8,8,760000,8,8\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Uplift,Mobile Apps - DigiPos,51784500,365,321,51784500,365,321\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Uplift,Mobile Apps - Home LTE,38725000,271,251,38725000,271,251\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Uplift,Mobile Apps - MyTelkomsel App,14655000,112,98,14655000,112,98\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Uplift,Virtual Assistant - Line,95000,1,1,95000,1,1\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Uplift,Web Portal - my.telkomsel.com,260000,2,2,260000,2,2\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Uplift,Web Self Srvc - Home LTE,13330000,89,84,13330000,89,84\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Winback,GraPARI - DSC,50000,2,2,50000,2,2\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Winback,Mobile Apps - DigiPos,688000,10,10,688000,10,10\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Winback,Mobile Apps - Home LTE,22175000,331,270,22175000,331,270\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Winback,Mobile Apps - MyTelkomsel App,8880000,165,95,8880000,165,95\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Winback,Web Portal - my.telkomsel.com,65000,2,1,65000,2,1\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit CVM Winback,Web Self Srvc - Home LTE,85815000,1488,900,85815000,1488,900\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit Low Denom,Mobile Apps - Home LTE,324000,16,7,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit Low Denom,Mobile Apps - MyTelkomsel App,15000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit Low Denom,Web Self Srvc - Home LTE,2484000,240,124,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit Special Offer Home Mobility,Mobile Apps - Home LTE,891000,11,11,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit Special Offer Home Mobility,Web Self Srvc - Home LTE,12069000,149,124,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home CVM - Orbit Winback,Web Self Srvc - Home LTE,4798000,48,37,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Home Orbit 5G,Web Self Srvc - Home LTE,2413000,7,5,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit 5G Regular,GraPARI - DSC,505000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit 5G Regular,Mobile Apps - Home LTE,393000,3,2,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit 5G Regular,Mobile Apps - MyTelkomsel App,262000,2,2,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Postpaid Regular,GraPARI - DSC,716000,4,4,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Postpaid Regular,Mobile Apps - Home LTE,1493000,13,3,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Postpaid Regular,Web Self Srvc - Home LTE,62000,2,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Ext Modern - FINARYA LinkAja,81000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Ext Modern - FINNET,1226000,10,6,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Ext Modern - KISEL,1376000,11,11,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,GraPARI - DSC,47845000,322,252,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Mobile Apps - DigiPos,387554000,3032,1970,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Mobile Apps - Home LTE,377830000,2895,2040,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Mobile Apps - MyTelkomsel App,158585000,1279,720,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,UMB - USSD (ADN: 363),9648000,82,50,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Virtual Assistant - Line,10305000,73,69,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Web Portal - my.telkomsel.com,1000000,10,9,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Core - Orbit Regular,Web Self Srvc - Home LTE,1940087000,15180,9194,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home OTT,,154000,2,2,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home OTT,Mobile Apps - Home LTE,254000,6,6,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home OTT,Web Self Srvc - Home LTE,3605000,78,68,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Internet Malam,Mobile Apps - Home LTE,950000,62,54,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Internet Malam,Web Self Srvc - Home LTE,5261000,333,267,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Surprise Deals,GraPARI - DSC,871000,6,6,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Surprise Deals,Mobile Apps - DigiPos,1285000,8,8,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Surprise Deals,Mobile Apps - Home LTE,1154000,8,8,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Surprise Deals,Mobile Apps - MyTelkomsel App,424000,4,4,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Surprise Deals,Virtual Assistant - Line,212000,2,2,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Surprise Deals,Web Portal - my.telkomsel.com,252000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Home Seasonal - Orbit Surprise Deals,Web Self Srvc - Home LTE,31312000,206,206,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Bundling - Orbit Mifi Bundling Package,Mobile Apps - Home LTE,3750000,75,75,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Bundling - Orbit Mifi Bundling Package,Web Self Srvc - Home LTE,1550000,31,31,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Core - Orbit Mifi,Ext Modern - KISEL,100000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Core - Orbit Mifi,GraPARI - DSC,2650000,16,16,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Core - Orbit Mifi,Mobile Apps - DigiPos,6249000,53,39,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Core - Orbit Mifi,Mobile Apps - Home LTE,8925000,89,55,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Core - Orbit Mifi,Mobile Apps - MyTelkomsel App,8930000,82,61,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Core - Orbit Mifi,Virtual Assistant - Line,1400000,5,4,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Core - Orbit Mifi,Web Portal - my.telkomsel.com,100000,2,2,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Mifi Core - Orbit Mifi,Web Self Srvc - Home LTE,65605000,576,342,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Orbit - Kuota Keluarga,Mobile Apps - Home LTE,120000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Orbit - Kuota Keluarga,Mobile Apps - MyTelkomsel App,140000,1,1,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Orbit Indihome,Mobile Apps - Home LTE,0,2,2,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Orbit Indihome First,Web Portal - FMC Web,560000,2,2,0,0,0\r\n
10/31/2023,Oct-23,BALINUSRA,Orbit Indihome First,Web Self Srvc - Home LTE,305000,2,2,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit 5G New Sales,Mobile Apps - Home LTE,1029000,5,5,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit 5G New Sales,Web Self Srvc - Home LTE,3368000,20,16,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit Bonus,Mobile Apps - Home LTE,49606000,1151,1092,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit Bonus,Web Self Srvc - Home LTE,6344000,866,742,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Ext Modern - FINNET,590000,5,4,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Ext Modern - KISEL,1414000,14,12,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Ext Modern - NARINDO,524000,4,2,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Ext Modern - PMB,212000,2,2,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,GraPARI - DSC,2811000,31,30,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Mobile Apps - DigiPos,6281000,68,58,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Mobile Apps - Home LTE,49866000,531,425,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Mobile Apps - MyTelkomsel App,28393000,287,216,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,UMB - USSD (ADN: 363),756000,7,6,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Virtual Assistant - Line,81000,1,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Web Portal - my.telkomsel.com,329000,4,3,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Acquisition - Orbit New Sales,Web Self Srvc - Home LTE,490931000,5221,3663,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Bundling - Orbit Bundling,Mobile Apps - Home LTE,50000,5,5,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Bundling - Orbit Bundling,Web Self Srvc - Home LTE,20000,2,2,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Lapser Prevention,GraPARI - DSC,100000,1,1,100000,1,1\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Lapser Prevention,Mobile Apps - DigiPos,787000,7,7,787000,7,7\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Lapser Prevention,Mobile Apps - Home LTE,5335000,43,42,5335000,43,42\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Lapser Prevention,Mobile Apps - MyTelkomsel App,26160000,195,174,26160000,195,174\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Lapser Prevention,Web Self Srvc - Home LTE,31210000,255,238,31210000,255,238\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Low Denom,Mobile Apps - Home LTE,558000,50,36,558000,50,36\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Low Denom,Web Self Srvc - Home LTE,45000,7,5,45000,7,5\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Stimulation,Mobile Apps - DigiPos,525000,4,4,525000,4,4\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Stimulation,Mobile Apps - Home LTE,35745000,239,219,35745000,239,219\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Stimulation,Mobile Apps - MyTelkomsel App,1625000,13,13,1625000,13,13\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Stimulation,Web Self Srvc - Home LTE,456065000,3200,2908,456065000,3200,2908\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Uplift,Ext Modern - KISEL,1530000,10,9,1530000,10,9\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Uplift,Ext Modern - PMB,75000,1,1,75000,1,1\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Uplift,GraPARI - DSC,95000,1,1,95000,1,1\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Uplift,Mobile Apps - DigiPos,3415500,28,26,3415500,28,26\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Uplift,Mobile Apps - Home LTE,48245000,343,321,48245000,343,321\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Uplift,Mobile Apps - MyTelkomsel App,27655000,223,208,27655000,223,208\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Uplift,Web Portal - my.telkomsel.com,70000,1,1,70000,1,1\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Uplift,Web Self Srvc - Home LTE,7745000,56,54,7745000,56,54\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Winback,Ext Modern - KISEL,230000,4,4,230000,4,4\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Winback,Ext Modern - PMB,65000,1,1,65000,1,1\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Winback,GraPARI - DSC,100000,4,4,100000,4,4\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Winback,Mobile Apps - DigiPos,80000,1,1,80000,1,1\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Winback,Mobile Apps - Home LTE,25430000,395,314,25430000,395,314\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Winback,Mobile Apps - MyTelkomsel App,9740000,187,131,9740000,187,131\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Winback,Web Portal - my.telkomsel.com,205000,3,2,205000,3,2\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit CVM Winback,Web Self Srvc - Home LTE,102735000,1927,1280,102735000,1927,1280\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit Low Denom,Mobile Apps - Home LTE,279000,25,18,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit Low Denom,Mobile Apps - MyTelkomsel App,20000,1,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit Low Denom,Web Self Srvc - Home LTE,3965000,374,190,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit Special Offer Home Mobility,Mobile Apps - Home LTE,957000,12,12,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit Special Offer Home Mobility,Web Self Srvc - Home LTE,24462000,302,242,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home CVM - Orbit Winback,Web Self Srvc - Home LTE,13561000,141,113,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Home Orbit 5G,Mobile Apps - Home LTE,5576000,34,26,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Home Orbit 5G,Mobile Apps - MyTelkomsel App,131000,1,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Home Orbit 5G,Web Self Srvc - Home LTE,24314000,114,80,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit 5G Regular,Mobile Apps - Home LTE,898000,4,4,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit 5G Regular,Mobile Apps - MyTelkomsel App,3106000,18,15,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit 5G Regular,Web Self Srvc - Home LTE,1422000,8,6,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit B2B Regular,Surrounding - B2B Platform,8687000,52,4,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Postpaid Regular,GraPARI - DSC,405000,5,5,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Postpaid Regular,Mobile Apps - Home LTE,1978000,17,12,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Postpaid Regular,Web Self Srvc - Home LTE,369000,4,3,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Ext Modern - FINARYA LinkAja,162000,2,2,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Ext Modern - FINNET,131000,1,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Ext Modern - KISEL,9520000,56,48,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Ext Modern - NARINDO,293000,3,3,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Ext Modern - PMB,1033000,7,7,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Ext Modern - PT.BAD,176000,1,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Ext Modern - RISE,131000,1,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,GraPARI - DSC,3181000,29,28,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Mobile Apps - DigiPos,42718500,359,271,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Mobile Apps - Home LTE,648012000,4996,3819,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Mobile Apps - MyTelkomsel App,331172000,2472,1719,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,UMB - USSD (ADN: 363),21859000,150,93,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,UMB - USSD (ADN: 888),162000,2,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Virtual Assistant - Line,614000,3,2,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Web Portal - my.telkomsel.com,536000,6,5,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Web Portal - telkomsel.com,81000,1,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Core - Orbit Regular,Web Self Srvc - Home LTE,3179805000,24531,17241,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home OTT,,599500,7,7,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home OTT,Mobile Apps - Home LTE,885000,23,21,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home OTT,Web Self Srvc - Home LTE,9172500,197,174,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home OTT - Home Orbit Zoom,Mobile Apps - Home LTE,190000,7,4,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home OTT - Home Orbit Zoom,Web Self Srvc - Home LTE,1220000,23,18,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Seasonal - Orbit Internet Malam,Mobile Apps - Home LTE,1505000,87,68,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Seasonal - Orbit Internet Malam,Web Self Srvc - Home LTE,7331000,464,369,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Seasonal - Orbit Surprise Deals,Ext Modern - FINNET,212000,2,2,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Seasonal - Orbit Surprise Deals,Mobile Apps - DigiPos,176000,1,1,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Seasonal - Orbit Surprise Deals,Mobile Apps - Home LTE,4369000,28,28,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Seasonal - Orbit Surprise Deals,Mobile Apps - MyTelkomsel App,3015000,21,21,0,0,0\r\n
10/31/2023,Oct-23,CENTRAL JABOTABEK,Home Seasonal - Orbit Surprise Deals,Web Portal - my.telkomsel.com,176000,1,1,0,0,0`,
  samples: [
    {
      context: `Orbit Sample Context Description`,
      dashboard: {
      filters: [
          { title: "Date", column: "date" },
          { title: "Month", column: "month" },
          { title: "Region Sales", column: "region_sales" },
          { title: "Package Service", column: "package_service" },
        ],
        kpis: [
           {
            title: "Total Revenue",
            javascriptFunction: `data => {
              return data.reduce((total, row) => total + parseNumber(row["rev"]), 0);
            }`,
          },
          {
            title: "Total Transactions",
            javascriptFunction: `data => {
              return data.reduce((total, row) => total + parseNumber(row["trx"]), 0);
            }`,
          },
          {
            title: "Total Subscriptions",
            javascriptFunction: `data => {
              return data.reduce((total, row) => total + parseNumber(row["subs"]), 0);
            }`,
          },
          {
            title: "Total Revenue CVM",
            javascriptFunction: `data => {
              return data.reduce((total, row) => total + parseNumber(row["rev_cvm"]), 0);
            }`,
          },
        ],
        charts: [
           {
            title: "Revenue by Region Sales",
            chartType: "barChart",
            javascriptFunction: `data => {
              const groupedData = data.reduce((result, row) => {
                const regionSales = row["region_sales"];
                const revenue = parseNumber(row["rev"]);
                if (regionSales && !isNaN(revenue)) {
                  if (!result[regionSales]) {
                    result[regionSales] = 0;
                  }
                  result[regionSales] += revenue;
                }
                return result;
              }, {});
              const sortedData = Object.entries(groupedData).sort((a, b) => b[1] - a[1]);
              return sortedData.slice(0, 10).map(([regionSales, revenue]) => ({ x: regionSales, y: revenue }));
            }`,
          },
          {
            title: "Transactions by Channel Name",
            chartType: "barChart",
            javascriptFunction: `data => {
              const groupedData = data.reduce((result, row) => {
                const channelName = row["channel_name"];
                const transactions = parseNumber(row["trx"]);
                if (channelName && !isNaN(transactions)) {
                  if (!result[channelName]) {
                    result[channelName] = 0;
                  }
                  result[channelName] += transactions;
                }
                return result;
              }, {});
              const sortedData = Object.entries(groupedData).sort((a, b) => b[1] - a[1]);
              return sortedData.slice(0, 10).map(([channelName, transactions]) => ({ x: channelName, y: transactions }));
            }`,
          },
          {
            title: "Subscriptions by Package Service",
            chartType: "barChart",
            javascriptFunction: `data => {
              const groupedData = data.reduce((result, row) => {
                const packageService = row["package_service"];
                const subscriptions = parseNumber(row["subs"]);
                if (packageService && !isNaN(subscriptions)) {
                  if (!result[packageService]) {
                    result[packageService] = 0;
                  }
                  result[packageService] += subscriptions;
                }
                return result;
              }, {});
              const sortedData = Object.entries(groupedData).sort((a, b) => b[1] - a[1]);
              return sortedData.slice(0, 10).map(([packageService, subscriptions]) => ({ x: packageService, y: subscriptions }));
            }`,
          },
          {
            title: "Revenue by Region",
            chartType: "lineChart",
            javascriptFunction: `data => {
              const groupedData = data.reduce((result, row) => {
                const regionSales = row["region_sales"];
                const revenue = parseNumber(row["rev"]);
                if (regionSales && !isNaN(revenue)) {
                  if (!result[regionSales]) {
                    result[regionSales] = 0;
                  }
                  result[regionSales] += revenue;
                }
                return result;
              }, {});
              return Object.entries(groupedData).map(([regionSales, revenue]) => ({ x: regionSales, y: revenue }));
            }`,
          },
          {
            title: "Revenue by Region Sales (Pie Chart)",
            chartType: "pieChart",
            javascriptFunction: `data => {
              const groupedData = data.reduce((result, row) => {
                const regionSales = row["region_sales"];
                const revenue = parseNumber(row["rev"]);
                if (regionSales && !isNaN(revenue)) {
                  if (!result[regionSales]) {
                    result[regionSales] = 0;
                  }
                  result[regionSales] += revenue;
                }
                return result;
              }, {});
              const sortedData = Object.entries(groupedData).sort((a, b) => b[1] - a[1]);
              return sortedData.slice(0, 5).map(([regionSales, revenue]) => ({ x: regionSales, y: revenue }));
            }`,
          },
          {
            title: "Revenue by Package Service",
            chartType: "lineChart",
            javascriptFunction: `data => {
              const groupedData = data.reduce((result, row) => {
                const packageService = row["package_service"];
                const revenue = parseNumber(row["rev"]);
                if (packageService && !isNaN(revenue)) {
                  if (!result[packageService]) {
                    result[packageService] = 0;
                  }
                  result[packageService] += revenue;
                }
                return result;
              }, {});
              const sortedData = Object.entries(groupedData).sort((a, b) => b[1] - a[1]);
              return sortedData.slice(0, 10).map(([packageService, revenue]) => ({ x: packageService, y: revenue }));
            }`,
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

