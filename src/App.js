import React, {useState} from "react";
import { render } from "react-dom";
import { marked } from "marked";

const App = () => {
  const [text, setText] = useState(`
  # My Markdown- Previewer
  ## by Yibran Evangelista
  [My Github](https://github.com/YibranEvan)
  Standard div element:
  \`<div id="root"></div>\`
  \`\`\`
{
  "firstName": "Yibran",
  "lastName": "Evangelista",
  "age": 24
}
\`\`\`
- First item
- Second item
- Third item
> blockquote
![alt text](image.jpg)
**bold text**

  `);
  marked.setOptions({
    breaks:true
  })

  return (
    <>
      <div>
        <div className="editorWrap">
            <h1 className="toolbar">
              Editor
            </h1>
          <textarea 
          id="editor"
          value={text}
          onChange={(element) => setText(element.target.value)}
          ></textarea>
        </div>
        <div className="previewWrap">
            <h1 className="toolbar">
              Previewer
            </h1>
          <div 
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
          ></div>
        </div>
      </div>
    </>
  )
}


render(<App />, document.getElementById("root"));

