// dataFetcher.js

function createData(data, imagesArray, namesArray, pricesArray, oldPricesArray, badgesArray)
{
    for(let i = 0; i < 8; ++i)
    {
        data[i] = {
            id: i,
            image: imagesArray[i], 
            name: namesArray[i], 
            price: pricesArray[i],
            oldPrice: oldPricesArray[i],
            badge: badgesArray[i] 
        };
    }
    return data;
}

// const resizeFile = (file) =>
//   new Promise((resolve) => {
//     Resizer.imageFileResizer(
//       file,
//       450,
//       300,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         resolve(uri);
//       },
//       "base64",
//       450,
//       300
//     );
//   });

// should be async if we resize images (we wait for a promise)
function images(imagesArray)
{
    for (let i = 0; i < 8; ++i)
    {
        imagesArray[i] = process.env.PUBLIC_URL + '/assets/item' + i + '.png';
        // imagesArray[i] = await resizeFile(imagesArray[i]);
    }
    return imagesArray;
}

export default function dataFetcher()
{
    let imagesArray = []

    // normally arrays are fetched from db
    let namesArray = ["Slayer", "Megadeth", "Anthrax", "Metallica", "Death", "Napalm Death", "Jinjer", "Truda"];

    let pricesArray = [40.00, 18.00, 25.00, 40.00, 25.00, 120.00, 18.00, 40.00];

    let oldPricesArray = [0, 20.00, 50.00, 0, 50.00, 0, 0, 0];

    let badgesArray = [0, 1, 1, 0, 1, 0, 1, 0];

    let data = [];

    imagesArray = images(imagesArray);

    data = createData(data, imagesArray, namesArray, pricesArray, oldPricesArray, badgesArray);

    console.log(data);

    return data;
}