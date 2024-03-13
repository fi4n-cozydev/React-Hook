import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //         profileDatas: [],
    //         searchfield: ''
    //     }
    // }
    const [profileDatas, setProfile] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);  //* for demo purposes

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ profileDatas: users }))
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setProfile(users)});
            console.log(count);
    },[count])  //* only run if count changes.

    const onSearchChange = (event) => {   
        setSearchfield(event.target.value)    
    }

    {
        const filterData = profileDatas.filter(profileData =>{
            return profileData.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log(profileDatas, searchfield);

        return !profileDatas.length ?
            <h1>Loading</h1> :       
            (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <button onClick={() => setCount(count+1)}>Click Me!</button>
                    <p>{count}</p>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList profileDatas={filterData}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;