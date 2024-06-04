const vscode = require('vscode');

function activate(context) {

    // Shared function to generate and insert doc comments
    function generateDocCommentHandler() {
        // Get the active editor
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            // Get the selected text
            const text = document.getText(selection);

            // Check if the selected text is a function definition
            if (isFunction(text)) {
                // Extract function details
                const functionDetails = getFunctionDetails(text);
                console.log(functionDetails.returnType);

                // Get indent if any and the language id
                const lineText = editor.document.lineAt(selection.start.line).text;
                const indentMatch = lineText.match(/^\s*/);
                const indent = indentMatch ? indentMatch[0] : '';
                const languageId = document.languageId;

                // Generate doc comment
                const docComment = generateDocComment(functionDetails, languageId, indent);

                // Insert doc comment above the selection
                const position = new vscode.Position(selection.start.line, 0);
                editor.edit(editBuilder => {
                    editBuilder.insert(position, docComment);
                });

                vscode.window.showInformationMessage('Doc Comment Created.');
            } else {
                vscode.window.showWarningMessage('Function definition not recognized.');
            }
        }
    }

    // Command palette
    let disposable = vscode.commands.registerCommand(
        'doc-comment-generator.generateDocComment',
        generateDocCommentHandler
    );

    // Navigation menu
    let contextDisposable = vscode.commands.registerCommand(
        'doc-comment-generator.generateDocCommentContext',
        generateDocCommentHandler
    );

    context.subscriptions.push(disposable);
    context.subscriptions.push(contextDisposable);
}

function isFunction(text) {
	// Anything followed by a space, name, and then a set a parentheses
	return text.match(/^.*(\s+\w+)\s*(\(.*\)).*/);
}

function getFunctionDetails(text) {
	const match = text.match(/.*[^\w](\w+\s*)\(([^)]*)\)(.*)/);
   
	return {
		name: match[1],
		params: match[2].split(',').map(param => param.trim()),
	};
	
}

// Generate doc comment
function generateDocComment(details, languageId, indent) {
	if (languageId === 'javascript' || languageId === 'typescript' || languageId === 'php'){
		let docComment = `${indent}/**\n ${indent}* ${details.name} - [DESCRIPTION]\n`;

		details.params.forEach(param => {
			if(param != '') {
				if(param.includes(':')){
					let typedParam = param.split(':');
					docComment += `${indent} * @param {${typedParam[1].split('=')[0].trim()}} ${typedParam[0]} - [DESCRIPTION]\n`;
				}
				else{
					docComment += `${indent} * @param {[TYPE]} ${param.split('=')[0]} - [DESCRIPTION]\n`;
				}	
			}
		});

		docComment += `${indent} * @return {[TYPE]} - [DESCRIPTION]\n ${indent}*/\n`;
		return docComment;
	}
	else if (languageId === 'python'){
		let docComment = `${indent}"""\n${indent}[DESCRIPTION]\n\n${indent}Args:\n`;

		details.params.forEach(param => {
			if (param != 'self' && param != ''){

				// If param has type hint, autofill the type. Also trim off any default values by splitting '='
				if(param.includes(':')){
					let typedParam = param.split(':');
					docComment += `${indent}\t${typedParam[0].trim()} (${typedParam[1].split('=')[0].trim()}): [DESCRIPTION]\n`;
				}
				else{
					docComment += `${indent}\t${param.split('=')[0]} ([TYPE]): [DESCRIPTION]\n`;
				}
			}
		});

		docComment += `\n${indent}Returns:\n${indent}\t([TYPE]): [DESCRIPTION]\n${indent}"""\n`;
		return docComment;
	}
	else if (languageId === 'cpp' || languageId === 'c' || languageId === 'java'){
		let docComment = `${indent}/**\n${indent} * ${details.name} - [DESCRIPTION]\n`;

		details.params.forEach(param => {
			if (param !== '') {
				// If it has a default value, remove it first
				if(param.includes('=')){param = param.split('=')[0].trim()}

				// paramName is the last part after being split by spaces
				const parts = param.split(' ');
				const paramName = parts.pop().trim();
				docComment += `${indent} * @param ${paramName} - [DESCRIPTION]\n`;
			}
		});

		docComment += `${indent} * @return [DESCRIPTION]\n${indent} */\n`;
		return docComment;
	}
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};