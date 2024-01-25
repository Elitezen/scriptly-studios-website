<script lang="ts">
import SideNav from './SideNav.vue';

export default {
  components: {
    SideNav
  },
  data() {
    return {
      isNavVisible: false
    };
  },
  methods: {
    toggleNavVisibility() {
      this.isNavVisible = !this.isNavVisible;
    }
  }
};
</script>

<template>
    <header>
        <button id="side-nav-toggle" @click="toggleNavVisibility">
            <span>&equiv;</span>
        </button>

        <div id="header-logo">
            <a href="/">
                <figure>
                    <img src="../assets/images/logo.png" alt="Scriptly Studios Logo"/>
                </figure>
                <h1>Scriptly Studios</h1>
            </a>
        </div>

        <a href="https://discord.com/invite/scriptly" id="nav-discord">
            <button>
                <img src="../assets/images/discord-logo.png" alt="Join Discord"/>
            </button>
        </a>
    </header>

    <SideNav :is-visible="isNavVisible"/>
</template>

<style scoped lang="scss">
header {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 2;

    padding: 1.25em 1em;
    box-shadow: 0 1px 5px lightgray;
}

#header-logo a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;

    h1 {
        line-height: 0;
        font-weight: 500;
        letter-spacing: 0.5px;
    }

    figure img {
        width: 3em;
        margin-top: 0.4em;
        margin-right: 1.5em;
        border-radius: 50%;
    }

    &:hover {
        cursor: pointer;
    }
}

#side-nav-toggle {
    border: none;
    background-color: transparent;

    padding: 0.5em 1.5em;

    & span {
        font-size: 3em;
    }

    &:hover {
        cursor: pointer;
    }
}

#nav-discord {
    button {
        border: none;
        padding: 0.5em 1em;
        background-color: transparent;

        img {
            width: 4em;
        }

        &:hover {
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 1000px) {
    #side-nav-toggle {
        background-color: rgb(248, 248, 248);
        border-radius: 7em;
    }
}

@media screen and (max-width: 700px) {
    #header-logo {
        figure img {
            margin: 0 !important;
        }

        h1 {
            display: none;
        }
    }

    
}
</style>