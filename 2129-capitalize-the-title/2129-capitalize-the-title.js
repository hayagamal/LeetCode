/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {

   title = title.toLowerCase().split(" ").map(t => t.charAt(0).toUpperCase()+ t.slice(1).toLowerCase())
    
    for(let i =0; i<title.length ;i++){
        if(title[i].length <=2){
          title[i] = title[i].charAt(0).toLowerCase() + title[i].slice(1).toLowerCase()
        }
    }
    
  title=title.join(" ")
    return title
};