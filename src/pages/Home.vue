<template>
  <div class="container is-max-desktop">
    <div class="panel">
      <div class="panel-heading">Sobre mi</div>
      <div class="panel-block">
        <div class="container">
          <div class="columns">
            <div class="column is-8 content">
              <ul>
                <li v-for="(item, index) in items" :key="index">
                  <b-icon :icon="item.icon" /> {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="column">
              <b-image
                style="width: 200px; height: 200px"
                :src="require('@/assets/fotoNat.png')"
                :fit="fit"
                alt="Natalia"
              ></b-image>
            </div>
          </div>
          <div class="columns item__skills">
              
            <div class="column skills__title">
              <h2><b> {{ $t("skills.title") }} </b></h2>
            </div>
          </div>
          <div class="columns item__skills is-multiline">
            <div v-for="(skill,index) in skills" :key="index" class="column is-3">
                <Skill :name="skill.name" :progress="skill.progress" :image="skill.image"/>
            </div>   
          </div>
          <div class="columns item__experience">
              
            <div class="column experience__title">
              <h2><b> Experiencias </b></h2>
            </div>
          </div>
          <div class="columns experience__skills is-multiline">
            <div v-for="(experience,index) in experiences" :key="index" class="column is-3">
                <Experience :name="experience.name" :data="experience.data" :image="experience.image"/>
            </div>   
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import Skill from "../components/Skill.vue";
import Experience from "../components/Experiences.vue";

export default {
  name: "Home",
  components:{
      Skill,
      Experience,
  },
  data() {
    return {
      items: [
        { message: "Natalia Suarez Benitez", icon: "child" },
        { message: 
        this.$t("info.born"),
          icon: "baby-carriage" },
        {
          message:
          this.$t("info.am"),
          icon: "dice",
        },
        {
          message: this.$t("info.like"),
          icon: "heart",
        },
        { message: this.$t("info.driving", {license: "B"}), icon: "car" },
      ],
      skills: [
          {name:"HTML 5", progress:"9",image:"htmlLogo.png"},
          {name:"CSS 3",progress:"9",image:"cssLogo.png"},
          {name:"SCSS",progress:"9",image:"sassLogo.png"},
          {name:"Bulma",progress:"8",image:"bulmaLogo.png"},
          {name:"Bootstrap",progress:"8",image:"bootstrapLogo.jpeg"},
          {name:"Vue", progress:"7",image:"vueLogo.png"},
         
      ],
      experiences: [
          {name:"Gestión en centros públicos, Ayuntamiento", data:"Mayo de 2018 - Septiembre de 2018",image:"ayuntamientoLogo.jpeg"},
          {name:"Experiencia empresa privada, SIGMA",data:"Octubre del 2020 - Febrero de 2021",image:"sigmaLogo.png"}

      ]
      
    };
  },
};
</script>


<style lang="scss">
.panel {
  padding: 2rem;
  background-color: white;
}



ul {

  li {
    
    list-style-type: none;
    margin-left: 2em;

    span {
      margin-left: -2em;
    }

  }
}

.skills {
  &__title {
    background-color: #ededed;
    padding: 15px 20px !important;
  }
}

.experience {
  &__title {
    background-color: #ededed;
    padding: 15px 20px !important;
  }
}
.content{
    padding-left:2em;
}
</style>

