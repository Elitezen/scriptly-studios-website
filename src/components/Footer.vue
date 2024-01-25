<script setup lang="ts">

</script>

<template>
     <footer>
        <h4>Scriptly Studios</h4>
        <p>
            Copyright @ 2024 Scriptly Studios. All rights reserved. The content of this website, 
            including but not limited to text, graphics, logos, images, and audio, is the property 
            of Scriptly Studios. Reproduction or distribution of any content without express written 
            permission from Scriptly Studios is disallowed.
        </p>

        <section>
            <div>
                <h5>Games</h5>
                <ul>
                    <li>
                        <a href="https://www.roblox.com/games/3214114884/Flag-Wars"><p>Flag Wars</p></a>
                    </li>

                    <li>
                        <a href="https://www.roblox.com/games/2266829809/Moving-Day-Story"><p>Road Trip</p></a>
                    </li>

                    <li>
                        <a href="https://www.roblox.com/games/2266829809/Moving-Day-Story"><p>Moving Day</p></a>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Links</h5>
                <ul>
                    <li>
                        <a href="https://www.roblox.com/groups/4345585/Scriptly-Studios#!/about"><p>Roblox Page</p></a>
                    </li>

                    <li>
                        <a href="https://discord.com/channels/715258365177233532/1150212434523594884"><p>Support</p></a>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Socials</h5>
                <ul>
                    <li>
                        <a href="https://discord.com/invite/scriptly"><p>Discord Server</p></a>
                    </li>

                    <li>
                        <a href="https://www.youtube.com/channel/UCJV2MmXzD-4OCAsKGRzZXzA"><p>Youtube</p></a>
                    </li>

                    <li>
                        <a href="https://twitter.com/cylipsonrblx?lang=en"><p>X / Twitter</p></a>
                    </li>
                </ul>
            </div>
        </section>
     </footer>
</template>

<style scoped lang="scss">
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    background-color: rgb(31, 31, 89);
    color: #FFF;
    padding: 3em;

    h4 {
        font-size: 2.5rem;
        font-weight: 400;
    }

    p {
        margin: 1em 0;
        font-size: 1rem;
        max-width: 80ch;
        text-align: center;
    }

    section {
        display: flex;
        
        div {
            margin: 3em 3em;

            h5 {
                font-size: 2rem;
                font-weight: 400;
                margin-bottom: 0.5em;
            }

            ul {
                display: flex;
                flex-direction: column;
                align-items: start;
                list-style: none;

                li {
                    
                    a {
                        color: #FFF;
                        text-decoration: none;
                        text-align: left;
                        white-space: nowrap;
                    }
                }
            }
        }
    }

    @media screen and (max-width:650px) {
        section {
            margin: 2em 0;
            flex-direction: column;

            div {
                margin: 1em 0;

                h5 {
                    font-size: 3rem !important;
                }

                ul li {
                    a p {
                        font-size: 1.4rem !important;
                    }
                }
            }
        }
    }
}
</style>