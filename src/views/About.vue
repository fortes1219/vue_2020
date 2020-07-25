<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row horizontal v_center">
        <p @click="$router.push({name: 'Home'})">Home</p>|
        <p @click="$router.push({name: 'About'})">About</p>|
        <p @click="$router.push({name: 'Child'})">Child</p>
      </div>
    Component:
    <router-view/>
  </div>
</template>
