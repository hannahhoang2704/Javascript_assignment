'use strict';

let keyword = document.getElementById('query');
const button = document.querySelector('input[type=submit]');
const section = document.getElementById('result');

function fetch_data(jsonData){
  for (let i = 0; i <jsonData.length; i++){

              //console.log(jsonData[i].name);
              const smallDiv = document.createElement('article');         //create an article for every movie
              section.appendChild(smallDiv);
              let idOfArticle = `article-${i+1}`;
              smallDiv.setAttribute('id', `article-${i+1}`);

              const p = document.createElement('h3');                     //make movies' title
              const name = document.createTextNode(`${jsonData[i].name}`);
              p.appendChild(name);
              smallDiv.appendChild(p);

              const a = document.createElement('a');                      //create a link
              a.href = jsonData[i].url;
              a.setAttribute('target', '_blank');
              smallDiv.appendChild(a);
              a.appendChild(p);

              /*const dialog = document.createElement('dialog');            //create dialog for modal
              smallDiv.appendChild(dialog);
              const span = document.createElement('span');
              span.appendChild(document.createTextNode('&#x2715;'));
              dialog.appendChild(span);
              const iframe = document.createElement('iframe');            //create iframe in dialog
              dialog.appendChild(iframe);
              iframe.src = 'https://www.google.com';*/


              const img = document.createElement('img');                  //create image for the movie
              img.setAttribute('id', `img-${i+1}`)
              img.src = `${jsonData[i].img}`;
              if (jsonData[i].img ===""){                                         //if movie doesn't have image, put default image
                img.src = 'https://via.placeholder.com/100x200?text=text+here';
              }
              img.alt = jsonData[i].name;
              smallDiv.appendChild(img)


              const genres = document.createElement('p');             //add genres for movie
              genres.setAttribute('class', 'genres')
              let genresList = jsonData[i]['genres'];                         //Fetch genres of the movies
              let text = genresList.toString();
              const newText = text.replace(/,/g, ' | ');    //change ',' to '|'
              //console.log(newText);
              genres.appendChild(document.createTextNode(newText))
              smallDiv.appendChild(genres);

              if (jsonData[i].summary == null){                                 //add summary for the movie
                smallDiv.innerHTML += `<br>${jsonData[i].name}`;
              }else {
                smallDiv.innerHTML += `${jsonData[i].summary}`;
              }

            //add iframe and modal
    }

}


function modal(evt){
  evt.preventDefault();
  for (let i = 0; i <jsonData.length; i++){
    let idOfImg = `img-${i+1}`;
    const callImg = document.getElementById(idOfImg);
    const dialog = document.querySelector('dialog');
    const span = document.querySelector('span');
    const iframe = document.querySelector('iframe');
    callImg.addEventListener('click', ()=>{
      iframe.src = `${jsonData[i].url}`;
      dialog.showModal();

    })

    span.addEventListener('click', ()=>{
      dialog.close();
    })
  }
}
const img = document.createElement('img');
img.addEventListener('click', modal);


function search_result(evt){
  evt.preventDefault();

  //console.log(keyword.value);
  asynchronousFunction();

}


console.log('the script starts');
 async function asynchronousFunction() {                 // asynchronous function is defined by the async keyword
        section.innerHTML = '';
        //console.log('asynchronous download begins');
        try {                                               // error handling: try/catch/finally
            const response = await fetch('http://127.0.0.1:8000/' + keyword.value);    // starting data download, fetch returns a promise which contains an object of type 'response'
            const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
            //console.log(jsonData[0].name);
            fetch_data(jsonData);
        } catch (error) {
            console.log(error.message);
        } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
            console.log('asynchronous load complete');
        }
    }

//console.log('the script ends');

button.addEventListener('click', search_result);