//תרגיל 1
function filterAndSortEvenNumbers(numbers)
{
    const newArr = numbers.filter( (n) => n%2 == 0 )
    newArr.sort((a, b) => a - b)
    return newArr
}

//תרגיל 2
function removeDuplicates(numbers)
{
    const newArr = []
    for (const n of numbers)
    {
        if(newArr.includes(n) == false)
        {
            newArr.push(n)
        }
    }
    return newArr
}
