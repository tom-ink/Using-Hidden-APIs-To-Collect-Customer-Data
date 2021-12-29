## Executing a series of sequential GET requests via Postman and saving the responses
Big customer-facing online platforms often send lots of hidden data to your browser via APIs while you browse through their website. Proper collection and analysis of these data can provide in-depth business insight. 
This repo uses Newman, Postman's command-line Collection Runner, to send lots of GET requests to an online platform and collect all the information received. Postman is used to help mask the identity of the sender.

# What this repo contains
<ol>
<li>src</li>
<ul><li> <code>Newman_Get_Request.js</code>: Node js script executing the sequential GET request in <code>Exported_Postman_File.json</code> and saving the responses it received.</li></ul>
<li>build</li>
<ul>
<li> <code>Exported_Postman_File.json</code>: GET Request combined together with the <code>Prerequest</code> and <code>Tests</code> scripts. It is in JSON format to allow easy execution through Newman.</li>
<li> <code>Prerequest.js</code>: Executed before Postman sends the request.</li>
<li> <code>Tests.js</code>: Executed after Postman receives a response from the API.</li>
<h5> Both the <code>Prerequest</code> and <code>Tests</code> scripts must be included with the GET request in order to sequentially send multiple GET requests through Newman. </h3>
</ul>
</ol>
