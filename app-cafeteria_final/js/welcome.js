document.querySelector('.welcome').innerHTML += `
<main>
<article>
   <div class="logo"><img src="./img/logo.png" alt=""></div><!-- agregar 3 imagenes  -->
   <div class="name_resto"><h1>Welcome to SpotFinder</h1></div>
    <h4>Search for unique spots in your nearest location and explore new places!</h4>
</article>
<section class="btn__login">
   <a href="searchResto.html?type=all"><button>Get started</button></a>
</section>
<section class="login_register">
<a class="log_regis" href="register.html">¿Aun no te has registrado?</a>
</section>
<section class="login_register">
<a class="log_regis" href="login.html">Inicia sesión</a>
</section>
</main>
`