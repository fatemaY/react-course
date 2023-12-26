const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=199e903f';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // console.log("YESS")
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });