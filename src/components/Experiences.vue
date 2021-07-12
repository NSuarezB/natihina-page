<template>
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img
            :src="require('@/assets/' + this.image)"
            alt="Placeholder image"
          />
        </figure>
      </div>
    <div class="media">

      <div class="media-content">
        <p class="card__title is-3">{{name}}</p>
         <section>
             <p>{{data}}</p>
         </section>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    props: {
        name: String,
        data: String,
        image: String
    }
}
</script>


<style lang="scss">
.card {
  padding:0.5em;
  min-width: auto;
  min-height: 25em;
  display: flex;
    flex-direction: column;
    justify-content: center;
        align-items: center;
         
    &__title{
    font-size: 1.5em;

    }

   
}


</style>