(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1425:function(e,t,o){e.exports=o.p+"assets/img/workflow.ba64daac.png"},1426:function(e,t,o){e.exports=o.p+"assets/img/KafkaTrigger_node.b0ed4ad4.png"},1427:function(e,t,o){e.exports=o.p+"assets/img/IF_node.a4cf2074.png"},1428:function(e,t,o){e.exports=o.p+"assets/img/Vonage_node.df804c00.png"},1429:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.441ed09c.png"},2126:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"kafka-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kafka-trigger"}},[e._v("#")]),e._v(" Kafka Trigger")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kafka"),n("OutboundLink")],1),e._v(" is an open-source distributed event streaming platform that one can use for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Kafka/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to receive messages from a topic and send an SMS if the value of the temperature is greater than 50. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/814",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("Kafka Trigger")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[e._v("IF")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Vonage/"}},[e._v("Vonage")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1425),alt:"A workflow with the Kafka Trigger node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-kafka-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-kafka-trigger-node"}},[e._v("#")]),e._v(" 1. Kafka Trigger node")]),e._v(" "),n("p",[e._v("This node will trigger the workflow when a new message is sent to the topic "),n("code",[e._v("test_topic")]),e._v(". If you're using a different topic, use that instead. We are sending the message "),n("code",[e._v('{ "id": 1, "temp": 100 }')]),e._v(" to "),n("code",[e._v("test_topic")]),e._v(".")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Kafka Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Kafka/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter the name of the topic in the "),n("em",[n("strong",[e._v("Topic")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the group ID in the "),n("em",[n("strong",[e._v("Group ID")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'JSON Parse Message'.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("JSON Parse Message")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node gets triggered when a new message is sent to the "),n("code",[e._v("topic_test")]),e._v(" topic in Kafka.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1426),alt:"Using the Kafka Trigger node to get a message from a topic"}})]),e._v(" "),n("h3",{attrs:{id:"_2-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-if-node"}},[e._v("#")]),e._v(" 2. IF node")]),e._v(" "),n("p",[e._v("This node will compare the value of "),n("code",[e._v("temp")]),e._v(" that we received in the message from the previous node. If the value is greater than 50, it will return true otherwise false.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Kafka Trigger > Output Data > JSON > message > temp. You can also add the following expression: "),n("code",[e._v('{{$node["Kafka Trigger"].json["message"]["temp"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Larger' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Set "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" to 50.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns output for "),n("strong",[e._v("true")]),e._v(" when the temperature is greater than 50.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1427),alt:"Using the IF node to check if the temp is larger than 50"}})]),e._v(" "),n("h3",{attrs:{id:"_3-vonage-node-send-sms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-vonage-node-send-sms"}},[e._v("#")]),e._v(" 3. Vonage node (send: sms)")]),e._v(" "),n("p",[e._v("This node sends an SMS to the specified phone number when the value of "),n("code",[e._v("temp")]),e._v(" is greater than "),n("code",[e._v("50")]),e._v(".")]),e._v(" "),n("ol",[n("li",[e._v("Create a Vonage node connected to the 'true' output of the IF node.")]),e._v(" "),n("li",[e._v("You'll have to enter credentials for the Vonage node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Vonage/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter the name of the sender in the "),n("em",[n("strong",[e._v("From")])]),e._v(" field. If you're using a number, enter the number instead.")]),e._v(" "),n("li",[e._v("Enter the receiver's phone number in the "),n("em",[n("strong",[e._v("To")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"6"}},[n("li",[e._v("Enter the following in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field.")])]),e._v(" "),n("div",{pre:!0,attrs:{class:"language- extra-class"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[n("code",[e._v('Alert!\nThe value of temp is {{$node["Kafka Trigger"].json["message"]["temp"]}}.\n')])])]),n("ol",{pre:!0,attrs:{start:"7"}},[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends an SMS with the value of "),n("code",[e._v("temp")]),e._v(" that we received from the Kafka Trigger node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1428),alt:"Using the Vonage node to send an SMS"}})]),e._v(" "),n("h3",{attrs:{id:"_4-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-noop-node"}},[e._v("#")]),e._v(" 4. NoOp node")]),e._v(" "),n("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("NoOp")])]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(1429),alt:"Using the NoOp node"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Kafka Trigger node.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);