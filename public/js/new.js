const newFormHandler = async function(event) {
  event.preventDefault();

  const postTitle = document.querySelector('#post-title').value;
  const postContent = document.querySelector('#post-content').value;
  
  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
