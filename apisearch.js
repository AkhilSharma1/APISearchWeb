function loadResults(){

    var keyword = document.getElementById("keywordTextbox").value;
    localStorage.setItem('keyword',keyword);
    window.location.href = 'searchResult.html';
}
