<template>
  <div class="card">
      <div class="card__image">
        <figure class="image">
          <img
            :src="require('@/assets/' + this.image)"
            :alt="card.name"
          />
        </figure>
      </div>
    <div class="media card__info">

      <div class="media-content">
        <p class="card__title is-3 has-text-centered">{{name}}</p>
         <section>
             <b-progress class="card__progress" type="is-info" :max="10" :value="progress" show-value></b-progress>
         </section>
      </div>
      
    </div>
    

  </div>
</template>

<script>
export default {
    props: {
        name: String,
        progress: Number,
        image: String
    }
}
</script>


<style lang="scss">
.card {
  padding:1em;
  min-width: auto;
  min-height: 20em;
  display: flex;
    flex-direction: column;
    justify-content: center;
        align-items: center;

    &__title{
    font-size: 1.5em;



    }

    &__image{
        flex-grow:0.7;
        
    }

    &__info{
        width: 100%;
        text-align: center;
    }

   
}


</style>