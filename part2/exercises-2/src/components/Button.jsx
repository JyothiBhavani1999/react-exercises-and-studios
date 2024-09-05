import './styles.css';

function Button() {

   const onLearnMore = () =>{
      alert("Here you go, Splish Splash!!!");
   }

   return ( 
         <button onClick={onLearnMore}>
            Splish Splash
         </button>
   );
}

export default Button;