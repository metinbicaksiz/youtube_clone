import React from 'react';
import Button from "./Button";

const list = ["All", "Songs", "Live", "Football", "Games", "Movies", "Valentines", "Country", "Funny", "News"]

const ButtonList = () => {
    return (
        <div className="flex ">
            {
                list.map((item, index) => (
                    <Button name={item} key={index} />

                ))
            }
        </div>
    );
};

export default ButtonList;