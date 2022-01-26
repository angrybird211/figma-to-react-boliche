export default function Card(props) {
    const { isCollapsed = true, title } = props;

    return (
        <div className={`card border-0 card-one ${isCollapsed === true ? 'collapsed' : ''}`}>
            <div className="card-title text-upppercase">
                <h2>{title}</h2>
            </div>

            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}