function render(that, temp, args){
  if (!args){ args = {};}
  
  that.partial = function(part, i){
    that.item = i || {};
    return template(part);
  }
  
  that.catch_content = template(temp);
  return template("layouts/" + (args.layout || "application.html"));
}