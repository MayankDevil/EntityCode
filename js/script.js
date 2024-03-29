/*
-	website-8 "Entity Code"
-	CopyRight https://github.com/MayankDevil/ 
-	Developed and Desgin by Mayank
-	JavaScript : ./js/script.js
*/
try
{
    /*
        ===============================
        | Pre Loader | write and load
        ===============================
    */ 
    let main = document.getElementById('main')

    let loader = document.createElement('div')

    main.style.display = "none"
        
    loader.style.color = "#ff9f43"
    
    loader.style.display = "grid"

    loader.style.marginTop = "40vh"

    loader.innerHTML = `<h5> Loader . </h5>`

    var oneSecond = setInterval(() => loader.innerHTML = `<h5> Loading .. </h5>`, 1000);
    
    var twoSecond = setInterval(() => loader.innerHTML = `<h5> Please Wait ... </h5>`, 2000);
    
    document.body.append(loader)

    /*
        [ on window load function ]============================================================
    */ 

    window.onload = () => {

        clearInterval(oneSecond)

        clearInterval(twoSecond)

        loader.style.display = "none"

        loader.remove

        main.style.display = ""

        /*
            -------------------------------------------------------------------
            | Theme function | onclick add light theme scheme else remove 
            -------------------------------------------------------------------
        */ 

        document.getElementById('theme_btn').onclick = function()
        {
            document.body.classList.toggle('light_theme')
        }
    }
}
catch(error)
{
   console.log(`${error}`)
}
// the end
