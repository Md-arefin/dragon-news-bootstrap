import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCard = ({ news }) => {

    const { title, details, _id, image_url, author, rating, total_view, } = news;

    return (
        <Card className='my-3'>
            <Card.Header className='d-flex gap-2 align-items-center'>
                <Image style={{ height: '50px' }} src={author?.img} roundedCircle alt="" />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy /MM /D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <> {details} </> :
                        <>{details.slice(0, 250)}...
                            <Link to={`/news/${_id}`}>
                                Read More
                            </Link>
                        </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted'>
                <div>
                    <Rating
                        placeholderRating={rating.number }
                        readonly
                        emptySymbol={ <FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;