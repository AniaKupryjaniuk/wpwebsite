fetch("http://kuprdesign.com/t8/wp-json/wp/v2/posts")
    .then(res => res.json())
    .then(handleData)

function handleData(posts) {
    posts.forEach(showPost)
}

function showPost(post) {
    console.log(post)
    const template =
        document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = post.title.rendered;
    copy.querySelector(".body").innerHTML = post.content.rendered;

    document.querySelector("main").appendChild(copy);

}
