<template>
    <div>
        <ul data-tabs class="data-tabs">
            <li><a class="data-tabby-default" href="#harry">Harry Potter</a></li>
            <li><a href="#hermione">Hermione</a></li>
            <li><a href="#neville">Neville</a></li>
        </ul>

        <div id="harry" class="data-panes">
            <h2>Harry Potter</h2>

            <p><strong>Fun Facts:</strong></p>
            <ol>
                <li>"The boy who lived"</li>
                <li>Best friends with Ron and Hermione</li>
                <li>Fails up on a regular basis</li>
            </ol>
            <p>
                <a href="https://en.wikipedia.org/wiki/Harry_Potter_(character)"
                    >More about Harry &rarr;</a
                >
            </p>
        </div>

        <div id="hermione" class="data-panes">
            <h2>Hermione</h2>

            <p><strong>Fun Facts:</strong></p>
            <ol>
                <li>The real hero of the Harry Potter series</li>
                <li>
                    Underappreciated by her friends, but always saves the day
                </li>
                <li>
                    Harry somehow gets credit for her accomplishments on a
                    regular basis
                </li>
            </ol>
            <p>
                <a href="https://en.wikipedia.org/wiki/Hermione_Granger"
                    >More about Hermione &rarr;</a
                >
            </p>
        </div>

        <div id="neville" class="data-panes">
            <h2>Neville</h2>

            <p><strong>Fun Facts:</strong></p>
            <ol>
                <li>The surprise hero of the last book</li>
                <li>His life is forever intertwined with Harry's</li>
                <li>Total badass</li>
            </ol>
            <p>
                <a
                    href="https://www.pottermore.com/explore-the-story/neville-longbottom"
                    >More about Neville &rarr;</a
                >
            </p>
        </div>
    </div>
</template>

<script>
    import Tabby from "tabbyjs";
    import { onBeforeMount } from "vue";

    export default {
        setup() {
            onBeforeMount(() => {
                new Tabby("data-tabs");
            });
        },
    };
</script>

<style scoped>

    .data-tabs {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto auto;
        justify-items: center;
        /* display: inline-block !important; */
        cursor: pointer !important;
        /* width: 100px !important; */
        text-align: center !important;
        /* height: 1000px !important; */
        line-height: 50px !important;
        color: #ffffff !important;
        background-color: #505050 !important;
    }

    .data-tabs .data-tabby-default{
        background-color:#606060 !important;
    }

    .data-panes {
        background: #404040 !important;
        color: #ffffff !important;
    }
</style>
