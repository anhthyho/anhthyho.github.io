<!DOCTYPE html>
<!-- with help from Coding Rails youtube page https://www.youtube.com/watch?v=3L7ACcO7LY0 -->
<html lang="en">
	<head>
		<link href="https://fonts.googleapis.com/css?family=Lacquer|Pacifico|Patrick+Hand|Raleway&display=swap" rel="stylesheet">

		<title> Bill Calculator </title>
		<link rel="stylesheet" type="text/css" href ="normalize.css">
		<link rel="stylesheet" type="text/css" href ="/css/styles.css">
	</head>

	<body>
		<div id ="container">
			<h1>Bill Calculator</h1>

			<div id="Calculator">
				<form>
					<label>
						How much was your bill? <br>
						$ <input type="text" id ="cost">
					</label>
					<label>How was your service? <br>
						<select id="serviceQuality">
							<option disabled selected value="0"> --Choose an option--</option>
							<option value="0.3">30% - Outstanding</option>
							<option value="0.2">20% - Great</option>
							<option value="0.15">15% - Good</option>
							<option value="0.10">10% - Bad</option>
						</select>
					</label>
					<label>
						How many people are sharing the bill? <br>
						<input type="text" id="people">
					</label>
					<button type="button" id="calculate">Calculate!</button>
				</form>
			</div><!-- calculator --> 

			<div id="tip">
				<sup>$</sup><span id="tp">0.00</span>
				<small id="each">each</small>
			</div><!-- tip total -->

			<div id="bill">
				<sup>$</sup><span id="bp">0.00</span>
				<small id="each">each</small>
			</div><!-- bill total -->
		</div> <!-- container --> 
		<script type = "text/javascript" src="/js/tipscript.js"></script>
	</body>
</html>
