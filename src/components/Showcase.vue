<script setup lang="ts">
import flagWarsLogo from '../assets/images/flag-wars-logo.png';
import roadTripLogo from '../assets/images/road-trip-logo.png';
import movingDayLogo from '../assets/images/moving-day-logo.png';
import yachtTycoonLogo from '../assets/images/yacht-tycoon-logo.png';

import discordLogo from '../assets/images/discord-logo.png';
import youtubeLogo from '../assets/images/youtube-logo.png';
import robloxLogo from '../assets/images/roblox-logo.webp';

type GameData = {
    name: string;
    iconURL: string;
    pageURL: string;
}

const games:GameData[] = [
    {
        name: 'Flag Wars',
        iconURL: flagWarsLogo,
        pageURL: 'https://www.roblox.com/games/3214114884/Flag-Wars'
    },
    {
        name: 'Yacht Tycoon',
        iconURL: yachtTycoonLogo,
        pageURL: 'https://www.roblox.com/games/15887241923/Yacht-Tycoon'
    },
    {
        name: 'Road Trip',
        iconURL: roadTripLogo,
        pageURL: 'https://www.roblox.com/games/3454572751/Road-Trip-Story'
    },
    {
        name: 'Moving Day',
        iconURL: movingDayLogo,
        pageURL: 'https://www.roblox.com/games/2266829809/Moving-Day-Story'
    }
];

const buttons = [
    {
        color: 'blue',
        url: 'https://discord.com/invite/scriptly',
        iconURL: discordLogo
    },
    {
        color: 'blue',
        url: 'https://www.youtube.com/channel/UCJV2MmXzD-4OCAsKGRzZXzA',
        iconURL: youtubeLogo
    },
    {
        color: 'blue',
        url: 'https://www.roblox.com/groups/4345585/Scriptly-Studios#!/about',
        iconURL: robloxLogo
    }
]

</script>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>

<template>
    <section id="showcase">
        <figure>
            <img src="../assets/images/logo-hd.webp" alt="Scriptly Studios Logo" />
            <figcaption>
                <h1>Scriptly Studios</h1>
                <h2>Creating Fun Games For All to Enjoy! Checkout our games, blogs, and socials.</h2>
            </figcaption>
        </figure>

        <div id="button-row">
            <ul>
                <li v-for="(item) of buttons">
                    <a :href='item.url' :style='{backgroundColor:item.color}'>
                        <img :src='item.iconURL' :alt='item.color' />
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <section id="flag-wars">
        <figure>
            <img src="../assets/images/flag-wars-logo.png" alt="Flag wars logo"/>
            
            <figcaption>
                <h2>Our Latest and Greatest</h2>
                <p>
                    Flag Wars on Roblox is an exhilarating and strategic multiplayer game that 
                    immerses players in the heart of intense flag-capturing battles. Choose 
                    from various weapons and cosmetics and dive into battle today!
                </p>
            </figcaption>
        </figure>

        <a href="https://www.roblox.com/games/3214114884/Flag-Wars" id="play-flag-wars">
            <p>Play Flag Wars</p>
        </a>
    </section>
    <section id="our-games">
        <h2>View Our Games</h2>

        <carousel ref="carousel" :items-to-show="1.5" :wrap-around="true" :autoplay="3_250" id="carousel">
            <slide v-for="(game, i) in games" :key="i" class="slide">
                <img :src="game.iconURL" class="slide-image"/>
                <p>{{ game.name }}</p>
                <a :href="game.pageURL">
                    <p>Play</p>
                </a>
            </slide>

            <template #addons>
            <navigation />
            <pagination />
            </template>
        </carousel>

        <p>⭐ Also Checkout <a href="https://www.roblox.com/groups/16132775/Pixel-Play-Trends#!/about" target="_blank">Pixel-Play Trends</a>!</p>
    </section>
    <section id="dev-blogs">
        <h2>Top Content Creators</h2>
        <p>Coming Soon!</p>

        <h2 style="margin-top: 1em;">Latest Dev Blogs</h2>
        
        <div class="dev-blog">
            <img src="../assets/images/cylipson-icon.webp" class="" />
            <h3>By Cylipson</h3>
            <h4>Published January 30th, 2024</h4>

            <p>Welcome to our website! In the future when we release new updates we will be posting all the details here 😉 </p>
        </div>

        <span>
            <img src="../assets/images/elitezen-icon.webp" />
            <p>Website developed by <a href="https://github.com/Elitezen">Elitezen</a></p>
        </span>
    </section>
