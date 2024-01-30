<script setup lang="ts">

</script>

<template>
 <header>
        <div id="header-logo">
            <a href="/">
                <figure>
                    <img src="../assets/images/logo.png" alt="Scriptly Studios Logo"/>
                </figure>
                <h1>Scriptly Studios</h1>
            </a>
        </div>

        <nav>
            <ul>
                <li>
                    <a href="/">
                        <p>Home</p>
                    </a>
                </li>

                <li>
                    <a href="#our-games">
                        <p>Games</p>
                    </a>
                </li>

                <li>
                    <a href="https://discord.com/invite/scriptly">
                        <p>Discord</p>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
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

    padding: 1.25em 7em;
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

nav {
    width: 45%;
    min-width: 350px;
    max-width: 450px;

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        li {
            a {
                display: inline-block;
                padding: 0.75em 1.25em;
                text-decoration: none;
                color: inherit;
                border-bottom: 2px solid transparent;
                transition: 0.15s ease-in-out;

                &:hover {
                    border-bottom: 2px solid rgb(74, 74, 187);
                }
            }

            &:nth-child(3) {
                background-color: rgb(31, 31, 89);
                color: #FFF;
                border-radius: 5px;
            }
        }
    }
}
</style>