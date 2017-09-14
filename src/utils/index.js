import Shoe from '../components/Shoe';
/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */

export function countByKey (arr, key) {
    let result = [];
    
    for (var i = 0; i < arr.length; i++) {
        var currentItem = arr[i];

        var found = result.some(function (el) {
            return currentItem[key] === el[key];
        });
        //If not found create a new group with the count of 1
        if (!found) {
            var newItem = {
                [key] : currentItem[key],
                count : 1
            };
            result.push(newItem);
        } else { //If found search again and edit :(
            for (var j = 0; j < result.length; j++) {
                var currentResultItem = result[j];
                if (currentResultItem[key] === currentItem[key]) {
                    result[j].count = result[j].count + 1;
                }
            }
        }
    }

    return result;
}