
function ShallowStrip(text) {       //replaces unwanted syntax without making any serious parsing
    var tags = ["textit", "footnote", "improve", "unsure", "ref", "label", "citep","cite","citet","newcite","approx","textsuperscript"];
    var chars = ["{", "}", "$","tab:","fig:"];

    //remove tags
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
function DeepStrip(text) {
    //textit
    //var t = "\\\\textit{lin}";
    //text = "gokhan \\\\textit{lin} ercan";
    //var extracted = ExtractText('\\\\textit{(?<txt>.*)}', "\\\\textit{lin}");
    var extracted = ExtractText('\\\\textit{(?<txt>.*)}', text);
    alert("ext: " + extracted);
    var block = "\\\\textit{" + extracted + "}";
    alert("block: " + block);
    var res = text.replace(block, extracted);
    alert("res: " + res);
    return res;
}
function ExtractText(regex, text) {
    var r = new RegExp(regex);      //not working on expl.
    var match = r.exec(text);
    console.log(match);
    return match[1];
}