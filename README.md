# FontPercent
A simple javascript library for responsive font sizes.
 
FontPercent.js is extremely easy to use.

Step 1. Include reference.
	<script src="font-percent.min.js"></script>

Step 2. Set font sizes.
	<div fp="5%">This div uses inline font size. 5%</div>
						or
	<div data-fp="5%">This div uses inline font size. 5%</div>
	
Step 3. Initialize
	$(document).ready(function(){ fontPercent.init(); });
	
FontPercent.js also supports classes!
	<div class="fp-test1">This div is using the addClass function. 6%</div>
	fontPercent.addClass({className: 'fp-test1', size: '6%'});