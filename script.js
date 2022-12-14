class Editor {
	
	constructor(element) {
		this.elementName = element;
		this.element = document.getElementById(element);
		
		this.element.insertAdjacentHTML('beforebegin', `
		<div id="toolbox">
		<button class="btn btn-bold" data-action="bold"></button>
		<button class="btn btn-italic" data-action="italic"></button>
		<button class="btn btn-underline" data-action="underline"></button>    
		</div>
		`);
		
		document.getElementById("toolbox").addEventListener('click', this.handleClick.bind(this));
		
		this.element.addEventListener('keyup', this.onKeyUp.bind(this));
		
		this.typingTimer;
		
		this.doneTypingInterval = 1000; // time in ms, 1 second
	}
	
	onKeyUp(  ) {
		clearTimeout(this.typingTimer);
		this.typingTimer = setTimeout(this.doneTyping, this.doneTypingInterval, this.element);
	}
	
	doneTyping( element ) {
		console.log(element.innerHTML);
		// Perform action here
	}
	
	handleClick(event) {
		if (event.target.tagName === 'BUTTON') {
			this.handleButtonClick(event.target);
		}
	}
	
	handleButtonClick(button) {
		const action = button.dataset.action;
		if (action) {
			this.exec(action);
		}
	}
	
	exec(action) {
		document.execCommand(action, false, null);
	}
}

	