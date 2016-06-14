function setupThemeChooser(){
	
	console.log("setupThemeChooser");
	
	$('#themeChooser').append(new Option("dark", "dark"));
	$('#themeChooser').append(new Option("light", "light"));
	
	if(Cookies.get('theme')){
		$('#themeChooser').val(Cookies.get('theme'));
	}
	
	$('#themeChooser').on('change', function() {
	
		var selectedTheme = $('#themeChooser').val();
		
		Cookies.set('theme', selectedTheme);
		
		if("dark" == selectedTheme){
			$("#bootstrap-css").attr("href", "/css/bootstrap.cyborg.css");
			$("#syntax-css").attr("href", "/css/syntax-dark.css");
			$("#favicon").attr("href", "/images/faviconDark.png");
		}
		else{
			$("#bootstrap-css").attr("href", "/css/bootstrap.readable.css");
			$("#syntax-css").attr("href", "/css/syntax-light.css");
			$("#favicon").attr("href", "/images/favicon.png");
		}
	});
}

$(setupThemeChooser);
