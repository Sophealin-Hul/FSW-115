const bUApi = "http://api.bryanuniversity.edu/sophealin/list/";
axios.get(bUApi)
    .then(response => {
        for(let i = 0; i < response.data.length; i++) {
            const list = document.createElement("li");
            list.textContent = "Name: " + response.data[i].name;
            document.body.appendChild(list);
            if(response.data[i].isComplete === true) {
                list.style.textDecoration = "line-through";
            }
            else if (response.data[i].isComplete === false) {
                list.textContent = response.data[i].name;
            }
            const descrip = document.createElement("li");
            descrip.textContent = "Description: " + response.data[i].description;
            document.body.appendChild(descrip);

            const todoPrice = document.createElement("li");
            todoPrice.textContent = "Price: " + response.data[i].price;
            document.body.appendChild(todoPrice);
        }
    })
    .catch(error => console.log(error));

const myList = document.mylist;

myList.addEventListener("submit", e => {
    e.preventDefault();

    const newList = {
        name: myList.name.value,
        description: myList.description.value,
        price: myList.price.value
    };

    axios.post(bUApi, newList)
        .then(res => console.log(res))
        .catch(err => console.log(err))
});

// const checkList = document.mylist;
// checkList.addEventListener("click", e => {
//     e.preventDefault();
//     const checkList {
        
//     }
const checkedList = document.mylist;
checkedList.addEventListener("click", e => {
    e.preventDefault();
``

    axios.put(bUApi )
    .then(res => console.log(res))
    .catch(err => console.log(err))

})

