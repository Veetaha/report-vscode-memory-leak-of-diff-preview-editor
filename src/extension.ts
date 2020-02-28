
import * as vscode from 'vscode';


export function activate() {
    vscode.window.onDidChangeVisibleTextEditors(editors => {
        console.log(
            `Active editors:`, editors.length, editors
                .map(e => e.document.fileName.split("/").pop()).join(", "),
        );
    });
}

export function deactivate() {}
