import _ from 'lodash'


// function to get paginated data
export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value() 
    
}

export function getPaginatedData(array, argument, sortType, sortByDate){
    switch(argument){
        // sorting templates list based on order of descending or ascending
        case "sortedByOrder":
            return array.sort((a, b) => {
                const isReversed = sortType === "Ascending" ? 1 : -1;
                return isReversed * a.name.localeCompare(b.name);
              });
               // sorting templates list based on order of date in asc or desc
        case "sortedByDate":
            return array.sort((a, b) => {
                const isReversed = sortByDate === "Ascending" ? 1 : -1;
                return isReversed * a.created.localeCompare(b.created);
              });
              default:
                  return array
    }
}

