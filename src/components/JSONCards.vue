<template>
    <div class="mainContainer">
        <h1>Sports Categories List</h1>
        <div class="sportCategories">
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";

export default {
    setup(){
        var jsonObj = {
            start: 0,
            sum: 0,
            getJSON: async function(data) {
                var response = await fetch(data);
                var json = await response.json();
                this.getCategories(json.data);
            },
            getCategories: function(data) {
                var jsondata = data;
                this.makeCategories(jsondata);
            },
            makeCategories: function(jsondata) {
                var self = this;
                var categories = jsondata;
                var wrapper = document.createElement("div");
                wrapper.classList.add('categories');

                categories.forEach(function(el) {
                    if (el.level === 1) {
                        wrapper.innerHTML += self.createLvl1(el);
                    }
                });

                var subcategories = categories.filter(function(el) {
                    return el.level === 2;
                });
                var lowestcategories = categories.filter(function(el) {
                    return el.level === 3;
                });
                subcategories.forEach(function(el) {
                    var cat = wrapper.querySelector('.menu-lvl1[data-categoryid="' + el.parentCategory + '"]');
                    if (cat) {
                        cat.lastChild.innerHTML += self.createLvl2(el);
                    }
                });
                lowestcategories.forEach(function(el) {
                    var lastcat = wrapper.querySelector('.lvl2[data-categoryid="' + el.parentCategory + '"]');
                    if (lastcat) {
                        lastcat.lastChild.innerHTML += self.createLvl3(el);
                    }
                });
                document.querySelector('.sportCategories').appendChild(wrapper);
            },
            sortCategories: function(a, b) {
                return (a.dataset.sortOrder < b.dataset.sortOrder ? 1 : -1);
            },
            createLvl1: function(elm) {
                var cat = '<div class="row item menu-lvl menu-lvl1" data-categoryid="' + elm.categoryId + '" data-sortOrder="' + elm.sortOrder + '">' +
                    '<div class=" heading sport-heading">' +
                    '<span class="categoryName">' + elm.categoryName + '</span><div class="events-count">' + elm.eventsCount + '</div>' +
                    '</div><ul class="menu-lvl menu-lvl2 close"></ul>' +
                    '</div>';

                return cat;
            },
            createLvl2: function(elm) {
                var subcat = '<li class="lvl2" data-categoryid="' + elm.categoryId + '" data-parentcategory="' + elm.parentCategory + '" data-sortOrder="' + elm.sortOrder + '">' +
                    '<div class="heading league-heading"><span class="categoryName">' + elm.categoryName + '</span>' +
                    '<div class="events-count">' + elm.eventsCount + '</div></div><ul class="list-unstyled menu-lvl menu-lvl3 close"></ul></li>';

                return subcat;
            },
            createLvl3: function(elm) {
                var lastcat = '<li class="lvl3" data-categoryid="' + elm.categoryId + '" data-parentcategory="' + elm.parentCategory + '" data=sortOrder="' + elm.sortOrder + '"><label class="checkbox"><input class="mark" type="checkbox"></label><span class="category-link">' + elm.categoryName + '</span></li>'

                return lastcat;
            },
            findAncestor: function(el, sel) {
                if (typeof el.closest === 'function') {
                    return el.closest(sel) || null;
                }
                while (el) {
                    if (el.matches(sel)) {
                        return el;
                    }
                    el = el.parentElement;
                }
                return null;
            },
            accordionActions: function(el) {
                var parent = jsonObj.findAncestor(el.target, '.menu-lvl');
                var events_count = parent.querySelector('.events-count');
                if (parent && parent.matches(".menu-lvl1")) {
                    var menulevel2 = parent.querySelector('.menu-lvl2');
                    events_count = parent.querySelector('.events-count');
                    parent.querySelector('.events-count').classList.add('active')
                    if (menulevel2.classList.contains('close')) {
                        events_count.classList.add('active');
                        menulevel2.classList.remove('close');
                        menulevel2.classList.add('open');
                        //menulevel2.style.height = menulevel2.children.length * menulevel2.children[0].clientHeight + "px";
                    } else {
                        events_count.classList.remove('active');
                        menulevel2.classList.remove('open');
                        menulevel2.classList.add('close');
                    }
                    return false;
                }
                if (parent && parent.matches(".menu-lvl2")) {
                    parent = jsonObj.findAncestor(el.target, '.lvl2');
                    events_count = parent.querySelector('.events-count');
                    var menulevel3 = parent.querySelector('.menu-lvl3');
                    if (menulevel3.classList.contains('close')) {
                        events_count.classList.add('active');
                        menulevel3.classList.remove('close');
                        menulevel3.classList.add('open');
                    } else {
                        events_count.classList.remove('active');
                        menulevel3.classList.remove('open');
                        menulevel3.classList.add('close');
                    }
                    return false;
                }
            },
            /*animateList: function(timestamp, el) {
                if (!self) var self = this;
                if (!self.sum && el !== undefined) self.sum = el.children.length * el.children[0].clientHeight;
                if (!self.start) self.start = timestamp;
                var progress = timestamp - self.start;
                el.clientHeight += Math.min(Math.floor(progress / 10), self.sum);
                el.style.height = el.clientHeight + "px";
                if (el.clientHeight < self.sum) {
                    window.requestAnimationFrame(function() {
                        self.animateList(Date.now(), el);
                    });
                }
            }*/
        };

        onMounted(() => {
            document.addEventListener('DOMContentLoaded', () => {
                jsonObj.getJSON('https://www.lionsbet.com/rest/market/categories').then(
                    document.getElementsByClassName('sportCategories')[0].addEventListener('click', jsonObj.accordionActions, true)
                );
                //jsonObj.getJSON('http://localhost/categories.json');
                
            });
        })

    }
}
</script>

