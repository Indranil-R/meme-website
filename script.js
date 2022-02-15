

var apiUrl = "https://meme-api.herokuapp.com/gimme";
var image = document.getElementById('meme-img');



var loadMeme = async () => {
    image.innerHTML = '<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">    <span class="sr-only">Loading...</span>  </div>';
    var memeLink = await fetch(apiUrl).catch(error);
    memeLink = await memeLink.json();
    var memeUrl = memeLink.preview.slice(-1);
    var meme = document.createElement('img');
    meme.src = memeUrl;
    meme.classList = "img-fluid";
    image.innerHTML = null;
    image.append(meme);
}

error = () => {
    document.write("error Occured")
}
