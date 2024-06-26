// This function returns new Promise that calls to api to get data about post with setted postId
function fetchPost(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Response was not Ok!');
        }
        return response.json();
      })
      .then(post => resolve(post))
      .catch(error => reject(error));
  });
};

// This function returns new Promise that calls to api to get comments with setted postId
function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Response was not Ok!');
        }
        return response.json();
      })
      .then(comments => resolve(comments))
      .catch(error => reject(error));
  });
};

// SearchPost() calls fetchPost() and if true it displays post info and creates button
function searchPost() {
  const postId = document.getElementById('postId').value;
  const postInfoDiv = document.getElementById('postInfo');

  // Clearing post container
  postInfoDiv.innerHTML = '';

  // Input ID validation
  if (postId < 1 || postId > 100) {
    postInfoDiv.innerHTML = 'Please enter a valid ID between 1 and 100';
    return;
  }

  // Fetch post data
  fetchPost(postId)
  .then(post => {
    // Display post info
    const postBlock = document.createElement('div');
    postBlock.innerHTML = `
      <h4>Post ${post.id}</h3>
      <p>Title: ${post.title}</p>
      <p>Description: ${post.body}</p>
      <button onclick='fetchAndDisplayComments(${post.id})'>Load Comments</button>
    `;
    postInfoDiv.appendChild(postBlock);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    postInfoDiv.innerHTML = '<p>Error fetching post.';
  });
};

// Get comments data
function fetchAndDisplayComments(postId) {
  const postInfoDiv = document.getElementById('postInfo');

  // Fetch comments for the setted post ID
  fetchComments(postId)
    .then(comments => {
      const commentsList = document.createElement('ul');
      comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `${comment.name}: ${comment.body}`;
        commentsList.appendChild(commentItem);
      });
      postInfoDiv.appendChild(commentsList);
    })
    .catch(error => {
      console.log('Error fetching comments:', error);
      postInfoDiv.innerHTML += '<p>Error fetching comments.</p>';
    })
}


