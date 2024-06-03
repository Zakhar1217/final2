async function fetchPostDetails(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    document.getElementById("post-info").innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
}

async function fetchComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await response.json();
    const commentsList = document.getElementById("comments-list");
    comments.forEach(comment => {
        commentsList.innerHTML += `<p><strong>${comment.name}</strong>: ${comment.body}</p>`;
    });
}

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    ;
};
