(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1869:function(t,e,o){"use strict";o.r(e);var r=o(26),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"action-network"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#action-network"}},[t._v("#")]),t._v(" Action Network")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://actionnetwork.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Action Network"),r("OutboundLink")],1),t._v(" is an open platform that empowers individuals and groups to organize for progressive causes.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),r("p",[t._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/ActionNetwork/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic operations")]),t._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.actionNetwork"}}),t._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),r("p",[t._v("This workflow allows you to create a new event in Action Network, then create a new person and mark them as having attended your event. This workflow uses the following two nodes.")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),r("li",[r("a",{attrs:{href:""}},[t._v("ActiveCampaign")])])]),t._v(" "),r("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(800),alt:"A workflow with the Action Network node"}})]),t._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),r("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),r("h3",{attrs:{id:"_2-action-network-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-action-network-node"}},[t._v("#")]),t._v(" 2. Action Network node")]),t._v(" "),r("ol",[r("li",[t._v("First enter your credentials. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/ActionNetwork/"}},[t._v("here")]),t._v(".")],1),t._v(" "),r("li",[t._v("Fill in the remaining parameters as follows:\n"),r("ul",[r("li",[r("strong",[t._v("Resource")]),t._v(": Select "),r("strong",[t._v("Event")]),t._v(" from the dropdown list.")]),t._v(" "),r("li",[r("strong",[t._v("Operation")]),t._v(": Select "),r("strong",[t._v("Create")]),t._v(" from the dropdown list.")]),t._v(" "),r("li",[r("strong",[t._v("Origin System")]),t._v(": Enter where this event originated. n8n.io in our example.")]),t._v(" "),r("li",[r("strong",[t._v("Title")]),t._v(": Enter the name of your event, July Meetup in our example here.")])])]),t._v(" "),r("li",[t._v("Enable the "),r("strong",[t._v("Simple")]),t._v(" toggle to return an easier to view response as opposed to the complete raw data.")]),t._v(" "),r("li",[t._v("Use the "),r("strong",[t._v("Additional Fields")]),t._v(" to enter any further details about your event. Here we provided the Start Date.")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(801),alt:"Action Network node"}})]),t._v(" "),r("h3",{attrs:{id:"_3-action-network1-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-action-network1-node"}},[t._v("#")]),t._v(" 3. Action Network1 node")]),t._v(" "),r("ol",[r("li",[t._v("First enter your credentials. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/ActionNetwork/"}},[t._v("here")]),t._v(".")],1),t._v(" "),r("li",[t._v("Fill in the remaining parameters as follows:\n"),r("ul",[r("li",[r("strong",[t._v("Resource")]),t._v(": Select "),r("strong",[t._v("Person")]),t._v(" from the dropdown list.")]),t._v(" "),r("li",[r("strong",[t._v("Operation")]),t._v(": Select "),r("strong",[t._v("Create")]),t._v(" from the dropdown list.")])])]),t._v(" "),r("li",[t._v("Enable the "),r("strong",[t._v("Simple")]),t._v(" toggle to return an easier to view response as opposed to the complete raw data.")]),t._v(" "),r("li",[t._v("In the "),r("strong",[t._v("Email Address")]),t._v(" section, enter the address and status for this person (here we Subscribe them).")]),t._v(" "),r("li",[t._v("Use the "),r("strong",[t._v("Additional Fields")]),t._v(" to enter any further details about this person. Here we provided their given name.")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(802),alt:"Action Network1 node"}})]),t._v(" "),r("h3",{attrs:{id:"_4-action-network2-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-action-network2-node"}},[t._v("#")]),t._v(" 4. Action Network2 node")]),t._v(" "),r("ol",[r("li",[t._v("First enter your credentials. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/ActionNetwork/"}},[t._v("here")]),t._v(".")],1),t._v(" "),r("li",[t._v("Fill in the remaining parameters as follows:\n"),r("ul",[r("li",[r("strong",[t._v("Resource")]),t._v(": Select "),r("strong",[t._v("Attendance")]),t._v(" from the dropdown list.")]),t._v(" "),r("li",[r("strong",[t._v("Operation")]),t._v(": Select "),r("strong",[t._v("Create")]),t._v(" from the dropdown list.")]),t._v(" "),r("li",[r("strong",[t._v("Person ID")]),t._v(": Enter the ID for the person created by the previous node.")]),t._v(" "),r("li",[r("strong",[t._v("Event ID")]),t._v(": Enter the ID for the event created in the first node.")])])]),t._v(" "),r("li",[t._v("Enable the "),r("strong",[t._v("Simple")]),t._v(" toggle to return an easier to view response as opposed to the complete raw data.")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(803),alt:"Action Network2 node"}})])],1)}),[],!1,null,null,null);e.default=n.exports},800:function(t,e,o){t.exports=o.p+"assets/img/workflow.5bc3a885.png"},801:function(t,e,o){t.exports=o.p+"assets/img/action_network_node.368359d8.png"},802:function(t,e,o){t.exports=o.p+"assets/img/action_network_node1.6734c942.png"},803:function(t,e,o){t.exports=o.p+"assets/img/action_network_node2.e60ebaba.png"}}]);