<style scoped>

html {
    font-size: 10px;
    font-size: .769rem;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    background-color: #6bc54d;
    color: #ebebeb;
}


/* ---------grid----------------- */

h1 {
    padding: 10px 0;
    padding: 1rem 0;
    background-color: #3b7a3b;
    text-align: center;
}


/*-----------------------------------*/

.mainContainer {
    transition: all 1s;
    margin-right: 0;
    margin-left: 0;
    display: flex;
    flex-direction: column;
}

.sportCategories {
    display: flex;
    justify-content: center;
}

.sportCategories .menu-lvl {
    display: flex;
    flex-direction: column;
}

.sportCategories .menu-lvl1 .heading {
    border-radius: 1px;
    box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, .37);
    cursor: pointer;
    background-color: #043a32;
    justify-content: space-between;
    display: flex;
    flex-basis: 100%;
    transition: background-color .5s ease-in;
}

.heading.sport-heading:hover {
    background-color: #0d8474;
    transition: background-color .5s ease-out;
}

.sportCategories .menu-lvl .heading .events-count {
    display: inline-flex;
    line-height: 38px;
    font-weight: 400;
    padding-right: 10px;
    font-size: 13px;
    font-size: 1rem;
    padding-left: 15px;
    position: relative;
}

.sportCategories .menu-lvl .heading .events-count::before,
.sportCategories .menu-lvl .heading .events-count::after {
    position: absolute;
    display: block;
    content: '';
    width: 8px;
    height: 1px;
    left: 6px;
    top: 50%;
    background-color: #ebebeb;
}

.sportCategories .menu-lvl .heading .events-count::after {
    transform: rotateZ(90deg);
    transition: transform .2s ease-in;
}

.sportCategories .menu-lvl .heading .events-count.active::after {
    transform: rotateZ(180deg);
    transition: transform .2s ease-out;
}

.sportCategories .menu-lvl2,
.sportCategories .menu-lvl3 {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    list-style-type: none;
    overflow: hidden;
    max-height: 0;
    height: 0;
    transition: all 1s;
}

.sportCategories .menu-lvl.open,
.sportCategories .menu-lvl.open {
    background-color: #5f5f5f;
    max-height: 100%;
    height: auto;
}

.sportCategories .lvl2 {
    margin-bottom: 0;
}

.sportCategories .lvl2 .heading {
    cursor: pointer;
    border-radius: 0;
    margin-top: 1px;
    box-shadow: none;
    background-color: #015247;
    position: relative;
    z-index: 1;
    transition: background-color .5s ease-in;
}

.heading.league-heading:hover {
    background-color: #3b7a3b;
    transition: background-color 1s ease-out;
}

.sportCategories .menu-lvl .heading span.categoryName {
    display: flex;
    line-height: 38px;
    font-size: 13px;
    font-size: 1rem;
    padding-left: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sportCategories .menu-lvl2.close,
.sportCategories .menu-lvl3.close {
    display: none;
}

.list-unstyled {
    padding-left: 0;
    list-style: none;
}

ol,
ul {
    margin-top: 0;
    margin-bottom: 0;
}

.sportCategories .lvl3 {
    cursor: pointer;
    margin-bottom: 1px;
    background-color: #0d8474;
    position: relative;
    height: 38px;
    z-index: 1;
}

.sportCategories .lvl3 span:not(.toggle-text) {
    line-height: 38px;
    padding-right: 10px;
    padding-left: 15px;
    font-size: 11px;
    font-size: .8461538462rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    left: 25px;
    z-index: -1;
}

.sportCategories .lvl3 label.checkbox {
    display: inline-flex;
    width: 100%;
    height: 100%;
}

.categories {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
}

.mark {
    display: flex;
    flex-direction: column;
    align-self: center;
    position: absolute;
    left: 15px;
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}

button,
input,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    font-size: inherit;
    line-height: inherit;
}

</style>