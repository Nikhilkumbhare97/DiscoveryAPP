document.getElementById("head-one").innerHTML = `<div class="logo">
<a href="../HTML/home.html"><img src="../Assets/images/discoveryLogo.png" width="26%"></a>
</div>

<ul class="head-nav-menu">

<h3 class="head-nav-item">
    <a href="../HTML/aboutDLC.html">About DLC</a>
</h3>
<h3 class="head-nav-item">
    <a href="../HTML/ourWorlds.html">Our Worlds</a>
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
<div">
<h2 class="head-nav-item-menu"> 
    <a href="../HTML/menu.html">
         <div id="menu-bars" class="container" onclick="myFunction(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </a>
</h2>
</div>

</ul>`;

function myFunction(x) {
    x.classList.toggle("change");
}


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

// repeatImage = (p1,p2,p3) => {
//     let abc =`<img src="../Assets/images/${p1}"></img>
//     <h1 class="mag-img-title">
//         <div class="mag-img-title1">
//             ${p2} <style>
//             </style>
//         </div>
//         <span>
//             <div class="mag-img-title2">${p3}</div>
//         </span>
//     </h1>`
//     return abc;
// }

// document.getElementById("comp-part-ones").innerHTML = repeatImage("Company/image1.jpg", "Extraordinary vision,", "unparalleled results");
// document.getElementsById("mag-img-parts").innerHTML = repeatImage("magazine/first.jpg", "Discovery Life", "Magazine");
// document.getElementById("fond-part-one").innerHTML = repeatImage("Foundation/image1.jpg", "Every child", "matters");
// document.getElementById("about-dlc-repeat").innerHTML = repeatImage("about DLC/image1.jpg", "Creating your ", "perfect world");