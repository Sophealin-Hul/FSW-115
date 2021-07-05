var button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
    axios.get("http://api.bryanuniversity.edu/sophealin/list/")
        .then(response => {
            for(let i = 0; i < response.data.length; i++) {
                const list = document.createElement("li");
                list.textContent = response.data[i].description;
                document.body.appendChild(list);
            };
        })
        .catch(error => console.log(error));
});