
fetch('https://api.nytimes.com/svc/books/v3/lists/current/Science.json?api-key=7lX2YsoTsQMZaG1d795AdbbEOCBqi316')

  .then((response) => {

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {

    display(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));



function display(data) {
   
    for ( i=0;i<10;i++){
   // declaring elements of book

    var img= document.createElement("img");
    img.src = `${data.results.books[i].book_image}`;

    var rank = document.createElement("rank");   
    rank.innerHTML=`RANK : ${data.results.books[i].rank}`

    var name = document.createElement("name");   
    name.innerHTML=`${data.results.books[i].title}`

    var author = document.createElement("author");   
    author.innerHTML=`AUTHOR : ${data.results.books[i].author}`

    
    var publisher = document.createElement("publisher");   
    publisher.innerHTML=`PUBLISHER : ${data.results.books[i].publisher}`

    var amazon = document.createElement('a');
    var link = data.results.books[i].amazon_product_url;
    amazon.setAttribute("href", link);
    amazon.innerHTML = "Buy From Amazon";


    // adding elements to book card

    document.getElementById('book-card').appendChild(amazon)
    document.getElementById('book-card').appendChild(publisher)
    document.getElementById('book-card').appendChild(author)
    document.getElementById('book-card').appendChild(name)
    document.getElementById('book-card').appendChild(rank) 
    document.getElementById('book-card').appendChild(img) 
    
    
    
    
    

    }
    
}