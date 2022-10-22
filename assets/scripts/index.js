const body = document.querySelector('.body');
const select = document.querySelector('.select');
const title = document.querySelector('.title');
const color = document.querySelector('select'); 

function changeСolor() {
	switch (select.value) {
		case 'red':
			body.style.backgroundColor = 'crimson';
			title.style.color = 'crimson';
			color.style.borderColor = 'crimson';
			console.log(select.value);
			break;
		case 'blue':
			body.style.backgroundColor = 'dodgerblue';
			title.style.color = 'dodgerblue';
			color.style.borderColor = 'dodgerblue';
			break;
		case 'green':
			body.style.backgroundColor = 'mediumseagreen';
			title.style.color = 'mediumseagreen';
			color.style.borderColor = 'mediumseagreen';
			break;
		case 'orange':
			body.style.backgroundColor = 'orange';
			title.style.color = 'orange';
			color.style.borderColor = 'orange';
			break;
        case 'yellow':
            body.style.backgroundColor = 'gold';
            title.style.color = 'gold';
            color.style.borderColor = 'gold';
            break;
        case 'pink':
            body.style.backgroundColor = 'lightpink';
            title.style.color = 'lightpink';
            color.style.borderColor = 'lightpink';
            break;
        case 'violet':
            body.style.backgroundColor = 'violet';
            title.style.color = 'violet';
            color.style.borderColor = 'violet';
            break;
	}
}

select.addEventListener('change', changeСolor);