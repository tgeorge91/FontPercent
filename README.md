# FontPercent
A simple javascript library for responsive font sizes.
 
FontPercent.js is extremely easy to use.

Step 1. Install
```sh
    Install manually or through Nuget:
    PM > Install-Package FontPercent
```

Step 2. Include reference.
```sh
	<script src="font-percent.min.js"></script>
```

Step 3. Set font sizes.
```sh
	<div fp="5%">This div uses inline font size. 5%</div>
						or
	<div data-fp="5%">This div uses inline font size. 5%</div>
```
	
Step 4. Initialize
```sh
	$(document).ready(function(){ 
		fontPercent.init(); 
	});
```

FontPercent.js also supports classes!
```sh
	<div class="fp-test1">This div is using the addClass function. 6%</div>
	fontPercent.addClass({className: 'fp-test1', size: '6%'});
```