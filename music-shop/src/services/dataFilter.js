// dataFilter.js

export default function dataFilter(data, search)
{
    return search.length === null ? data : data.filter(dataItem => dataItem.name.toLowerCase().includes(search.toLowerCase()));
}