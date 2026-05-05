import { useEffect, useState } from "react";
import "./DogGame.css";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function DogGame() {
    const [dogImage, setDogImage] = useState ("");
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchDog() {
        setIsLoading(true);

        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            setDogImage(data.message);
        }   catch (error) {
            console.error("Could not fetch dog:", error);
        }   finally {
            setIsLoading(false);
        }
    }

    function collectDog() {
        setScore(score + 1);
        fetchDog();
    }

    useEffect(() => {
        fetchDog();
    }, []);

    return (
        <section className="dog-collector">
            <h1>Dog Collector</h1>

            <p className="description">
                Collect 5 dogs to win the game!
            </p>

            <p className="score">Dogs collected: {score} / 5</p>

            {score >= 5 ? (
                <div className="winner">
                    <h2>You won!</h2>
                    <button onClick={() => setScore(0)}>Play again!</button>
                </div>
            ) : (
                <>
                    {isLoading ? (
                        <p>Loading dog...</p>
                    ) : (
                        <img src={dogImage} alt="Random dog" />
                    )}

                    <button onClick={collectDog}>
                        Collect dog
                    </button>
                </>
            )}
        </section>
    )
}

export default DogGame;