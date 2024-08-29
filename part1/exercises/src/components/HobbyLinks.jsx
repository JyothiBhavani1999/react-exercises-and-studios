
export default function HobbyLinks(){
    let hobbyLinks = ["https://www.zara.com/", "https://www.youtube.com/"];
    return( 
        <div >
            <h2>Things I do when I'm free </h2>
            <a href={hobbyLinks[0]}> shopping, </a>
            <a href={hobbyLinks[1]}> watch youtube</a>
        </div>
    );
}