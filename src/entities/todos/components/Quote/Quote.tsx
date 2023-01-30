import { useMemo } from "react";

export const Quote = () => {
    const quotes = useMemo(() => ([
        'Pleasure in the job puts perfection in the work. – Aristotle',
        'It is not the mountain we conquer, but ourselves. – Sir Edmund Hillary',
        'Productivity is being able to do things that you were never able to do before. – Franz Kafka',
        'If there are nine rabbits on the ground, if you want to catch one, just focus on one. – Jack Ma',
        'You may delay, but time will not. – Benjamin Franklin',
        'If you are interested in balancing work and pleasure, stop trying to balance them. Instead make your work more pleasurable. – Donald Trump',
        'Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort. – Paul J. Meyer',
        'Until we can manage time, we can manage nothing else. – Peter Drucker',
    ]), []);

    return <blockquote>
            <p>
                {quotes[Math.floor(Math.random() * quotes.length) - 1]}
            </p>
        </blockquote>
}