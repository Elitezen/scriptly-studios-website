<script lang="ts">
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        dynamicStyles() {
            return {
                left: this.isVisible ? '0' : '-200vw'
            }
        }
    }
};
</script>

<template>
    <nav :style="dynamicStyles">
        <ul>
            <li>
                <a href="/">
                    <p>Home</p>
                </a>
            </li>
            
            <li>
                <a href="https://www.roblox.com/groups/4345585/Scriptly-Studios#!/about">
                    <p>Scriptly Studios Roblox</p>
                </a>
            </li>

            <li>
                <a href="/#our-games">
                    <p>Our Games</p>
                </a>
            </li>

            <li>
                <a href="https://discord.com/channels/715258365177233532/1150212434523594884">
                    <p>Support</p>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav {
    position: fixed;
    top: 7.7vh;
    left: -200vw;
    z-index: 1;

    display: flex;
    flex-direction: columns;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);

    height: 100vh;
    width: 100%;
    overflow-y: hidden;
    box-shadow: 0 10px 25px #000;

    transition: 0.25s ease-in-out;

    ul {
        list-style: none;

        li {
            margin: 3em 0;
            background-color: #FFF;
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            a {
                display: inline-block;
                padding: 1.5em 6em;
                text-decoration: none;
                color: #000;
                font-weight: 500;

                font-size: clamp(0.75rem, 3.5vw, 1.5rem);
            }
        }
    }
}
</style>