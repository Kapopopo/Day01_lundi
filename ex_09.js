var text = "it is the meaning of life"

if (typeof input_var == "string") {
    displayThisText("The variable value is " + input_var);
    displayThisText("Its type is 'string'.");
    if (input_var == "42") {
	displayThisText(text);
    }
}

if (typeof input_var == "boolean") {
    displayThisText("The variable value is " + input_var);
    displayThisText("Its type is 'boolean'.");
}

if (typeof input_var == "number") {
    if (Number(input_var) === input_var && input_var % 1 !== 0) {
	displayThisText("The variable value is " + input_var);
	displayThisText("Its type is 'Float'.");
    } else {
	displayThisText("The variable value is " + input_var);
	displayThisText("Its type is 'Integer'.");
    }
}
