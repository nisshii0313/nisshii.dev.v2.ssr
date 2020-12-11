<template>
  <div id="app">
    <Header class="header" />
    <NotFound />
    <Footer class="footer" />
  </div>
</template>

<style>
@font-face {
  font-family: 'dq';
  font-display: swap;
  src: url('/font/DQ.woff2') format('woff2');
}
body {
  margin: 0px;
  background-color: black;
}
img {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 600px;
  width: 100%;
  margin: auto;
}
p {
  font-family: 'dq';
  font-weight: bold;
  color: whitesmoke;
}
.header {
  margin-bottom: 16px;
}
.footer {
  margin-top: auto;
}
</style>

<script>
export default {};
</script>