</template>

<style scoped lang="scss">
h2 {
    font-size: clamp(2rem, 10vw, 4rem);
}

#showcase {
    padding: 4em 0;

    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        img {
            width: 40%;
            max-width: 500px;
            margin: 1em 0;
        }

        figcaption {
            margin: 1em 0;

            h1 {
                font-size: clamp(1rem, 10vw, 4rem);
            }

            h2 {
                font-weight: 350;
                font-size: clamp(1rem, 3vw, 1.5rem);
                padding: 0 1em;
            }
        }
    }
}

#button-row {
    margin: 4em 0;

    ul {
        display: flex;
        flex-direction: c;
        align-items: center;
        justify-content: center;
        list-style: none;

        li {
            width: clamp(5em, 20vw, 17em);
            margin: 0 1em;
            border-radius: 10px;
            padding: 1em;
            transition: 0.15s ease-in-out;

            img {
                max-width: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin: auto;
            }

            &:nth-child(1) {
                background-color: rgb(115, 72, 201);
            }

            &:nth-child(2) {
                background-color: rgb(230, 46, 46);
            }

            &:nth-child(3) {
                background-color: rgb(133, 133, 133);
            }

            &:hover {
                transform: scale(1.05) !important;
            }
        }
    }
}

#flag-wars {
    figure {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
        
        padding: 8em 3em;
        background-color: rgb(31, 31, 89);
        color: #FFF;

        img {
            width: clamp(300px, 20vw, 600px);
            margin-right: 4em;
        }

        figcaption {
            margin-left: 4em;
            max-width: 60ch;

            h2 {
                font-size: clamp(1.5rem, 12vw, 4rem);
                line-height: 1.1em;
                letter-spacing: 0.5px;
            }

            p {
                margin-top: 1em;
                font-size: clamp(0.75rem, 4vw, 1.2rem);
            }
        }
    }
}

#play-flag-wars {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -1.75em;

    background-color: rgb(96, 231, 96);
    width: clamp(400px, 50%, 550px);
    margin: auto;
    padding: 1em 2.5em;
    border-radius: 10px;

    text-decoration: none;
    color: #FFF;
    font-size: 1.9rem;
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;

    transition: 0.15s ease-in-out;

    &:hover {
        transform: scale(1.05) !important;
    }
}

#our-games {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 3em 0;
    background-color: rgba(255, 255, 255, 0.435);

    p {
        font-size: 1.3rem;
    }
}

#carousel {
    width: clamp(300px, 75%, 750px);
    margin: 5em 0;
}
.slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        aspect-ratio: 1/1;
        width: 70%;
        border-radius: 5px;
    }

    p {
        margin: 0.5em 0;
        font-size: 2rem;
    }

    a {
        background-color: rgb(96, 231, 96);
        font-size: 2rem;
        text-decoration: none;
        color: #FFF;
        font-weight: 500;
        padding: 0em 2.3em;
        margin: 0.3em 0;
        border-radius: 5px;
    }
}

#dev-blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5em 0;

    .dev-blog {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5em 0;

        img {
            width: clamp(200px, 40%, 500px);
            border-radius: 10px;
            margin: 2em 0;
        }

        h4 {
            color: lightgray
        }

        p {
            max-width: 60ch;
            margin: auto;
            padding: 2em;
            text-align: center;
            font-size: 1.25rem;
        }
    }
}

span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1em 0;

    p {
        margin: 0;
        padding: 0;
    }

    img {
        aspect-ratio: 1/1;
        height: auto;
        width: clamp(100px, 5vw, 150px);
        border-radius: 5em;
        margin: 0 2em;
    }
}

@media screen and (max-width:1000px) {
    #button-row ul {
        flex-direction: column;

        li {
            margin: 1em 0;
            width: clamp(10em, 50vw, 25em);
            height: clamp(5em, 6vw, 15em);
        }
    }

    #flag-wars {
        padding: 0 !important;

        figure {
            flex-direction: column;
            align-items: center;

            img {
                margin: auto;
            }

            figcaption {
                max-width: 80ch;
                margin: 4em 0;
                
                h2, p {
                    text-align: left;
                }
            }
        }
    }

    #play-flag-wars {
        transform: scale(0.95);
        font-size: 1.5rem;
        width: 75%;
    }
}
</style>