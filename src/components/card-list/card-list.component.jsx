//import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css'


//Functional Component
const CardList = ({ monsters }) => (
        <div className="card-list">
            {monsters.map( (monsters) => {
                    
                return (
                    <Card monster={monsters}/>
            )})}
        </div>
)


//Class Component
// class CardList extends Component{
//     render() {
//         const { monsters } = this.props;
//         return (
//             <div className="card-list">
//                 {monsters.map( (monsters) => {
                    
//                     return (
//                         <Card monster={monsters}/>
//                 )})}
//             </div>
//         )
//     }
// }

export default CardList;