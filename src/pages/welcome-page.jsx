import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
    let navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        navigate("./results/" + e.target.resultid.value);
    }

    return (
        <div className="welcome page">
            <form onSubmit={submitForm}>
                <h1>Find your game result</h1>
                <input name="resultid" autoCapitalize="none" autoComplete="none" autoCorrect="none" autoFocus />
                <a href="https://discord.com/api/oauth2/authorize?client_id=959859997158817893&permissions=8&scope=bot%20applications.commands">Or add the bot into your server</a>
            </form>
        </div>
    );
}