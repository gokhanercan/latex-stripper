
function ShallowStrip(text) {       //replaces unwanted syntax without making any serious parsing
    var tags = ["textit", "footnote", "ref", "label", "citep", "cite", "citet", , "approx", "textsuperscript", "newcite", "citet", "citep", "cite"];     //tags to remove while keeping its content
    var propers = ["newcite", "citet", "citep", "cite"];                //order matters: substring should procede. ex: 'newcite,cite'       //disabled??
    var chars = ["{", "}", "$", "tab:", "fig:"];                        //chars to remove
    var blocks = ["unsure", "todo", "improve", "problem", "idea"];      //block to remove completely

    //remove blocks
    for (var k in blocks) {
        b = blocks[k];
        text = removeBlock(text, b);
    }
    //propers (should be called before 'tags')
    //for (var m in propers) {
        //var proper = propers[m];
        //text = properize(text, proper);
    //}
    //remove tags keeping the inner values
    for (var i in tags) {
        tag = tags[i];
        text = replace2(text, "\\\\\\\\" + tag, " ");
    }
    //chars
    for (var j in chars) {
        c = chars[j];
        text = replace2(text, c, " ");
    }
    //normalize
    text = text.replace(/\s+/g, ' ');
    return text;
}
function replace2(original, searchTxt, replaceTxt) {            //globally replace
    const regex = new RegExp(searchTxt, 'g');
    return original.replace(regex, replaceTxt) ;
}
function properize(original, proper) {      //TODO: incomplete. should uppercase the detected proper names such as authors, tables, figures. 
    const r = "\\\\\\\\" + proper + "{(?<name>.*)}(.*)";
    console.log(r);
    const regex = new RegExp(r,'');
    var match = original.match(regex);
    if (match == null) return original;
    console.log(match);
    var expr = match.groups.name;
    if (expr == null) return original;

    const regex2 = new RegExp(expr, 'g');
    return original.replace(expr, expr.toUpperCase());
}
function removeBlock(original,block) {
    //detect blocks by named group
    var reg = "(.*)(?<name>\\\\\\\\" + block + "{(.*)})(.*)";
    const regex = new RegExp(reg,'');
    var match = original.match(regex);
    if (match == null) return original;
    var expr = match.groups.name;
    if (expr == null) return original;
    expr = expr.replace(/\\/g, "\\\\");       //double the slashes you get from the screen
    
    //remove found blocks
    const regex2 = new RegExp(expr, 'g');
    var newText = original.replace(regex2, "");
    return newText;
}