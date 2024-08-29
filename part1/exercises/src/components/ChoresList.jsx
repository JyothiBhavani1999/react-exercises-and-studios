import React from "react";
import classes from './ChoresList.module.css';

class ChoresList extends React.Component{
   render() {
      const chores = ['cooking','cleaning'];
      return (
         <div>
            <h3 className={classes.choresHeading}>Chores I did this month</h3>
               <ol>
                  <li className={classes.choresText}>{chores[0]}</li>
                  <li className={classes.choresText}>{chores[1]}</li>
               </ol>
         </div>
      );
   }
}

export default ChoresList