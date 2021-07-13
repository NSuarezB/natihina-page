<template>
    <b-navbar class="header" :mobile-burger="false">
        <template #end>
 <b-dropdown v-model="isEng" aria-role="list">

        <template v-if="isEng" #trigger>
            <b-button
                label="Eng"
                type="is-primary"
                icon-left="earth"
                icon-right="chevron-down" />
        </template>

        <template v-else #trigger>
            <b-button
                label="Esp"
                type="is-primary"
                icon-left="account-multiple"
                icon-right="chevron-down" />
        </template>


        <b-dropdown-item :value="true" aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="earth"></b-icon>
                <div class="media-content">
                    <h3>English</h3>
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item :value="false" aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="account-multiple"></b-icon>
                <div class="media-content">
                    <h3>Español</h3>
                </div>
            </div>
        </b-dropdown-item>
    </b-dropdown>

          <b-navbar-item class="item__logo" tag="router-link" :to="{ path: '/' }">
            <b-image
                        :src="require('@/assets/logoNatihina.png')"
                        alt="logo"
                                                 > 
                                 

            </b-image>
          </b-navbar-item>

          
        </template>
        

        
        <template #start>
          <b-navbar-item tag="div">
            <a href="mailto:nataliasuarezbenitez@gmail.com" target="_blank" class="button is-small is-rounded is-outlined is-instagram">
              <span class="icon is-medium">
                <b-icon :type="{ 'is-success': isGreen }" pack="fas" icon="envelope"></b-icon>
              </span>
              <span> Gmail</span>
            </a>
          </b-navbar-item>
          <b-navbar-item tag="div">
            <a href="https://github.com/NSuarezB" rel="noreferrer" target="_blank" class="button is-small is-rounded is-outlined is-github">
              <span class="icon is-medium">
                <b-icon :type="{ 'is-success': isGreen }" pack="fab"  icon="github"></b-icon>
              </span>
              <span> Github</span>
            </a>
          </b-navbar-item>
          <b-navbar-item href="#" tag="div">
            <a href="https://www.linkedin.com/in/natihina" rel="noreferrer" target="_blank" class="button is-small is-rounded is-outlined is-linkedin">
              <span class="icon is-medium">
                <b-icon :type="{ 'is-success': isGreen }" pack="fab" icon="linkedin-in"></b-icon>
              </span>
              <span>
                  Linkedin
              </span>
            </a>
          </b-navbar-item>
        </template>
      </b-navbar>
</template>

<script>
    export default {
        data() {
            return {
                isEng: true
            }
        }
    }
</script>

<style lang="scss">
    
        .header{
            padding:0.6rem;


            .item{

                &__logo{
                    width:250px;

                    img{
                        width: 100%;
                    }
                }
            }
            
        }
    
        


</style>