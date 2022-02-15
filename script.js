var apiUrl = "https://meme-api.herokuapp.com/gimme";

var loadMeme = async () => {
    try {
        var image = document.getElementById("imageBody");
        image.innerHTML = '<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">    <span class="sr-only">Loading...</span>  </div>';
        var memeLink = await fetch(apiUrl).catch(errorHandle);
        memeLink = await memeLink.json();
        var memeUrl = memeLink.preview.slice(-1);
        addMeme(memeUrl);
        addDownloadBtn(memeUrl);
    } catch (error) {
        errorHandle();
    }
};

errorHandle = () => {
    document.write("Err : 500<br>Something went wrong Please refresh the page ");
};

function addMeme(url) {
    var image = document.getElementById("imageBody");
    var meme = document.createElement("img");
    meme.src = url;
    meme.classList = "img-fluid";
    image.innerHTML = null;
    image.append(meme);
}

function addDownloadBtn(url) {
    let downloadBtn = document.createElement("a");
    let downloadBtnDiv = document.getElementById("downloadBtnDiv");

    downloadBtn.setAttribute("href", url);
    downloadBtn.setAttribute("download", "meme");
    downloadBtn.classList = "btn btn-primary text-center";
    downloadBtn.innerText = "Download";

    downloadBtnDiv.innerHTML = "";
    downloadBtnDiv.append(downloadBtn);
}
