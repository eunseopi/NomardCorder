import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import styles from './card.module.css'

const MovieCard = ({ id, coverImg, title, summary, genres }) => (
    <Card className={styles.style}>
        <div className={styles.imageContainer}>
        <Card.Img variant="top" src={coverImg} alt={title} className={styles.image} />
        </div>
        <Card.Body style={{width: "80rem", textAlign:"center"}}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{summary}</Card.Text>
            <Card.Text>{genres.join(", ")}</Card.Text>
            <Link to={`/movie/${id}`}>
                <Button variant="primary">자세히 보기</Button>
            </Link>
        </Card.Body>
    </Card>
);

export default MovieCard;