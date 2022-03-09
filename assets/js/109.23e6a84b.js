(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1128:function(e,t,o){e.exports=o.p+"assets/img/workflow.f5fa3529.png"},1129:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.79ae37af.png"},1130:function(e,t,o){e.exports=o.p+"assets/img/NASA_node.13ffc016.png"},1131:function(e,t,o){e.exports=o.p+"assets/img/Telegram_node.57e6ea30.png"},1999:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nasa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nasa"}},[e._v("#")]),e._v(" NASA")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://nasa.gov/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NASA"),n("OutboundLink")],1),e._v(" is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research. The NASA API makes NASA data, including imagery, accessible to application developers.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/NASA/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.nasa"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to send the Astronomy Picture of the day daily to a Telegram channel. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/828",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("NASA")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Telegram/"}},[e._v("Telegram")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1128),alt:"A workflow with the NASA node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-cron-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),n("p",[e._v("The Cron node will trigger the workflow daily at 8 PM.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),n("li",[e._v("Set hours to 20 in the "),n("em",[n("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every day at 8 PM.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1129),alt:"Using the Cron node to trigger the workflow daily at 8 pm"}})]),e._v(" "),n("h3",{attrs:{id:"_2-nasa-node-get-astronomypictureoftheday"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-nasa-node-get-astronomypictureoftheday"}},[e._v("#")]),e._v(" 2. NASA node (get:astronomyPictureOfTheDay)")]),e._v(" "),n("p",[e._v("This node will return the Astronomy Picture of the Day.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the NASA node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/NASA/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Download Image")])]),e._v(" to "),n("code",[e._v("false")]),e._v(". By setting this option to false the node will not return binary data.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns data for the Astronomy Picture of the Day. This data will be used by the next node in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1130),alt:"Using the NASA node to get the Astronomy Picture of the Day"}})]),e._v(" "),n("h3",{attrs:{id:"_3-telegram-node-sendphoto-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-telegram-node-sendphoto-message"}},[e._v("#")]),e._v(" 3. Telegram node (sendPhoto: message)")]),e._v(" "),n("p",[e._v("This node will send the picture that we receive from the previous node to a channel.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Telegram node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Telegram/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Send Photo' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a chat ID in the "),n("em",[n("strong",[e._v("Chat ID")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Photo")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"5"}},[n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > NASA > Output Data > JSON > url. You can also add the following expression: "),n("code",[e._v('{{$node["NASA"].json["url"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Caption' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Caption")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > NASA > Output Data > JSON > title. You can also add the following expression: "),n("code",[e._v('{{$node["NASA"].json["title"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends the image with a caption to the channel that we specifiy.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1131),alt:"Using the Telegram node to send the Astronomy Picture of the Day"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);