//תרגיל 1
function filterAndSortEvenNumbers(numbers)
{
    const newArr = numbers.filter( (n) => n%2 == 0 )
    newArr.sort((a, b) => a - b)
    return newArr
}