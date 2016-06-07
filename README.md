# Timestamp Microservice

<p>Using: Clementine.js, Node.js, Express, Bootstrap</p>

## User Stories

<ol>
	<li>I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).</li>
	<li>If it does, it returns both the Unix timestamp and the natural language form of that date.</li>
	<li>If it does not contain a date or Unix timestamp, it returns null for those properties.</li>
</ol>

## Sample requests
<div><code>https://timestamp-ms.herokuapp.com/December%2015,%202015</code></div>
<div><code>https://timestamp-ms.herokuapp.com/1450137600</code></div>
<h4>Sample results</h4>
<div><code>{ "unix": 1450137600, "natural": "December 15, 2015" }</code></div>