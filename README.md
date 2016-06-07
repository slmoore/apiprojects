<h2>Timestamp Microservice</h2>
<p>Using: Clementine.js, Node.js, Express, Bootstrap</p>

<h3>User Stories</h3>
<ol>
	<li>I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).</li>
	<li>If it does, it returns both the Unix timestamp and the natural language form of that date.</li>
	<li>If it does not contain a date or Unix timestamp, it returns null for those properties.</li>
</ol>

<h3>Sample requests</h3>
<div><code>https://smoore-timestamp.herokuapp.com/June%206,%202016</code></div>
<div><code>https://smoore-timestamp.herokuapp.com/1465171200</code></div>
<h3>Sample results</h3>
<div><code>{ "unix": 1465171200, "natural": "June 6, 2016" }</code></div>