import React from 'react';
import "./UtilsCSS/FlipCard.component.css";

function FaithCard(props)
{

	const previewTextArr = props.text.split('.')[0].split(' ');

	let previewText = "";
	
	previewTextArr.forEach((txt, i) => {
		
		if (i < 14)
		{
			previewText += `${txt} `;
		}
	});

	return (
       <>
	   <div className="col">
	   		<div className="card" style={{width: "18rem", minHeight: "527px"}}>
  				<img src={props.src != undefined ? props.src : "..."} className="card-img-top" alt="..."/>
				<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
					<p className="card-text cardText">{previewText}</p>
					<a href="#" className="btn btn-primary">Learn More</a>
				</div>
			</div>
	   </div>
	   </>
    );
}

export default FaithCard;