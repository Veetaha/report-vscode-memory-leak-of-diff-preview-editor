# Memory leak of diff preview editor

Link to issue at vscode repo

# Steps to reproduce

```
git clone https://github.com/Veetaha/report-vscode-memory-leak-of-diff-preview-editor
cd report-vscode-memory-leak-of-diff-preview-editor
npm i
```
* Open VSCode and press <kbd>F5</kbd> to open the extension in debug mode.
* Open some file inside of git repository, modify the file and click on the change
indicator to the right of line number counter to open the diff preview.
* Close the preview and open it again.
* Take a look at console logs to behold that diff previews are not removed from
the array of active text editors.


![Bug demo](https://user-images.githubusercontent.com/36276403/75583141-bacea600-5a75-11ea-9bb3-514a38596d82.gif)
