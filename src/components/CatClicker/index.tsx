import React, {useEffect, useState} from "react";

const CatClicker: React.FC = () => {
    const [cats, setCats] = useState([]);

    const fetchCatData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCats(data);
            });
    };

    useEffect(() => {
        fetchCatData();
    }, []);
    return (
        <>
            <h1>CatClicker</h1>
            <img src="https://api-ninjas.com/images/cats/abyssinian.jpg" alt="" />
            {cats.length > 0 && (
                <ul>
                    {cats.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default CatClicker;
