import './App.css';
import React from 'react';
import Markdown from 'marked-react';

const MarkdownDefault = `# Markdown Previewer coded by **Valerio Caporali**

# The default text in the #editor field

## should contain these valid markdown:

- *an heading element in h1 size*
- *a sub heading element in h2 size*
- *a link*
- *inline code*
- *a code block*
- *a list item*
- *a blockquote*
- *an image*
- *a bolded text*

Inline Code? \`We have it!\`

A Code Block???
\`\`\`javascript
const CodeBlock = "Just a code block...";
\`\`\`

> I still needed the Quoteblock!
>
>>*Cyndoriil*



Front End Project, visit my [Github](https://github.com/valeriocaporalix) page.
`;

class App extends React.Component {
  state = {
    text: MarkdownDefault
  };
  
  RealTimeChange = i => {
    this.setState ({
      text: i.target.value
    })
  };
  
  render() {
    return(
      <div id="core">
        <h1 id="title">Markdown Previewer</h1>
        <textarea 
          id="editor"
          placeholder="Write Something Here..."
          value= {this.state.text}
          onChange= {this.RealTimeChange}/>
        <div id="preview">
          <Markdown>{this.state.text}</Markdown>
        </div> 
      </div>
    )
  }
}

export default App;
