var xhr = new XMLHttpRequest();

var parseQuery = function (string) {
var o = {};
string = string.replace("?","");
var s = string.split("&");
for(var i = 0; i < s.length; i++) {
    o[s[i].split("=")[0]] = s[i].split("=")[1]
  }
return(o);
}
var subreddit = parseQuery(document.location.search);
xhr.open("get", "http://www.reddit.com/" + subreddit[""] + ".json", true);
xhr.addEventListener("load", function () {

  var response = xhr.response;
  var data = JSON.parse(response);

  for (var i = 0; i < data.data.children.length; i++) {
  var p = document.createElement("p");
  var a = document.createElement("a");
  a.href = data.data.children[i].data.url;
  p.appendChild(a);
  a.innerHTML = data.data.children[i].data.title;
  document.body.appendChild(p);



}

});
xhr.send();
