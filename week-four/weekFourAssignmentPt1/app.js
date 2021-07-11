axios.get("http://api.bryanuniversity.edu/sophealin/list/")
    .then(response => {
        for(let i = 0; i < response.data.length; i++) {
            const list = document.createElement("li");
            list.textContent = response.data[i].name;
            document.body.appendChild(list);
            if(response.data[i].isComplete === true) {
                list.style.textDecoration = "line-through";
            }
            else if (response.data[i].isComplete === false) {
                list.textContent = response.data[i].name;
            }
        }
    })
    .catch(error => console.log(error));