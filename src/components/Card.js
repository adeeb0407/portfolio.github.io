import './style/card.css'

export default function Projects (props) {
  return (
    <div className = 'projectCard' id = {props.id}  data-aos="fade-right">
<figure className="image-block">
	<h1>{props.title}</h1>
	<img src={props.source} alt="" />
	<figcaption>
		<h3>{props.moreinfo}</h3>
		<p>{props.info}</p>
		<a href = {props.link} target = '_blank'> <button>Live Demo</button></a>
	</figcaption>
</figure>
</div>
);
}