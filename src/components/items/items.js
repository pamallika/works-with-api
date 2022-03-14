import {Component} from "React";
import './items.css';
class Ccomponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            items:[] 
        };
    }
        componentDidMount(){
            fetch("http://www.boredapi.com/api/")
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        isLoaded:true,
                        items:result.activity
                    });
                },
                (error)=>{
                    this.setState({
                        isLoaded:true,
                        error
                    });
                }
            )
        }
        render() {
            const {error, isLoaded, items}=this.state;
            if(error){
                return <p>Error{error.message}</p>
            }
            else if(!isLoaded){
                return <p>Loading...</p>
            }
            else{
            return (
                <ul>
                    {items.map(item=>(
                        <li key={item.key}>
                            {item.type}
                        </li>
                    ))}
                </ul>
            )
            }
        }
        
            
}
export default Ccomponent;