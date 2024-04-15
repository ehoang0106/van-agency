import React, { useEffect, useRef } from 'react';

const Info = () => {
    

    // styles
    const styles = {
        info: {
            marginTop: '120px'
        },
        avatar: {
            width: '180px',
            height: 'auto'
        }

    }
    // function to get rating
    function getRating() {
        let rating = 5;
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i key={i} className="fas fa-star"></i>);
        }
        return stars;
    }

    // date
    // function to get the date and current hour
    

    function getDateAndHour() {
        const date = new Date();
        const currentHour = date.getHours();
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;

        if (!isWeekend && (currentHour >= 8 && currentHour < 18)) {
            return <div className="h6">Open now - Close at 6:00 PM</div>;
        }
        else {
            return null;
        }
    }

    


    return (
        <div className="Info" style={styles.info}>

            <div className="container-lg my-5">
                <div className="row justify-content-center g-1 d-flex">
                    <div className="my-2 col-md-6 col-lg-7">
                        <div className="p-5 bg-secondary">
                            <div className="row g-1">
                                <div className="my-2 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                                    <img src="/logo.png" alt="avatar" style={styles.avatar} />
                                </div>
                                <div className="my-2 col-md-6 col-lg-8">
                                    <div className="p-5 bg-primary">
                                        <div className="h4">Farmers Insurance Agent in</div>
                                        <div className="h4">Garden Grove, CA</div>
                                        <div className="h3">Van Gordon</div>
                                        <div className="h4">Van Gordon Insurance Agency LLC</div>
                                        <p>CA License #: 0K45003</p>
                                        <p>CA Agency License #: 6005614</p>

                                        <div>
                                            <span className="ms-1">{getRating()}</span> 5 out of 5
                                            <span><a href="#review" className="text-light ms-1">(24 reviews)</a></span>
                                        </div>

                                        <div className="mt-3">
                                            {getDateAndHour()}
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-2 col-md-6 col-lg-5">
                        <div className="p-5 bg-secondary">
                            <div className="row g-1">
                                <div className="my-2 col-lg-6">
                                    <div className="p-5 bg-primary">col 3</div>
                                </div>
                                <div className="my-2 col-lg-6">
                                    <div className="p-5 bg-primary">col 4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;