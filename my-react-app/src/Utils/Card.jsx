import React from 'react';
import "./UtilsCSS/FlipCard.component.css";

function FaithCard(props)
{

	const previewTextArr = props.text.split('.')[0].split(' ');

	let previewText = "";

	//<!--button type="button" className="btn btn-primary">Save changes</button-->
	previewTextArr.forEach((txt, i) => {
		
		if (i < 14)
		{
			previewText += `${txt} `;
		}
	});
    const modalId = `id_${props.title.replaceAll(' ','')}`;
	const modalLabel = `id_${props.title.replaceAll(' ', '')}_label`
	const btnIDTarget = `#${modalId}`;
	previewText += '...';

	return (
       <>
		<div className="modal fade" id={modalId} tabindex="-1" aria-labelledby={modalLabel} aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content" style={{minHeight: '500px', overflowY: 'scroll'}}>
				<div className="modal-header">
					<h1 className="modal-title fs-5 eb-garamond-Headers" style={{color: 'black'}} id={modalLabel}>{props.title}</h1>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body cardText">
					{props.text}
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" style={{backgroundColor: "#275C43"}} data-bs-dismiss="modal">Close</button>
					
				</div>
				</div>
			</div>
		</div>

	   <div className="col">
	   		<div className="card" style={{width: "18rem", minHeight: "527px"}}>
  				<img src={props.src != undefined ? props.src : "..."} className="card-img-top" alt="..."/>
				<div className="card-body">
				<h5 className="card-title eb-garamond-Headers">{props.title}</h5>
					<p className="card-text cardText">{previewText}</p>
					<a href="#" className="btn btn-primary cardText" data-bs-toggle="modal" data-bs-target={btnIDTarget} style={{color: 'white', border: '1px solid #275C43', backgroundColor: '#275C43'}}>Learn More</a>
				</div>
			</div>
	   </div>
	   </>
    );
}

export default FaithCard;