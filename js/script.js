/*
-	website-8 "Entity Code"
-	CopyRight Mayank All Right Rserved 
-	Developed and Desgin by Mayank
-	JavaScript : js/script
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

    // main.style.display = "none"
        
    loader.style.color = "#ff9f43"
    
    loader.style.display = "grid"

    loader.style.marginTop = "40vh"

    loader.innerHTML = `<h5> Loader . </h5>`

    var oneSecond = setInterval(() => loader.innerHTML = `<h5> Loading .. </h5>`, 1000);
    
    var twoSecond = setInterval(() => loader.innerHTML = `<h5> Please Wait ... </h5>`, 2000);
    
    document.body.append(loader)

    window.onload = () => {

        clearInterval(oneSecond)

        clearInterval(twoSecond)

        loader.style.display = "none"

        loader.remove

        main.style.display = ""
    }

    
   
            
    
}
catch(error)
{
   console.log(`${error}`)
}
// the end
