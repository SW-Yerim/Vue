<template>
  <div class="wrap">
    <nav class="nav">
      <ul>
        <li>
          <p>LINK1</p>
          <ul>
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
          </ul>
        </li>
        <li>
          <p>LINK2</p>
          <ul>
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
          </ul>
        </li>
        <li>
          <p>LINK3</p>
          <ul>
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="container">
      <section class="top_nav">
        <div class="logo"><a href="#">LOGO</a></div>
        <div class="top_list">
          <ul>
            <li><a href="#">menu 1</a></li>
            <li><a href="#">menu 2</a></li>
            <li><a href="#">menu 3</a></li>
            <li><a href="#">menu 4</a></li>
          </ul>
        </div>
        <!-- <ul class="top_list">
          <li><a href="#">menu 1</a></li>
          <li><a href="#">menu 2</a></li>
          <li><a href="#">menu 3</a></li>
          <li><a href="#">menu 4</a></li>
        </ul> -->
        <div class="profile">
          <ul>
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>

<style></style>
