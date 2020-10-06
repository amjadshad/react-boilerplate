import React, { useRef } from 'react'
import { render } from 'react-dom'

import EmailEditor from 'react-email-editor'

import designData from './sample'
import designData2 from './sample2'

const App = (props) => {
  const emailEditorRef = useRef(null)

  React.useEffect(() => {
    console.log('REF', emailEditorRef)
  }, [])

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log('DESIGN\n', JSON.stringify(design))
    })
  }

  const loadDesign = () => {
    console.log('LOADING DESIGN')
    emailEditorRef.current.editor.loadDesign(designData)
  }
  const loadDesign2 = () => {
    console.log('LOADING DESIGN 2')
    emailEditorRef.current.editor.loadDesign(designData2)
  }

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  }

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
        <button onClick={saveDesign}>Save Design</button>
        <button onClick={loadDesign}>Load Design</button>
        <button onClick={loadDesign2}>Load Design 2</button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
    </div>
  )
}

export default App

/* import React, { Component } from "react";
import { loadScript } from "./loadScript";
// import pkg from "../package.json";

let lastEditorId = 0;

class BrandedPageEditor extends Component {
  componentDidMount() {
    loadScript(this.loadEditor);
  }

  render() {
    let {
      props: { minHeight = 500, style = {} },
    } = this;

    // this.editorId = `editor-${++lastEditorId}`;
    this.editorId = `editor-${lastEditorId}`;

    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          minHeight: minHeight,
        }}
      >
        <div id={this.editorId} style={{ ...style, flex: 1 }} />
      </div>
    );
  }

  loadEditor = () => {
    const options = this.props.options || {};

    if (this.props.projectId) {
      options.projectId = this.props.projectId;
    }

    if (this.props.tools) {
      options.tools = this.props.tools;
    }

    if (this.props.appearance) {
      options.appearance = this.props.appearance;
    }

    if (this.props.locale) {
      options.locale = this.props.locale;
    }

    console.log("EDITOR ID", this.editorId);
    // eslint-disable-next-line no-undef
    this.editor = unlayer.createEditor({
      ...options,
      id: this.editorId,
      displayMode: "email",
      source: {
        // name: pkg.name,
        // version: pkg.version,
        name: "react-email-editor",
        version: "1.1.1",
      },
    });

    // All properties starting with on[Name] are registered as event listeners.
    for (const [key, value] of Object.entries(this.props)) {
      if (/^on/.test(key) && key != "onLoad") {
        this.addEventListener(key, value);
      }
    }

    const { onLoad } = this.props;
    onLoad && onLoad();
  };

  registerCallback = (type, callback) => {
    this.editor.registerCallback(type, callback);
  };

  addEventListener = (type, callback) => {
    this.editor.addEventListener(type, callback);
  };

  loadDesign = (design) => {
    this.editor.loadDesign(design);
  };

  saveDesign = (callback) => {
    this.editor.saveDesign(callback);
  };

  exportHtml = (callback) => {
    this.editor.exportHtml(callback);
  };

  setMergeTags = (mergeTags) => {
    this.editor.setMergeTags(mergeTags);
  };
} */

/* export default BrandedPageEditor; */
/* 
  options={{
    id: "editor-container",
    projectId: 1234,
    displayMode: "email",
  }}
          */
