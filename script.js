const boxB = document.querySelector('.container .box-bottom');
const select = document.querySelectorAll('.container .box-bottom ul .li .select');
const result = document.querySelector('.container .info h2'); 
const cimg = document.querySelector('.container .box-top .comp-s img');

boxB.addEventListener('click', function(e){
	if(e.target.classList.item(1) == 'select'){

		function pilcomp(){

			let comp = Math.floor(Math.random() * 3 + 1);

			if(comp === 1){
				return "rock";
			}else if(comp === 2){
				return "paper";
			}else{
				return "scissors";
			}

		};

		function player(){

			let ply;

			for(let i = 0; i < select.length; i++){
				if(e.target == select[i]){
					return ply = select[i].classList.item(0)
				}
			}	
		};

		function roll(){
			const img = ['rock', 'paper', 'scissors'];
			let i = 0;
			const time = new Date().getTime();

			setInterval(function(){

					if(new Date().getTime() - time > 500){
						clearInterval;
						return;
					}

					cimg.setAttribute('src', 'img/' + img[i++] + '.png');

					if(i === img.length){
						i = 0;
					}
			}, 100);
		};

		const pilp = player();
		const pilc = pilcomp();

		function rules(pilp, pilc){
			if(pilp === pilc) return 'TIE';

			if(pilp === 'rock') return (pilc === 'paper') ? 'LOSE' : 'WIN';

			if(pilp === 'paper') return (pilc === 'scissors') ? 'LOSE' : 'WIN';

			if(pilp === 'scissors') return (pilc === 'rock') ? 'LOSE' : 'WIN';
		};

		roll();

		setTimeout(function(){

			cimg.setAttribute('src', 'img/' + pilc + '.png');

			const hasil = rules(pilp, pilc);

			result.innerHTML = hasil;

		}, 500);	
	}
});
