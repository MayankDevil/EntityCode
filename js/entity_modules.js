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
        /*
            ----------------------------------------------------
            | Print Method } return perameter to document write
            ----------------------------------------------------
        */ 
        print(message)
        {
            document.write("<div id='note'>"+message+"</div>");
        }
        /*
            ----------------------------------------
            | COPY METHOD : use to copy entity code
            ----------------------------------------
        */
        copy_method(element)
        {
            element.select();
            document.execCommand("Copy");
        }
        /*
            display 1 method
        */
        display1()
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
            display 2 method
        */
        display2()
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
            display 3 method
        */
        display3()
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
            display 4 method
        */
        display4()
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
            display 5 method
        */
        display5()
        {
            document.write("<details id='money'> <summary> Money Entity Code </summary> <section>");

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
            display 6 method
        */
        display6()
        {
            document.write("<details id='game'> <summary> Game Charator Entity Code </summary> <section>");

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
            display 7 method
        */
        display7()
        {
            document.write("<details id='hindi'> <summary> Hindi Charator Entity Code </summary> <section>");

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
            display 8 method
        */
        display8()
        {
            document.write("<details id='linear'> <summary> Linear Charactor Entity Code </summary> <section>");

            for(var i = 19904; i < 19967; i++)
            {
                document.writeln("<div id='id"+i+"' >&#"+i+";</div>");

                document.getElementById("id"+i+"").onclick = () => alert("&#"+i+";");		
            }
            document.write("</section> </details>");
        }
    }
    /*
        --------------------------------------------------
        [ OBJECT ] entity class object important variable
        --------------------------------------------------
    */ 
    var data = new Entity();
}
catch(error)
{
    alert(console.error(error));
}
// the end