(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{2172:function(e,t,s){"use strict";s.r(t);var a=s(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"logging-in-n8n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logging-in-n8n"}},[e._v("#")]),e._v(" Logging in n8n")]),e._v(" "),s("p",[e._v("Logging is an important feature for debugging. n8n uses the "),s("a",{attrs:{href:"https://www.npmjs.com/package/winston",target:"_blank",rel:"noopener noreferrer"}},[e._v("winston"),s("OutboundLink")],1),e._v(" logging library.")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#setup"}},[e._v("Setup")]),s("ul",[s("li",[s("a",{attrs:{href:"#log-levels"}},[e._v("Log Levels")])])])]),s("li",[s("a",{attrs:{href:"#development"}},[e._v("Development")]),s("ul",[s("li",[s("a",{attrs:{href:"#implementation-details"}},[e._v("Implementation details")])]),s("li",[s("a",{attrs:{href:"#adding-logs"}},[e._v("Adding logs")])])])]),s("li",[s("a",{attrs:{href:"#front-end-logs"}},[e._v("Front-end logs")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("To set up logging in n8n, you need to set the following environment variables (you can also set the values in the "),s("RouterLink",{attrs:{to:"/reference/configuration.html#configuration-via-file"}},[e._v("configuration file")]),e._v(")")],1),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Setting in the configuration file")]),e._v(" "),s("th",[e._v("Using environment variables")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("n8n.log.level")]),e._v(" "),s("td",[e._v("N8N_LOG_LEVEL")]),e._v(" "),s("td",[e._v("The log output level. The available options are (from lowest to highest level) are error, warn, info, verbose, and debug. The default value is "),s("code",[e._v("info")]),e._v(". You can learn more about these options "),s("a",{attrs:{href:"#log-levels"}},[e._v("here")]),e._v(".")])]),e._v(" "),s("tr",[s("td",[e._v("n8n.log.output")]),e._v(" "),s("td",[e._v("N8N_LOG_OUTPUT")]),e._v(" "),s("td",[e._v("Where to output logs. The available options are "),s("code",[e._v("console")]),e._v(" and "),s("code",[e._v("file")]),e._v(". Multiple values can be used separated by a comma ("),s("code",[e._v(",")]),e._v("). "),s("code",[e._v("console")]),e._v(" is used by default.")])]),e._v(" "),s("tr",[s("td",[e._v("n8n.log.file.location")]),e._v(" "),s("td",[e._v("N8N_LOG_FILE_LOCATION")]),e._v(" "),s("td",[e._v("The log file location, used only if log output is set to file. By default, "),s("code",[e._v("<n8nFolderPath>/logs/n8n.log")]),e._v(" is used.")])]),e._v(" "),s("tr",[s("td",[e._v("n8n.log.file.maxsize")]),e._v(" "),s("td",[e._v("N8N_LOG_FILE_MAXSIZE")]),e._v(" "),s("td",[e._v("The maximum size (in MB) for each log file. By default, n8n uses 16 MB.")])]),e._v(" "),s("tr",[s("td",[e._v("n8n.log.file.maxcount")]),e._v(" "),s("td",[e._v("N8N_LOG_FILE_MAXCOUNT")]),e._v(" "),s("td",[e._v("The maximum number of log files to keep. The default value is 100. This value should be set when using workers.")])])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set the logging level to 'debug'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_LOG_LEVEL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("debug\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set log output to both console and a log file")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_LOG_OUTPUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("console,file\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set a save location for the log file")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_LOG_FILE_LOCATION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/jim/n8n/logs/n8n.log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set a 50 MB maximum size for each log file")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_LOG_FILE_MAXSIZE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set 60 as the maximum number of log files to be kept")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_LOG_FILE_MAXCOUNT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v("\n")])])]),s("h3",{attrs:{id:"log-levels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-levels"}},[e._v("#")]),e._v(" Log Levels")]),e._v(" "),s("p",[e._v("n8n uses standard log levels to report:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("error")]),e._v(": the most strict level. Outputs only errors and nothing else")]),e._v(" "),s("li",[s("code",[e._v("warning")]),e._v(": outputs errors and warning messages")]),e._v(" "),s("li",[s("code",[e._v("info")]),e._v(": contains useful information about progress")]),e._v(" "),s("li",[s("code",[e._v("verbose")]),e._v(": make n8n output additional information about progress that allows you to further understand what is happening")]),e._v(" "),s("li",[s("code",[e._v("debug")]),e._v(": the most verbose output. n8n outputs a lot of information to help you debug issues.")])]),e._v(" "),s("h2",{attrs:{id:"development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),s("p",[e._v("During development, adding log messages is a good practice. It assists in debugging errors. To configure logging for development, follow the guide below.")]),e._v(" "),s("h3",{attrs:{id:"implementation-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[e._v("#")]),e._v(" Implementation details")]),e._v(" "),s("p",[e._v("n8n uses the "),s("code",[e._v("LoggerProxy")]),e._v(" class, located in the "),s("code",[e._v("workflow")]),e._v(" package. Calling the "),s("code",[e._v("LoggerProxy.init()")]),e._v(" by passing in an instance of "),s("code",[e._v("Logger")]),e._v(", initializes the class before the usage.")]),e._v(" "),s("p",[e._v("The initialization process happens only once. The "),s("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/cli/commands/start.ts",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("start.ts")]),s("OutboundLink")],1),e._v(" file already does this process for you. If you are creating a new command from scratch, you need to initialize the "),s("code",[e._v("LoggerProxy")]),e._v(" class.")]),e._v(" "),s("p",[e._v("Once the "),s("code",[e._v("Logger")]),e._v(" implementation gets created in the "),s("code",[e._v("cli")]),e._v(" package, it can be obtained by calling the "),s("code",[e._v("getInstance")]),e._v(" convenience method from the exported module.")]),e._v(" "),s("p",[e._v("Check the "),s("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/cli/commands/start.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("start.ts"),s("OutboundLink")],1),e._v(" file to learn more about how this process works.")]),e._v(" "),s("h3",{attrs:{id:"adding-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-logs"}},[e._v("#")]),e._v(" Adding logs")]),e._v(" "),s("p",[e._v("Once the "),s("code",[e._v("LoggerProxy")]),e._v(" class gets initialized in the project, you can import it to any other file and add logs.")]),e._v(" "),s("p",[e._v("Convenience methods are provided for all logging levels, so new logs can be added whenever needed using the format "),s("code",[e._v("Logger.<logLevel>('<message>', ...meta)")]),e._v(", where "),s("code",[e._v("meta")]),e._v(" represents any additional properties desired beyond "),s("code",[e._v("message")]),e._v(".")]),e._v(" "),s("p",[e._v("In the example above, we use the standard log levels described "),s("a",{attrs:{href:"#log-levels"}},[e._v("above")]),e._v(". The "),s("code",[e._v("message")]),e._v(" argument is a string, and "),s("code",[e._v("meta")]),e._v(" is a data object.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// You have to import the LoggerProxy. We rename it to Logger to make it easier")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tLoggerProxy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" Logger\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'n8n-workflow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Info-level logging of a trigger function, with workflow name and workflow ID as additional metadata properties")]),e._v("\n\nLogger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('Polling trigger initiated for workflow "')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("workflowName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("workflowId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Verbose-level logging of hook function execution, with execution ID, workflow ID, and session ID as metadata properties")]),e._v("\n\nLogger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("verbose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("Executing hook (workflowExecuteBefore, hookFunctionsPush)")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("executionId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("executionId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("workflowId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("workflowData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("sessionId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sessionId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("When creating new loggers, some useful standards to keep in mind are:")]),e._v(" "),s("ul",[s("li",[e._v("Craft log messages to be as easily human-readable as possible. For example, always wrap names in quotes.")]),e._v(" "),s("li",[e._v("Duplicating information in the log message and metadata, like workflow name in the above example, can be useful as messages are easier to search and metadata enables easier filtering.")]),e._v(" "),s("li",[e._v("Include multiple IDs (e.g. executionId, workflowId, and sessionId) throughout all logs.")]),e._v(" "),s("li",[e._v("Use node types instead of node names (or both) as this is more consistent, and so easier to search.")])]),e._v(" "),s("h2",{attrs:{id:"front-end-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#front-end-logs"}},[e._v("#")]),e._v(" Front-end logs")]),e._v(" "),s("p",[e._v("As of now, front-end logs are not available. Using "),s("code",[e._v("Logger")]),e._v(" or "),s("code",[e._v("LoggerProxy")]),e._v(" would yield errors in the "),s("code",[e._v("editor-ui")]),e._v(" package. This functionality will get implemented in the future versions.")])])}),[],!1,null,null,null);t.default=n.exports}}]);