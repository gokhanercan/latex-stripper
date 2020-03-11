# latex-stripper
This small js script helps me to convert special LATEX blocks (italics, bold, citations, etc,) to their raw equivalents. With this tool, while working on my LATEX text, I can quickly copy and paste the block I'm working to an external grammar checking tool such as Google Translate or Grammarly. 

For example, I inject this script into Google Translate webpage via the following tool. Then I can easily intercept by listening paste event of the source textbox and automatically convert LATEX text to its RAW equiavalent. Very useful for full-time LATEX writers I think. 
https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk

### Example LATEX Input
This is an \unsure{stunning} \textit{italic} text.

### RAW Output
This is an italic text.