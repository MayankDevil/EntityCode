/*
-	website-8 "Entity Code"
-	File: src/js/script.js
*/

$(document).ready(function () {

    class Entity {
    
        constructor (alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {

            /**
             * Uppercase English alphabet.
             * @type {string}
            */
            this.alpha = alpha

            /**
             * All English letters: Uppercase + Lowercase.
             * @type {string}
             */
            this.allAlpha = this.alpha.toUpperCase() + this.alpha.toLowerCase();
            
            /**
             * Stores generated HTML string for entity elements.
             * @type {string}
             */
            this.list = ""

            /**
             * Stores array of generated or processed data.
             * @type {Array}
             */
            this.data = []
        }

        /**
         * Flattens a 2D array of data into a grid layout inside a <details> element.
         * 
         * @param {string} title - Title for the section.
         * @param {string} id_name - HTML id for the <details> element.
         * @param {Array<Array<string>>} data - Two-dimensional array of values to display.
         * @param {boolean} isOpen - Whether the <details> element is initially open.
         * @returns {string} HTML string representing the grid layout.
         */
        
        setLayout(title, id_name, data = null, isOpen = false) {

            this.list = "";

            data.forEach((item) => {

                item.forEach((value, index) => {

                    if (index === 0)
                    {
                        this.list += `<div data-value='${value}'> ${value} </div>`;
                    }
                    else
                    {
                        this.list += `<div> ${value} </div>`;
                    }
                })
            })

            return `<details ${isOpen ? 'open': ''} id='${id_name}'>
                <summary> ${title} </summary>
                <section> ${this.list} </section>
            </details>`
        }

        /**
         * Generates HTML structure for an entity category.
         * 
         * @param {string|null} title - The title shown in the <summary> tag.
         * @param {string|null} id_name - The HTML id for the <details> element.
         * @param {Array|string|null} data - Array of entity codes or a pre-rendered string.
         * @param {boolean} isHex - Whether entity values are numeric Unicode codes (true) or named entities (false).
         * @param {boolean} isOpen - Whether the <details> element is initially open.
         * @returns {string} HTML string for the entity layout.
         */

        layout(title = null, id_name = null, data = null, isHex = false, isOpen = false) {

            if (data === null) {
                data = '<p> Please wait data is loading ... </p>';
            } else {
                data = this.setDataElement(data, isHex)
            }

            if (title === null) {
                title = 'title loading ...'
            }

            return `<details ${isOpen? 'open' : ''} id='${id_name}'>
                <summary> ${title} </summary>
                <section> ${data} </section>
            </details>`
        }

        /**
         * Converts an array of entity codes into clickable HTML elements.
         * 
         * @param {Array} data - Array of entity codes (either named or numeric).
         * @param {boolean} isHex - Whether to treat entity codes as numeric Unicode values.
         * @returns {string|null} HTML string with <div> elements for each entity.
         */
        
        setDataElement(data, isHex) {
            
            this.list = ""

            if (data === null || data.length === 0) {
                return null
            }

            data.forEach((value) => {

                if (isHex) {
                    this.list += `<div id='id${value}' data-value='&#${value};'> &#${value}; </div>`
                } else {
                    this.list += `<div id='id${value}' data-value='&${value};'> &${value}; </div>`
                }
            })

            return this.list;
        }

        /**
         * Generates a range of numeric Unicode entity codes.
         * Optionally skips certain code points.
         * 
         * @param {number|null} start - Starting Unicode code point.
         * @param {number|null} end - Ending Unicode code point.
         * @param {Array<number>|null} ignore - Array of code points to skip.
         * @returns {Array<string>|null} Array of numeric code points as strings.
         */

        characterLoop(start = null, end = null, ignore = null) {
            this.data = []

            if (start === null || end === null) {
                return null
            }

            if (ignore === null) {       
                for (let i = start; i < end; i++) {
                    this.data.push(`${i}`)
                }
            } else {
                for (let i = start; i < end; i++) {
                    if (!(ignore.includes(i))) {
                        this.data.push(i)   
                    }			
                }    
            }

            return this.data
        }

        /**
         * Generates a set of alphabetic entity codes by appending a postfix to each letter.
         * 
         * @param {string} postFixCharacter - String to append to each letter (e.g., 'opf').
         * @returns {Array<string>} Array of combined letter + postfix codes.
         */

        alphaCharacter(postFixCharacter) {
        
            this.data = []

            for (var i = 0; i < this.allAlpha.length; i++) {
                this.data.push(`${this.allAlpha[i]}${postFixCharacter}`)  
            }
            return this.data
        }

        /**
         * click any element that contain data-value and copy code
         * 
         * @param {object} up - popupdailog object 
         * */

        pop(up) {

            const show = up.find(".text")
            const closeBtn = up.find("#close_btn");

            $(document).on("click", "[data-value]", function () {
                
                let value = $(this).attr("data-value") || $(this).text();

                navigator.clipboard.writeText(value).then(() => {

                    show.text(value);

                    up.show()

                }).catch(err => {
                    show.text(`Clipboard copy failed: ${err}`)
                })
            })

            closeBtn.on("click", () => {
                up.hide()
            })

            setTimeout(() => {
                up.hide()
            }, 3000)
        }
    }

    /* 
        ----------------------
        | PreLoader function |
        ----------------------
    */
    
    function preLoader(mainId) {

        let main = document.getElementById(mainId)
        let loader = document.createElement('div')

        // Hide main content
        main.style.display = "none"

        // Loader style
        loader.style.cssText = `
            color: #ff9f43;
            display: grid;
            place-items: center;
            margin-top: 40vh;
            font-size: 1.2rem;
            font-weight: bold;
        `;

        // Loading text animation
        let messages = ["Loader .", "Loading ..", "Please Wait ..."]
        let index = 0
        let interval = setInterval(() => {
            loader.textContent = messages[index]
            index = (index + 1) % messages.length
        }, 1000)

        // Add loader to page
        document.body.append(loader)

        // On page load
        window.onload = () => {
            clearInterval(interval)
            loader.remove()
            main.style.display = ""
        }
    }
    
    /* Toggle Light/Dark Theme on Button Click */
    
    $('#theme_btn').on('click', () => {

        $('body').toggleClass('light_theme')
    })
    
    /* 
        ---------------------------------------------------------------------
        | function request server to load entity set data and store locally |
        ---------------------------------------------------------------------
    */
   
    let location = "public/data/api.json";  // "https://mayankdevil.github.io/myData/public/api/entitycode.json";
   
    let data = null
   
    let ent = new Entity()
   
    let up = $("#popupDialog")
   
    up.hide()

    /* more button on click append entity list */

    $(document).on('click', "#more_btn", function () {

        let start = (parseInt($('#num_field').val(), 10) || 0)
        
        let end = start + 100
        
        $('#num_field').val('')
        
        $("#entityList").append(`${ent.layout(`ENTITY (${start} TO ${end}) ...`, 'more', ent.characterLoop(start, end, null), true, true)}`)
    })
   
    // localStorage.setItem('indardanus_data',JSON.stringify(hijack.data)) // hack    

   if (localStorage.getItem('entity_data_set')) 
    {
        data = JSON.parse(localStorage.getItem('entity_data_set'))
             
        ent.pop(up)

        $("#container_Set").append(` 
            
            ${ent.layout("Working Entity Code", "work", data.work, true, true)}
            ${ent.layout("Graphic Entity Code", "graphic", data.graphic, true)}

            ${ent.setLayout("Mathematics Entity Code", "math", data.math, true)}
            ${ent.setLayout("Relational Entity Code", "relation", data.relation, false)}
            ${ent.setLayout("Currency Entity Code", "money", data.money, false)}
            ${ent.setLayout("Game Entity Code", "game", data.game, false)}
            
            ${ent.layout("OPF CHARACTERS Entity Code", "opf",ent.alphaCharacter(data.postFix[0]), false, false)}
            ${ent.layout("FR CHARACTERS Entity Code", "fr",ent.alphaCharacter(data.postFix[1]), false, false)}
            ${ent.layout("SCR CHARACTERS Entity Code", "scr",ent.alphaCharacter(data.postFix[2]), false, false)}
            
            ${ent.layout("Linear Character Entity Code", "linear", ent.characterLoop(data.linear.start, data.linear.end, data.linear.ignore), true, false)}
            ${ent.layout("Hindi Character Entity Code", "hindi", ent.characterLoop(data.hindi.start, data.hindi.end,  data.hindi.ignore), true, false)}
        
        <a href='app.html' class='btn'> MORE ENTITY </a>`)
    }
    else
    {
        $.ajax({
            url : location,
            type : 'GET',
            beforeSend : function () {

                preLoader('main')
            },
            success : function (response) {

                if (response.status) {

                    localStorage.setItem('entity_data_set',JSON.stringify(response.data))

                    data = JSON.parse(localStorage.getItem('entity_data_set'))
                
                    // cal function ...

                    up.hide()

                    ent.pop(up)

                    $("#container_Set").append(` 
                        
                        ${ent.layout("Working Entity Code", "work", data.work, true, true)}
                        ${ent.layout("Graphic Entity Code", "graphic", data.graphic, true)}

                        ${ent.setLayout("Mathematics Entity Code", "math", data.math, true)}
                        ${ent.setLayout("Relational Entity Code", "relation", data.relation, false)}
                        ${ent.setLayout("Currency Entity Code", "money", data.money, false)}
                        ${ent.setLayout("Game Entity Code", "game", data.game, false)}
                        
                        ${ent.layout("OPF CHARACTERS Entity Code", "opf",ent.alphaCharacter(data.postFix[0]), false, false)}
                        ${ent.layout("FR CHARACTERS Entity Code", "fr",ent.alphaCharacter(data.postFix[1]), false, false)}
                        ${ent.layout("SCR CHARACTERS Entity Code", "scr",ent.alphaCharacter(data.postFix[2]), false, false)}
                        
                        ${ent.layout("Linear Character Entity Code", "linear", ent.characterLoop(data.linear.start, data.linear.end, data.linear.ignore), true, false)}
                        ${ent.layout("Hindi Character Entity Code", "hindi", ent.characterLoop(data.hindi.start, data.hindi.end,  data.hindi.ignore), true, false)}
                    
                    <a href='app.html' class='btn'> REQUIRED MORE ENTITY  </a>`)    
                }
                console.log(response.message)
            },
            error : (error) => {

                if (!navigator.onLine) 
                {
                    console.log(`( network offline )_`)
                }
                console.log(`[ data loading error ] : ${error}`)
            },
            complete : function () {

                // loader close ...
            }
        })
    }
    document.title = `EntityCode`;
})

/* Developer: Mayank Devil | https://mayankdevil.github.io/MayankDevil */