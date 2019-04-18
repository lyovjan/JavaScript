
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
/* Style the buttons */
.btn {
    border: none;
    outline: none;
    padding: 3px 5px;
   
    cursor: pointer;
    font-size: 10px;
}

/* Style the active class, and buttons on mouse-over */
.active, .btn:hover {
    background-color: #4997D0;
    color: white;
}
</style>
</head>
<body>

<h1>Active Button</h1>
<p>Highlight the active/current (pressed) button.</p>
  
<div id="myDIV">
 
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn active">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
<img src="http://www.avatarsdb.com/avatars/spongebob_happy.jpg" class="btn">
</div>

<script>
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>

</body>
</html>
