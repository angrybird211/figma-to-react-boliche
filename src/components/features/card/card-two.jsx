import React from "react";

export default function CardTwo(props) {
    const { isCollapsed = true, title } = props;

	return(
        <div className={`card card-two ${isCollapsed === true ? 'collapsed' : 'expanded'}`}>
            <div className="card-title text-upppercase">
                <h2>{title}</h2>
            </div>

            <div className="card-body">
                {props.children}
            </div>
        </div>
	)
}