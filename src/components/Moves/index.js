import React from 'react';

const Moves = props => {
	const { history, stepNumber, ...other } = props;
	const moves = history.map((step,move)=>{
		const clickIndex 	= step.clickIndex;
		const 	col 		= Math.floor(clickIndex % 3),
				row 		= Math.floor(clickIndex / 3),
				//col and row where the latest click happened
				clickPosition = '(row:'+row+', col:'+col+')';
		let desc = move ? 'Go to move #'+move+' '+clickPosition : 'Go to game start';
		//Bold the currently selected item in the move list
		const btn_highlight = (stepNumber===move)?'btn-primary':'btn-secondary';
		return(
			<li key={move}>
	          	<button className={"btn "+btn_highlight+" btn-block"}
	            onClick={()=> other.onClick(move) }>{desc}</button>
	        </li>
		);
	});

	//Renders React element ...
	return(
		<div className="game-info__moves">
            <ol className="list-moves list-unstyled">
              {moves}
            </ol>
        </div>
	);
}

export default Moves;
