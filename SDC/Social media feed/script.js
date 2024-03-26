document.addEventListener('DOMContentLoaded', function () {
    const postButton = document.getElementById('post-button');
    const feed = document.getElementById('feed');

    postButton.addEventListener('click', function () {
        const postText = document.getElementById('post-text').value.trim();
        if (postText !== '') {
            createPost(postText);
            document.getElementById('post-text').value = '';
        } else {
            alert('Please enter something to post.');
        }
    });

    function createPost(text) {
        const post = document.createElement('div');
        post.classList.add('post');

        const postContent = document.createElement('div');
        postContent.classList.add('post-content');
        postContent.textContent = text;

        const postActions = document.createElement('div');
        postActions.classList.add('post-actions');

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.addEventListener('click', function () {
            likePost(post);
        });

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.addEventListener('click', function () {
            commentPost(post);
        });

        const shareButton = document.createElement('button');
        shareButton.textContent = 'Share';
        shareButton.addEventListener('click', function () {
            sharePost(post);
        });

        postActions.appendChild(likeButton);
        postActions.appendChild(commentButton);
        postActions.appendChild(shareButton);

        post.appendChild(postContent);
        post.appendChild(postActions);

        feed.appendChild(post);
    }

    function likePost(post) {
        post.querySelector('.post-actions button:nth-child(1)').textContent = 'Liked';
        post.querySelector('.post-actions button:nth-child(1)').setAttribute('disabled', 'disabled');
    }

    function commentPost(post) {
        const comment = prompt('Enter your comment:');
        if (comment !== null && comment.trim() !== '') {
            alert('Comment submitted: ' + comment);
        }
    }

    function sharePost(post) {
        const sharedText = post.querySelector('.post-content').textContent;
        const shareConfirmation = confirm('Share this post:\n\n' + sharedText);
        if (shareConfirmation) {
            alert('Post shared!');
        }
    }
});
