import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { matches, results } from "../utils/firebase";

export default function ResultsPage() {
    let navigate = useNavigate();
    let { resultid } = useParams();
    let [result, setResult] = useState(undefined);
    let [match, setMatch] = useState(undefined);

    useEffect(() => { loadData() }, []);

    const loadData = async () => {
        let result = await getDoc(doc(results, resultid));
        if (!result.exists()) navigate("/404");
        let match = await getDoc(doc(matches, result.data().matchid));

        setResult(result.data());
        setMatch(match.data());
    }

    if (result === undefined || match === undefined) return (
        <div>
            Loading...
        </div>
    );

    return (
        <div className="result page">
            <h1>{result.imposterVictory ? "Imposter Wins" : "Citizens Win"}</h1>
            <h3>Imposter: {result.nicknames[match.imposter]}</h3>
            <h3>Doctor: {result.nicknames[match.doctor]}</h3>
            <h3>Sheriff: {result.nicknames[match.sheriff]}</h3>
            <h4>Citizens: {Object.keys(result.nicknames).filter(n => n !== match.imposter && n !== match.doctor && n !== match.sheriff).map(n => result.nicknames[n]).join(", ")}</h4>
        </div>
    );
}