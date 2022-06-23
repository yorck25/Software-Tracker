let postObj = {
    id: 1,
    title: "Test title",
    body: "test body"
}

let post = JSON.stringify(postObj)
const url = "http://127.0.0.1:5500/Software%20tracker/mainpage.html"
let xhr = new XMLHttpRequest()

xhr.open('POST', url, true)
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.send(post);

xhr.onload = function() {
    if(xhr.status == 201) {
        console.log("Post successfully created")
    }
}