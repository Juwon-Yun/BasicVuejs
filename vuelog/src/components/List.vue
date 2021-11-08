<template>
<header class="py-3 mb-3 border-bottom">
    <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
          <li><a class="dropdown-item active" href="#" aria-current="page">Overview</a></li>
          <li><a class="dropdown-item" href="#">Inventory</a></li>
          <li><a class="dropdown-item" href="#">Customers</a></li>
          <li><a class="dropdown-item" href="#">Products</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Reports</a></li>
          <li><a class="dropdown-item" href="#">Analytics</a></li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <form class="w-100 me-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../assets/juwon_head.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr 2fr;">
      <div class="bg-light border rounded-3">
        <div class="container mt-4">
            <h5>풀스텍 개발자의 블로그입니다</h5>
        </div>
      </div>
      <div class="bg-light border rounded-3">
        <div class="container mt-4">
            <p>- Vue로 만들었음 -</p>
        </div>
      </div>
    </div>
  </div>

  <div class="b-example-divider"></div>

  <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">About</a></li>
      </ul>
      <ul class="nav">
        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Login</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Sign up</a></li>
      </ul>
    </div>
  </nav>



</template>

<script>
export default {
    name : 'List',
    props : {
        blogList : Array,
    },
}
</script>

<style>
*{
    margin: 0;
}
.menu{
    background: #e4dede;
    width: 100%;
    height: 5vh;
    display: flex;
}
</style>