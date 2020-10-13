import React, { useRef } from 'react'

import EmailEditor from 'react-email-editor'

import designData from './sample'
import designData2 from './sample2'

const BrandedPageEditor = (props) => {
  const emailEditorRef = useRef(null)

  React.useEffect(() => {
    console.log('REF', emailEditorRef)
  }, [])

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data
      console.log('===EXPORTED HTML:\n\n', html)
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

      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        options={{
          // id: 'editor-container',
          id: 'editor',
          // projectId: 6381,
          projectId: 6482,
          // templateId: '[TEMPLATE-ID]'
          // projectId: 1234,
          displayMode: 'web',
          customJS: [
            'https://test-custom-tool.s3.us-east-2.amazonaws.com/property-editor.js',
            'https://test-custom-tool.s3.us-east-2.amazonaws.com/custom-basic.js',
            'https://test-custom-tool.s3.us-east-2.amazonaws.com/custom-with-data.js',
            'https://test-custom-tool.s3.us-east-2.amazonaws.com/custom-window.js',
            'https://test-custom-tool.s3.us-east-2.amazonaws.com/custom-import.js'
          ],
          tools: {
            form: {
              enabled: true
            },
            // video: {
            //   enabled: true
            // },
            timer: {
              enabled: true
            },
            'custom#my_data_tool': {
              data: {
                name: 'Irving',
                age: '27k',
                photo: 'https://picsum.photos/id/1005/200'
              }
            }
          },
          appearance: {
            theme: 'light',
            panels: {
              tools: {
                dock: 'right'
              }
            }
          }
        }}
      />
    </div>
  )
}

export default BrandedPageEditor
