document.getElementById("head-one").innerHTML = `<div class="logo">
<a href="../HTML/home.html"><img src="../Assets/images/discoveryLogo.png" width="26%"></a>
</div>

<ul class="head-nav-menu">

<h3 class="head-nav-item">
    <a href="../HTML/home.html">About DLC</a>
</h3>
<h3 class="head-nav-item">
    <a href=" ">Our Worlds</a>
</h3>
<h3 class="head-nav-item">
    <a href=" ">Experiences</a>
</h3>
<h3 class="head-nav-item">
    <a href=" ">Gallery</a>
</h3>
<h3 class="head-nav-item">
    <a href=" ">Press</a>
</h3>
<h2 class="head-nav-item-menu">
    <a href=" ">
         <div class="container" onclick="myFunction(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </a>
</h2>
</ul>`;

document.getElementById("foot-one").innerHTML = `  <div class="footer-part1">
<div class="footer-logo">
    <a href="../HTML/home.html"><img src="../Assets/images/favicon-32x32.png" width="15%" height="15%"></a>
</div>
<div class="footer-context">
    <p>© Discovery Land Company. All rights reserved.</p>
</div>
</div>

<div class="footer-part2">
<div class="footer-part-one">
    <h3 class="foot-nav-item1">
        GET IN TOUCH
    </h3>
    <h3 class="foot-nav-item-two">
        <a href="tel:(480) 624-5200">(480) 624-5200</a>
    </h3>
    <h3 class="foot-nav-item-three">
        <a href="mailto:mail@discoverylandco.com">mail@discoverylandco.com</a>
    </h3>
</div>
<ul class="foot-nav-menu1">

    <h3 class="foot-nav-item">
        <a href="">About DLC</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Our Worlds</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Experiences</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Gallery</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Press</a>
    </h3>
</ul>
<ul class="foot-nav-menu2">

    <h3 class="foot-nav-item">
        <a href="">Magazine</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Careers</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Foundation</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Comapny</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Contact</a>
    </h3>
    <h3 class="foot-nav-item">
        <a href="">Privacy</a>
    </h3>
</ul>
</div>`;

function myFunction(x) {
    x.classList.toggle("change");
  }