var xhr = new XMLHttpRequest();
var subreddit = document.location.search.replace("?", "")
xhr.open("get", "http://www.reddit.com/" + subreddit + ".json", true);
xhr.addEventListener("load", function () {

  var response = xhr.response;
  var data = JSON.parse(response);

  for (var i = 0; i < data.data.children.length; i++) {
  var p = document.createElement("p");
  var a = document.createElement("a");
  a.href = "/index2.html" + "?" + data.data.children[i].data.url;
  p.appendChild(a);
  a.innerHTML = data.data.children[i].data.title;
  document.body.appendChild(p);



}

});
xhr.send();
