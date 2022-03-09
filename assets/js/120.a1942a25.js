(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1224:function(e,t,o){e.exports=o.p+"assets/img/workflow.99ae47ca.png"},1225:function(e,t,o){e.exports=o.p+"assets/img/Reddit_node.b8b47a42.png"},1226:function(e,t,o){e.exports=o.p+"assets/img/Reddit1_node.0e938a1c.png"},1227:function(e,t,o){e.exports=o.p+"assets/img/Reddit2_node.0be579c3.png"},2029:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"reddit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reddit"}},[e._v("#")]),e._v(" Reddit")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.reddit.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit"),n("OutboundLink")],1),e._v(" is a social news aggregation, web content rating, and discussion website.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Reddit/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.reddit"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create a post a Reddit and add a comment to that post. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/928",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Reddit")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1224),alt:"A workflow with the Reddit node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-reddit-node-create-post"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-reddit-node-create-post"}},[e._v("#")]),e._v(" 2. Reddit node (create: post)")]),e._v(" "),n("p",[e._v("This node will create a post under the subreddit "),n("code",[e._v("n8n")]),e._v(". If you want to create a post under a different subreddit, enter the name of that subreddit instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Reddit node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Reddit/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Subreddit")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter a title in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the content of the post in the "),n("em",[n("strong",[e._v("Text")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new post under the subreddit "),n("code",[e._v("n8n")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1225),alt:"Using the Reddit node to create a post"}})]),e._v(" "),n("h3",{attrs:{id:"_3-reddit1-node-get-post"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-reddit1-node-get-post"}},[e._v("#")]),e._v(" 3. Reddit1 node (get: post)")]),e._v(" "),n("p",[e._v("This node will retrieve the post that we created using the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Get' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Subreddit")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Reddit > Parameters > subreddit. You can also add the following expression: "),n("code",[e._v('{{$node["Reddit"].parameter["subreddit"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Post ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information of the post that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1226),alt:"Using the Reddit node to get a post"}})]),e._v(" "),n("h3",{attrs:{id:"_4-reddit-node-create-postcomment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-reddit-node-create-postcomment"}},[e._v("#")]),e._v(" 4. Reddit node (create: postComment)")]),e._v(" "),n("p",[e._v("This node will add a comment to the post that we created earlier.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Post Comment' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Post ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter your comment in the "),n("em",[n("strong",[e._v("Comment Text")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node comments on the post that we created earlier.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1227),alt:"Using the Reddit node to create a comment"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);