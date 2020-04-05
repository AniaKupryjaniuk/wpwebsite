fetch("http://kuprdesign.com/t8/wp-json/wp/v2/item")
    .then(res => res.json())
    .then(handleData)

function handleData(items) {
    items.forEach(showItem)
}

function showItem(item) {
    console.log(item)
    const template =
        document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = item.title.rendered;
    copy.querySelector("img").src = item.image.guid;
    copy.querySelector(".price span").textContent = item.price;

    document.querySelector("main").appendChild(copy);

}
