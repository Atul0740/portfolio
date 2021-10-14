import React from 'react';
import "./Works.css";

function Articles() {
    return (
        <section className="blogs">
            <div className="blogs_container">
                <div className="blog" data-aos="fade-up">
                    <div className="article_image"> </div>
                    <p style={{ textDecoration: "underline" }}> The Art of Investing </p>
                    <p className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="article_image"> </div>
                    <p style={{ textDecoration: "underline" }}> The Art of Investing </p>
                    <p className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="article_image"> </div>
                    <p style={{ textDecoration: "underline" }}> The Art of Investing </p>
                    <p className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="article_image"> </div>
                    <p style={{ textDecoration: "underline" }}> The Art of Investing </p>
                    <p className="blog_date">21 Oct 2020</p>
                </div>
            </div>
        </section>
    )
}

export default Articles