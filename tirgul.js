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

//תרגיל 3
function capitalizeFirstLetter(text)
{
    const newText = text.split(" ")
    for (let i = 0; i < newText.length; i++) {
        let w = newText[i];
        if (w[w.length - 1] != ".") 
        { 
            newText[i] = w[0].toUpperCase() + w.slice(1); 
        }
    }
    return newText.join(" "); 
}

//תרגיל 4
const tasks = [
    {
        id: "1",
        task: "todo 1"
    },
    {
        id: "2",
        task: "todo 2"
    },
    {
        id: "3",
        task: "todo 3"
    }
]

function loadTasks()
{
    const data = localStorage.getItem("missions") || "[]"
    return JSON.parse(data)
}

function saveTasks(arr)
{
    localStorage.setItem("missions", JSON.stringify(arr))
}

function addTask(task)
{
    let dataArr = loadTasks()
    dataArr.push(task)
    saveTasks(dataArr)
}

function removeTask(id)
{
    let dataArr = loadTasks();
    dataArr = dataArr.filter(task => task.id != id)
    saveTasks(dataArr)
}



