// idFetcher.js

export default function idFetcher(path, value)
{
    const splittedPath = path.split('/');
    let i = 0;
    if(value === "id")
    {
        // get to the last value to get the id
        while(splittedPath[i + 1])
        {
            ++i;
        }
        return parseInt(splittedPath[i]);
    }
    return null;
}