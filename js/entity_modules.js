/*
-	website-8 "Entity Code"
-	CopyRight Mayank All Right Rserved 
-	Developed and Desgin by Mayank
-	JavaScript : js/entity_modules
*/
try
{
    /*
        =========================================
        | Entity Class | contain display methods
        =========================================
    */
    class Entity
    {
        constructor(characters)
        {
            code = characters
        }   
        /*
            ----------------------------------------
            | COPY METHOD | use to copy entity code
            ----------------------------------------
        */
        copy_method(element)
        {
            element.select();
            document.execCommand("Copy");
        }

        /*
            -------------------------------------------------------------------------------------
            | COMMANLY USE | return comman useful entity code by fetch data
            -------------------------------------------------------------------------------------
        */
        
        comman_entity_code()
        {
            document.write("<details id='work' open='open'> <summary> Working Entity Code </summary> <section>");

            work.forEach(i=>
            {
                document.write("<div id='id"+i+"'>&#"+i+";</div>");

                document.getElementById("id"+i+"").onclick = () => alert("&#"+i+";");
            });
            document.write("</section> </details>");
        }

        /*
            -------------------------------------------------------------------------------------
            | GRAPHIC | return graphic entity code by fetch data
            -------------------------------------------------------------------------------------
        */
        
        graphic_entity_code()
        {
            document.write("<details id='graphic'> <summary> Graphics Entity Code </summary> <section>");
    
            graphic.forEach(i=>
            {
                document.writeln("<div id='id"+i+"' >&#"+i+";</div>");
    
                document.getElementById("id"+i+"").onclick = () => alert("&#"+i+";");
            });
            document.write("</section> </details>");
        }
        
        /*
            -------------------------------------------------------------------------------------
            | MATHEMATICS | return mathmetical characters or symbols
            -------------------------------------------------------------------------------------
        */

        mathematics_entity_code()
        {
            document.write("<details id='math' open='open'> <summary> Mathmatics Entity Code </summary> <section>");

            for(var i = 0; i<math.length; i++)
            {
                for(var j = 0; j<3; j++)
                {
                    document.write("<div>"+math[i][j]+"</div>");
                }
            }
            document.write("</section> </details>");
        }

        /*
            -------------------------------------------------------------------------------------
            | RELATION | return relational entity
            -------------------------------------------------------------------------------------
        */

        relation_entity_code()
        {
            document.write("<details id='relation'> <summary> Relational Entity Code </summary> <section>");

            for(var i = 0; i<relation.length; i++)
            {
                for(var j = 0; j<3; j++)
                {
                    document.write("<div>"+relation[i][j]+"</div>");
                }
            }
            document.write("</section> </details>");
        }

        /*
            -------------------------------------------------------------------------------------
            | CURRENCY | return different country currency symbols
            -------------------------------------------------------------------------------------
        */

        currency_entity_code()
        {
            document.write("<details id='money'> <summary> Currency Entity Code </summary> <section>");

            for(var i = 0; i<money.length; i++)
            {
                for(var j = 0; j<3; j++)
                {
                    document.write("<div>"+money[i][j]+"</div>");
                }
            }
            document.write("</section> </details>");
        }

        /*
            -------------------------------------------------------------------------------------
            | GAME | return chess or card symbols
            -------------------------------------------------------------------------------------
        */

        game_entity_code()
        {
            document.write("<details id='game'> <summary> Game Entity Code </summary> <section>");

            for(var i = 0; i<game.length; i++)
            {
                for(var j = 0; j<3; j++)
                {
                    document.write("<div>"+game[i][j]+"</div>");
                }
            }
            document.write("</section> </details>");
        }

        /*
            -------------------------------------------------------------------------------------
            | HINDI CHARACTERS : return indian character code
            -------------------------------------------------------------------------------------
        */

        hindi_character()
        {
            document.write("<details id='hindi'> <summary> Hindi Character Entity Code </summary> <section>");

            for(var i=2308; i<2418; i++)
            {
                if(i!=2362 && i!=2363 && i!=2382 && i!=2383 && i!=2389 && i!=2390 && i!=2391 && i!=2384)
                {
                    document.writeln("<div id='id"+i+"' >&#"+i+";</div>");
    
                    document.getElementById("id"+i+"").onclick = () => alert("&#"+i+";");
                }			
            }
            document.write("</section> </details>");
        }

        /*
            -------------------------------------------------------------------------------------
            | LINEAR : return comman encrypted entity code
            -------------------------------------------------------------------------------------
        */

        linear_character()
        {
            document.write("<details id='linear'> <summary> Linear Characters Entity Code </summary> <section>");

            for(var i = 19904; i < 19967; i++)
            {
                document.writeln("<div id='id"+i+"' >&#"+i+";</div>");

                document.getElementById("id"+i+"").onclick = () => alert("&#"+i+";");		
            }
            document.write("</section> </details>");
        }

        /*
            -------------------------------------------------------------------------------------
            | SCR CHARACTER : return scr entity code
            -------------------------------------------------------------------------------------
        */

        scr_character()
        {
            document.write("<details id='fr'> <summary>  SCR Entity Code </summary> <section>");
                        
            for (var i = 0; i < code.length; i++)
            {
                const letter = code[i]
                document.write(`<div id='id${letter}fr'> &${letter}scr; </div>`);
                
                document.getElementById(`id${letter}fr`).onclick = () => alert(`&${letter}fr;`);		
            }
            document.write("</section> </details>"); 
        }

        /*
            -------------------------------------------------------------------------------------
            | FR CHARACTER : return fr entity code
            -------------------------------------------------------------------------------------
        */

        fr_character()
        {
            document.write("<details id='fr'> <summary>  FR Entity Code </summary> <section>");
                        
            for (var i = 0; i < code.length; i++)
            {
                const letter = code[i]
                
                document.write(`<div id='id${letter}fr'> &${letter}fr; </div>`);
                
                document.getElementById(`id${letter}fr`).onclick = () => alert(`&${letter}fr;`);		
            }
            document.write("</section> </details>"); 
        }

        /*
            -------------------------------------------------------------------------------------
            | OPF CHARACTER : return opf entity code
            -------------------------------------------------------------------------------------
        */

        opf_character()
        {
            document.write("<details id='opf'> <summary>  OPF Entity Code </summary> <section>");
                        
            for (var i = 0; i < code.length; i++)
            {
                const letter = code[i]

                document.write(`<div id='id${letter}opf'> &${letter}opf; </div>`);
                
                document.getElementById(`id${letter}opf`).onclick = () => alert(`&${letter}opf;`);		
            }
            document.write("</section> </details>"); 
        }
    }
    /*
        
        [ object of Entity class ] ===============================================================
    */ 
    var data = new Entity(code);
}
catch(error)
{
    alert(console.error(error));
}
// the end
