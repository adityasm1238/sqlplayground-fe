import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";

import './editor.css'

const Editor = ({ value, setValue }) => {
    const onChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <label htmlFor="editor">
            <AceEditor
                id="editor"
                aria-label="editor"
                mode="mysql"
                theme="github"
                name="editor"
                fontSize={16}
                minLines={15}
                maxLines={10}
                width="85vw"
                showPrintMargin={false}
                showGutter
                placeholder="Write your Query here..."
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
                value={value}
                onChange={onChange}
                showLineNumbers
            />
        </label>
    );
}

export default Editor;