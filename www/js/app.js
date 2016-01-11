window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        Inici: {
            url: '/Inici',
	            template: 'views/Inici.html',
            controller: 'Inici'
        },
        Diumenge: {
            url: '/Diumenge',
            template: 'views/Diumenge.html',
            controller: 'Diumenge'
        },
        Dilluns: {
            url: '/Dilluns',
            template: 'views/Dilluns.html',
            controller: 'Dilluns'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });
     
    /*Asign view start*/
    $JSView
        .initView('viewA');
 
}, false);
